<script lang="ts">
    import * as d3 from 'd3';
    import { afterUpdate } from 'svelte';
    import { base } from '$app/paths';

    const data = [
        {title: "project 1", desc_short: "short description", route: `${base}/projects/south-africa-energy`},
        {title: "project 2", desc_short: "short description", route: `${base}/projects/south-africa-energy`},
        {title: "project 3", desc_short: "short description", route: `${base}/projects/south-africa-energy`},
        {title: "project 4", desc_short: "short description", route: `${base}/projects/south-africa-energy`},
        {title: "project 5", desc_short: "short description", route: `${base}/projects/south-africa-energy`},
        {title: "project 6", desc_short: "short description", route: `${base}/projects/south-africa-energy`}];

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
            .text(d => d.title);
        
        cardGroup
            .on("mouseover", function(event, data) {
                d3.select(this).selectChildren('.card')
                    .style("opacity", 0.7)
                    .text(data.desc_short);
            })
            .on("click", function(event, data) {
                window.location.href = data.route
            })
            .on("mouseout", function(event, data) {
                d3.select(this).selectChildren('.card')
                    .style("opacity", 1)
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
</style>