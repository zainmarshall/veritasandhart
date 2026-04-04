<script lang="ts">
	type Snapshot = { context: string; result: string };
	let { impact }: { impact: { heading: string; sectors: string[]; snapshots: Snapshot[] } } = $props();
</script>

<section class="section">
	<div class="divider"></div>
	<h2>{impact.heading}</h2>

	<div class="sectors">
		{#each impact.sectors as sector}
			<span class="sector">{sector}</span>
		{/each}
	</div>

	<div class="snapshots">
		{#each impact.snapshots as snapshot}
			<div class="snapshot">
				<span class="snapshot-context">{snapshot.context}</span>
				<p>{snapshot.result}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.sectors {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-bottom: 3rem;
	}

	.sector {
		font-size: 0.8rem;
		font-weight: 400;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-light);
		padding: 0.35rem 0.85rem;
		border: 1px solid var(--border);
	}

	.snapshots {
		display: grid;
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}

	.snapshot {
		border-left: 2px solid var(--secondary);
		padding-left: 1.5rem;
	}

	.snapshot-context {
		display: block;
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--secondary);
		margin-bottom: 0.4rem;
	}

	.snapshot p {
		max-width: 600px;
		margin-bottom: 0;
	}
</style>
