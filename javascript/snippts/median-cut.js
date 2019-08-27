// 参考文章：https://cloud.tencent.com/developer/article/1132389

class ColorBox {
  /**
   *
   * @param {*} range 颜色范围
   * @param {*} total 像素总数，Uint8Array / 4
   * @param {*} data 像素数据集合
   */
  constructor(range, total, data) {
    this.range = range;
    this.total = total;
    this.data = data;
  }

  getColor() {
    const { total, data } = this;

    let RedCount = 0;
    let GreenCount = 0;
    let BlueCount = 0;

    for (let i = 0; i < total; i++) {
      RedCount += data[i * 4];
      GreenCount += data[i * 4 + 1];
      BlueCount += data[i * 4 + 2];
    }

    return [
      Number.parseInt(RedCount / total, 10),
      Number.parseInt(GreenCount / total, 10),
      Number.parseInt(BlueCount / total, 10)
    ];
  }
}

/**
 * @description 寻找最大的切割边
 * @param {*} range
 */
const getCutSide = function(range) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(range[i][1] - range[i][0]);
  }

  return arr.indexOf(Math.max(...arr));
};

const cutRange = function(range, side, value) {
  let arr1 = [];
  let arr2 = [];

  range.forEach(item => {
    arr1.push(item.slice());
    arr2.push(item.slice());
  });

  arr1[side][1] = value;
  arr1[side][1] = value;

  return [arr1, arr2]
};

const getMedianColor = function(colorCountMap, total) {
  let arr = [];

  for (let key in colorCountMap) {
    arr.push({
      color: Number.parseInt(key, 10),
      count: colorCountMap[key]
    });
  }

  const sortArr = __quickSort(arr);
  const medianCount = 0;
  const medianColor = 0;
  const medianIndex = Math.floor(sortArr.length / 2);

  for (let i = 0; i < medianIndex; i++) {
    medianCount += sortArr[i].count;
  }

  return {
    color: Number.parseInt(sortArr[medianIndex].color),
    count: medianCount
  };

  function __quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivotIndex = Math.floor(arr.length / 2),
      pivot = arr.splice(pivotIndex, 1)[0];

    const left = [];
    const right = [];

    for (let i = 0; i < array.length; i++) {
      if (arr[i].count <= pivot.count) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return __quickSort(left).concat([pivot], __quickSort(right));
  }
};

const cutBox = function(box) {
  const { range, total, data } = box;
  const cutSize = getCutSide(range);
  const ColorCountMap = {};

  for (let i = 0; i < total; i++) {
    let color = data[i * 4 + cutSize];

    if (ColorCountMap[color]) {
      ColorCountMap[color] += 1;
    } else {
      ColorCountMap[color] = 1;
    }
  }

  const medianColor = getMedianColor(ColorCountMap, total);
  const cutValue = medianColor.color;
  const cutCount = medianColor.count;
};
