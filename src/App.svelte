<script lang="ts">
  import Home from "./lib/Home/Home.svelte";


  export let title = "En Jie's Portfolio";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>


<head><title>{title}</title></head>


<!-- <header>
<p>navigation</p>
</header> -->
<!-- This is just a quick run down of all the content, and will be transformed later on. -->
<!-- TODO: Implement Tags -->
<main>
  <Home />
</main>
<!-- <footer>
<p>footer</p>
</footer> -->


<style>
  
</style>