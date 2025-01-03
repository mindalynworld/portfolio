<script lang="ts">
    import LineChart from "$lib/Charts/LineChart.svelte";
    import { base } from '$app/paths';
</script>

<main>
    <div class="article-cover">
        <img class="cover-photo" src='{base}/assets/SACoverPhoto.png' alt="[Bar chart of hours shed by Eskom by year 2014-2023]">
        <p class="source-info"><i>Gauteng, South Africa, 2016. (VIIRS DNB)</i></p>
    </div> 
    <!-- ${base}/static/assets -->

    <div class="article-body">
        <h1>The Dark Divide</h1>
        <h2>Using nighttime lights to study disparities in energy access amidst the energy crisis in South Africa</h2>
        <h4>By: Mindy Ng</h4>
        <h5><i>October 1, 2024</i></h5>


    <section>
        <p>
            One of my favorite things about flying at night is looking down on a city from the window and seeing the shape, motion, and pulse of a city illuminated solely by streetlamps, car headlights, and households burning the midnight oil.
        </p>

        <p>
            There are some pretty incredible insights you can learn about cities just by viewing them from above when it's dark. As the availability and quality of satellite imagery has grown over the past few decades, researchers have been able to use aerial nighttime images to study urban development and economic growth in urban contexts. In general, it has been observed that nighttime lights in major metropolitan cities grow brighter as they experience economic development over time, attributed to the expansion of new infrastructure and overall increased electrification.
        </p>   
            
        <p>
            The chart below uses satellite-based nighttime lights data (VIIRS day/night band from the National Oceanic and Atmospheric Administration (NOAA)) to show the radiance of four major metropolitan cities in West and East Africa that have grown economically in the last decade: Nairobi, Lagos, Addis Ababa, and Dar Es Salaam.
        </p>
    </section>

    <section>
        <LineChart excludedValues={["Johannesburg", "Cape Town"]} ></LineChart>
    </section>

    <section>
        <h3>But what can nighttime lights show us about cities experiencing electricity disruptions?</h3>
        <p>
            Since 2007, South Africa has been experiencing an increasingly worsening energy crisis, largely caused by the national energy supplier, Eskom. Citing failing infrastructure, corruption, and poor management, the country currently experiences rolling blackouts (aka “load shedding”) on a near-daily basis.
        </p>

        <div class="article-img-container">
            <img class="article-img" src="{base}/assets/SABarChartEskom.png" alt="[Bar chart of hours shed by Eskom by year 2014-2023]">
        </div>

        <p>
            The first load shedding instances occurred sparsely in 2007/2008 and 2014/2015, but since 2018, the frequency and length of these blackouts have increasingly worsened at an unprecedented rate (Nico, 2023). The bar chart above shows the amount of Gigawatt hours that have been shed each year, revealing that by May, the year 2023 had already seen almost as much load shedding as in all of 2022.
        </p>

    </section>

    <section>
    
        <p>
            Below, we add the radiance lines for Johannesburg and Cape Town, South Africa's two largest cities. We see that all of the other cities with comparable population growth, GDP, and size, radiance are increasing consistently. Johannesburg and Cape Town follow the same upward trajectory until 2018 (the year then load shedding was implemented at an unprecedented rate), where we start to see a downward trend. The radiance continues to decline each year, corresponding to increasing amounts of loadshedding.
        </p>
    

        <LineChart></LineChart>

        <p>
            These energy disruptions have led to significant obstacles for South Africa, including a stagnation of GDP growth: These energy disruptions have led to significant obstacles for South Africa, including a stagnation of GDP growth: In 2023, <a href="https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?locations=ZA" target="_blank" rel="noopener noreferrer">South Africa’s GDP grew 0.6% compared to 4.7% in 2021</a>.
            Small businesses that are unable to afford back up generators lose key hours of business, and have been forced to shut (Mangara and Mutsaa, 2023), further driving up rates of unemployment, which is close to an all time high at <a href="https://www.imf.org/en/News/Articles/2023/06/15/cf-south-africas-economy-loses-momentum-amid-record-power-cuts#:~:text=South%20Africa's%20Economy%20Loses%20Momentum%20Amid%20Record%20Power%20Cuts,-By%20the%20South&text=By%20year%2Dend%2C%20we%20project,to%20an%20all%2Dtime%20high." target="_blank" rel="noopener noreferrer">32.9%</a>. It has <a href="https://inclusivecities.ukzn.ac.za/blog/tri-fold-impact-of-load-shedding-in-south-african-cities-power-outage-destruction-and-regression/" target="_blank" rel="noopener noreferrer">impacts on various sectors</a> that require stable energy to operate, including healthcare, manufacturing, transportation, agriculture, and IT (Mangara and Mutsaa, 2023). It deepens the <a href="https://www.globalcitizen.org/en/content/south-africa-power-cuts-digital-divide-poverty/" target="_blank" rel="noopener noreferrer">digital divide</a>, curtailing access to the internet and technology, which can in turn threaten job security and disrupt education. The use of backup diesel generators are affecting air quality, contributing to the climate crisis and damages to individual health.
        </p> 


        <p>
            While load shedding is supposed to be implemented equitably across the region, evidence suggests these effects are not felt evenly. <a href="https://www.gcro.ac.za/outputs/vignettes/detail/accessing-alternative-water-and-electricity-sources-and-justice/" target="_blank" rel="noopener noreferrer">Who can afford back-up generators? Who can afford to install solar panels?</a> <b>To what extent is the energy crisis is widening the already existing wealth gap and racial divide leftover from apartheid years.</b>
        </p>
    </section>

    <section>
        <h3>Further reading</h3>
        <p>
            In my <a href="https://drive.google.com/file/d/1YBEmzMX9Q9pw6p-kUQRFCj6mnwqJjY6d/view?usp=sharing" target="_blank" rel="noopener noreferrer">Master’s dissertation </a>, I break down the analysis of radiance change across the Gauteng province (where Johannesburg is located) at a more granular level, looking at the effects of average household income, race, and other spatial qualities on radiance change, to understand which areas and which residents are experiencing disproportionate effects of load shedding, and to what extent. I also look at where solar off-griding is occurring to what extent it shields these neighborhoods from experiencing radiance decline.
        </p>
    

        <h4>Preview of visualizations:</h4>
        <div class="article-img-container">
            <img class="article-img" src="{base}/assets/radchangeNEW.png" alt="Radiance Change in Gauteng [2016-2023]">
