/** @jsx jsx */
import { jsx, css } from "@emotion/core";

export default function TopStatusbar({
  maxWidth,
  showActions,
}) {
  return (
    <div
      css={css`
        height: 2rem;
        max-width: ${maxWidth};
        transition: all 0.4s ease-out;
        background: #282c34;
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
