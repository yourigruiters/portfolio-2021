import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      backgroundLightest: string;
      backgroundLight: string;
      background: string;
      backgroundDark: string;
      backgroundDarkest: string;
      primaryLight: string;
      primary: string;
      primaryDark: string;
      locationOpacity: string;
      landingOpacity: string;
      text00: string;
      text01: string;
      text02: string;
      text03: string;
      text04: string;
    };
    fonts: {
      header: string;
      text: string;
    };
    theme: string;
  }
}
