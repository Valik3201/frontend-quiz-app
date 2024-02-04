import React, { useContext } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

import { GlobalContext } from "../context/globalContext";

import styled from "styled-components";

import { breakpointUp } from "../styles/mixins";

import { colors } from "../styles/colors";

const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        text-decoration: none;
    }

    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    body,
    div,
    h1,
    h2,
    h3,
    p,
    ul,
    li,
    form,
    input,
    button {
        margin: 0;
        padding: 0;
        font-family: "Rubik", sans-serif;
    }

    body {
        background: ${(props) => props.theme.background};
    }
`;

const LayoutContainer = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-position: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  background-image: ${(props) => `url(${props.theme.backgroundImageMobile})`};

  ${(props) =>
    breakpointUp(
      "tablet",
      `
    background-image: url(${props.theme.backgroundImageTablet});
    `
    )};

  ${(props) =>
    breakpointUp(
      "desktop",
      `
    background-image: url(${props.theme.backgroundImageDesktop});
    `
    )};
`;

const Layout = ({ children }) => {
  const darkTheme = {
    name: "dark",
    background: colors.darkNavy,
    text: colors.pureWhite,
    secondaryText: colors.lightBluish,
    buttonBg: colors.navy,
    shadow: "0 16px 40px 0 rgba(49, 62, 81, 0.14)",
    backgroundImageMobile: "/assets/pattern-background-mobile-dark.svg",
    backgroundImageTablet: "/assets/pattern-background-tablet-dark.svg",
    backgroundImageDesktop: "/assets/pattern-background-desktop-dark.svg",
  };

  const lightTheme = {
    name: "light",
    background: colors.lightGrey,
    text: colors.darkNavy,
    secondaryText: colors.greyNavy,
    buttonBg: colors.pureWhite,
    shadow: "0px 16px 40px 0px rgba(143, 160, 193, 0.14);",
    backgroundImageMobile: "/assets/pattern-background-mobile-light.svg",
    backgroundImageTablet: "/assets/pattern-background-tablet-light.svg",
    backgroundImageDesktop: "/assets/pattern-background-desktop-light.svg",
  };

  const currentTheme = useContext(GlobalContext);

  let theme;

  switch (currentTheme.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    default:
      theme = lightTheme;
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer>{children}</LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
