<script lang="ts">
    import CalHeatmap from 'cal-heatmap';
    import Tooltip from 'cal-heatmap/plugins/Tooltip';
    import Legend from 'cal-heatmap/plugins/Legend';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import data from '../../../../static/data/dancedata25.json';
    import * as fs from 'fs'; // Use `fs/promises` for async operations

    let currYear: number = 1980;

    // Synchronous reading
    const temps = JSON.parse(data[0]);
    console.log(temps);

    onMount(() => {
        const cal: CalHeatmap = new CalHeatmap();
        cal.paint({
            data: { source:  temps, type: 'json', x: 'date', y: 'value' },
            date: { start: new Date('2025-01-01') },
            range: 12, // would update this when we have more than one (year/month/unit) to show
            scale: { color: { type: 'threshold', scheme: 'BuPu', domain: [0.1, 1, 2, 4, 6]}},
            domain: { type: 'month', gutter: 4, label: { position: 'left',  rotate: 'left', offset: {y: -10}}},
            subDomain: { type: 'xDay', radius: 1 },
            theme: 'dark',
            verticalOrientation: true,
        }, 
         [
            [Tooltip,
            {
                text: function (date, value, dayjsDate) {
                    return (
                        (value ? value : 'No data')
                    );
                },
            },
            ],
            [Legend,
            {
                tickSize: 0,
                width: 200,
                itemSelector: '#cal-heatmap',
                label: 'Hours of Dance',
            },
            ],
        ]
        );
    });
</script> 

<div class="viz-container">
    <h1>Daily Hours of Dance 2025</h1>

    <div id="cal-heatmap"></div>
</div>

<style>
    .viz-container {
        background-color: black;
        padding: 1rem;
        width: 900px;
        font-family: monospace;
    }

    h1 {
        color: white;
    }

    #cal-heatmap {
        padding: 1rem;
        width: 80%;
        
    }

    :global(#ch-plugin-legend) {
        :global(svg) {
            background: none;
            color: white;
        }
    }

    :global(.ch-domain-text) {
        fill: white;
        font-size: 11px;
    }

    .curr-year {
        color: white;
        padding-right: 3rem;
        text-align: right;
    }

    .source {
        color: white;
        font-size: 10px;
    }

</style>