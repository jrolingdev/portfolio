<script lang="ts" context="module">
  import { Firestore } from "$lib/firebase";
  import { trycatch } from "$lib/utils";
  import { collection, getDocs } from "firebase/firestore";

  export async function load() {
    const [socialsSnapshot, socialsError] = await trycatch(getDocs(collection(Firestore, "socials")));

    if (socialsError) {
      return {
        props: {
          socials: [],
        }
      }
    }

    return {
      props: {
        socials: socialsSnapshot.docs.map(social => social.data()),
      }
    }
  }
</script>

<script lang="ts">
  import "../app.scss";
  import NavigationBar from "$lib/components/NavigationBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  export let socials;
</script>

<NavigationBar />

<main class="mx-4 md:mx-auto max-w-screen-md">
  <slot />
</main>

<Footer {socials} />