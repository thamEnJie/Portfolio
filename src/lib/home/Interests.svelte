<script lang="ts">
    import { Card, CardBody, CardHeader, CardSubtitle, CardText, CardTitle, Col, Row } from "@sveltestrap/sveltestrap";
    import { interests } from "./homeData"
</script>

<Row>
    <h2 class="mb-3">Interest</h2>
    {#each interests as interest}
        <Col sm="12" md = "6" class="my-3">
            <Card class="h-100">
                <CardHeader>
                    <CardTitle>{interest.title}</CardTitle>
                    <small>{interest.subtitle}</small>
                </CardHeader>
                {#each interest.items as item}
                <CardBody>
                    <CardSubtitle>{item.name}</CardSubtitle>
                    <CardText>{item.desc}</CardText>
                </CardBody>
                {/each}
            </Card>
        </Col>
    {/each}
</Row>