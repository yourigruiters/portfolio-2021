import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      backgroundLight: string;
      background: string;
      backgroundDark: string;
      backgroundDarkest: string;
      text00: string;
      text01: string;
      text02: string;
      text03: string;
      text04: string;
    };
    fonts: {
      header: string;
      text: string;
      tag: string;
    };
  }
}
