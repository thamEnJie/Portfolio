<script lang="ts">
  import { Col, Container, Row } from "@sveltestrap/sveltestrap"

  import Intro from "./Intro.svelte";
  import Interests from "./Interests.svelte";
  import HardSkills from "./HardSkills.svelte";
  import SoftSkills from "./SoftSkills.svelte";
  import Showcase from "./Showcase.svelte";

  const sections = [Interests, HardSkills, SoftSkills, Showcase]
</script>

<Container>
  <Col>
    <Intro />
    {#each sections as sect}
      <div class="mb-5">
        <svelte:component this={sect} />
      </div>
    {/each}
  </Col>
</Container>