import styled from "styled-components";
import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";
import { useMeta } from "@/hooks/useMeta";

const Home = () => {
    const wording = _w("home");
    useMeta();

    return (
        <Layout>
            <Title>{wording?.title}</Title>
        </Layout>
    );
};

const Title = styled.h1`
    font-size: 48px;
    line-height: 1;
`;

export default Home;
