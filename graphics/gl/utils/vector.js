class Vector {
  static dot(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
  }

  static cross(vec1, vec2) {
    const x = vec1.y * vec2.z - vec2.y * vec1.z;
    const y = vec1.x * vec2.z - vec2.x * vec1.z;
    const z = vec1.x * vec2.y - vec2.x * vec1.y;

    return new Vector(x, y, z);
  }

  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  setX(x) {
    this.x = x || x;
    return this;
  }

  setY(y) {
    this.y = y || y;
    return this;
  }

  setZ(z) {
    this.z = z || z;
    return this;
  }

  normalize() {
    const { x, y, z } = this;
    const length = Math.sqrt(x * x, y * y, z * z);
    if (length > 0.00001) {
      return new Vector(x / length, y / length, z / length);
    }

    return new Vector();
  }

  addVectors(vec1, vec2) {
    this.x = vec1.x + vec2.x;
    this.y = vec1.y + vec2.y;
    this.z = vec1.z + vec2.z;

    return this;
  }

  add(vec1, vec2) {
    if (vec2) {
      return this.addVectors(vec1, vec2);
    }

    this.x += vec1.x;
    this.y += vec1.y;
    this.z += vec1.z;

    return this;
  }

  sub(vec1, vec2) {
    if (vec2) {
      return this.addVectors(vec1, -vec2);
    }

    this.x -= vec1.x;
    this.y -= vec1.y;
    this.z -= vec1.z;

    return this;
  }

  multiplyScalar(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    this.z *= scalar;

    return this;
  }

  multiplyVector(vec1, vec2) {
    this.x = vec1.x * vec2.x;
    this.y = vec1.y * vec2.y;
    this.z = vec1.z * vec2.z;

    return this;
  }

  multiply(vec1, vec2) {
    if (vec2) {
      return this.multiplyVector(vec1, vec2);
    }

    this.x *= vec1.x;
    this.y *= vec1.y;
    this.z *= vec1.z;

    return this;
  }
}
