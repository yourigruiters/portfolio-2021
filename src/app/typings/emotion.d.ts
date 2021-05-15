import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      backgroundColor: string;
      color: string;
    };
  }
}
