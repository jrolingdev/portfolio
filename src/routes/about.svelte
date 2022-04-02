<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<svelte:head>
	<title>About | Jacob Roling | Web Developer | Adelaide</title>
</svelte:head>

<section>
	<h2 class="text-5xl font-bold">About</h2>
	<p class="mt-8 text-lg">
		Hi! 👋 My name is Jacob Roling and I'm a web developer from Adelaide, South Australia. Welcome
		to my portfolio. I built it using a variety of technologies. For the frontend I used SvelteKit.
		My projects, skills and experience are all data that is being pulled from Firebase. The website
		uses SSR so if you view the source code on the home page you will notice that the projects are
		prerendered in the HTML. The website is styled with Tailwind. The contact form uses EmailJS to
		deliver contact details to my email address and the site is hosted on Netlify's CDN. You can
		access the source code below!
	</p>
	<a
		class="mt-4 flex gap-4 items-center w-max bg-black text-white px-4 py-2 rounded-full shadow transition-colors duration-100 hover:bg-white hover:text-black"
		href="https://github.com/jrolingdev/portfolio"
		target="_blank"
	>
		<Icon icon="akar-icons:github-fill" width="18" />
		<div class="font-medium">Source Code</div>
	</a>
</section>
