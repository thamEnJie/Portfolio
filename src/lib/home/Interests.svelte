<script lang="ts">
    import { CardBody, CardSubtitle, CardTitle, Col, Row } from "@sveltestrap/sveltestrap";
    import { interests } from "./homeData"
    import Collapsible from "../components/Collapsible.svelte";

    $: isOpen = true;
</script>

<Row>
    <h2 class="mb-3">Interest</h2>
    {#each interests as interest}
        <Col sm="12" md = "6" class="my-3">
            <Collapsible>
                <span slot="header">
                    <CardTitle><u><b>{interest.title}</b></u></CardTitle>
                    <small>{interest.subtitle}</small>
                </span>
                <span slot="body">
                    <hr>
                    {#each interest.items as item}
                        <Collapsible>
                            <span slot="header">
                                <CardSubtitle class="mb-4"><u>{item.heading}</u></CardSubtitle>
                            </span>
                            <span slot="body">
                                <CardBody class="px-3 mx-5">
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
        </Col>
    {/each}
</Row>