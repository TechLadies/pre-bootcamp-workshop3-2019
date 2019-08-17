/** @jsx jsx */
import { jsx } from "@emotion/core";
import Highlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/styles/hljs/github";
import TopStatusbar from "./TopStatusbar";

export default function Terminal({ children }) {
  return (
    <div
      css={css`
        border-radius: 4px;
        overflow: hidden;
      `}
    >
      <TopStatusbar showActions />
      <div
        css={css`
          background: #222;
          padding: 20px;
          font-size: 1em;
          text-align: left;
        `}
      >
        <Highlighter
          language="sh"
          style={{
            ...style,
            hljs: {
              color: "#fff",
              background: "#222",
              display: "block",
              overflowX: "auto",
              padding: "0.5em"
            }
          }}
        >
          {children}
        </Highlighter>
      </div>
    </div>
  );
}
