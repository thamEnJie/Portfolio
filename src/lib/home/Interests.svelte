<script lang="ts">
    import { CardBody, CardSubtitle, CardTitle } from "@sveltestrap/sveltestrap";
    import { interests } from "./homeData"
    import Collapsible from "../components/Collapsible.svelte";

    let priOpenIndex = -1
    let secOpenIndex = 0
    function handleToggle(event: CustomEvent, i:number) {
        if (event.detail.state) {
            priOpenIndex = i
            secOpenIndex = 0
        } else {
            priOpenIndex = -1
        }
    }
    function createToggleHandler(i:number) {
        return (event: CustomEvent) => handleToggle(event, i);
    }
</script>

<section>
    <h2 class="mb-3">Interest</h2>
    <div class="grid sm:grid-cols-1 md:grid-cols-2">
        {#each interests as interest, i}
            <Collapsible on:toggle={createToggleHandler(i)} isOpen={i == priOpenIndex}>
                <span slot="header">
                    <CardTitle><u><b>{interest.title}</b></u></CardTitle>
                    <small>{interest.subtitle}</small>
                </span>
                <span slot="body">
                    {#each interest.items as item, j}
                        <Collapsible isOpen={j == secOpenIndex}>
                            <span slot="header">
                                <CardSubtitle><u>{item.heading}</u></CardSubtitle>
                            </span>
                            <span slot="body">
                                <CardBody>
                                    {#each item.itemList as i}
                                        <b>{i.name}</b>
                                        <p>{i.desc}</p>
                                    {/each}
                                </CardBody>
                            </span>
                        </Collapsible>
                    {/each}
                </span>
            </Collapsible>
    {/each}
    </div>
</section>