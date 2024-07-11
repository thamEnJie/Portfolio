<script lang="ts">
    const src = "assets/ultiphoto.png"
    // export let base:string;
    const base = "/Portfolio/"

    export let currentRoute:string;

    import type { NavPage } from "./navData";
    export let pages: NavPage[];

    function navigate(route:string) {
        history.pushState({}, "", route)
        currentRoute = route
    }

    // let titleWidths = new Array<number>(pages.length);
    // let hoverIndex = 0
    // function getWidth() {
    //     return "w-"+(titleWidths[hoverIndex])+"px"
    // }
</script>

<nav class="fixed left-0 top-0 right-0 bg-yellow z-2">
    <div class="heightMod flex flex-row pt-sm px-sm justify-between">
        <img {src} class="rounded-full" alt="En Jie" />
        <div class="my-auto flex flex-col">
            <div class="flex flex-row">
                {#each pages as page, i}
                    <button
                    class="reset-btn text-lg font-bold mx-2"
                    on:click|preventDefault={() => navigate(base+page.pathName)}> <!-- border-0 bind:clientWidth={titleWidths[i]} on:mouseover={() => hoverIndex = i} -->
                        {page.title}
                    </button>
                {/each}
            </div>
            <!-- <hr class="my-0"> {`w-${titleWidths[hoverIndex]}px`} {`ml-${titleWidths[hoverIndex]}px`} -->
        </div>
    </div>
    <hr class="mx-sm mb-0 border-black">
</nav>

<style>
    .heightMod {
      height: 10vh;
    }
    img {
        height: 9vh
    }
</style>