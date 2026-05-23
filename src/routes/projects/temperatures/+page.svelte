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
            range: 1, // shows just one year at a time. to show all at once, put 39 (or 40?)
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

<main>
    <!-- <div class="article-cover">
        <img class="mockup" src='{base}/assets/flame_cover.png' alt="[mockup of visual on the Salesforce Tower]">
        <p class="source-info"><i>Original image by Noah Berger</i></p>
    </div>  -->

    <div class="viz-container">
        <h1>Daily Average Temperatures in San Francisco 1980 - 2019</h1>

        <div id="cal-heatmap"></div>
        <p class="curr-year">Year: {currYear}</p>
        <p class="source">Data source: https://cds.climate.copernicus.eu</p>
    </div> 

    <div class="description">
        <h2> Proposal </h2>

        <p>
            This project was made for a proposal to be displayed on the 360° screen on top of the Salesforce tower, the city's tallest skyscraper, located in the SoMa district in San Francisco. 
            The tower sits directly beside one of the most heavily trafficked commuter highways in a city deeply marked by tech-industry-led developement. 

            The visual consists of a timelapse of calendar heat maps from 1980 - 2019. Each cell and its color represents a day of the year and its average temperature.
            The color range for each cell uses a scale of yellows/oranges/reds (a daily avg temperature of around 40F would be represented as a light faint yellow, while an average temp of around 75F would appear as a dark red cell). 
            As the timelapse plays through each year, the subtle changes would create a visual evoking a flickering flame. 
            My hypothesis is that given the rising average temperatures, the visualization would grow darker in red as time passes. 
        </p>

         <p>In the past few decades, we've seen record breaking temperatures in the Bay Area. According to research by UC San Diego, “average summer temperatures in California have risen by approximately 3 degrees °F since 1896, with more than half of that increase occurring since the early 1970s.” 
            They warn that if our greenhouse gas emissions continue at the current rate, average temperatures in California will increase by 6 degrees °F by 2100. 
            While it is widely known that human activities related to corporate interests drive these changes in climate trends, 
            how do the behaviors and cultures specific to the San Francisco Bay Area -- e.g. car culture/commuter traffic, tech and AI -- contribute to these emissions?
        </p>

        <p>
            A mockup of the visual on the tower:
            <br>
            <img class="mockup" src='{base}/assets/flame_cover.png' alt="[mockup of visual on the Salesforce Tower]">
            <br>
            <i>(Original image by Noah Berger. This has been modified by AI)</i>
        </p>
    </div>


</main>

<style>

    :root {
        background-color: black;
    }

    main {
        color: white;
        font-family: monospace;
        /* background-color: black; */
        padding: 3rem;
    }

    .viz-container {
        background-color: black;
        /* padding: 1rem; */
        width: 700px;
        margin-bottom: 3rem;
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
        padding-right: 3rem;
        text-align: right;
        font-weight: 600;
        font-size: 18px;
    }

    .source {
        font-size: 10px;
    }

    .description {
        /* color: black; */
        line-height: 1.5;
        width: 80%;

        @media (width <= 600px) {
            width: 100%;
        }
    }

    /* .article-cover {
        background-color: black;
        text-align: center;
        position: relative;
        overflow: hidden;
    } */

    .mockup {
        height: 300px;
    }


</style>