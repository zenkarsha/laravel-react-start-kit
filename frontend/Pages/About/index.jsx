import styled from "styled-components";
import Layout from "@/components/Layout";

const About = () => {
    return (
        <Layout>
            <Title>
                <h1>ABOUT</h1>
            </Title>
        </Layout>
    );
};

const Title = styled.div`
    h1 {
        font-size: 48px;
        line-height: 1;
        margin-bottom: 36px;
    }
`;

export default About;
