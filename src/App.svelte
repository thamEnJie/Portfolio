<script lang="ts">
  import Home from "./lib/home/home.svelte";
    import NavBar from "./lib/NavBar.svelte";

  export let title = "En Jie's Portfolio";
  const src = "assets/ultiphoto.png"
</script>


<head><title>{title}</title></head>


<NavBar />
<!-- This is just a quick run down of all the content, and will be transformed later on. -->
<!-- TODO: Implement Tags -->
<main class="px-10">
  <Home />
</main>
<!-- <footer>
<p>footer</p>
</footer> -->