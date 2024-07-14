<script lang="ts">
  import { onMount } from "svelte";

  export let title = "En Jie's Portfolio";

  import NavBar from "./lib/Navigation/NavBar.svelte";
  import { base, pages } from "./lib/Navigation/navData";
  let currentPath:string = window.location.pathname;
  onMount(() => {
    window.addEventListener('popstate', () => {
      currentPath = window.location.pathname;
    });
  });
  
  let currentIndex: number;
  function updateIndex(path:string): number {
    let i = 0
    for (const page of pages) {
      if (path == base+page.pathName) {
        return i;
      }
      i++;
    }
    return -1
  }
  $: currentIndex = updateIndex(currentPath);
</script>


<head><title>{title}</title></head>


<NavBar bind:currentPath={currentPath} bind:defaultHoverIndex={currentIndex} {pages} />
<!-- This is just a quick run down of all the content, and will be transformed later on. -->
<!-- TODO: Implement Tags -->
<main class="px-10">
  <svelte:component this={pages[currentIndex].component} />
</main>
<!-- <footer>
<p>footer</p>
</footer> -->