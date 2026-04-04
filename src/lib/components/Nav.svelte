<script lang="ts">
	import { page } from '$app/state';
	let { name }: { name: string } = $props();

	const links = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<nav>
	<div class="nav-inner">
		<a href="/" class="nav-logo">{name}</a>
		<div class="nav-links">
			{#each links as link}
				<a href={link.href} class:active={page.url.pathname === link.href}>{link.label}</a>
			{/each}
		</div>
	</div>
</nav>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background-color: var(--background);
		border-bottom: 1px solid var(--border);
	}

	.nav-inner {
		max-width: 1000px;
		margin: 0 auto;
		padding: 1.1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-logo {
		font-family: 'Inter', sans-serif;
		font-weight: 600;
		font-size: 1.1rem;
		letter-spacing: 0.02em;
		color: var(--primary);
		text-decoration: none;
	}

	.nav-links {
		display: flex;
		gap: 2.5rem;
	}

	.nav-links a {
		font-size: 0.8rem;
		font-weight: 400;
		color: var(--text-light);
		text-decoration: none;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--primary);
	}

	.nav-links a.active {
		color: var(--primary);
		border-bottom: 1px solid var(--secondary);
	}

	@media (max-width: 480px) {
		.nav-links {
			gap: 1.25rem;
		}

		.nav-links a {
			font-size: 0.7rem;
		}
	}
</style>
