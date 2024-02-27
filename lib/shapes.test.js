const { Shapes, Triangle, Square, Circle } = require('./shapes.js');

describe('Shapes', () => {
    describe('render', () => {
        it('should throw an error if no shape and color are defined.', () => {
            const shapes = new Shapes();
            expect(() => shapes.render()).toThrow('You must select a shape and color first.');
        });
    });
});

describe('Triangle', () => {
    describe('render', () => {
        it('should retrun an svg image', () => {
            const triangle = new Triangle('Sample Text', 'black', 'triangle', 'red');
            const expectedSvg = `<svg width="250" height="250"> <polygon points="50,0 0,100 100,100" fill="red" /> 
            <text x="50" y="75" fill="black" 
            font-size="26" text-anchor="middle">Sample Text</text>
            </svg>`
            expect(triangle.render()).toEqual(expectedSvg)
        });
    });
});

describe('Square', () => {
    describe('render', () => {
        it('should retrun an svg image', () => {
            const square = new Square('Sample Text', 'black', 'square', 'red');
            const expectedSvg = `<svg width="250" height="250"> <rect x="10" y="10" width="80" height="80" fill="red" />
            <text x="50" y="60" fill="black" 
            font-size="30" text-anchor="middle">Sample Text</text>
             </svg>`
            expect(square.render()).toEqual(expectedSvg)
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should retrun an svg image', () => {
            const circle = new Circle('Sample Text', 'black', 'circle', 'red');
            const expectedSvg = `<svg width="250" height="250"> <circle cx="50" cy="50" r="40" fill="red" />
            <text x="50" y="60" fill="black" 
            font-size="30" text-anchor="middle">Sample Text</text>
             </svg>`
            expect(circle.render()).toEqual(expectedSvg)
        });
    });
});