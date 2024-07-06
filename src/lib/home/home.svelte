<script lang="ts">
  import Intro from "./Intro.svelte";
  import Interests from "./Interests.svelte";
  import HardSkills from "./HardSkills.svelte";
  import SoftSkills from "./SoftSkills.svelte";
  import Showcase from "./Showcase.svelte";

  const sections = [Intro, Interests, HardSkills, Showcase]
</script>

{#each sections as sect}
  <div class="mb-5">
    <svelte:component this={sect} />
  </div>
{/each}