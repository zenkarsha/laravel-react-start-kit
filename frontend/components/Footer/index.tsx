import styled from "styled-components";
import { _w } from "@/utils/wordingSystem";

function Footer() {
    const wording = _w("footer");

    return (
        <Root>
            <p>{wording?.copyright}</p>
        </Root>
    );
}

const Root = styled.div`
    // TODO: remove this margin
    text-align: center;
`;

export default Footer;
