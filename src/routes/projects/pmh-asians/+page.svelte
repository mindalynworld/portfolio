<script lang="ts">
    // import { Map } from 'mapbox-gl';
    import mapboxgl from 'mapbox-gl';
    const { Map } = mapboxgl;
    import 'mapbox-gl/dist/mapbox-gl.css';
    import { onMount, onDestroy } from 'svelte';
    import { base } from '$app/paths';
    import * as d3 from 'd3';
    import { PUBLIC_MAPBOX_API_KEY } from '$env/static/public';

    let map: mapboxgl.Map;
    let mapContainer: HTMLDivElement;
    let markerEl: HTMLDivElement;
    let lng, lat, zoom;
    lng = -97;
    lat = 39;
    zoom = 3.75;

    let initialState = { lng, lat, zoom };
    let step = 1;

    type Case = {
      name: string;
      age: number;
      gender: string;
      date: string;
      city: string;
      state: string;
      signs_of_mental_illness: boolean;
      agency_responsible: string;
      latitude: number;
      longitude: number;
    }

    const popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
      closeOnMove: true,
      className: "popup"
    });

    onMount(() => {
        loadMap();
        loadData();
    });
    // TODO: overlay of choropleth

    onDestroy(() => {
        map?.remove();
    });

    function loadMap() {
        map = new Map({
          container: mapContainer,
          projection: 'albers',
          style: 'mapbox://styles/mapbox/dark-v11',
          accessToken: PUBLIC_MAPBOX_API_KEY,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
          minZoom: initialState.zoom,
        });

        map.on("viewreset", render);
        map.on("move", render);
        map.on("moveend", render);
    }

    function nextStep() {
      switch (step) {
        case 1:
          focusCase();
          step++;
          return;
        case 2: 
          allCases();
          step++;
          return;
        case 3: 
          choropleth();
          step++;
          return;
      }
      
    }

    function focusCase () {
      // map.setCenter([-75.2935345, 40.9404931]);
      // map.flyTo({center: [-75.2935345, 40.9404931]});
      // map.flyTo({ zoom: 14 });
      map.flyTo({ center: [-75.2935345, 40.9404931], zoom: 14 });
    }

    function allCases () {
      map.flyTo({ center: [initialState.lng, initialState.lat], zoom: initialState.zoom });
    }

    function choropleth() {
      // map.addSource('regions', {
			// 	type: 'geojson',
			// 	data: `${base}/data/us-states.json` // Your region polygons
			// });
    }

    function loadData() {
        let file = `${base}/data/cases_aapi.csv`;

        d3.csv(file, (row) => {
            let output: Case = {
                name: row.name,
                age: +row.age,
                date: row.date,
                gender: row.gender,
                city: row.city,
                state: row.state,
                signs_of_mental_illness: row.signs_of_mental_illness == "Yes" ? true : false,
                agency_responsible: row.agency_responsible,
                latitude: +row.latitude,
                longitude: +row.longitude,
            };
            return output
        }).then(
            mapAnnotate
          );
    }

    // Function to project LngLat to pixel coordinates
    const project = (d: Case) => map.project(new mapboxgl.LngLat(d.longitude, d.latitude));
    
    const render = () => {
      d3.selectAll(".case-dot")
        .attr("cx", (d) => project(d as Case).x)
        .attr("cy", (d) => project(d as Case).y);
    }

    const mapAnnotate = (data: d3.DSVParsedArray<Case>) => {
      const container = map.getCanvasContainer();

      const svg = d3
        .select(container)
        .append("svg")
        .attr('class', 'map-svg')
        .attr("width", "100%")
        .attr("height", "100%")
        .style("position", "absolute")
        .style("z-index", 2);

      const dots = svg
        .selectAll("circle")
        .data(data)
        .join("circle")
        .attr('class', 'case-dot')
        .attr("r", 5)
        .style("fill", d => d.signs_of_mental_illness ? "#07b58c" : "#fcbe03")
        .style("stroke", "grey")
        .style("cursor", "pointer")
        // .attr("cx", d => project(d).x)      // Center X coordinate
        // .attr("cy", d => project(d).y)   // Center Y coordinate
        .on("mouseenter", function(e, d) {
          // highlight 
          d3.select(this)
            .style("r", 8)
            .style("stroke-width", 5);

          popup
            .setLngLat([d.longitude, d.latitude])
            .setHTML(`<span style="font-size: 16px; font-weight: 700;">${d.name}</span>
              <br/><strong>Date:</strong> ${d.date}
              <br/><strong>Age:</strong> ${d.age}
              <br/><strong>Gender:</strong> ${d.gender}
              <br/><strong>Location:</strong> ${d.city}, ${d.state}
              <br/><strong>Police Department Responsible:</strong> ${d.agency_responsible}
            `)
            .addTo(map);
        })
        .on("mouseleave", function(e, d) {
          // reset style 
          d3.select(this)
            .style("r", 5)
            .style("stroke-width", 1);

          if (popup) {
            popup.remove();
          }
        });

        render();
  }
</script>

<div class="intro">
  <h1>The role of mental illness in fatal police shootings</h1>

  <h2>Zooming in on AAPI populations</h2>
  <p>
    In the last decade, just over <b>1 in 5</b> victims of fatal police shootings in the US involved people showing signs of mental illness.
    For Asian Americans and Pacific Islander populations, this rate is even higher. From 2015-2025, <b>29% of AAPI victims involved in fatal police shootings were showing signs of mental illness.</b>
    Below is a map that documents all 343 cases of fatal shootings of AAPI that occurred between 2015-2025. <span style="color: #07b58c; font-weight: 700;">Green dots</span> indicate that the victim was showing signs of mental illness. 
    <i>Hover over a dot to read more about the case.</i>
  </p>
  <p><i>Data sourced from https://mappingpoliceviolence.org/.</i></p>
</div>
<div class="container">
  <div class='map' bind:this={mapContainer} />
</div>  
<div class="section-1">
  <h2>State by state: mental health related fatal shootings across all races</h2>
  <p>From 2015 - 2025, the national average of fatal shootings of victims showing signs of mental illness was <b>21%</b>. How do the state rates compare?</p>

  <div class="viz-wrapper">
    <div style="min-height:509px" id="datawrapper-vis-JT3zH"><script type="text/javascript" defer src="https://datawrapper.dwcdn.net/JT3zH/embed.js" charset="utf-8" data-target="#datawrapper-vis-JT3zH" data-dark=true></script><noscript><img src="https://datawrapper.dwcdn.net/JT3zH/full.png" alt="Which states have the highest rate of fatal police shootings related to mental illness (2015–2025)? (Choropleth map)" /></noscript></div>
  </div>
</div>





<!-- <button onclick={nextStep}>Next Step</button> -->

<style>
  :root {
    font-family: 'Anaheim';
    background-color: black;
    color: white;
  }

  .intro,.section-1 {
    padding: 3rem;
  }
  
  .container {
    position: relative;
    width: 100%;
    height: 700px;
  }

  .map {
    position: absolute;
    z-index: 0;
    /* width: 800px;
    height: 600px; */
    margin-left: 0;
    width: 100%;
    height: 100%;
  }

  :global(.popup) {
    z-index: 100;
    /* pointer-events: none; */
  }

</style>