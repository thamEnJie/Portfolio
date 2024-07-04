<script lang="ts">
    import { createEventDispatcher } from "svelte";


    export let isOpen = false;

    const dispatch = createEventDispatcher();
    function toggle() {
        isOpen = !isOpen;
        dispatch('toggle', { state: isOpen });
    }
</script>

<div class="border rounded m-3">
    <div role="button" tabindex="0" class="button flex select-none pr-6 py-3" on:click={toggle}>
        <span class="mx-auto pl-9">
            <slot name="header" />
        </span>
        <span class="my-auto transition {isOpen? '-rotate-90':'rotate-90'}">
            >
        </span>
    </div>
    {#if isOpen}
        <hr class="mx-0 mt-0">
        <div class="px-2 my-4 transition">
            <slot name="body" />
        </div>
    {/if}
</div>

<style>
</style>