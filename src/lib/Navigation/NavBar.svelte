<script lang="ts">
    const src = "assets/ultiphoto.png"
    const base = "/Portfolio/"

    export let currentPath:string;
    export let defaultHoverIndex: number;

    import type { NavPage } from "./navData";
    export let pages: NavPage[];

    function navigate(route:string) {
        if (route !== currentPath) {
            history.pushState({}, "", route)
            currentPath = route
        }
    }

    let titleWidths = new Array<number>(pages.length);
    let hoverIndex = defaultHoverIndex;
    $: hoverIndex = defaultHoverIndex;
</script>

<nav>
    <img {src} class="rounded-full" alt="En Jie" />
    <div class="flex flex-col">
        <div class="flex flex-row z-1">
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
        <span
        style={`width: ${titleWidths[hoverIndex]*0.4}px; transform: translateX(${titleWidths.slice(0, hoverIndex).reduce((acc, width) => acc + width, 0) + titleWidths[hoverIndex]*0.3}px)`}
        />
    </div>
</nav>

<style>
    nav {
      height: 12.5vh;
      position: fixed;
      inset: 0;
      z-index: 2;
      gap: 0px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding-left: 1%;
      padding-right: 1%;
      background-color: #FAEE06;
      border-bottom: dashed;
    }
    img {
        height: 10vh;
        border-color: black;
        border-style: inset;
    }
    span {
        position: absolute;
        bottom: 25%;
        /* fix this */
        background-color: black;
        height: 2.5px;
        border-radius: 9999px;
        transition: width 0.4s ease-in-out, transform 0.3s ease-in-out;
    }
</style>