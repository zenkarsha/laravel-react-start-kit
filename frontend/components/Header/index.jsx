import React from "react";
import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";
import { _w } from "@/utils/wordingSystem";

function Header() {
    const { url } = usePage();
    const wording = _w("header");

    return (
        <Root>
            <Logo>
                <img src="/images/logo.png" alt="logo" />
            </Logo>
            <ul className="unstyled">
                <li className={url === "/" ? "active" : ""}>
                    <Link href="/">{wording.nav.home}</Link>
                </li>
                <li className={url === "/about" ? "active" : ""}>
                    <Link href="/about">{wording.nav.about}</Link>
                </li>
            </ul>
        </Root>
    );
}

const Root = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    ul {
        display: flex;
        gap: 20px;
    }
`;

const Logo = styled.div`
    img {
        width: 30px;
        height: 30px;
    }
`;

export default Header;
