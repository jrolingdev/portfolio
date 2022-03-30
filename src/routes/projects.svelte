<script lang="ts" context="module">
  import { Firestore } from "$lib/firebase";
  import { trycatch } from "$lib/utils";
  import { collection, getDocs } from "firebase/firestore";
  import ProjectCard from "$lib/components/ProjectCard.svelte";

  export async function load() {
    const [projectsSnapshot, error] = await trycatch(getDocs(collection(Firestore, "projects")));
    
    if (error) {
      return {
        props: {
          projects: [],
        }
      }
    }

    return {
      props: {
        projects: projectsSnapshot.docs.map(project => project.data()),
      }
    }
  }
</script>

<script lang="ts">
  export let projects;
</script>

<svelte:head>
  <title>Projects | Jacob Roling | Web Developer | Adelaide</title>
</svelte:head>

<section>
  <h2 class="text-5xl font-bold">Projects</h2>
  <div class="mt-12 flex flex-col gap-12">
    {#each projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</section>