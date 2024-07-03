<script lang="ts">
    import { Button, Col } from "@sveltestrap/sveltestrap";

    let isOpen = true;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

<Col>
    <div on:click={toggle}>
        <slot name="header" />
    </div>
    
    {#if isOpen}
        <slot name="body" />
    {/if}
</Col>