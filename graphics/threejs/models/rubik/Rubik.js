function CubeTexture(color) {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext("2d");

  context.fillStyle = "rgba(0, 0, 0, 1)";
  context.fillRect(0, 0, 256, 256);
  context.rect(16, 16, 224, 224);
  context.lineJoin = "round";
  context.lineWidth = 16;
  context.fillStyle = color;
  context.strokeStyle = color;
  context.stroke() && context.fill();

  return canvas;
}

function Cubes(x, y, z, num, len, colors) {
  let LeftUpX = x - (num / 2) * len;
  let LeftUpY = y + (num / 2) * len;
  let LeftUpZ = z + (num / 2) * len;

  let cubes = [];

  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num * num; j++) {
      let textures = [];

      for (let k = 0; k < 6; k++) {
        textures[k] = CubeTexture(colors[k]);
      }

      let materials = [];

      for (let k = 0; k < 6; k++) {
        let texture = new THREE.Texture(textures[k]);
        texture.needsUpdate = true;
        materials.push(
          new THREE.MeshLamberMaterial({
            map: texture
          })
        );
      }

      const geo = new THREE.BoxGeometry(len, len, len);
      const cube = new THREE.Mesh(geo, materials);

      cube.position.x = LeftUpX + len / 2 + (j % num) * len;
      cube.position.y = LeftUpY - len / 2 - Number.parseInt(j / num) * len;
      cube.position.z = LeftUpZ - len / 2 - i * len;

      cubes.push(cube);
    }
  }

  return cubes;
}

//基础模型参数
const StandardParams = {
  x: 0,
  y: 0,
  z: 0,
  num: 3,
  len: 50,
  //右、左、上、下、前、后
  colors: ["#ff6b02", "#dd422f", "#ffffff", "#fdcd02", "#3d81f7", "#019d53"]
};

class Rubik {
  constructor(main) {
    this.main = main;
  }

  model(type) {
    this.group = new THREE.Group();
    this.group.childType = type;

    this.cubes = Cubes(
      StandardParams.x,
      StandardParams.y,
      StandardParams.z,
      StandardParams.len,
      StandardParams.colors
    );

    for (let i = 0; i < this.cubes.length; i++) {
      let item = this.cubes[i];

      this.group.add(item);
    }

    if (type === this.main.frontViewName) {
      this.group.rotateY((45 / 180) * Math.PI);
    } else {
      this.group.rotateY(((270 - 45) / 180) * Math.PI);
    }

    this.group.rotateOnAxis(new THREE.Vector3(1, 0, 1), (25 / 180) * Math.PI);
    this.main.scene.add(this.group);
  }
}
