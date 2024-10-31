<script lang="ts">
    import { onMount } from 'svelte'; //afterUpdate
    import * as d3 from 'd3';

    let legend: HTMLElement;

    /* svelte 4 */
    // export let key: string[] = ["a", "b", "c", "d"];
    // export let palette: string[] = ["#845EC2", "#D65DB1", "#FF9671", "#FFC75F"];

    /* svelte 5 */
    const { keys = ["a", "b", "c", "d"], 
        palette = ["#845EC2", "#D65DB1", "#FF9671", "#FFC75F"]}: 
        { keys: string[], palette: string[] } = $props();
    
    //d3.schemeSet2

    //need to trigger update in the parent
    // $: mykey = key;
    // $: mypalette = palette;

    let width = 300;
    let height = 50;
    const margin = {
		top: 20,
		right: 20,
		bottom: 30,
		left: 10
	};

    onMount(() => {
        redraw();
    });

    function redraw(): void {
        // empty vis div
		d3.select(legend).html(null); 

        // // Create the SVG container.
        // const svg = d3.select(legend).append("svg")
        //     .attr("width", width) // customizable
        //     .attr("height", height)
        //     .attr('preserveAspectRatio', 'xMinYMin meet') // Preserve aspect ratio
        //     .attr("viewBox", [0, 0, width, height])
        //     .attr("style", "max-width: 100%; height: auto; overflow: visible; font: 12px avenir;"); // outside styles wont apply to svg

        // Usually you have a color scale in your chart already
        var color = d3.scaleOrdinal<string>()
            .domain(keys)
            .range(palette);

        var item = d3.select(legend).selectAll(".item")
            .data(keys)
            .enter()
            .append('div')
            .attr('class', 'itemGrp')

        // var svgGrp = d3.select(legend).selectAll(".svgGrp")
        //     .attr('class', '.itemGrp')
        //     .data(keys)
        //     .enter()
        var svgGrp = item
            .append('svg')
            .attr("width", 85) // customizable
            .attr("height", 14)

        svgGrp
            .append("circle")
                .attr("cx", 7)
                .attr("cy", 7)
                .attr("r", 7)
                .style("fill", function(d){ return color(d)})

        svgGrp.append("text")
                .attr("x", 20) 
                .attr("y", 8) 
                .style("fill", function(d){ return color(d)})
                .text(function(d){ return d})
                .attr("text-anchor", "left")
                .style("alignment-baseline", "middle")

        // // Add one dot in the legend for each name.
        // svg.selectAll("dots")
        //     .data(keys)
        //     .enter()
        //     .append("circle")
        //         .attr("cx", function(d,i){ return margin.left + i*110})
        //         .attr("cy", 10)
        //         .attr("r", 7)
        //         .style("fill", function(d){ return color(d)})

        // // Add one dot in the legend for each name.
        // svg.selectAll("labels")
        //     .data(keys)
        //     .enter()
        //     .append("text")
        //         .attr("x", function(d,i){ return margin.left + 20 + i*110}) // margin+20 is where the first dot appears. 150 is the distance between dots. distance between should be customisable
        //         .attr("y", 10) 
        //         .style("fill", function(d){ return color(d)})
        //         .text(function(d){ return d})
        //         .attr("text-anchor", "left")
        //         .style("alignment-baseline", "middle")

    }

</script>

<div id="legend" bind:this={legend}></div>

<style>
    #legend {
        display: flex;
        justify-content: space-around;
        padding: 1rem;
    }

    div :global(.itemGrp) {
        display: flex;
    }

    :global(#vis) {
        padding: 1rem;
    }
</style>