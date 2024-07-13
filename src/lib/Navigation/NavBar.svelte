<script lang="ts">
    const src = "assets/ultiphoto.png"
    const base = "/Portfolio/"

    export let currentPath:string;
    export let defaultHoverIndex: number;

    import type { NavPage } from "./navData";
    export let pages: NavPage[];

    function navigate(route:string) {
        history.pushState({}, "", route)
        currentPath = route
    }

    let titleWidths = new Array<number>(pages.length);
    let hoverIndex = 0
</script>

<nav class="fixed left-0 top-0 right-0 bg-yellow-300 z-2">
    <div class="heightMod flex flex-row pt-sm px-sm justify-between">
        <img {src} class="rounded-full" alt="En Jie" />
        <div class="my-auto flex flex-col">
            <div class="flex flex-row">
                {#each pages as page, i}
                    <button
                    class="reset-btn text-lg font-bold border-0 transition-all"
                    on:click|preventDefault={() => navigate(base+page.pathName)}
                    bind:clientWidth={titleWidths[i]}
                    on:mouseover={() => hoverIndex = i}
                    on:mouseout={() => hoverIndex = defaultHoverIndex}
                    on:focus={() => hoverIndex = i}
                    on:blur={() => hoverIndex = defaultHoverIndex}
                    >
                        {page.title}
                    </button>
                {/each}
            </div>
            <div
            class="bg-black h-0.5 rounded-full bar-transition"
            style={`width: ${titleWidths[hoverIndex]}px; transform: translateX(${titleWidths.slice(0, hoverIndex).reduce((acc, width) => acc + width, 0)}px)`}
            />
            <!-- <div class="my-0" /> {`w-${titleWidths[hoverIndex]}px`} {`ml-${titleWidths[hoverIndex]}px`} -->
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
    .bar-transition {
      transition: width 0.175s ease-in-out, transform 0.175s ease-in-out;
    }
</style>