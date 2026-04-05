<script lang="ts">
	import { contact } from '$lib/content';
	import Contact from '$lib/components/Contact.svelte';
</script>

<svelte:head>
	<title>Contact — Veritas & Hart | Start a Conversation</title>
	<meta name="description" content="Whether you have a defined problem or an emerging one, the best next step is a conversation. Washington, D.C. Metro Area." />
</svelte:head>

<Contact {contact} />
