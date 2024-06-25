<script lang="ts">
    import { Card, CardImg, CardSubtitle, CardText, Col, Row } from "@sveltestrap/sveltestrap";
    import { hardSkills } from "./homeData";
</script>

<h2 class="mb-3">Hard Skills</h2>
<Row>
    {#each hardSkills as skill}
        <Col xs="12" sm="6" md="3" class="my-2">
            <Card body class="h-100">
                <!-- <CardImg /> -->
                <CardSubtitle>{skill.title}</CardSubtitle>
                <CardText>{skill.text}</CardText>
            </Card>
        </Col>
    {/each}
</Row>