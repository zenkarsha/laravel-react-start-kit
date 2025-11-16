import styled from "styled-components";
import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";
import { useMeta } from "@/hooks/useMeta";

const About = () => {
    const wording = _w("about");
    useMeta();

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
