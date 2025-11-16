import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children, className = "" }) => {
    return (
        <Root className={className}>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Root>
    );
};

const Root = styled.main``;

const Content = styled.div``;

export default Layout;
