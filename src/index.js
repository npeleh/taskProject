import $ from 'jquery';
import './style/style.less';
import * as d3 from 'd3';

class A {
    constructor(svg) {
        this.svg = svg;
    }

    drawDiagram(arr) {

        var height = 300;
        var width = 250;
        var margin = 25;
        var item;

        this.svg
            .selectAll('rect')
            .data(arr).enter()
            .append('rect')
            .attr('height', num => num * 15)
            .attr('width', '20')
            .attr('fill', 'darkblue')
            .attr('x', (num, i) =>  25 + (i * 35))
            .attr('y', num => 235 - (num * 15))
            .on("mouseover", (num, i) => {
                item = arr[i]*15;
                tooltip.style("visibility", "visible")
                    .style("background-color", 'white')
                    .style("color", 'darkblue')
                    .text(item);
            })
            .on("mousemove", () => tooltip.style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px"))
            .on("mouseout", ()=> tooltip.style("visibility", "hidden"));

        //axisx
        var scalex = d3.scaleLinear()
            .domain([0, height])
            .range([0, height]);
        var axisx = d3.axisBottom()
            .scale(scalex)
            .ticks(5);
        this.svg.append("g")
            .attr("transform", `translate(${margin},${234})`)
            .call(axisx);

        //axisy
        var scaley = d3.scaleLinear()
            .domain([width, 0])
            .range([0, width]);
        var axisy = d3.axisLeft()
            .scale(scaley)
            .ticks(4);
        this.svg
            .append("g")
            .attr("transform", `translate(${margin},${-16})`)
            .call(axisy);

        //tooltip
        var tooltip = d3.select("body")
            .data(arr).enter()
            .append("div")
            .style("position", "absolute")
            .style("z-index", "0")
            .style("visibility", "hidden")
    }
}

class B extends A {
    constructor() {
        let svg = d3
            .select('body')
            .append('svg')
            .attr('height', '250px')
            .attr('width', '300px');
        super(svg);
    }
}

let b = new B();
b.drawDiagram([14, 7, 9, 2, 6], [0, 250]);


//let t = require('./template.html');


// const square = d3.selectAll("rect");
// square.style("fill", "orange");

// var arr = [14, 7, 9, 2, 6];
// var line = [0, 250];
//var svg = d3.select('body').append('svg').attr('height', '250px').attr('width', '400px');


//$('.title').html("fghg");

// class A {
//     log() {
//         console.log('aa');
//
//     }
// };
//
//
// function f() {
//     let a = new A;
//     a.log();
// }
// f();


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






