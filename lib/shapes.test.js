const generateSVG = require('./generateSVG');
const { Circle, Square, Triangle } = require('./shapes')


test('Circle is made correctly with requested color', () => {
    const shape = new Circle(50);
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });

test('Square is made correctly with requested color', () => {
    const shape = new Square(80);
    shape.setColor('green');
    expect(shape.render()).toEqual('<rect x="110" y="60" width="80" height="80" fill="green" />');
});


test('Triangle is made correctly with requested color', () => {
    const shape = new Triangle(100);
    shape.setColor('blue');
    expect(shape.render()).toEqual('<polygon points="150,50 100,150 200,150" fill="blue" />');
  });