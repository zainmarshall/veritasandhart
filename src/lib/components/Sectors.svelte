<script lang="ts">
	import { reveal } from '$lib/reveal';
	type Sector = { name: string; detail: string };
	let { sectors }: { sectors: Sector[] } = $props();
</script>

<section class="sectors-section">
	<div class="sectors-inner">
		<div class="sectors-header" use:reveal>
			<div class="divider"></div>
			<h2>Sectors</h2>
		</div>
		<div class="sectors-grid">
			{#each sectors as sector, i}
				<div class="sector reveal" use:reveal style="transition-delay: {i * 80}ms">
					<h3>{sector.name}</h3>
					<p>{sector.detail}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sectors-section {
		padding: 6rem 2rem 7rem;
	}

	.sectors-inner {
		max-width: 1000px;
		margin: 0 auto;
	}

	.sectors-header {
		margin-bottom: 3rem;
	}

	.sectors-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2.5rem 4rem;
	}

	.sector {
		border-left: 2px solid var(--secondary);
		padding-left: 1.5rem;
	}

	.sector h3 {
		color: var(--primary);
	}

	.sector p {
		max-width: 420px;
		margin: 0;
		font-size: 0.95rem;
	}

	@media (max-width: 768px) {
		.sectors-grid {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}

	@media (max-width: 480px) {
		.sector {
			padding-left: 1rem;
		}
	}
</style>
