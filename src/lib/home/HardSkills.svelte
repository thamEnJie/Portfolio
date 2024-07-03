<script lang="ts">
    import { Card, CardImg, CardSubtitle, CardText, CardTitle, Col, Icon, Row } from "@sveltestrap/sveltestrap";
    import { hardSkills } from "./homeData";
</script>

<h2 class="mb-3">Hard Skills</h2>
<Row>
    {#each hardSkills as skill}
        <Col xs="12" sm="6" md="3" class="my-2">
            <Card body class="h-100">
                {#if skill.iconName == undefined}
                    <div class={skill.pad}>
                        <CardImg top src="assets/hardskills/{skill.title}.png" alt="{skill.title} app icon" class="image-square" />
                    </div>
                {:else}
                    <Icon name={skill.iconName} />
                {/if}
                <CardSubtitle>{skill.title}</CardSubtitle>
                <CardText>{skill.text}</CardText>
            </Card>
        </Col>
    {/each}
</Row>