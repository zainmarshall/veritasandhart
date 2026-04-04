<script lang="ts">
	import { base } from '$app/paths';
	import { reveal } from '$lib/reveal';
	let { site }: { site: { name: string; suffix: string; tagline: string; positioning: string; cta: string } } = $props();
</script>

<section class="hero">
	<div class="hero-inner">
		<p class="hero-tagline reveal" use:reveal>{site.tagline}</p>
		<h1 class="reveal" use:reveal style="transition-delay: 150ms">{site.name}</h1>
		<p class="hero-positioning reveal" use:reveal style="transition-delay: 300ms">{site.positioning}</p>
		<div class="reveal" use:reveal style="transition-delay: 450ms">
			<a href="{base}/contact" class="hero-cta">{site.cta}</a>
		</div>
	</div>
</section>

<style>
	.hero {
		padding: 8rem 2rem 7rem;
		text-align: center;
	}

	.hero-inner {
		max-width: 780px;
		margin: 0 auto;
	}

	.hero-tagline {
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-bottom: 2rem;
	}

	h1 {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		letter-spacing: -0.01em;
		margin-bottom: 2rem;
	}

	.hero-positioning {
		font-size: 1.2rem;
		line-height: 1.9;
		color: var(--text-light);
		max-width: 520px;
		margin: 0 auto 3rem;
	}

	.hero-cta {
		display: inline-block;
		padding: 0.9rem 2.5rem;
		background-color: var(--primary);
		color: var(--background);
		font-family: 'Jost', sans-serif;
		font-size: 0.85rem;
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		border: 1px solid var(--primary);
		transition: background-color 0.3s, color 0.3s;
	}

	.hero-cta:hover {
		background-color: transparent;
		color: var(--primary);
		text-decoration: none;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 6rem 1.5rem 5rem;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 5rem 1.25rem 4rem;
		}
	}
</style>