<img class="article-img" src="{base}/assets/radchangetownshipsNEW.png" alt="Radiance Change in Gauteng with former township boundaries overlaid [2016-2023]">
<img class="article-img" src="{base}/assets/explorationmaps.svg" alt="Income index, Population, solar panel presence, % of white residents (2020)">
        </div>
        <p>These maps plot various variables including Neighborhood Lifestyle Index (an income-level index, 10 - very high-income, 1 - very low-income), population density, percentage of white residents, and presence of solar panels within hexagonal spatial units with an area of 0.103755 km2. A quick glance at these maps reveals the highly racially and economically segregated nature of Gauteng. The former township boundaries from apartheid very much still exist and correspond heavily with race, income, population density. <b>Overall, we can see that these lower-income, high population density, majority non-white areas – especially those located within former townships – are experiencing the highest degrees of radiance decline from energy disruptions. </b></p>
    
    </section>

    <section>
        <h3>More about the data:</h3>
        <p>
            This study uses the average radiance band which contains an average of the nightly radiances in that month for each pixel in nanoWatts/sr/cm^2. This study uses monthly composites from January 2016 to April 2023. Images impacted by cloud-cover, stray light, lunar illuminance are filtered out before averaging, meaning that some months' averages may be based on fewer observations than others. Images are taken around 1 or 2 AM each night. To account for seasonal annual cycling fluctuations, a yearly average radiance is calculated using these monthly composites.
        </p>
    
        <p>
            Since each city has different starting brightness levels due to factors like population size and development, I adjust the data using a method called min-max normalization. This process scales the brightness for each city between 0 and 1, making it easier to compare how the brightness changes relatively over time for all cities on the same chart.
        </p>
    </section>

    </div>

</main>

<style>
    main {
        font-family: Avenir;
        margin: 0;
    }

    .article-cover {
        background-color: black;
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .source-info {
        position: absolute;
        /* text-align: right; */
        right: 0;
        bottom: 0;
        color: white;
        padding-right: 1em;
        font-size: .7rem;
    }

    .article-body {
        /* margin: 4rem 15rem 4rem 15rem; */
        max-width: 40rem;
        width: calc(100% - 30px);
        margin: 4rem auto;
    }

    .article-img-container {
        /* text-align: center; */
        display: flex; 
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .article-img {
        width: 90%;
        margin-bottom: 2rem;
    }

    section {
        margin-bottom: 2.5rem;
    }

    p {
        line-height: 1.8;
    }

</style>