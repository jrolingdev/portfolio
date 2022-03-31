<script lang="ts">
  import Icon from "@iconify/svelte";
  import AspectRatio from "./AspectRatio.svelte";
  
  export let name: string;
  export let description: string;
  export let liveDemoUrl: string;
  export let sourceCodeUrl: string;
  export let imagePath: string = "/images/placeholder.png";
</script>

<div class="grid md:grid-cols-3 gap-x-4 gap-y-8">
  <div class="md:col-span-2">
    <h3 class="text-2xl font-bold">{name}</h3>
    <p class="mt-4 text-lg">{description}</p>
    <div class="mt-4 flex gap-8">
      <a class="flex gap-4 items-center bg-primary-500 text-primary-50 px-4 py-2 rounded-full shadow transition-colors duration-100 hover:bg-primary-50 hover:text-primary-500" href={liveDemoUrl} target="_blank">
        <Icon icon="mdi:web" width=18 />
        <div class="font-medium">Live Demo</div>
      </a>
      <a class="flex gap-4 items-center bg-black text-white px-4 py-2 rounded-full shadow transition-colors duration-100 hover:bg-white hover:text-black" href={sourceCodeUrl} target="_blank">
        <Icon icon="akar-icons:github-fill" width=18 />
        <div class="font-medium">Source Code</div>
      </a>
    </div>
  </div>
  <div>
    <AspectRatio ratio={16 / 9}>
      <img class="w-full h-full" src={imagePath} alt={name}>
    </AspectRatio>
  </div>
</div>
