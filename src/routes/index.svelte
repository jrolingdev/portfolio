<script lang="ts" context="module">
  import { Firestore } from "$lib/firebase";
  import { trycatch } from "$lib/utils";
  import { collection, getDocs } from "firebase/firestore";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import Icon from "@iconify/svelte";
  import AspectRatio from "$lib/components/AspectRatio.svelte";
  import { ref, getDownloadURL } from 'firebase/storage';
  import { Storage } from "$lib/firebase";

  export async function load() {
    const [projectsSnapshot, projectsError] = await trycatch(getDocs(collection(Firestore, "projects")));
    const [skillsSnapshot, skillsError] = await trycatch(getDocs(collection(Firestore, "skills")));
    const [experienceSnapshot, experienceError] = await trycatch(getDocs(collection(Firestore, "experience")));

    if (projectsError || skillsError || experienceError) {
      return {
        props: {
          projects: [],
          skills: [],
          experience: [],
        }
      }
    }

    return {
      props: {
        projects: projectsSnapshot.docs.map(project => project.data()),
        skills: skillsSnapshot.docs.map(skill => skill.data()),
        experience: experienceSnapshot.docs.map(job => job.data()),
      }
    }
  }
</script>

<script lang="ts">
  export let projects;
  export let skills;
  export let experience;

  const profileImage = getDownloadURL(ref(Storage, "images/profile.jpg"));
</script>

<svelte:head>
  <title>Jacob Roling  Web Developer | Adelaide</title>
</svelte:head>

<section>
  <div class="grid grid-cols-2 gap-8">
    <div>
      <h1 class="text-5xl font-bold">Jacob Roling</h1>
      <p class="mt-8 text-lg md:text-3xl md:font-medium">
        I'm a web developer. I take designs or ideas and
        turn them into experiences
        delivered through the web.
      </p>
    </div>
    {#await profileImage}
      Loading...
    {:then url}      
      <AspectRatio ratio={1}>
        <img class="w-[300px] h-[300px] object-cover object-center" src={url} alt="Jacob Roling">
      </AspectRatio>
    {/await}
  </div>
  <p class="mt-8 text-lg">
    I develop for all platforms and devices whether that means building beautiful,
    responsive, fast UI/UXs for frontends or dealing with APIs, load-balancers,
    webhooks and databases in the backend. 
  </p>
</section>

<section class="mt-12">
  <h2 class="text-5xl font-bold">Projects</h2>
  <div class="mt-12 flex flex-col gap-12">
    {#each projects.slice(0, 3) as project}
      <ProjectCard {...project} />
    {/each}
  </div>
  <a class="block mt-8 text-lg font-medium hover:underline decoration-2" href="/projects">See all projects</a>
</section>

<section class="mt-12">
  <h2 class="text-5xl font-bold">Skills</h2>
  <div class="mt-8">
    {#each skills as {name, icon, url}}
      <a class="inline-flex gap-4 items-center px-4 py-1 mr-4 mt-2 text-lg font-medium" href={url} target="_blank">
        <Icon {icon} />
        <div>{name}</div>
      </a>
    {/each}
  </div>
</section>

<section class="mt-12">
  <h2 class="text-5xl font-bold">Experience</h2>
  {#each experience as {title, company, start, end}}
    <div class="mt-8 text-2xl font-bold">{title}</div>
    <div class="mt-2 text-xl font-medium">{company}</div>
    <div class="mt-2 text-xl">{start} - {end}</div>
  {/each}
</section>
