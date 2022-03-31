<svelte:head>
  <title>Jacob Roling  Web Developer | Adelaide</title>
</svelte:head>

<script lang="ts">
  import { skills, experience, projects } from "$lib/stores/";
  import ProjectCard from "$lib/components/ProjectCard.svelte";
  import AspectRatio from "$lib/components/AspectRatio.svelte";
  import Icon from "@iconify/svelte";
</script>

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
    <AspectRatio ratio={1}>
      <img class="w-[300px] h-[300px] object-cover object-center" src="/images/placeholder.png" alt="Jacob Roling">
    </AspectRatio>
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
    {#each $projects.slice(0, 3) as project}
      <ProjectCard {...project} />
    {/each}
  </div>
  <a class="block mt-8 text-lg font-medium hover:underline decoration-2" href="/projects">See all projects</a>
</section>

<section class="mt-12">
  <h2 class="text-5xl font-bold">Skills</h2>
  <div class="mt-8">
    {#each $skills as {name, icon, url}}
      <a class="inline-flex gap-4 items-center px-4 py-1 mr-4 mt-2 text-lg font-medium" href={url} target="_blank">
        <Icon {icon} />
        <div>{name}</div>
      </a>
    {/each}
  </div>
</section>

<section class="mt-12">
  <h2 class="text-5xl font-bold">Experience</h2>
  {#each $experience as {title, company, start, end}}
    <div class="mt-8 text-2xl font-bold">{title}</div>
    <div class="mt-2 text-xl font-medium">{company}</div>
    <div class="mt-2 text-xl">{start} - {end}</div>
  {/each}
</section>
