import styled from "styled-components";
import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";

const About = () => {
    const wording = _w("about");

    return (
        <Layout>
            <Title>
                <h1>{wording.title}</h1>
            </Title>
        </Layout>
    );
};

const Title = styled.div`
    h1 {
        font-size: 48px;
        line-height: 1;
    }
`;

export default About;
