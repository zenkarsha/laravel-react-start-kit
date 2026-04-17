import React from "react";
import styled from "styled-components";

interface PageCardProps {
  children: React.ReactNode;
}

interface PageCardTextProps {
  children: React.ReactNode;
}

interface PageCardSectionProps {
  title: React.ReactNode;
  paragraphs?: string[];
  children?: React.ReactNode;
}

const PageCardRoot = ({ children }: PageCardProps) => {
  return (
    <Page>
      <Card>{children}</Card>
    </Page>
  );
};

const Eyebrow = ({ children }: PageCardTextProps) => {
  return <EyebrowText>{children}</EyebrowText>;
};

const Title = ({ children }: PageCardTextProps) => {
  return <TitleText>{children}</TitleText>;
};

const Lead = ({ children }: PageCardTextProps) => {
  return <LeadText>{children}</LeadText>;
};

const Meta = ({ children }: PageCardTextProps) => {
  return <MetaText>{children}</MetaText>;
};

const Section = ({ title, paragraphs, children }: PageCardSectionProps) => {
  return (
    <SectionRoot>
      <h2>{title}</h2>
      {paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      {children}
    </SectionRoot>
  );
};

type PageCardComponent = React.FC<PageCardProps> & {
  Eyebrow: React.FC<PageCardTextProps>;
  Title: React.FC<PageCardTextProps>;
  Lead: React.FC<PageCardTextProps>;
  Meta: React.FC<PageCardTextProps>;
  Section: React.FC<PageCardSectionProps>;
};

const PageCard = PageCardRoot as PageCardComponent;

PageCard.Eyebrow = Eyebrow;
PageCard.Title = Title;
PageCard.Lead = Lead;
PageCard.Meta = Meta;
PageCard.Section = Section;

const Page = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 24px;
  text-align: left;
`;

const Card = styled.article`
  width: min(100%, 920px);
  padding: 48px;
  border: 1px solid #e7e7e7;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 24px 80px rgba(15, 23, 42, 0.08);
`;

const EyebrowText = styled.div`
  margin-bottom: 12px;
  color: #666;
  font-size: 12px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

const TitleText = styled.h1`
  margin: 0;
  font-size: clamp(36px, 5vw, 56px);
  line-height: 1.05;
`;

const LeadText = styled.p`
  margin: 20px 0 12px;
  color: #333;
  font-size: 18px;
  line-height: 1.8;
`;

const MetaText = styled.p`
  margin: 0 0 36px;
  color: #777;
  font-size: 14px;
`;

const SectionRoot = styled.section`
  & + & {
    margin-top: 28px;
  }

  h2 {
    margin: 0 0 12px;
    font-size: 24px;
    line-height: 1.35;
  }

  p {
    margin: 0;
    color: #222;
    font-size: 16px;
    line-height: 1.9;
  }

  p + p {
    margin-top: 12px;
  }
`;

export default PageCard;
