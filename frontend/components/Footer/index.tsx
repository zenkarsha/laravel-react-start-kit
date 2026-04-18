import styled from "styled-components";
import { Link } from "@inertiajs/react";
import { _w } from "@/utils/wordingSystem";
import { respondTo } from "@/utils/responsive";

function Footer() {
  const wording = _w("footer") as any;

  return (
    <Root>
      <Copyright>
        {new Date().getFullYear()} {wording?.copyright}
      </Copyright>
      <Links className="unstyled">
        <li>
          <Link href="/privacy-policy">{wording?.privacy_policy}</Link>
        </li>
        <li>
          <Link href="/terms-of-service">{wording?.terms_of_service}</Link>
        </li>
      </Links>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 60px;
  border-top: 1px solid #e7e7e7;
  background: white;
`;

const Copyright = styled.p`
  line-height: 60px;

  ${respondTo.md} {
    font-size: 12px;
  }
`;

const Links = styled.ul`
  display: flex;
  gap: 20px;
  margin-left: 20px;
  line-height: 60px;

  ${respondTo.md} {
    font-size: 12px;
  }
`;

export default Footer;
