<script lang="ts">
	let { footer }: { footer: { copyright: string } } = $props();
</script>

<footer>
	<span>{footer.copyright}</span>
</footer>

<style>
	footer {
		border-top: 1px solid var(--border);
		padding: 2rem;
		text-align: center;
	}

	span {
		font-size: 0.75rem;
		color: var(--text-light);
		letter-spacing: 0.02em;
	}
</style>
