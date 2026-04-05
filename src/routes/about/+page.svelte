<script lang="ts">
	import { about } from '$lib/content';
	import About from '$lib/components/About.svelte';
</script>

<svelte:head>
	<title>About — Veritas & Hart | Ummara Marshall, Founder & Principal</title>
	<meta name="description" content="Founded by Ummara (Mara) Marshall. 25+ years of transformation leadership across Amazon, Marriott, investment banking. Harvard Economics, PMP, Lean Six Sigma Black Belt." />
</svelte:head>

<About {about} />
