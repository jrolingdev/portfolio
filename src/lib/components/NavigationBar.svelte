<script lang="ts">
  let menuOpen = false;

  let pages = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Projects",
      path: "projects"
    },
    {
      name: "About",
      path: "about"
    },
    {
      name: "Contact",
      path: "contact"
    }
  ];
</script>

<nav class="my-16 mx-4 md:mx-auto max-w-screen-md">
  <ul class="flex justify-between">
    {#each pages as {name, path}}
      <li>
        <a class="font-bold text-lg px-4 py-2 hover:underline decoration-primary-500 decoration-2" href={path}>{name}</a>
      </li>
    {/each}
  </ul>
</nav>