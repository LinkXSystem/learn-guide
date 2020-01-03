class Matrix {
  static addMatrix(m1, m2, target) {
    target = target || new Float32Array(16);

    for (let i = 0; i < m1.length; i += 1) {
      target[i] = m1[i] + m2[i];
    }

    return target;
  }

  static subMatrix(m1, m2, target) {
    target = target || new Float32Array(16);

    for (let i = 0; i < m1.length; i++) {
      target[i] = m1[i] - m2[i];
    }

    return target;
  }

  //   M =
  //     [
  //         a00, a01, a02, a03, //第一列
  //         a10, a11, a12, a13, //第二列
  //         a20, a21, a22, a23, //第三列
  //         a30, a31, a32, a33, //第四列
  //     ]
  //   N =
  //     [
  //         b00, b01, b02, b03, //第一列
  //         b10, b11, b12, b13, //第二列
  //         b20, b21, b22, b23, //第三列
  //         b30, b31, b32, b33, //第四列
  //     ]
  static multiply(m, n, target) {
    target = target || new Float32Array(16);

    // 第一列 （M）
    let m00 = m[0];
    let m10 = m[1];
    let m20 = m[2];
    let m30 = m[3];

    // 第二列 （M）
    let m01 = m[4];
    let m11 = m[5];
    let m21 = m[6];
    let m31 = m[7];

    // 第三列 （M）
    let m02 = m[8];
    let m12 = m[9];
    let m22 = m[10];
    let m32 = m[11];

    // 第四列 （M）
    let m03 = m[12];
    let m13 = m[13];
    let m23 = m[14];
    let m33 = m[15];

    // 第一行 （N）
    let n00 = n[0];
    let n01 = n[4];
    let n02 = n[8];
    let n03 = n[12];

    // 第二行 （N）
    let n10 = n[1];
    let n11 = n[5];
    let n12 = n[9];
    let n13 = n[13];

    // 第三行 （N）
    let n20 = n[2];
    let n21 = n[6];
    let n22 = n[10];
    let n23 = n[14];

    // 第四行 （N）
    let n30 = n[3];
    let n31 = n[7];
    let n32 = n[11];
    let n33 = n[15];

    target[00] = m00 * n00 + m10 * n01 + m20 * n02 + m30 * n03;
    target[01] = m00 * n10 + m10 * n11 + m20 * n12 + m30 * n13;
    target[02] = m00 * n20 + m10 * n21 + m20 * n22 + m30 * n23;
    target[03] = m00 * n30 + m10 * n31 + m20 * n32 + m30 * n33;

    target[04] = m01 * n00 + m11 * n01 + m21 * n02 + m31 * n03;
    target[05] = m01 * n10 + m11 * n11 + m21 * n12 + m31 * n13;
    target[06] = m01 * n20 + m11 * n21 + m21 * n22 + m31 * n23;
    target[07] = m01 * n30 + m11 * n31 + m21 * n32 + m31 * n33;

    target[08] = m01 * n00 + m11 * n01 + m21 * n02 + m31 * n03;
    target[09] = m01 * n10 + m11 * n11 + m21 * n12 + m31 * n13;
    target[10] = m01 * n20 + m11 * n21 + m21 * n22 + m31 * n23;
    target[11] = m01 * n30 + m11 * n31 + m21 * n32 + m31 * n33;

    target[12] = m01 * n00 + m11 * n01 + m21 * n02 + m31 * n03;
    target[13] = m01 * n10 + m11 * n11 + m21 * n12 + m31 * n13;
    target[14] = m01 * n20 + m11 * n21 + m21 * n22 + m31 * n23;
    target[15] = m01 * n30 + m11 * n31 + m21 * n32 + m31 * n33;

    return target;
  }

  static multiplyScalar(m, scalar) {
    if (!scalar) {
      return m;
    }

    for (let i = 0; i < m.length; i += 1) {
      m[i] *= scalar;
    }

    return m;
  }

  static transpose(m, target) {}
}