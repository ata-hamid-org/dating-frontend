import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    display1: React.CSSProperties;
    display2: React.CSSProperties;
    display3: React.CSSProperties;
    heading: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    display1?: React.CSSProperties;
    display2?: React.CSSProperties;
    display3?: React.CSSProperties;
    heading?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    display1: true;
    display2: true;
    display3: true;
    heading: true;
    body3: true;
    body4: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: "#ff4458",
    },
  },
  typography: {
    fontFamily: [
      "ProximaNova",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    display1: {
      fontSize: 34,
      fontWeight: 700,
      lineHeight: "42px",
    },
    display2: {
      fontSize: 28,
      fontWeight: 700,
      lineHeight: "36px",
    },
    display3: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: "24px",
    },
    heading: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: "24px",
    },
    subtitle1: {
      fontSize: 17,
      fontWeight: 700,
      lineHeight: "22px",
    },
    subtitle2: {
      fontSize: 15,
      fontWeight: 700,
      lineHeight: "20px",
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: "21px",
    },
    body2: {
      fontSize: 17,
      fontWeight: 400,
      lineHeight: "24px",
    },
    body3: {
      fontSize: 15,
      fontWeight: 500,
      lineHeight: "20px",
    },
    body4: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: "18px",
    },
    button: {
      fontSize: 19,
      fontWeight: 700,
      lineHeight: "26px",
    },
  },
});

theme = createTheme(theme, {
  components: {
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     body {
    //       overscroll-behavior-y: none;
    //     }
    //     ul {
    //       list-style: none;
    //       margin: 0;
    //       padding: 0;
    //     }
    //   `,
    // },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        underlineNone: {
          color: theme.palette.text.primary,

          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
        underlineHover: {
          color: "white",

          "&:hover": {
            color: theme.palette.primary.main,
          },
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
      },
      styleOverrides: {
        root: {
          minHeight: 24,
          padding: "12px 20px",
        },
        indicator: {
          height: 3,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 700,
          minHeight: 24,
          padding: "0 8px",
          minWidth: "auto",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          display1: "h1",
          display2: "span",
        },
      },
    },
  },
});

export default theme;
