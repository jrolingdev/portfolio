<script lang="ts">
	import '../app.scss';
	import NavigationBar from '$lib/components/NavigationBar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onMount } from 'svelte';
	import { trycatch } from '$lib/utils';
	import { collection, getDocs } from 'firebase/firestore';
	import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
	import { initializeApp, getApps } from 'firebase/app';
	import { getFirestore } from 'firebase/firestore';
	import { getStorage } from 'firebase/storage';
	import { app, db, storage, socials, experience, projects, skills } from '$lib/stores/';
	// import { enableIndexedDbPersistence } from 'firebase/firestore';

	onMount(async () => {
		if (getApps().length < 1) {
			const config = {
				apiKey: 'AIzaSyAsLK8XE_a-awc9D70JrQ9Tjpn4NBuACDA',
				authDomain: 'portfolio-57551.firebaseapp.com',
				projectId: 'portfolio-57551',
				storageBucket: 'portfolio-57551.appspot.com',
				messagingSenderId: '733718085252',
				appId: '1:733718085252:web:73babce7d1bab2edc3ccd1'
			};

			app.set(initializeApp(config));
			db.set(getFirestore($app));
			storage.set(getStorage($app));

			initializeAppCheck($app, {
				provider: new ReCaptchaV3Provider('6LctRTAfAAAAAO32jGeqhTKvcq-l4xyYmTAISNUF'),
				isTokenAutoRefreshEnabled: true
			});
		}

		const [socialsSnapshot, socialsError] = await trycatch(getDocs(collection($db, 'socials')));
		const [projectsSnapshot, projectsError] = await trycatch(getDocs(collection($db, 'projects')));
		const [experienceSnapshot, experienceError] = await trycatch(
			getDocs(collection($db, 'experience'))
		);
		const [skillsSnapshot, skillsError] = await trycatch(getDocs(collection($db, 'skills')));

		if (!socialsError) socials.set(socialsSnapshot.docs.map((social) => social.data()));
		if (!projectsError) projects.set(projectsSnapshot.docs.map((project) => project.data()));
		if (!experienceError) experience.set(experienceSnapshot.docs.map((job) => job.data()));
		if (!skillsError) skills.set(skillsSnapshot.docs.map((skill) => skill.data()));
	});
</script>

<NavigationBar />

<main class="mx-4 md:mx-auto max-w-screen-md">
	<slot />
</main>

<Footer socials={$socials} />
