<script lang="ts">
	import { reveal } from '$lib/reveal';
	type Stat = { figure: string; label: string; context: string; detail: string };
	let { stats }: { stats: Stat[] } = $props();
	let active = $state<number | null>(null);

	function toggle(index: number) {
		active = active === index ? null : index;
	}
</script>

<section class="stats-section">
	<div class="stats-bar">
		{#each stats as stat, i}
			<button
				class="stat reveal"
				class:selected={active === i}
				onclick={() => toggle(i)}
				use:reveal
				style="transition-delay: {i * 120}ms"
			>
				<span class="stat-figure">{stat.figure}</span>
				<span class="stat-label">{stat.label}</span>
			</button>
		{/each}
	</div>
	{#if active !== null}
		<div class="detail">
			<div class="detail-inner">
				<span class="detail-context">{stats[active].context}</span>
				<p>{stats[active].detail}</p>
			</div>
		</div>
	{/if}
</section>

<style>
	.stats-section {
		border-top: 1px solid var(--border);
		border-bottom: 1px solid var(--border);
	}

	.stats-bar {
		max-width: 1000px;
		margin: 0 auto;
		padding: 4.5rem 2rem;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
	}

	.stat {
		all: unset;
		cursor: pointer;
		text-align: center;
		padding: 1.25rem 0.5rem;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s;
	}

	.stat:hover {
		border-bottom-color: var(--border);
	}

	.stat.selected {
		border-bottom-color: var(--secondary);
	}

	.stat-figure {
		display: block;
		font-family: 'Cormorant Garamond', serif;
		font-size: 2.8rem;
		font-weight: 700;
		color: var(--primary);
		line-height: 1.1;
		margin-bottom: 0.6rem;
	}

	.stat-label {
		display: block;
		font-size: 0.8rem;
		color: var(--text-light);
		line-height: 1.5;
	}

	.detail {
		border-top: 1px solid var(--border);
		padding: 2.5rem 2rem 3rem;
	}

	.detail-inner {
		max-width: 640px;
		margin: 0 auto;
		text-align: center;
	}

	.detail-context {
		display: block;
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-bottom: 0.5rem;
	}

	.detail-inner p {
		color: var(--text-light);
		margin: 0;
		line-height: 1.8;
	}

	@media (max-width: 768px) {
		.stats-bar {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.5rem;
			padding: 3.5rem 2rem;
		}
	}

	@media (max-width: 480px) {
		.stats-bar {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>
