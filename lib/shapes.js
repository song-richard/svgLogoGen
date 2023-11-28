class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render() {
      throw new Error('Not implemented');
    }
  }

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength;
    }
  
    render() {
      return `<rect x="${150 - this.sideLength / 2}" y="${100 - this.sideLength / 2}" width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
  }
  