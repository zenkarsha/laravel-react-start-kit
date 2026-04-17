import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import { _w } from "@/utils/wordingSystem";

function Header() {
  const { url } = usePage();
  const wording = _w("header") as any;

  return (
    <Root>
      <Logo>
        <img src="/images/logo.png" alt="logo" />
        <Title>{wording?.title}</Title>
      </Logo>
      <Nav className="unstyled">
        <li className={url === "/" ? "active" : ""}>
          <Link href="/">{wording?.nav?.home}</Link>
        </li>
        <li className={url === "/about" ? "active" : ""}>
          <Link href="/about">{wording?.nav?.about}</Link>
        </li>
      </Nav>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  padding: 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  img {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  font-size: 20px;
`;

const Nav = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  li.active a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

export default Header;
