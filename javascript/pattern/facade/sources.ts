interface Shape {
  draw: Function;
}

class Rectangle implements Shape {
  draw() {
    console.log('draw the rectangle !');
  }
}

class Circle implements Shape {
  draw() {
    console.log('draw the circle !');
  }
}

class ShaperDrawer {
  rectangle: Rectangle;
  circle: Circle;

  constructor() {
    this.rectangle = new Rectangle();
    this.circle = new Circle();
  }

  drawCircle() {
    this.circle.draw();
  }

  drawRectangle() {
    this.rectangle.draw();
  }
}

(function() {
  const drawer = new ShaperDrawer();
  drawer.drawCircle();
  drawer.drawRectangle();
})();
