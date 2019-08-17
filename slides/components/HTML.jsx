import React from "react";

export default function HtmlTitle({ titleSize = "1.2em", tagSize = "2em" }) {
  return (
    <code style={{ display: "flex", fontSize: tagSize, alignItems: "center" }}>
      {"<"}
      <span style={{ fontSize: titleSize }}>HTML</span>
      {"/>"}
    </code>
  );
}
