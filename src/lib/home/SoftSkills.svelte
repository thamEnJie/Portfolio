<script>
    import { Card, CardSubtitle, Col, Icon, Row } from "@sveltestrap/sveltestrap";
    import { softSkills } from "./homeData";

</script>

<h2 class="mb-3">Soft Skills</h2>
<Row>
    {#each softSkills as skill}
        <Col xs="12" sm="6" md="3" class="my-2">
            <Card body class="h-100">
                <Icon name="{skill.icon}"/>
                <CardSubtitle>{skill.title}</CardSubtitle>
            </Card>
        </Col>
    {/each}
</Row>