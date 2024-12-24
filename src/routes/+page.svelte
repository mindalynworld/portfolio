<script lang="ts">
    import { base } from '$app/paths';
</script>

<main>
    <h1>HOME</h1>
    <p>Home</p>
    <a class="projects" href="{base}/projects">My Projects</a>
    <p>About This Website</p>

    Eventually this will be where the data viz timeline and stacked area chart will live. for now, leave this but
    create a projects button on personal website and link it directly to project route.
    <!-- <button on:click={() => console.log('clicked')}>My button</button> -->
</main>

<style>
    main {
        font-family: Avenir;
    }

</style>