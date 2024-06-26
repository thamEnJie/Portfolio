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
                    <div class="image-container">
                        <CardImg top src="/assets/hardskills/{skill.title}.png" alt="{skill.title} app icon" class="square-image" />
                    </div>
                {:else}
                    <Icon name={skill.iconName} class="icon-resize" />
                {/if}
                <CardSubtitle>{skill.title}</CardSubtitle>
                <CardText>{skill.text}</CardText>
            </Card>
        </Col>
    {/each}
</Row>

<style>
    .image-container {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        height: 150px;
    }

    .square-image {
        width: 100%;
        height: auto;
    }

    .icon-resize {
        font-size: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 150px;
    }
</style>