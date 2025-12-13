<script lang="ts">
    import { base } from '$app/paths';
</script> 

<main>
    <!-- ${base}/static/assets -->

    <div class="article-body"> 
        <h1>The Role of Mental Illness in Fatal Police Shootings</h1>
        <h2>Should you call the police to de-escalate your mental health emergency? The data says no.</h2>
        <h4>By: Mindy Ng</h4>
        <h5><i>January 2, 2025</i></h5>

        <p>This piece is a work in progress, showing an initial exploration of the Washington Post's 
            <a href="https://www.washingtonpost.com/graphics/investigations/police-shootings-database/" target="_blank" rel="noopener noreferrer">police shootings database</a> 
            using various data visualizations to investigate the role mental illness plays in these shootings.</p>

        <h3>At the National Level</h3>
        <p>The national average of fatal shootings related to mental illness from 2015 - 2024 is 19.7%. How do the state averages compare?</p>
        
        <div class="viz-wrapper">
            <div style="min-height:509px" id="datawrapper-vis-JT3zH">
                <script type="text/javascript" defer src="https://datawrapper.dwcdn.net/JT3zH/embed.js" charset="utf-8" data-target="#datawrapper-vis-JT3zH"></script><noscript><img src="https://datawrapper.dwcdn.net/JT3zH/full.png" alt="" /></noscript>
            </div>
        </div>

        <div class="viz-wrapper">
            <div style="min-height:437px" id="datawrapper-vis-qCXlc">
                <script type="text/javascript" defer src="https://datawrapper.dwcdn.net/qCXlc/embed.js" charset="utf-8" data-target="#datawrapper-vis-qCXlc"></script><noscript><img src="https://datawrapper.dwcdn.net/qCXlc/full.png" alt="" /></noscript>
            </div>
        </div>

        <h3>Zooming in on California</h3>

        <div class="viz-wrapper">
            <div style="min-height:437px" id="datawrapper-vis-T0wgh">
                <script type="text/javascript" defer src="https://datawrapper.dwcdn.net/T0wgh/embed.js" charset="utf-8" data-target="#datawrapper-vis-T0wgh"></script><noscript><img src="https://datawrapper.dwcdn.net/T0wgh/full.png" alt="" /></noscript>
            </div>
        </div>

    </div>

</main>

<style>
    main {
        font-family: Avenir;
        margin: 0;
    }

    .article-body {
        /* margin: 4rem 15rem 4rem 15rem; */
        max-width: 40rem;
        width: calc(100% - 30px);
        margin: 4rem auto;
    }

    .viz-wrapper {
        width: 90%;
        margin-bottom: 2rem;
    }

</style>