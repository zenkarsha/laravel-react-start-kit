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
  text-align: center;
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: calc(100vh - 75px - 60px - 80px);
`;

export default Layout;
