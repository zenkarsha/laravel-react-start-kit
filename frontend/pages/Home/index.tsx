import styled from "styled-components";
import Layout from "@/components/Layout";
import { _w } from "@/utils/wordingSystem";
import { useMeta } from "@/hooks/useMeta";

const Home = () => {
  const wording = _w("home") as any;
  useMeta();

  const projectGuide = [
    {
      title: "頁面與 route",
      items: [
        "前台頁面 route 在 routes/web.php，用 Inertia::render('PageName') 對應 frontend/pages/PageName/index.tsx。",
        "要新增頁面時，通常同時新增一條 Route::get(...) 和一個 frontend/pages/<PageName>/index.tsx。",
        "找不到頁面時會走 routes/web.php 最後的 fallback，交給 ErrorPageController。",
      ],
    },
    {
      title: "Meta 與 SEO",
      items: [
        "預設 meta 在 config/meta.php。",
        "每次請求會由 app/Http/Middleware/HandleInertiaRequests.php 依 path 組出 meta，並共享到 Inertia props。",
        "前端頁面可在 frontend/hooks/useMeta/index.tsx 呼叫 useMeta({...}) 覆蓋 title、description、canonical、og image 等。",
        "Blade 首次輸出的 meta 模板在 resources/views/app.blade.php。",
      ],
    },
    {
      title: "Sitemap",
      items: [
        "入口是 /sitemap.xml，route 定義在 routes/web.php，實作在 app/Http/Controllers/SitemapController.php。",
        "Sitemap 會自動掃 Laravel 所有 GET routes，但會排除 logs、sitemap.xml、up、含參數的 route，以及 admin/backpack 路徑。",
        "新增公開靜態頁後，只要 route 是 GET 且不是被排除的路徑，通常會自動進 sitemap。",
      ],
    },
    {
      title: "Frontend 架構",
      items: [
        "入口在 frontend/app.tsx，透過 import.meta.glob('./pages/**/*.tsx') 自動解析頁面。",
        "共用版型在 frontend/components/Layout/index.tsx，內含 Header、Footer，頁面內容放 children。",
        "共用元件放 frontend/components，頁面級元件放 frontend/pages，各頁目前都是 frontend/pages/<Name>/index.tsx。",
        "全域樣式在 frontend/components/GlobalStyle/index.tsx，reset 在 public/css/reset.css。",
      ],
    },
    {
      title: "文案與靜態資源",
      items: [
        "文案來源是 public/wordings/zh-Hant.json，由 frontend/utils/wordingSystem.tsx 載入，頁面用 _w('path.to.key') 取值。",
        "wording 版本號透過 resources/views/app.blade.php 裡的 #version data-wording-version 帶到前端。",
        "圖片、favicon、OG image 這類公開資源放 public/ 底下，例如 public/images/og-image.png。",
      ],
    },
    {
      title: "常改的位置",
      items: [
        "首頁：frontend/pages/Home/index.tsx。",
        "導覽列：frontend/components/Header/index.tsx。",
        "頁尾與政策連結：frontend/components/Footer/index.tsx。",
        "隱私權與服務條款頁：frontend/pages/PrivacyPolicy/index.tsx、frontend/pages/TermsOfService/index.tsx。",
      ],
    },
  ];

  return (
    <Layout>
      <Wrap>
        <Title>{wording?.title}</Title>
        <StarterHint>
          <IconBox aria-hidden="true">
            <CodingIcon viewBox="0 0 24 24" fill="none">
              <path
                d="M4.75 3.5H19.25C20.4926 3.5 21.5 4.50736 21.5 5.75V15C21.5 15.2761 21.2761 15.5 21 15.5H3C2.72386 15.5 2.5 15.2761 2.5 15V5.75C2.5 4.50736 3.50736 3.5 4.75 3.5Z"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.9 5.7H18.1C18.5971 5.7 19 6.10294 19 6.6V12.9C19 13.3971 18.5971 13.8 18.1 13.8H5.9C5.40294 13.8 5 13.3971 5 12.9V6.6C5 6.10294 5.40294 5.7 5.9 5.7Z"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.5 15.5L1.2 17.9C1.0082 18.2541 1.26445 18.6875 1.66714 18.6875H22.3329C22.7355 18.6875 22.9918 18.2541 22.8 17.9L21.5 15.5"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.3 17.25H5.7M18.3 17.25H21.7M6.4 16.15H17.6"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.3 17.25H14.7C14.9209 17.25 15.1 17.4291 15.1 17.65V17.85C15.1 18.2918 14.7418 18.65 14.3 18.65H9.7C9.25817 18.65 8.9 18.2918 8.9 17.85V17.65C8.9 17.4291 9.07909 17.25 9.3 17.25Z"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 8.4L8.6 9.95L10 11.5M14 8.4L15.4 9.95L14 11.5"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </CodingIcon>
          </IconBox>
          <HintText>從這裡開始你的新專案</HintText>
        </StarterHint>
        <GuideCard>
          <GuideTitle>起始專案說明</GuideTitle>
          <GuideIntro>下面這些就是這個 starter 常用的改動入口，之後新增頁面、調整 SEO、補 sitemap 或改前端結構時，先從這裡找。</GuideIntro>
          <GuideGrid>
            {projectGuide.map((section) => (
              <GuideSection key={section.title}>
                <GuideSectionTitle>{section.title}</GuideSectionTitle>
                <GuideList>
                  {section.items.map((item) => (
                    <GuideItem key={item}>{item}</GuideItem>
                  ))}
                </GuideList>
              </GuideSection>
            ))}
          </GuideGrid>
        </GuideCard>
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

const StarterHint = styled.div`
  display: grid;
  justify-items: center;
  gap: 16px;
  text-align: center;
  color: #0f172a;
  margin-bottom: 40px;
`;

const GuideCard = styled.section`
  width: min(100%, 960px);
  margin: 0 auto;
  padding: 32px;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  background: #fff;
  text-align: left;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const GuideTitle = styled.h2`
  margin: 0 0 12px;
  font-size: 28px;
  line-height: 1.2;
`;

const GuideIntro = styled.p`
  margin: 0 0 24px;
  font-size: 15px;
  line-height: 1.7;
  color: #475569;
`;

const GuideGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GuideSection = styled.section`
  padding: 20px;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  background: #f8fafc;
`;

const GuideSectionTitle = styled.h3`
  margin: 0 0 12px;
  font-size: 18px;
  line-height: 1.4;
`;

const GuideList = styled.ul`
  margin: 0;
  padding-left: 20px;
`;

const GuideItem = styled.li`
  list-style: disc outside;
  font-size: 14px;
  line-height: 1.75;
  color: #334155;

  & + & {
    margin-top: 8px;
  }
`;

const IconBox = styled.div`
  display: grid;
  place-items: center;
  color: #cbd5e1;
`;

const CodingIcon = styled.svg`
  width: 200px;
  height: 200px;
`;

const HintText = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.4;
`;

export default Home;
