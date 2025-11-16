import { createGlobalStyle } from "styled-components";
import { respondTo } from "@/utils/responsive";

const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      touch-action: pan-y;
      font-family: 'Noto Sans', 'Noto Sans TC', 'Pingfang TC', '微軟正黑體', 'Microsoft JhengHei', sans-serif;
    }

    .mobile-hide {
      ${respondTo.xs} {
        display: none;
      }
    }

    .mobile-show {
      display: none;

      ${respondTo.xs} {
        display: inherit;
      }
    }

    .desktop-only {
      display: inherit;

      ${respondTo.sm} {
        display: none;
      }
    }

    .mobile-only {
      display: none;

      ${respondTo.sm} {
        display: inherit;
      }
    }
`;

export default GlobalStyle;
