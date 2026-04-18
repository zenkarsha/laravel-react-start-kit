import styled from "styled-components";
import Layout from "@/components/Layout";
import StarterHint from "@/components/StarterHint";
import StarterGuide from "@/components/StarterGuide";
import { _w } from "@/utils/wordingSystem";
import { useMeta } from "@/hooks/useMeta";

const Home = () => {
  const wording = _w("home") as any;
  useMeta();

  return (
    <Layout>
      <Wrap>
        <Title>{wording?.title}</Title>
        <StarterHint />
        <StarterGuide />
      </Wrap>
    </Layout>
  );
};

const Wrap = styled.div`
  display: grid;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 48px;
  line-height: 1;
`;

export default Home;
