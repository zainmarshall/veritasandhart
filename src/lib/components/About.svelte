<script lang="ts">
	import { reveal } from '$lib/reveal';
	let { about }: { about: { heading: string; paragraphs: string[]; credentials: string[] } } = $props();
</script>

<section class="section">
	<div use:reveal>
		<div class="divider"></div>
		<h2>{about.heading}</h2>
	</div>
	<div class="about-body">
		{#each about.paragraphs as paragraph, i}
			<p class="reveal" use:reveal style="transition-delay: {i * 100}ms">{paragraph}</p>
		{/each}
	</div>
	<div class="credentials">
		{#each about.credentials as credential, i}
			<span class="credential reveal" use:reveal style="transition-delay: {(i * 100) + 300}ms">{credential}</span>
		{/each}
	</div>
</section>

<style>
	.about-body {
		max-width: 680px;
	}

	.about-body p {
		font-size: 1.05rem;
		line-height: 1.85;
	}

	.credentials {
		margin-top: 3rem;
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.credential {
		font-size: 0.8rem;
		font-weight: 500;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--secondary);
		padding: 0.4rem 0;
		border-bottom: 1px solid var(--secondary);
	}
</style>
