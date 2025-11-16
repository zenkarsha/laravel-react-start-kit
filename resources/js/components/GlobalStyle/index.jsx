import { createGlobalStyle } from "styled-components";
import { respondTo } from "@/utils/responsive";

const GlobalStyle = createGlobalStyle`
    body {
        touch-action: pan-y;
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
