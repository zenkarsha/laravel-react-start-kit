import styled from "styled-components";
import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";
import { useMeta } from "@/hooks/useMeta";

const ErrorPage = () => {
    const wording = _w("common.error_page");
    useMeta();

    return (
        <Layout>
            <Container>
                <ErrorCode>404</ErrorCode>
                <Title>{wording?.title}</Title>
            </Container>
        </Layout>
    );
};

const Container = styled.div``;

const ErrorCode = styled.div``;

const Title = styled.h1``;

export default ErrorPage;
