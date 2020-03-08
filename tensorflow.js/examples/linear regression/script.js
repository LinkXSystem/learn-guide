console.log("Hello TensorFlow");

async function getData() {
  const DataUrl = "https://storage.googleapis.com/tfjs-tutorials/carsData.json";

  const CarsDataResponse = await fetch(DataUrl);
  const CarsData = await CarsDataResponse.json();
  const Cleaned = CarsData.map(car => ({
    mpg: car.Miles_per_Gallon,
    horsepower: car.Horsepower
  })).filter(car => car.mpg != null && car.horsepower != null);

  return Cleaned;
}

function createModel() {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [1], units: 1, useBias: true }));
  model.add(tf.layers.dense({ units: 1, useBias: true }));
  return model;
}

function convertToTensor(data) {
  return tf.tidy(() => {
    tf.util.shuffle(data);

    const inputs = data.map(item => item.horsepower);
    const labels = data.map(item => item.mpg);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [inputs.length, 1]);

    const inputMax = inputTensor.max();
    const inputMin = inputTensor.min();
    const labelMax = labelTensor.max();
    const labelMin = labelTensor.min();

    const normalizedInputs = inputTensor
      .sub(inputMax)
      .div(inputMax.sub(inputMin));

    const normalizedLabels = labelTensor
      .sub(labelMin)
      .div(labelMax.sub(labelMin));

    return {
      inputs: normalizedInputs,
      labels: normalizedLabels,
      inputMax,
      inputMin,
      labelMax,
      labelMin
    };
  });
}

async function trainModel(model, inputs, labels) {
  model.compile({
    optimizer: tf.train.adam(),
    loss: tf.losses.meanSquaredError,
    metrics: ["mse"]
  });

  const batchSize = 32;
  const epochs = 50;

  return await model.fit(inputs, labels, {
    batchSize,
    epochs,
    shuffle: true,
    callbacks: tfvis.show.fitCallbacks(
      { name: "Training Performance" },
      ["loss", "mse"],
      { height: 300, callbacks: ["onEpochEnd"] }
    )
  });
}

function testModel(model, inputData, normalizationData) {
  const { inputMax, inputMin, labelMin, labelMax } = normalizationData;

  const [xs, preds] = tf.tidy(() => {
    const xs = tf.linspace(0, 1, 100);
    const preds = model.predict(xs.reshape([100, 1]));

    const unNormXs = xs.mul(inputMax.sub(inputMin)).add(inputMin);

    const unNormPreds = preds.mul(labelMax.sub(labelMin)).add(labelMin);

    return [unNormXs.dataSync(), unNormPreds.dataSync()];
  });

  const predictedPoints = Array.from(xs).map((val, i) => {
    return { x: val, y: preds[i] };
  });

  const originalPoints = inputData.map(d => ({
    x: d.horsepower,
    y: d.mpg
  }));

  tfvis.render.scatterplot(
    { name: "Model Predictions vs Original Data" },
    {
      values: [originalPoints, predictedPoints],
      series: ["original", "predicted"]
    },
    {
      xLabel: "Horsepower",
      yLabel: "MPG",
      height: 300
    }
  );
}

async function run() {
  const data = await getData();
  const values = data.map(item => ({
    x: item.horsepower,
    y: item.mpg
  }));

  tfvis.render.scatterplot(
    { name: "Horsepower v MPG" },
    { values },
    {
      xLabel: "Horsepower",
      yLabel: "MPG",
      height: 300
    }
  );

  const model = createModel();
  tfvis.show.modelSummary(
    {
      name: "Model Summary"
    },
    model
  );

  const TensorData = convertToTensor(data);
  const { inputs, labels } = TensorData;

  await trainModel(model, inputs, labels);

  testModel(model, data, TensorData);

  console.log("===========================");
  console.warn("Done Training !!!");
  console.log("===========================");
}

document.addEventListener("DOMContentLoaded", run);
