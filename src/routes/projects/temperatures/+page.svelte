<script lang="ts">
    import CalHeatmap from 'cal-heatmap';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    
    onMount(() => {
        const cal: CalHeatmap = new CalHeatmap();
        cal.paint({});
    }) 
</script> 

<div>
    <h1>SF Average Daily Temperatures 1980-2019</h1>
</div>

<div id="cal-heatmap"></div>