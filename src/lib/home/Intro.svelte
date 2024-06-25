<script>
    import { Col, Image, Row } from "@sveltestrap/sveltestrap";
    const pfp = "? PATH"
</script>

<div class="intro">
    <Row>
        <Col xs="12" sm="4">
            <Image alt="Image of Tham En Jie" src={pfp} fluid />
        </Col>
        <Col xs="12" sm="8">
            <p>
            <h1>Hi! I'm En Jie :)</h1>
            <p>
            <strong>Deep Learner • Enthusiastic Maker • Ecological Lover</strong>
            </p>
            <p>
            I value <u>deep learning</u> for more <b>accurate</b> and <b>complete</b> understanding.<br>
            I enjoy <u>designing</u> and <u>making</u> products with <b>CAD Modelling</b> and <b>3D Printing</b>.<br>
            I aim to create <u>solutions</u> and <u>findings</u> that <b>productively</b> impacts ecology.
            </p>
        </Col>
    </Row>
</div>

<style>
    h1, p {
        text-align: left;
    }
    div {
        position: relative;
        height: 100vh;
        top:25vh;
    }
</style>