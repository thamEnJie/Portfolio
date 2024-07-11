<script lang="ts">
  export let title = "En Jie's Portfolio";

  import NavBar from "./lib/Navigation/NavBar.svelte";
  import { base, pages } from "./lib/Navigation/navData";
  let currentRoute = window.location.pathname;
</script>


<head><title>{title}</title></head>


<NavBar bind:currentRoute={currentRoute} {pages} />
<!-- This is just a quick run down of all the content, and will be transformed later on. -->
<!-- TODO: Implement Tags -->
<main class="px-10">
  {#each pages as page}
    {#if currentRoute == base+page.pathName}
      <svelte:component this={page.component} />
    {/if}
  {/each}
</main>
<!-- <footer>
<p>footer</p>
</footer> -->