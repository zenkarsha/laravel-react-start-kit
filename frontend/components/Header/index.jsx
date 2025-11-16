import React from "react";
import styled from "styled-components";
import { Link, usePage } from "@inertiajs/react";

function Header() {
    const { url } = usePage();

    return (
        <Root>
            <ul>
                <li className={url === "/" ? "active" : ""}>
                    <Link href="/">HOME</Link>
                </li>
                <li className={url === "/about" ? "active" : ""}>
                    <Link href="/about">ABOUT</Link>
                </li>
            </ul>
        </Root>
    );
}

const Root = styled.div``;

export default Header;
