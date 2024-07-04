<script lang="ts">
    import { Button, Col } from "@sveltestrap/sveltestrap";

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<Col>
    <button on:click={toggle} class="">
        <slot name="header" />
    </button>
    
    {#if isOpen}
        <slot name="body" />
    {/if}
</Col>

<style>
    button {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
    float: none;
    overflow: hidden;
}
</style>