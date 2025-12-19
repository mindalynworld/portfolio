<script lang="ts">
    import CalHeatmap from 'cal-heatmap';
    import Tooltip from 'cal-heatmap/plugins/Tooltip';
    import Legend from 'cal-heatmap/plugins/Legend';
    import * as d3 from 'd3';
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import data from '../../../../static/data/sf-dailyavg-80-19.json';
    import * as fs from 'fs'; // Use `fs/promises` for async operations

    let currYear: number = 1980;

    // Synchronous reading
    const temps = JSON.parse(data[0]);
    console.log(temps);

    onMount(() => {
        const cal: CalHeatmap = new CalHeatmap();
        cal.paint({
            data: { source:  temps, type: 'json', x: 'date', y: 'value' },
            date: { start: new Date('1980-01-01') },
            range: 1, // shows just one year at a time
            scale: { color: { type: 'linear', scheme: 'YlOrRd', domain: [42, 75] }}, //'Reds'
            domain: { type: 'year', gutter: 0 },
            subDomain: { type: 'day', radius: 1 },
            theme: 'light',
            verticalOrientation: true
        }, 
         [
        //     [Tooltip,
        //     {
        //         text: function (date, value, dayjsDate) {
        //             return (
        //                 (value ? value + '°F' : 'No data') + ' on ' + dayjsDate.format('LL')
        //             );
        //         },
        //     },
        //     ],
            [Legend,
            {
                tickSize: 0,
                width: 200,
                itemSelector: '#cal-heatmap',
                label: 'SF avg temperature °F',
            },
            ],
        ]
        );
        startTimelapse(cal);
    });

    function startTimelapse(cal: CalHeatmap) {
        currYear = 1980;
        let intervalId = setInterval(() => {
            if (currYear < 2019) {
                cal.next();
                currYear++;
            } else {
                cal.jumpTo(new Date('1980-01-01'), true)
                currYear = 1980;
            }
        }, 500);
        
    }

    // questions
    // why is data only loading up to 1991?
    // how can i just select a date range of the data
    // why is tooltip plugin not working 
    // updating the data in animation so that it timelapses through the years
</script> 

<div class="viz-container">
    <h1>Daily Average Temperatures in San Francisco 1980 - 2019</h1>

    <div id="cal-heatmap"></div>
    <p class="curr-year">{currYear}</p>
    <p class="source">Data source: https://cds.climate.copernicus.eu</p>
</div>

<style>
    .viz-container {
        background-color: black;
        padding: 1rem;
        width: 700px;
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