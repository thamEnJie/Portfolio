<script lang="ts">
    import { createEventDispatcher } from "svelte";


    export let isOpen = false;

    const dispatch = createEventDispatcher();
    function toggle() {
        isOpen = !isOpen;
        dispatch('toggle', { state: isOpen });
    }

    const animation: string = "transition-all duration-500"
</script>

<div class="border rounded shadow-sm m-3">
    <button class="reset-btn w-full h-full {isOpen ? "rounded-b-none" : "rounded-b-1"} rounded-t-1 flex pr-6 py-3" on:click={toggle}>
        <span class="mx-auto pl-3">
            <slot name="header" />
        </span>
        <span class="my-auto {animation} {isOpen? '-rotate-90':'rotate-90'} text-md font-bold">
            >
        </span>
    </button>
    {#if isOpen}
        <hr class="mx-0 mt-0">
    {/if}
        <div class="{animation} {isOpen ? "px-15 my-4" : ""}">
            <div class="overflow-hidden {animation} {isOpen ? "max-h-screen":"max-h-0"}">
                <slot name="body" />
            </div>
        </div>
</div>