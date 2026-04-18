import styled from "styled-components";
import { CodingIcon } from "@/components/Icons";
import { _w } from "@/utils/wordingSystem";

const StarterHint = () => {
  const wording = _w("home") as any;

  return (
    <Root>
      <IconBox aria-hidden="true">
        <CodingIcon />
      </IconBox>
      <HintText>{wording?.description}</HintText>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  justify-items: center;
  gap: 16px;
  text-align: center;
  color: #0f172a;
  margin-bottom: 40px;
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;
  color: #cbd5e1;

  svg {
    width: 200px;
    height: 200px;
  }
`;

const HintText = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: normal;
  line-height: 1.4;
`;

export default StarterHint;
