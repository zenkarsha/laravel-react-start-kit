import React from "react";
import styled from "styled-components";
import { usePage } from "@inertiajs/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children, className = "" }) => {
    const { errors, flash } = usePage().props;

    return (
        <Root className={className}>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Root>
    );
};

const Root = styled.main`
    margin: 0 auto;
    max-width: 700px;
`;

const Content = styled.div``;

export default Layout;
