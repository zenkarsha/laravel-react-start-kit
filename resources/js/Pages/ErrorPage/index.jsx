import React from "react";
import styled from "styled-components";
import Layout from "@/components/Layout";

const ErrorPage = () => {
    return (
        <Layout>
            <Container>
                <ErrorCode>404</ErrorCode>
                <Title>PAGE NOT FOUND</Title>
            </Container>
        </Layout>
    );
};

const Container = styled.div`
    text-align: center;
    padding: 60px 20px;
    max-width: 600px;
    margin: 0 auto;
`;

const ErrorCode = styled.div`
    font-size: 120px;
    font-weight: bold;
    color: red;
    line-height: 1;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 36px;
    margin-bottom: 20px;
`;

export default ErrorPage;
