<script lang="ts">

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
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
        <div class="px-2 my-4">
            <slot name="body" />
        </div>
    {/if}
</div>

<style>
    .normButton {
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
    .collapsible-content {
        overflow: hidden;
        transition: max-height 0.3s ease;
    }
</style>