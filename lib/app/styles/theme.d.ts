export declare type ThemeType = 'light' | 'dark';
export interface ITheme {
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
}
export declare const lightTheme: {
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
};
export declare const darkTheme: {
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
};
export declare const ColorTheme: Record<ThemeType, ITheme>;
