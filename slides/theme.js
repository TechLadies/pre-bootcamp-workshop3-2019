import React, { useState, useContext } from "react";
import highlight from "@mdx-deck/themes/syntax-highlighter-prism";
import { ThemeProvider } from "emotion-theming";
import { style } from "./prism-theme";
import { MDXProvider } from "@mdx-js/react";
import { Context } from "./switchTheme";

const defaultTheme = {
  googleFont:
    "https://fonts.googleapis.com/css?family=Nunito",
  font: '"Nunito", sans-serif',
  monospace: '"Fira Code", monospace',
  colors: {
    text: "#282c34",
    background: "#ffffff",
  },
  a: {
    textDecoration: "none",
  },
  h1: {
    textAlign: "center",
    fontSize: "1.5em",
  },
  quote: {
    fontWeight: 600,
  },
  prism: {
    style,
  },
  Provider,
  css: {
    fontSize: "1.5em",
    textAlign: "center",
    "@media screen and (min-width:64em)": {
      fontSize: "4em",
    },
  },
};

const mainTheme = {
  ...defaultTheme,
  colors: {
    text: "#ffffff",
    background: "#282c34",
    link: "#61dafb",
  },
  h1: {
    ...defaultTheme.h1,
    color: "#61dafb",
  },
};

const DefaultProvider = props => <>{props.children}</>;

const Provider = props => {
  const [name, setTheme] = useState("default");

  const theme =
    name === "default" ? defaultTheme : mainTheme;
  const Root = theme.Provider || DefaultProvider;

  return (
    <Context.Provider value={{ name, setTheme }}>
      <ThemeProvider theme={theme}>
        <MDXProvider components={theme.components}>
          <Root>{props.children}</Root>
        </MDXProvider>
      </ThemeProvider>
    </Context.Provider>
  );
};

export const themes = [
  { ...defaultTheme, Provider },
  highlight,
];
