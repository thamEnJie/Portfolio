<script>
    import Collapsible from "../components/Collapsible.svelte";


    const showcaseTitles = ["suSSTaina-Ng's: Floating Farm for Eutrophication", "Science Centre Research and Development Programme", "Accessible In-House Paper Recycling Machine"]
</script>

<h2 class="mb-3">Spotlight Showcase</h2>
{#each showcaseTitles as header}
    <Collapsible>
        <span slot="header">{header}</span>
        <span slot="body"></span>
    </Collapsible>
{/each}