// Create the class of Shapes and a render method.
class Shapes {
    constructor(text, textColor, shape, color) {
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.color = color;
    }
    render() {
        throw new Error('You must select a shape and color first.');
    }
}

//  Create a triangle constructor extending shapes.
class Triangle extends Shapes {
    constructor(text, textColor, shape, color) {
        super(text, textColor, shape, color);
    }
    // Use polymorphism to change the render method to display a triangle with chosen attributes.
    render() {
        if (this.shape === 'triangle') {
            return `<svg width="300" height="200"> <polygon points="50,0 0,100 100,100" fill="${this.color}" /> 
<text x="50" y="80" fill="${this.textColor}" 
font-size="26" text-anchor="middle">${this.text}</text>
</svg>`;
        }
    }
}

// Create a square constructor extending shapes.
class Square extends Shapes {
    constructor(text, textColor, shape, color) {
        super(text, textColor, shape, color);
    }
    // Use polymorphism to change the render method to display a square with chosen attributes.
    render() {
        if (this.shape === 'square') {
            return `<svg width="300" height="200"> <rect x="10" y="10" width="80" height="80" fill="${this.color}" />
<text x="50" y="60" fill="${this.textColor}" 
font-size="30" text-anchor="middle">${this.text}</text>
</svg>`
        }
    }
}

// Create a circle constructor extending shapes.
class Circle extends Shapes {
    constructor(text, textColor, shape, color) {
        super(text, textColor, shape, color);
    }
    // Use polymorphism to change the render method to display a circle with chosen attributes.
    render() {
        if (this.shape === 'circle') {
            return `<svg width="300" height="200"> <circle cx="50" cy="50" r="40" fill="${this.color}" />
<text x="50" y="60" fill="${this.textColor}" 
font-size="30" text-anchor="middle">${this.text}</text>
</svg>`
        }
    }
}

module.exports = {Shapes, Triangle, Square, Circle};