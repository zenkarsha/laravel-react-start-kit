import styled from "styled-components";
import type { ReactNode } from "react";

const projectGuide = [
  {
    title: "頁面與 route",
    items: [
      "前台頁面 route 在 `routes/web.php`，用 `Inertia::render('PageName')` 對應 `frontend/pages/PageName/index.tsx`。",
      "要新增頁面時，通常同時新增一條 `Route::get(...)` 和一個 `frontend/pages/<PageName>/index.tsx`。",
      "找不到頁面時會走 `routes/web.php` 最後的 fallback，交給 `ErrorPageController`。",
    ],
  },
  {
    title: "Meta 與 SEO",
    items: [
      "預設 meta 在 `config/meta.php`。",
      "每次請求會由 `app/Http/Middleware/HandleInertiaRequests.php` 依 path 組出 meta，並共享到 Inertia props。",
      "前端頁面可在 `frontend/hooks/useMeta/index.tsx` 呼叫 `useMeta({...})` 覆蓋 title、description、canonical 等。",
      "Blade 首次輸出的 meta 模板在 `resources/views/app.blade.php`。",
    ],
  },
  {
    title: "Sitemap",
    items: [
      "入口是 `/sitemap.xml`，route 定義在 `routes/web.php`，實作在 `app/Http/Controllers/SitemapController.php`。",
      "Sitemap 會自動掃 Laravel 所有 GET routes，但會排除 logs、sitemap.xml、up、含參數的 route，以及 backpack 路徑。",
      "新增公開靜態頁後，只要 route 是 GET 且不是被排除的路徑，通常會自動進 sitemap。",
    ],
  },
  {
    title: "Frontend 架構",
    items: [
      "入口在 `frontend/app.tsx`，透過 `import.meta.glob('./pages/**/*.tsx')` 自動解析頁面。",
      "共用版型在 `frontend/components/Layout/index.tsx`，內含 Header、Footer，頁面內容放 children。",
      "頁面級元件放 `frontend/pages`，各頁目前都是 `frontend/pages/<Name>/index.tsx`。",
      "共用元件放 `frontend/components`，以 component 命名資料夾 `frontend/components/<Name>/index.tsx`。",
      "全域樣式在 `frontend/components/GlobalStyle/index.tsx`。",
    ],
  },
  {
    title: "文案與靜態資源",
    items: [
      "文案來源是 `public/wordings/zh-Hant.json`，由 `frontend/utils/wordingSystem.tsx` 載入，頁面用 `_w('path.to.key')` 取值。",
      "wording 版本號透過 `resources/views/app.blade.php` 裡的 #version `data-wording-version` 帶到前端。",
      "wording 版本號設定在 `config/app.php` 裡的 `wording_version` 參數。",
      "圖片、favicon、OG image 這類公開資源放 `public/` 底下，例如 `public/images/og-image.png`。",
    ],
  },
  {
    title: "常改的位置",
    items: [
      "首頁：`frontend/pages/Home/index.tsx`。",
      "關於本站：`frontend/pages/About/index.tsx`。",
      "導覽列：`frontend/components/Header/index.tsx`。",
      "頁尾與政策連結：`frontend/components/Footer/index.tsx`。",
      "隱私權與服務條款頁：`frontend/pages/PrivacyPolicy/index.tsx`、`frontend/pages/TermsOfService/index.tsx`。",
    ],
  },
];

const StarterGuide = () => {
  return (
    <GuideCard>
      <GuideTitle>起始專案說明</GuideTitle>
      <GuideIntro>下面這些就是這個 starter 常用的改動入口，之後新增頁面、調整 SEO、補 sitemap 或改前端結構時，先從這裡找。</GuideIntro>
      <GuideGrid>
        {projectGuide.map((section) => (
          <GuideSection key={section.title}>
            <GuideSectionTitle>{section.title}</GuideSectionTitle>
            <GuideList>
              {section.items.map((item) => (
                <GuideItem key={item}>{renderInlineMarkdown(item)}</GuideItem>
              ))}
            </GuideList>
          </GuideSection>
        ))}
      </GuideGrid>
    </GuideCard>
  );
};

const renderInlineMarkdown = (text: string): ReactNode[] => {
  return text.split(/(`[^`]+`)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <InlineCode key={`${part}-${index}`}>{part.slice(1, -1)}</InlineCode>;
    }

    return part;
  });
};

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

const InlineCode = styled.code`
  padding: 2px 6px;
  border-radius: 6px;
  background: #e2e8f0;
  color: #2250bc;
  font-size: 0.95em;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
`;

export default StarterGuide;
