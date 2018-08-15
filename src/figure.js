class Figure {
    constructor(size) {
        this.size = size;
    }

    calculatePerimeter() {
        let perimeter = 0;
        for (let i = 0; i < this.size.length; i++) {
            perimeter += this.size[i];
        }
        return perimeter
    }

    calculateS() {
        let s = 1;
        for (let i = 0; i < this.size.length; i++) {
            s *= this.size[i];
        }
        return s
    }
}

class Circle extends Figure {
    constructor(radious = []) {
        super(radious);
    }

    calculatePerimeter() {
        let perimeter = 2 * Math.PI * this.size[0];
        return perimeter
    }
}

class Square extends Figure {
    constructor(size) {
        super(size);
    }

    calculatePerimeter() {
        let perimeter = 4 * this.size[0];
        return perimeter
    }
}

let circle = new Circle([5]);
let square = new Square([25]);

function calcFigure(figure) {
    return 's = ' + figure.calculateS() + ', p = ' + figure.calculatePerimeter()
}

console.log(calcFigure(circle));
console.log(calcFigure(square));