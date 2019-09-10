const prismColors = {
  char: "#D8DEE9",
  comment: "#B2B2B2",
  keyword: "#c5a5c5",
  lineHighlight: "#353b45", // colors.dark + extra lightness
  primitive: "#5a9bcf",
  string: "#8dc891",
  variable: "#d7deea",
  boolean: "#ff8b50",
  punctuation: "#88C6BE",
  tag: "#fc929e",
  function: "#79b6f2",
  className: "#FAC863",
  method: "#6699CC",
  operator: "#fc929e",
};

export const primsReactRendererTheme = {
  plain: {
    color: "#ffffff",
    background: "#282c34",
  },
  styles: [
    {
      types: ["attr-name", "keyword"],
      style: {
        color: prismColors.keyword,
      },
    },
    {
      types: [
        "comment",
        "block-comment",
        "prolong",
        "doctype",
        "cdata",
      ],
      style: {
        color: prismColors.comment,
      },
    },
    {
      types: [
        "property",
        "number",
        "function-name",
        "constant",
        "symbol",
        "deleted",
      ],
      style: {
        color: prismColors.primitive,
      },
    },
    {
      types: ["boolean"],
      style: {
        color: prismColors.boolean,
      },
    },
    {
      types: ["tag"],
      style: {
        color: prismColors.tag,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: prismColors.string,
      },
    },
    {
      types: ["punctuation"],
      style: {
        color: prismColors.punctuation,
      },
    },
    {
      types: ["selector", "char", "builtin", "inserted"],
      style: {
        color: prismColors.char,
      },
    },
    {
      types: ["function"],
      style: {
        color: prismColors.function,
      },
    },
    {
      types: ["operator", "entity", "url", "variable"],
      style: {
        color: prismColors.variable,
      },
    },
    {
      types: ["atrule", "class-name"],
      style: {
        color: prismColors.className,
      },
    },
    {
      types: ["important"],
      style: {
        fontWeight: 400,
      },
    },
    {
      types: ["bold"],
      style: {
        fontWeight: 700,
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["entity"],
      style: {
        cursor: "help",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
  ],
};

export const style = {
  'code[class*="language-"]': {
    height: "auto !important",
    fontSize: "0.4em",
    lineHeight: "1.2",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    background: "#282c34",
    color: "#ffffff",
    borderRadius: 10,
    overflow: "auto",
    tabSize: "1.5em",
    WebkitOverflowScrolling: "touch",
  },
  'pre[class*="language-"]': {
    height: "auto !important",
    margin: "1rem",
    padding: "1rem",
    fontSize: "1em",
    lineHeight: "0.05em",
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
    background: "#282c34",
    color: "#ffffff",
    borderRadius: 10,
    overflow: "auto",
    tabSize: "1.5em",
    WebkitOverflowScrolling: "touch",
  },
  "attr-name": {
    color: prismColors.keyword,
  },
  comment: {
    color: prismColors.comment,
  },
  "block-comment": {
    color: prismColors.comment,
  },
  prolog: {
    color: prismColors.comment,
  },
  doctype: {
    color: prismColors.comment,
  },
  cdata: {
    color: prismColors.comment,
  },
  property: {
    color: prismColors.primitive,
  },
  number: {
    color: prismColors.primitive,
  },
  "function-name": {
    color: prismColors.primitive,
  },
  constant: {
    color: prismColors.primitive,
  },
  symbol: {
    color: prismColors.primitive,
  },
  deleted: {
    color: prismColors.primitive,
  },
  boolean: {
    color: prismColors.boolean,
  },
  tag: {
    color: prismColors.tag,
  },
  string: {
    color: prismColors.string,
  },
  punctuation: {
    color: prismColors.punctuation,
  },
  selector: {
    color: prismColors.char,
  },
  char: {
    color: prismColors.char,
  },
  builtin: {
    color: prismColors.char,
  },
  inserted: {
    color: prismColors.char,
  },
  function: {
    color: prismColors.function,
  },
  operator: {
    color: prismColors.variable,
  },
  entity: {
    color: prismColors.variable,
  },
  url: {
    color: prismColors.variable,
  },
  variable: {
    color: prismColors.variable,
  },
  "attr-value": {
    color: prismColors.string,
  },
  keyword: {
    color: prismColors.keyword,
  },
  atrule: {
    color: prismColors.className,
  },
  "class-name": {
    color: prismColors.className,
  },
  important: {
    fontWeight: 400,
  },
  bold: {
    fontWeight: 700,
  },
  italic: {
    fontStyle: "italic",
  },
  entity: {
    cursor: "help",
  },
  namespace: {
    opacity: 0.7,
  },
};
