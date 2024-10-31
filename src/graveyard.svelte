<script lang="ts">
        // D3: HOW TO CREATE A DYNAMIC ROW OF CARDS WITH SVG, WITHOUT FLEXBOX

        // empty vis div
        d3.select(wrapper).html(null);

        // Create the SVG container.
        const svg = d3.select(wrapper).append("svg")
            .attr("width", width) // customizable
            .attr("height", height)
            .attr('preserveAspectRatio', 'xMinYMin meet') // Preserve aspect ratio
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; overflow: visible; font: 12px avenir;"); 

        var cardGroup =svg.append('g').selectAll('rect')
			.data(data)
			.enter()
            .append('g')
            .attr("class", "card-group")
            .attr('id', (d,i) => "card-group-"+i);

        cardGroup.append("rect")
            .attr("class", "card_rect")
            .attr("height", card_h)
            .attr("width", card_w)
            .attr("x", (d, i) => i * (card_w + 20))
            .attr("y", 50)
            .attr('rx', 5)
            .attr('ry', 5)
            .attr('fill', '#592FF3');

        cardGroup.append('text')
            .attr('class', 'title')
            .attr('fill', 'white')
            .attr("x", (d, i) => i * (card_w + 20) + card_w/2)
            .attr("y", 50 + card_h/2)
            .attr("text-anchor", "middle")
            .text(d => d);

        // When you're editing a div's style, use style attribute:
            d3.select(".your_div").attr("style", `
                height: ${card_h}rem; 
                width: ${card_w}rem; 
                background-color: #592FF3;
                margin: 0.5rem;
                border-radius: 0.5rem;
                `);
            //
            // OR, in css
            // div :global(.card) {}





            // color palette
        // sorting by rate of decline/incline
        let sorted = Array.from(groups.entries()).sort((a,b) => (a[1][11][1] - a[1][0][1]) - (b[1][11][1] - b[1][0][1]))

        let colorDict: {[key: string]: string} = {};
        sorted.forEach((d,i) => colorDict[categories[i]] = colorPalette[i])
        console.log(colorDict);

        // filtering out excluded values
        categories = sorted.map(([categories]) => categories).filter(d => !(excludedValues as string[]).includes(d[0][2]));
        let colorPaletteFiltered: string[] = [];
        categories.forEach(c => colorPaletteFiltered.push(colorDict[c]));

        var color = d3.scaleOrdinal<string>()
            .domain(categories) //colorDict.keys() // categories
            .range(colorPaletteFiltered); // colorDict.values() // colorPalette
</script>

<body>
    <a class="project-link" href="/projects/south-africa-energy"></a>
</body>

