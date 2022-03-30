<script lang="ts">
  import Icon from "@iconify/svelte";
  export let socials = [];
</script>

<footer class="my-16 mx-4 md:mx-auto max-w-screen-md">
  <div class="flex justify-between">
    <div class="text-lg">&copy; {new Date().getFullYear()} Jacob Roling</div>
    <div class="flex items-center gap-4">
      {#each socials as {icon, url}}
        <a class="text-lg" href={url} target="_blank">
          <Icon {icon} width=24 />
        </a>
      {/each}
    </div>
  </div>
  <div class="mt-2 text-lg">
    ABN 56282376428
  </div>
</footer>