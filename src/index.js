import $ from 'jquery';
import './style/style.less';
import * as d3 from 'd3';
import {Tooltip} from './tooltip.js';

class Diagram {
    constructor(svg) {
        this.svg = svg;
    }

    drawDiagram(arr) {

        const height = 300;
        const width = 250;
        const margin = 25;
        let item;
        let tooltip = new Tooltip();

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
                tooltip.show(item);
            })
            .on("mousemove", () => tooltip.move())
            .on("mouseout", ()=> tooltip.hide());

        //axisx
        let scalex = d3.scaleLinear()
            .domain([0, height])
            .range([0, height]);
        let axisx = d3.axisBottom()
            .scale(scalex)
            .ticks(5);
        this.svg.append("g")
            .attr("transform", `translate(${margin},${234})`)
            .call(axisx);

        //axisy
        let scaley = d3.scaleLinear()
            .domain([width, 0])
            .range([0, width]);
        let axisy = d3.axisLeft()
            .scale(scaley)
            .ticks(4);
        this.svg
            .append("g")
            .attr("transform", `translate(${margin},${-16})`)
            .call(axisy);
    }
}

class Draw extends Diagram {
    constructor() {
        let svg = d3
            .select('body')
            .append('svg')
            .attr('height', '250px')
            .attr('width', '300px');
        super(svg);
    }
}

let draw = new Draw();
draw.drawDiagram([14, 7, 9, 2, 6], [0, 250]);


//let t = require('./template.html');

// const square = d3.selectAll("rect");
// square.style("fill", "orange");

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







