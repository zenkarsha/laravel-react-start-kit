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
      <Wrapper>
        <Content>{children}</Content>
        <Footer />
      </Wrapper>
    </Root>
  );
};

const Root = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Content = styled.div`
  flex: 1;
  text-align: center;
  padding-top: 56px;
  padding-bottom: 40px;
`;

export default Layout;
