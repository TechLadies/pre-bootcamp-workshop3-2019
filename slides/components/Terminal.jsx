/** @jsx jsx */
import { jsx } from "@emotion/core";
import Highlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/styles/hljs/github";

function TopStatusbar({ showActions }) {
  return (
    <div
      css={css`
        height: 30px;
        max-width: 600px;
        transition: all 0.4s ease-out;
        background: #222;
        display: flex;
        margin: 0 auto;
        flex-direction: row;
        justify-content: flex-end;
      `}
    >
      {showActions && (
        <svg height="20" width="80">
          <circle
            cx="24"
            cy="14"
            r="5"
            fill="red"
            style={{ cursor: "pointer" }}
          />
          <circle
            cx="44"
            cy="14"
            r="5"
            fill="orange"
            style={{ cursor: "pointer" }}
          />
          <circle
            cx="64"
            cy="14"
            r="5"
            fill="green"
            style={{ cursor: "pointer" }}
          />
        </svg>
      )}
    </div>
  );
}

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
          font-size: 24px;
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
