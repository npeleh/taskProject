import * as d3 from "d3";

export class Tooltip {

    show(item){
        this.tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "0")
            .style("visibility", "visible")
            .attr('class','tooltip')
            .style("top", (event.pageY-10)+"px").style("left",(event.pageX+10)+"px")
            .text(item);
    }
    hide(){
        this.tooltip.remove();
    }

}
