const Shapes = require('./shapes.js');

function generateSvg(text, textColor, shape, color) {

  // Switch function to switch between shape selected
    switch (shape) {
        case 'triangle':
            shapeInstance = new Shapes.Triangle(text, textColor, shape, color);
            break;
        case 'square':
            shapeInstance = new Shapes.Square(text, textColor, shape, color);
            break;
        case 'circle':
            shapeInstance = new Shapes.Circle(text, textColor, shape, color);
            break;
        default:
            throw new Error('Invalid entry.');
    }

    // Render the selected shape's svg
    const svg = shapeInstance.render();

    return svg;
}

module.exports = generateSvg;