import intro from "./mdx/intro.mdx";
import bootstrap from "./mdx/bootstrap.mdx";
import firstReactComponent from "./mdx/first-react-component.mdx";
import meetUseState from "./mdx/meet-use-state.mdx";
import fetch from "./mdx/fetch.mdx";
import stylesAndAssets from "./mdx/styles-and-assets.mdx";
import deploy from "./mdx/deploy.mdx";

import "typeface-space-mono";
import "typeface-spectral";

export { default as theme } from "./theme";
export default [
  ...intro,
  ...bootstrap,
  ...firstReactComponent,
  ...meetUseState,
  ...fetch,
  ...stylesAndAssets,
  ...deploy
];
