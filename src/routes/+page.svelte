<script lang="ts">
	import { site, stats, sectors } from '$lib/content';
	import { reveal } from '$lib/reveal';
	import Hero from '$lib/components/Hero.svelte';
	import Stats from '$lib/components/Stats.svelte';
	import Sectors from '$lib/components/Sectors.svelte';
</script>

<Hero {site} />
<Stats {stats} />

<div class="pull-quote" use:reveal>
	<blockquote>{site.pullQuote}</blockquote>
</div>

<Sectors {sectors} />

<style>
	.pull-quote {
		padding: 5rem 2rem;
		text-align: center;
	}

	blockquote {
		font-family: 'Cormorant Garamond', serif;
		font-style: italic;
		font-size: 2.4rem;
		color: var(--primary);
		line-height: 1.3;
		max-width: 700px;
		margin: 0 auto;
		position: relative;
	}

	blockquote::before {
		content: '';
		display: block;
		width: 48px;
		height: 2px;
		background-color: var(--secondary);
		margin: 0 auto 2rem;
	}

	@media (max-width: 768px) {
		blockquote {
			font-size: 1.8rem;
		}

		.pull-quote {
			padding: 4rem 1.5rem;
		}
	}
</style>
