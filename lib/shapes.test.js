const generateSVG = require('./generateSVG');
const Circle = require('./shapes')
const Square = require('./shapes')


test('Circle is made correctly with requested color', () => {
    const shape = new Circle(50);
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="50" fill="red" />');
  });

