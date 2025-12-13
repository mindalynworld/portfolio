<script lang="ts">
    import * as d3 from 'd3';
    import { afterUpdate } from 'svelte';
    import { base } from '$app/paths';

    const data = [
        {title: "The Dark Divide", desc_short: "Using nighttime lights to study disparities in energy access amidst the energy crisis in South Africa", route: `${base}/projects/south-africa-energy`},
        {title: "Male-Female Journeys to Work", desc_short: "Visualizing gender disparities in communiting patterns in Gauteng, South Africa.", route: 'https://www.google.com/url?q=https://gcro.ac.za/outputs/map-of-the-month/detail/extended-urbanisation-gcr-gender-commuting-migration-and-belonging/&sa=D&source=docs&ust=1736217623597369&usg=AOvVaw06qRtDrxY29HGspS0jlAUR'},
        {title: "Mental Health and Police Violence", desc_short: "Exploring the role of mental health in police violence in the US.", route: `${base}/projects/police-shootings`},
        {title: "Project Qute", desc_short: "Quantum science k-12 curriculum developed as part of U.S. National Quantum Initiative by the White House.", route: 'https://iqim.caltech.edu/quantime/'},
        {title: "Temperatures", desc_short: "Heatmap timelapse of average daily temperature changes in San Francisco from 1980-2019", route: `${base}/projects/temperatures`}];

    let wrapper: HTMLElement;
    // let width = "80%";
    // let height = "100%";
    // let card_w = 18;
    // let card_h = 13;
    // const margin = {
	// 	top: 20,
	// 	right: 20,
	// 	bottom: 20,
	// 	left: 20
	// };
    
    afterUpdate(() => {
        redraw();
    });

    function redraw(): void {
        // empty vis div
        d3.select(wrapper).html(null);
        
        var cardGroup = d3.select(wrapper).selectAll('.cardGp')
            .data(data)
		 	.enter()
            .append('g')
            .attr("class", "card-group")
            .attr('id', (d,i) => "card-group-"+i);
            
        cardGroup
            .append('div')
            .attr("class", "card")
            .attr('id', (d,i) => "card-"+i)
            .append("h3")
            .attr("class", "info")
            .text(d => d.title);
        
        cardGroup
            .on("mouseover", function(event, data) {
                d3.select(this).selectChildren('.card')
                    .style("opacity", 0.7)
                    .selectChildren('.info')
                    .classed("desc", true)
                    .text(data.desc_short);
            })
            .on("click", function(event, data) {
                window.location.href = data.route
            })
            .on("mouseout", function(event, data) {
                d3.select(this).selectChildren('.card')
                    .style("opacity", 1)
                    .selectChildren('.info')
                    .classed("desc", false)
                    .text(data.title);
            });

        // add svg with dots above the title 
        // add cover photos
        // cms, pull in real data
        // add my header (make a separate svelte component, or add this component to a main page (SPA))
    }
</script>

<main>
    <h1>PROJECTS</h1>
    <div id="wrapper" bind:this={wrapper}></div>
</main>

<style>
    main {
        font-family: Avenir;
    }

    #wrapper {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        /* max-width: 40rem; */
    }

    div :global(.card) {
        display: flex;
        width: 18rem;
        height: 13rem;
        background-color: #592FF3;
        margin: 0.5rem;
        border-radius: 0.5rem;
        color: white;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    :global(.info) {
        margin: 1.5rem;
        text-align: center;
    }

    :global(.desc) {
        font-size: 1.1rem;
        font-weight: 100;
    }
</style>