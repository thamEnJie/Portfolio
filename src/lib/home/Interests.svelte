<script lang="ts">
    import { CardBody, CardSubtitle, CardTitle } from "@sveltestrap/sveltestrap";
    import { interests } from "./homeData"
    import Collapsible from "../components/Collapsible.svelte";

    let openIndexes = [...Array(interests.length)].fill(0);
    function handleToggle(event: CustomEvent, i:number, j:number) {
        if (event.detail.state) {
            openIndexes[i] = j
        } else {
            openIndexes[i] = -1
        }
    }
    function createToggleHandler(i:number, j:number) {
        return (event: CustomEvent) => handleToggle(event, i, j);
    }
</script>

<section>
    <h2 class="mb-3">Learning Interests</h2>
    <div class="grid gap-4 md:grid-cols-1 lg:grid-cols-2">
        {#each interests as interest, i}
            <div class="border p-3">
                <div class="flex flex-row justify-center items-center gap-4">
                    <span class="text-2xl">{interest.em1}</span>
                    <span>
                        <CardTitle><u><b>{interest.title}</b></u></CardTitle>
                        <small>{interest.subtitle}</small>
                    </span>
                    <span class="text-2xl">{interest.em2}</span>
                </div>
                <hr>
                {#each interest.items as item, j}
                    <Collapsible on:toggle={createToggleHandler(i, j)} isOpen={j == openIndexes[i]}>
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
            </div>
    {/each}
    </div>
</section>