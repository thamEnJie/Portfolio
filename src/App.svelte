<script lang="ts">
    import { Icon } from "@sveltestrap/sveltestrap";
  import Home from "./lib/home/home.svelte";


  export let title = "En Jie's Portfolio";
</script>


<head><title>{title}</title></head>


<!-- <header>
<p>navigation</p>
</header> -->
<!-- This is just a quick run down of all the content, and will be transformed later on. -->
<!-- TODO: Implement Tags -->
<main>
  <Icon name="globe2"/>
  <Home />
</main>
<!-- <footer>
<p>footer</p>
</footer> -->


<style>
  
</style>