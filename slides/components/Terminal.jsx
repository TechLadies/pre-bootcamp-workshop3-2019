/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Highlighter from "react-syntax-highlighter";
import { style } from "../prism-theme";
import TopStatusbar from "./TopStatusbar";

export default function Terminal({ children }) {
  return (
    <div
      css={css`
        border-radius: 0.5rem;
        overflow: hidden;
      `}
    >
      <TopStatusbar showActions />
      <div
        css={css`
          background: #282c34;
          padding: 1.75rem;
          text-align: left;
        `}
      >
        <Highlighter
          language="sh"
          style={{
            ...style,
            'code[class*="language-"]': {
              ...style['code[class*="language-"]'],
              fontSize: "1.5rem",
              lineHeight: "2.5rem",
            },
          }}
        >
          {children}
        </Highlighter>
      </div>
    </div>
  );
}
