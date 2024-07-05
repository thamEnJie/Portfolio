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
    <button class="w-full h-full rounded-b-none rounded-t-1 flex pr-6 py-3 bg-transparent text-inherit" on:click={toggle}>
        <span class="mx-auto pl-3">
            <slot name="header" />
        </span>
        <span class="my-auto transition {isOpen? '-rotate-90':'rotate-90'}">
            >
        </span>
    </button>
    {#if isOpen}
        <hr class="mx-0 mt-0">
        <div class="px-15 my-4 transition">
            <slot name="body" />
        </div>
    {/if}
</div>

<style>
</style>