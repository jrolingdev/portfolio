<script lang="ts">
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import { projects } from "$lib/stores/"
</script>

<svelte:head>
  <title>Projects | Jacob Roling | Web Developer | Adelaide</title>
</svelte:head>

<section>
  <h2 class="text-5xl font-bold">Projects</h2>
  <div class="mt-12 flex flex-col gap-12">
    {#each $projects as project}
      <ProjectCard {...project} />
    {/each}
  </div>
</section>