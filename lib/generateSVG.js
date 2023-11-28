function generateSVG(text, textColor, shape, shapeColor) {
    let svgContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
  
    if (shape === 'circle') {
      svgContent += `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    } else if (shape === 'triangle') {
      svgContent += `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
    } else if (shape === 'square') {
      svgContent += `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    }
  
    svgContent += `<text x="130" y="120" fill="${textColor}">${text}</text></svg>`;
  
    return svgContent;
  }

module.exports = generateSVG