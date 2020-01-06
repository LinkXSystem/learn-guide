function CubeTexture(color) {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext('2d');

  context.fillStyle = 'rgba(0, 0, 0, 1)';
  context.fillRect(0, 0, 256, 256);
  context.rect(16, 16, 224, 224);
  context.lineJoin = 'round';
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
          new THREE.MeshLambertMaterial({
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
  colors: ['#ff6b02', '#dd422f', '#ffffff', '#fdcd02', '#3d81f7', '#019d53']
};

class Rubik {
  constructor(main) {
    this.main = main;

    this.initStatus = [];
    this.defaultTotalTime = 250; //默认转动动画时长

    let XLine = new THREE.Vector3(1, 0, 0);
    this.XLineAD = new THREE.Vector3(-1, 0, 0);
    this.YLine = new THREE.Vector3(0, 1, 0);
    this.YLineAD = new THREE.Vector3(0, -1, 0);
    this.ZLine = new THREE.Vector3(0, 0, 1);
    this.ZLineAD = new THREE.Vector3(0, 0, -1);
  }

  model(type) {
    this.group = new THREE.Group();
    this.group.childType = type;

    this.cubes = Cubes(
      StandardParams.x,
      StandardParams.y,
      StandardParams.z,
      StandardParams.num,
      StandardParams.len,
      StandardParams.colors
    );

    for (let i = 0; i < this.cubes.length; i++) {
      let item = this.cubes[i];

      this.initStatus.push({
        x: item.position.x,
        y: item.position.y,
        z: item.position.z,
        cubeIndex: item.id
      });

      item.cubeIndex = item.id;

      this.group.add(item);
    }

    let width = StandardParams.num * StandardParams.len;
    let cubegeo = new THREE.BoxGeometry(width, width, width);
    let hex = 0x000000;

    for (let i = 0; i < cubegeo.faces.length; i += 2) {
      cubegeo.faces[i].color.setHex(hex);
      cubegeo.faces[i + 1].color.setHex(hex);
    }

    let cubemat = new THREE.MeshLambertMaterial({
      vertexColors: THREE.FaceColors,
      opacity: 0,
      transparent: true
    });

    this.container = new THREE.Mesh(cubegeo, cubemat);
    this.container.cubeType = 'coverCube';
    this.group.add(this.container);

    if (type === this.main.frontViewName) {
      this.group.rotateY((45 / 180) * Math.PI);
    } else {
      this.group.rotateY(((270 - 45) / 180) * Math.PI);
    }

    this.group.rotateOnAxis(new THREE.Vector3(1, 0, 1), (25 / 180) * Math.PI);
    this.main.scene.add(this.group);
    this.getMinCubeIndex();
  }

  /**
   * 获取最小索引值
   */
  getMinCubeIndex() {
    var ids = [];
    for (var i = 0; i < this.cubes.length; i++) {
      ids.push(this.cubes[i].cubeIndex);
    }
    this.minCubeIndex = Math.min.apply(null, ids);
  }

  /**
   * 获得自身坐标系的坐标轴在世界坐标系中坐标
   */
  updateCurLocalAxisInWorld() {
    const center = new THREE.Vector3(0, 0, 0);
    // X 轴
    const XPoint = new THREE.Vector3(1, 0, 0);
    const XPointAD = new THREE.Vector3(-1, 0, 0);
    // Y 轴
    const YPoint = new THREE.Vector3(0, 1, 0);
    const YPointAD = new THREE.Vector3(0, -1, 0);
    // Z 轴
    const ZPoint = new THREE.Vector3(0, 0, 1);
    const ZPointAD = new THREE.Vector3(0, 0, -1);

    const matrix = this.group.matrixWorld;
    center.applyMatrix4(matrix);
    XPoint.applyMatrix4(matrix);
    XPointAD.applyMatrix4(matrix);
    YPoint.applyMatrix4(matrix);
    YPointAD.applyMatrix4(matrix);
    ZPoint.applyMatrix4(matrix);
    ZPointAD.applyMatrix4(matrix);

    this.center = center;
    this.XLine = XPoint.sub(center);
    this.XLineAD = XPointAD.sub(center);
    this.YLine = YPoint.sub(center);
    this.YLineAD = YPointAD.sub(center);
    this.ZLine = ZPoint.sub(center);
    this.ZLineAD = ZPointAD.sub(center);
  }

  /**
   * 计算转动方向
   */
  getDirection(sub, normalize) {
    this.updateCurLocalAxisInWorld();
    let direction;

    let XAngle = sub.angleTo(this.XLine);
    let XAngleAD = sub.angleTo(this.XLineAD);
    let YAngle = sub.angleTo(this.YLine);
    let YAngleAD = sub.angleTo(this.YLineAD);
    let ZAngle = sub.angleTo(this.ZLine);
    let ZAngleAD = sub.angleTo(this.ZLineAD);

    let minAngle = Math.min.apply(null, [
      XAngle,
      XAngleAD,
      YAngle,
      YAngleAD,
      ZAngle,
      ZAngleAD
    ]);

    let XLine = new THREE.Vector3(1, 0, 0);
    let XLineAD = new THREE.Vector3(-1, 0, 0);
    let YLine = new THREE.Vector3(0, 1, 0);
    let YLineAD = new THREE.Vector3(0, -1, 0);
    let ZLine = new THREE.Vector3(0, 0, 1);
    let ZLineAD = new THREE.Vector3(0, 0, -1);

    switch (minAngle) {
      case XAngle:
        direction = 0; //向x轴正方向旋转90度（还要区分是绕z轴还是绕y轴）
        if (normalize.equals(YLine)) {
          direction = direction + 0.1; //绕z轴顺时针
        } else if (normalize.equals(YAngleAD)) {
          direction = direction + 0.2; //绕z轴逆时针
        } else if (normalize.equals(ZLine)) {
          direction = direction + 0.3; //绕y轴逆时针
        } else {
          direction = direction + 0.4; //绕y轴顺时针
        }
        break;
      case XAngleAD:
        direction = 1; //向x轴反方向旋转90度
        if (normalize.equals(YLine)) {
          direction = direction + 0.1;
        } else if (normalize.equals(YLineAD)) {
          direction = direction + 0.2;
        } else if (normalize.equals(ZLine)) {
          direction = direction + 0.3;
        } else {
          direction = direction + 0.4;
        }
        break;
      case YAngle:
        direction = 2; //向y轴正方向旋转90度
        if (normalize.equals(ZLine)) {
          direction = direction + 0.1;
        } else if (normalize.equals(ZLineAD)) {
          direction = direction + 0.2;
        } else if (normalize.equals(XLine)) {
          direction = direction + 0.3;
        } else {
          direction = direction + 0.4;
        }
        break;
      case YAngleAD:
        direction = 3; //向y轴反方向旋转90度
        if (normalize.equals(ZLine)) {
          direction = direction + 0.1;
        } else if (normalize.equals(ZLineAD)) {
          direction = direction + 0.2;
        } else if (normalize.equals(XLine)) {
          direction = direction + 0.3;
        } else {
          direction = direction + 0.4;
        }
        break;
      case ZAngle:
        direction = 4; //向z轴正方向旋转90度
        if (normalize.equals(YLine)) {
          direction = direction + 0.1;
        } else if (normalize.equals(YLineAD)) {
          direction = direction + 0.2;
        } else if (normalize.equals(XLine)) {
          direction = direction + 0.3;
        } else {
          direction = direction + 0.4;
        }
        break;
      case ZAngleAD:
        direction = 5; //向z轴反方向旋转90度
        if (normalize.equals(YLine)) {
          direction = direction + 0.1;
        } else if (normalize.equals(YLineAD)) {
          direction = direction + 0.2;
        } else if (normalize.equals(XLine)) {
          direction = direction + 0.3;
        } else {
          direction = direction + 0.4;
        }
        break;
      default:
        break;
    }

    return direction;
  }

  /**
   * 根据触摸方块的索引以及滑动方向获得转动元素
   */
  getBoxs(cubeIndex, direction) {
    var targetIndex = cubeIndex;
    targetIndex = targetIndex - this.minCubeIndex;
    var numI = Number.parseInt(targetIndex / 9);
    var numJ = targetIndex % 9;
    var boxs = [];
    //根据绘制时的规律判断 no = i*9+j
    switch (direction) {
      case 0.1:
      case 0.2:
      case 1.1:
      case 1.2:
      case 2.3:
      case 2.4:
      case 3.3:
      case 3.4:
        for (var i = 0; i < this.cubes.length; i++) {
          var tempId = this.cubes[i].cubeIndex - this.minCubeIndex;
          if (numI === Number.parseInt(tempId / 9)) {
            boxs.push(this.cubes[i]);
          }
        }
        break;
      case 0.3:
      case 0.4:
      case 1.3:
      case 1.4:
      case 4.3:
      case 4.4:
      case 5.3:
      case 5.4:
        for (var i = 0; i < this.cubes.length; i++) {
          var tempId = this.cubes[i].cubeIndex - this.minCubeIndex;
          if (Number.parseInt(numJ / 3) === Number.parseInt((tempId % 9) / 3)) {
            boxs.push(this.cubes[i]);
          }
        }
        break;
      case 2.1:
      case 2.2:
      case 3.1:
      case 3.2:
      case 4.1:
      case 4.2:
      case 5.1:
      case 5.2:
        for (var i = 0; i < this.cubes.length; i++) {
          var tempId = this.cubes[i].cubeIndex - this.minCubeIndex;
          if ((tempId % 9) % 3 === numJ % 3) {
            boxs.push(this.cubes[i]);
          }
        }
        break;
      default:
        break;
    }
    return boxs;
  }

  /**
   * 绕过点p的向量vector旋转一定角度
   */
  rotateAroundWorldAxis(p, vector, rad) {
    vector.normalize();
    var u = vector.x;
    var v = vector.y;
    var w = vector.z;

    var a = p.x;
    var b = p.y;
    var c = p.z;

    var matrix4 = new THREE.Matrix4();

    matrix4.set(
      u * u + (v * v + w * w) * Math.cos(rad),
      u * v * (1 - Math.cos(rad)) - w * Math.sin(rad),
      u * w * (1 - Math.cos(rad)) + v * Math.sin(rad),
      (a * (v * v + w * w) - u * (b * v + c * w)) * (1 - Math.cos(rad)) +
        (b * w - c * v) * Math.sin(rad),
      u * v * (1 - Math.cos(rad)) + w * Math.sin(rad),
      v * v + (u * u + w * w) * Math.cos(rad),
      v * w * (1 - Math.cos(rad)) - u * Math.sin(rad),
      (b * (u * u + w * w) - v * (a * u + c * w)) * (1 - Math.cos(rad)) +
        (c * u - a * w) * Math.sin(rad),
      u * w * (1 - Math.cos(rad)) - v * Math.sin(rad),
      v * w * (1 - Math.cos(rad)) + u * Math.sin(rad),
      w * w + (u * u + v * v) * Math.cos(rad),
      (c * (u * u + v * v) - w * (a * u + b * v)) * (1 - Math.cos(rad)) +
        (a * v - b * u) * Math.sin(rad),
      0,
      0,
      0,
      1
    );

    return matrix4;
  }

  /**
   * 更新位置索引
   */
  updateCubeIndex(elements) {
    for (let i = 0; i < elements.length; i++) {
      let temp1 = elements[i];
      for (let j = 0; j < this.initStatus.length; j++) {
        let temp2 = this.initStatus[j];
        if (
          Math.abs(temp1.position.x - temp2.x) <= StandardParams.len / 2 &&
          Math.abs(temp1.position.y - temp2.y) <= StandardParams.len / 2 &&
          Math.abs(temp1.position.z - temp2.z) <= StandardParams.len / 2
        ) {
          temp1.cubeIndex = temp2.cubeIndex;
          break;
        }
      }
    }
  }

  rotateAnimation(
    elements,
    direction,
    currentstamp,
    startstamp,
    laststamp,
    callback,
    totalTime
  ) {
    let self = this;
    let isAnimationEnd = false; //动画是否结束

    if (startstamp === 0) {
      startstamp = currentstamp;
      laststamp = currentstamp;
    }
    if (currentstamp - startstamp >= totalTime) {
      isAnimationEnd = true;
      currentstamp = startstamp + totalTime;
    }
    let rotateMatrix = new THREE.Matrix4(); //旋转矩阵
    let origin = new THREE.Vector3(0, 0, 0);
    let XLine = new THREE.Vector3(1, 0, 0);
    let YLine = new THREE.Vector3(0, 1, 0);
    let ZLine = new THREE.Vector3(0, 0, 1);

    switch (direction) {
      case 0.1:
      case 1.2:
      case 2.4:
      case 3.3:
        rotateMatrix = this.rotateAroundWorldAxis(
          origin,
          ZLine,
          (((-90 * Math.PI) / 180) * (currentstamp - laststamp)) / totalTime
        );
        break;
      case 0.2:
      case 1.1:
      case 2.3:
      case 3.4:
        rotateMatrix = this.rotateAroundWorldAxis(
          origin,
          ZLine,
          (((90 * Math.PI) / 180) * (currentstamp - laststamp)) / totalTime
        );
        break;
      case 0.4:
      case 1.3:
      case 4.3:
      case 5.4:
        rotateMatrix = this.rotateAroundWorldAxis(
          origin,
          YLine,
          (((-90 * Math.PI) / 180) * (currentstamp - laststamp)) / totalTime
        );
        break;
      case 1.4:
      case 0.3:
      case 4.4:
      case 5.3:
        rotateMatrix = this.rotateAroundWorldAxis(
          origin,
          YLine,
          (((90 * Math.PI) / 180) * (currentstamp - laststamp)) / totalTime
        );
        break;
      case 2.2:
      case 3.1:
      case 4.1:
      case 5.2:
        rotateMatrix = this.rotateAroundWorldAxis(
          origin,
          XLine,
          (((90 * Math.PI) / 180) * (currentstamp - laststamp)) / totalTime
        );
        break;
      case 2.1:
      case 3.2:
      case 4.2:
      case 5.1:
        rotateMatrix = this.rotateAroundWorldAxis(
          origin,
          XLine,
          (((-90 * Math.PI) / 180) * (currentstamp - laststamp)) / totalTime
        );
        break;
      default:
        break;
    }
    console.warn(elements);
    for (var i = 0; i < elements.length; i++) {
      elements[i].applyMatrix(rotateMatrix);
    }
    if (!isAnimationEnd) {
      requestAnimationFrame(function(timestamp) {
        self.rotateAnimation(
          elements,
          direction,
          timestamp,
          startstamp,
          currentstamp,
          callback,
          totalTime
        );
      });
    } else {
      callback();
    }
  }

  rotateMove(cubeIndex, direction, callback, totalTime) {
    let self = this;
    totalTime = totalTime || this.defaultTotalTime;
    const elements = this.getBoxs(cubeIndex, direction);
    console.warn(cubeIndex, elements, direction);
    requestAnimationFrame(function(timestamp) {
      self.rotateAnimation(
        elements,
        direction,
        timestamp,
        0,
        0,
        function() {
          self.updateCubeIndex(elements);
          if (callback) callback();
        },
        totalTime
      );
    }, totalTime);
  }
}
