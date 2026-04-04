<script lang="ts">
	import '$lib/styles/global.css';
	import { site, footer } from '$lib/content';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head>
	<title>Veritas & Hart — Management Consulting</title>
</svelte:head>

<Nav name={site.name} />
<main>
	{@render children()}
</main>
<Footer {footer} />
