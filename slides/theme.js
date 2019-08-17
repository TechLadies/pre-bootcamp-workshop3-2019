import { swiss } from "mdx-deck/themes";
import style from "react-syntax-highlighter/styles/prism/ghcolors";
import javascript from "react-syntax-highlighter/languages/prism/javascript";
import "./deck.css";

export default {
  ...swiss,
  googleFont: "https://fonts.googleapis.com/css?family=Nunito|Fira+Code",
  font: '"Nunito", monospace',
  monospace: '"Fira Code" , monospace',
  colors: {
    text: "black",
    background: "white",
    link: "blue"
  },
  // syntax highlighting
  prism: {
    style,
    languages: {
      javascript
    }
  },
  h1: {
    textAlign: "center"
  },
  h2: {
    textAlign: "center"
  }
};
