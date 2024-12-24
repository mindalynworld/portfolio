<script>
	let { children } = $props();
	import { base } from '$app/paths';
</script>

<!-- <nav>
	<a href="{base}/">home</a>
	<a href="{base}/projects">projects</a>
</nav> -->

{@render children()}