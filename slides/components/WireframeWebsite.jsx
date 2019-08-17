/** @jsx jsx */
import { jsx } from "@emotion/core";
import TopStatusbar from "./TopStatusbar";
import "./styles.css";

function Box({ name, color }) {
  return (
    <div
      css={css`
        grid-area: ${name};
        background: ${color};
      `}
    >
      {name}
    </div>
  );
}

export default function WireframeWebsite() {
  return (
    <div
      css={css`
        border-radius: 4px;
        overflow: hidden;
        width: 80%;
        background: #222;
        min-width: 400px;
      `}
    >
      <TopStatusbar maxWidth={600} showActions />
      <div className="grid-container">
        <Box name="menu" color="#28d796" />
        <Box name="main" color="#e9426f" />
        <Box name="right" color="#e9426f" />
        <Box name="footer" color="#ffbb3e" />
      </div>
    </div>
  );
}
