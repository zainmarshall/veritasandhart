<script lang="ts">
	import { reveal } from '$lib/reveal';
	let { contact }: { contact: { heading: string; body: string; email: string; location: string } } = $props();
</script>

<section class="section">
	<div use:reveal>
		<div class="divider"></div>
		<h2>{contact.heading}</h2>
	</div>
	<p class="reveal" use:reveal style="transition-delay: 100ms">{contact.body}</p>
	<div class="contact-details reveal" use:reveal style="transition-delay: 200ms">
		<a href="mailto:{contact.email}" class="contact-email">{contact.email}</a>
		<span class="contact-location">{contact.location}</span>
	</div>
</section>

<style>
	p {
		max-width: 520px;
		margin-bottom: 2.5rem;
		font-size: 1.05rem;
		line-height: 1.85;
	}

	.contact-details {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
	}

	.contact-email {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.4rem;
		font-weight: 600;
		color: var(--primary);
	}

	.contact-email:hover {
		color: var(--secondary);
	}

	.contact-location {
		font-size: 0.85rem;
		color: var(--text-light);
	}
</style>
