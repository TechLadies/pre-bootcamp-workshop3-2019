import React from "react";
import {
  LiveProvider,
  LiveEditor,
  LivePreview,
} from "react-live";
import { primsReactRendererTheme } from "../prism-theme";

export default () => {
  return (
    <LiveProvider
      code={
        'const name = "Josh Perez";\n' +
        "const element = <h1>Hello, {name}</h1>;\n" +
        "\n" +
        "render(element);\n"
      }
      noInline={true}
      prismTheme={primsReactRendererTheme}
    >
      <LiveEditor />
      <LivePreview />
    </LiveProvider>
  );
};
