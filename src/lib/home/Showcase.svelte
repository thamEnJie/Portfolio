<script>
    import { Accordion, AccordionItem, Row } from "@sveltestrap/sveltestrap";

    const showcaseTitles = ["suSSTaina-Ng's: Floating Farm for Eutrophication", "Science Centre Research and Development Programme", "Accessible In-House Paper Recycling Machine"]
</script>

<Row>
    <h2 class="mb-3">Spotlight Showcase</h2>

    {#each showcaseTitles as header}
        <Accordion>
            <AccordionItem {header}></AccordionItem>
        </Accordion>
    {/each}
</Row>