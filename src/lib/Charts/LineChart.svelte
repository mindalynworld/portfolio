<script lang="ts">
    import { onMount, tick } from 'svelte';
    import * as d3 from 'd3';
    import CategoricalLegend from './Embellishments/CategoricalLegend.svelte';

    //export const excludedValues: string[] = [];
    const { excludedValues = [] } = $props();
//    $: redraw();
    //$: filtered = excludedValues;

    let vis: HTMLElement;
    let categories: string[] = $state(["x","y","z"]);
    $effect(() => console.log("categories update:" + categories))
    const colorPalette = ['#960033', '#D24261', '#ACD7FF','#3175DB', '#0046A3', '#002A80'];
    let colorPaletteFiltered: string[] = [];

    // defining constants and variables
    let width = 1500;
    let height = 600;
    const margin = {
		top: 30,
		right: 20,
		bottom: 30,
		left: 50
	};

    const axisColor = "#919492";
    const axisFontSize = "1.8rem";

    const parseTime = d3.timeParse("%Y");
    
    onMount(() => {
        redraw();
    });

    // this all can/should be made generic for any multiple line chart
    function redraw(): void {
        // empty vis div
		d3.select(vis).html(null); 

        // read in data from csv
        interface Radiance {
            year: Date;
            city: string;
            avg_rad: number;
        };

        d3.csv("../../../data/YEARLY_AVG_RAD_MINMAX_LONG.csv", (d) => {
            let output: Radiance = {
                year: parseTime(d.year)!, // convert to Date object. thinks it could be null, so options are 1) ! non-null assertion 2) date ?? new Date() 3) checking for null before assigning
                city: d.city,
                avg_rad: +d.avg_rad, // + is fast way to convert to integer
            };
            return output
        }).then(function(data) {
            console.log(data);

            let yearsArray: Date[] = []; // (Date | null)
            data.forEach(d => yearsArray.push(d.year));
            console.log(d3.min(yearsArray)); // for some reason i can't use this in the domain below because it could return Date or undefined.
            // it's because .min, .max, and .extent can return the type OR undefined, and domain only accepts certain values. so have to handle if undefined

            const start = d3.min(yearsArray) ?? new Date(2012, 1);
            const end = d3.max(yearsArray) ?? new Date(2023, 1);  

            let xScale = d3.scaleTime()
                .domain([start, end])
                .range([margin.left, width - margin.right]);

            let yScale = d3.scaleLinear() 
                .domain([0,1]) //d3.max(data, d => d.avg_rad) ?? 1
                .range([height - margin.bottom, margin.top]);


            // Create the SVG container.
            const svg = d3.select(vis).append("svg")
                .attr("width", width)
                .attr("height", height)
                .attr("viewBox", [0, 0, width, height])
                .attr("style", "max-width: 100%; height: auto; overflow: visible;");
            
            // Add the horizontal axis.
            const xAxis = svg.append("g")
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0))
                .call(g => g.select(".domain").remove())
                

            // Add the vertical axis.
            const yAxis = svg.append("g")
                //.attr("transform", `translate(${margin.left-50},0)`) // so that the lines shift left (providing space between axis and first data points)
                // same thing as not shifting it at all
                .call(d3.axisLeft(yScale).tickSize(-width)) // Extend ticks horizontally across the chart
                .call(g => g.select(".domain").remove()) // removes the axis line
                .call(g => g.append("text")
                    .attr("x", 10)
                    .attr("y", 30)
                    .attr("fill", "currentColor")
                    .attr("text-anchor", "start")
                    .text("Relative Radiance Change"))
                    .style('font-size', axisFontSize)

            yAxis.selectAll('text').style('font-size', axisFontSize).style('fill', axisColor)
                .attr('dy', '-0.5em') // labels go above line
                .attr('dx', '1.5em'); // labels rest on top of y axis lines
            xAxis.selectAll('text').style('font-size', axisFontSize).style('fill', axisColor);

            yAxis.selectAll("line").style("stroke", axisColor)
            xAxis.selectAll("line").style("stroke", axisColor);

            type Point = [Date, number, string];
            // Compute the points in pixel space as [x, y, z], corresponding to [date, rad, city].
            const points: Point[] = data.map((d) => [d.year, d.avg_rad, d.city]);

            // Group the points by city.
            // d3.rollup(data, reducer, key1...)
            const groups = d3.rollup(points, d => Object.assign(d, {z: d[0][2]}), k => k[2] as string);
            // how can i assign the key to be a string

            // color palette
            // sorting by rate of decline/incline
            let sorted = Array.from(groups.entries()).sort((a,b) => (a[1][11][1] - a[1][0][1]) - (b[1][11][1] - b[1][0][1]))
            categories = sorted.map(([categories]) => categories);

            let colorDict: {[key: string]: string} = {};
            sorted.forEach((d,i) => colorDict[categories[i]] = colorPalette[i])
            categories = categories.filter(d => !(excludedValues as string[]).includes(d));

            categories.forEach(c => colorPaletteFiltered.push(colorDict[c]));

            var color = d3.scaleOrdinal<string>()
                .domain(categories)
                .range(colorPaletteFiltered);
            
            // Draw the lines.

            // console.log(groups.values());

            const lineGenerator = d3.line<Point>()
                .x(d => xScale(d[0]))
                .y(d => yScale(d[1]));

            const path = svg.append("g")
                .attr("fill", "none")
                // .attr("stroke", "steelblue")
                .attr("stroke-width", 5)
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .selectAll("path")
                .data(groups.values().filter(d => !(excludedValues as string[]).includes(d[0][2])))
                .join("path")
                .style("mix-blend-mode", "multiply")
                .attr("d", lineGenerator)
                .attr("stroke", d => color(d[0][2]));


            // Add an invisible layer for the interactive tip.
            const dot = svg.append("g")
                .attr("display", "none");

            dot.append("circle")
                .attr("r", 0);

            dot.append("text")
                .attr("text-anchor", "middle")
                .attr("font-size", "1.8rem")
                .attr("y", -20);

            svg
                .on("pointerenter", pointerentered)
                .on("pointermove", pointermoved)
                .on("pointerleave", pointerleft)
                .on("touchstart", event => event.preventDefault());

            return svg.node();

            // When the pointer moves, find the closest point, update the interactive tip, and highlight
            // the corresponding line. Note: we don't actually use Voronoi here, since an exhaustive search
            // is fast enough.

            //UPDATE to make line thicker when hovered, and tooltip font size bigger
            
            function pointermoved(event: Event) {
                const [xm, ym] = d3.pointer(event);
                const i = d3.leastIndex(points, ([x, y]) => Math.hypot(xScale(x) - xm, yScale(y) - ym)) ?? 0;
                const [x, y, k] = points[i];
                path.style("stroke", ({z}) => z === k ? null : "#ddd").filter(({z}) => z === k).raise();
                dot.attr("transform", `translate(${xScale(x)},${yScale(y)})`);
                dot.select("text").text(k);
                svg.property("value", data[i]);
            }

            function pointerentered() {
                path.style("mix-blend-mode", null).style("stroke", "#ddd");
                dot.attr("display", null);
            }

            function pointerleft() {
                path.style("mix-blend-mode", "multiply").style("stroke", null);
                dot.attr("display", "none");
            }
        });
            

    }

</script>

<div class="canvas">
    <h1>Relative Change in Radiance of Major Metropolitan Cities in Africa 2012-2023</h1>

    <!-- bind is a directive (something that controls element behavior). 'on' is another directive
    bind allows data to flow from child to parent (normally parent to child) 
    bind:property={variable} -->
    <!-- key block force recreates block when variable categories changes -->
    {#key categories} 
    <CategoricalLegend keys={categories} palette={colorPaletteFiltered}></CategoricalLegend>
    {/key}
    <div id="vis" bind:this={vis}></div>
    <p class="caption"> Graphic: Mindy Ng. This visualization was created using d3.js. Read more about the data processing below.</p>
</div>

<style>
    .canvas {
		height: 100%;
		display: flex;
        font-family: Avenir;
        font-size: 10px;

        display: flex;
        flex-direction: column;
	}
    
    .caption {
        text-align: right;
        font-size: 0.8rem;
        color: #919492;
    }

</style>