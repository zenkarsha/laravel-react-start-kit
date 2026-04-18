import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import { _w } from "@/utils/wordingSystem";
import { respondFrom, respondTo, useMediaSelectTo } from "@/utils/responsive";

function Header() {
  const { url } = usePage();
  const wording = _w("header") as any;
  const isMobile = useMediaSelectTo(768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [url]);

  useEffect(() => {
    if (!isMobile) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <Root>
      <Shell>
        <Logo href="/">
          <img src="/images/logo.svg" alt="logo" />
          <Title>{wording?.title}</Title>
        </Logo>
        <Hamburger
          type="button"
          aria-label={isMenuOpen ? "open" : "close"}
          aria-expanded={isMenuOpen}
          aria-controls="header-nav"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <HamburgerLine $open={isMenuOpen} />
          <HamburgerLine $open={isMenuOpen} />
          <HamburgerLine $open={isMenuOpen} />
        </Hamburger>
        <Nav id="header-nav" $open={isMenuOpen}>
          <li className={url === "/" ? "active" : ""}>
            <Link href="/">{wording?.nav?.home}</Link>
          </li>
          <li className={url === "/about" ? "active" : ""}>
            <Link href="/about">{wording?.nav?.about}</Link>
          </li>
        </Nav>
      </Shell>
    </Root>
  );
}

const Root = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  overflow: visible;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.9);
`;

const Shell = styled.div`
  position: relative;
  width: min(100%, 980px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
  padding: 20px 8px;
  margin: 0 auto;

  ${respondTo.md} {
    padding: 10px 20px;
    gap: 16px;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: inherit;
  text-decoration: none;

  img {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  font-size: 20px;
`;

const Hamburger = styled.button`
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #0f172a;
  cursor: pointer;

  ${respondTo.md} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const HamburgerLine = styled.span<{ $open: boolean }>`
  position: absolute;
  width: 20px;
  height: 2px;
  border-radius: 999px;
  background: currentColor;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:nth-child(1) {
    transform: ${({ $open }) => ($open ? "rotate(45deg)" : "translateY(-5px)")};
  }

  &:nth-child(2) {
    opacity: ${({ $open }) => ($open ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${({ $open }) => ($open ? "rotate(-45deg)" : "translateY(5px)")};
  }
`;

const Nav = styled.ul<{ $open: boolean }>`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  li.active a {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  ${respondFrom.md} {
    display: flex;
  }

  ${respondTo.md} {
    display: ${({ $open }) => ($open ? "flex" : "none")};
    position: absolute;
    top: calc(100% + 1px);
    left: 0px;
    right: 0px;
    z-index: 120;
    width: auto;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    padding: 18px 20px;
    border-bottom: 1px solid rgba(226, 232, 240, 0.9);
    background: rgba(255, 255, 255, 1);

    li {
      display: flex;
      width: 100%;

      &.active a {
        text-decoration: none;
      }

      a {
        display: block;
        width: 100%;
        font-size: 20px;
        font-weight: 300;
        text-align: center;
        padding: 10px 0;
        border-radius: 12px;

        &:hover {
          background-color: rgba(226, 232, 240, 0.3);
        }
      }
    }
  }
`;

export default Header;
