<script lang="ts">
	import { reveal } from '$lib/reveal';
	type Pillar = { title: string; description: string; outcomes: string[] };
	let { services }: { services: { heading: string; intro: string; pillars: Pillar[] } } = $props();
</script>

<section class="section">
	<div use:reveal>
		<div class="divider"></div>
		<h2>{services.heading}</h2>
		<p class="intro">{services.intro}</p>
	</div>
	<div class="pillars">
		{#each services.pillars as pillar, i}
			<div class="pillar reveal" use:reveal style="transition-delay: {i * 100}ms">
				<h3>{pillar.title}</h3>
				<p>{pillar.description}</p>
				<ul>
					{#each pillar.outcomes as outcome}
						<li>{outcome}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</section>

<style>
	.intro {
		max-width: 680px;
		margin-bottom: 3.5rem;
		font-size: 1.05rem;
	}

	.pillars {
		display: grid;
		grid-template-columns: 1fr;
		gap: 3.5rem;
	}

	.pillar {
		border-left: 2px solid var(--secondary);
		padding-left: 2rem;
	}

	.pillar p {
		max-width: 600px;
	}

	ul {
		list-style: none;
		padding: 0;
		margin-top: 0.75rem;
	}

	li {
		position: relative;
		padding-left: 1.25rem;
		font-size: 0.95rem;
		color: var(--text-light);
		line-height: 1.9;
	}

	li::before {
		content: '\2014';
		position: absolute;
		left: 0;
		color: var(--secondary);
	}

	@media (max-width: 480px) {
		.pillar {
			padding-left: 1.25rem;
		}
	}
</style>
