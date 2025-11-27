import React from "react";
import styled from "styled-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
    return (
        <Root className={className}>
            <Header />
            <Content>{children}</Content>
            <Footer />
        </Root>
    );
};

const Root = styled.main``;

const Content = styled.div`
    // TODO: remove this margin
    margin: 200px 0;
    text-align: center;
`;

export default Layout;
