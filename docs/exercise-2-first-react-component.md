# First react component

Before we go furture to write our own React component. Let's try understand the special syntax to write JavaScript first.

## JSX

```jsx
const element = <h1>Hello, world!</h1>;
```

This funny tag syntax is neither a string nor HTML.

It is called JSX, and it is a syntax extension to JavaScript. JSX may remind you of a template language, but it comes with the full power of JavaScript.

JSX produces React “elements”. And React will constructor the element and rendering to the DOM inn your browser.

JSX is the tricky part when I start developing React. Normally if you writing JavaScript code to create HTML element. You can do it using [Document Object Model (DOM)](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

Let's say you want to create `<h1>Hello world!!</h1>` element into our page, you can do it by

```js
var heading = document.createElement("h1");
var heading_text = document.createTextNode("Hello world!!");
heading.appendChild(heading_text);
document.body.appendChild(heading);
```

then if you inspect your page there will be a element created under `<body>`

```html
<body>
  <h1>Hello world!!</h1>
</body>
```

when you develop real web application, you might doing something like this a lot which is why React team create **JSX**. So instead of writing many of `createElement` and `appendChild`, you can straigth forward and write html tag string inside your JavaScript code instead.

So in React, if you write

```jsx
const element = (
  <div>
    <h1>Hello world!!</h1>
  </div>
);
```

your code will get parse into

```js
const element = React.createElement("div", {
  children: React.createElement("h1", {
    children: "Hello world!!"
  })
});
```

this parsing process is powered by `babel`. Babel is used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript which can be run in all browser or other environments.

So cleary if you want to use React. You can just write `React.createElement` code above straight away. But with JSX, it help you to developing your React app more efficiently and it also allows React to show more useful error and warning messages..

After your code is parsed. Here is when React is coming into played. So when you execute `React.createElement`, React will create JavaScript object which act as "element". And React will start to construct your element tree and put it in `element`. So to make your element really render in HTML side. You will need to call `ReactDOM.render`

```jsx
ReactDOM.render(element, document.body);
```

After run this you should probably see your element display under `<body>` inside your HTML

### Embedding Expressions in JSX

You can also declare a variable called name and then use it inside JSX by wrapping it in curly braces `{ }`

```jsx
const name = "Josh Perez";
const element = <h1>Hello, {name}</h1>;
```

this will result when rendered

```html
<h1>Hello, Josh Perez</h1>
```

You can put JavaScript expression inside curly brances into JSX. The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result. For example

```html
<h1>{2 + 2}</h1>
```

will result

```html
<h1>4</h1>
```

> Note: but if you put JavaScruot expression without curly, JSX will treat as normal string

```html
<h1>2 + 2</h1>
```

will result

```html
<h1>2 + 2</h1>
```

You can also do complex expression like function called and embed the result under JSX

```jsx
function formatName(user) {
  return user.firstName + " " + user.lastName;
}
const element = <h1>Hello, {formatName(user)}!</h1>;
```

> **IMPORTANT NOTE!!**
> React element is immutable, means after you can `ReactDom.render(element, ...)`. They won't change anymore until you `render` again.

### Attributes in JSX

For each element tag you write in JSX, you can also passing the attribute in tag same as when you write HTML. To parse string, you may use quotes to specify string literals as attributes.

```jsx
const element = <div tabIndex="0"></div>;
```

You may also use curly braces to embed a JavaScript expression in an attribute:

```jsx
const element = <img src={user.avatarUrl}></img>;
```

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names. For examples,

- `class` becomes `className`

- `tabindex` becomes `tabIndex`

- `onchange` becomes `onChange`

As you can pass any JavaScript expression into attribute in JSX. You can also pass `function` into element as well!

```jsx
function onChange() {
  console.log("changed!!");
}

const element = (
  <select onChange={onChange}>
    <option>Yes</option>
    <option>No</option>
  </select>
);
```

And last but no least nested element or expression under tag with becomes `children`. So you can do

```jsx
const element = <h1>React</h1>;
# or
const element = <h1 children="React" />;
```

> Note: Don’t put quotes around curly braces when embedding a JavaScript expression in an attribute. You should either use quotes (for string values) or curly braces (for expressions), but not both in the same attribute.

```jsx
const name = "Josh Perez";
const element = <h1 children="Hello, {name}" />;
```

will result `<h1>Hello, {name}</h1>` instead of `<h1>Hello, Josh Perez</h1>`

### Other Rules

1. Elements Must be Closed

JSX follows XML rules, and therefore HTML elements must be properly closed.

```html
/* Bad */
<h1>2</div>
<div>
  <img src="./logo.png" />
</div>
/* Good */
<h1>2</h1>
<div>
  <img src="./logo.png" />
</div>
```

2. Inserting a Large Block of HTML

To write HTML on multiple lines, put the HTML inside parentheses `( )`

```jsx
const element2 = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);
```

3. One Top Level Element

The HTML code must be wrapped in ONE top level element.

So if you like to write two headers, you must put them inside a parent element, like a div element

```jsx
/* Bad */
const element = (
  <h1>I am a Header.</h1>
  <h1>I am a Header too.</h1>
)
/* Good */
const element2 = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
)
```

## Your first React Component

React Component is just a JavaScript function that is return React Element.

```jsx
function Header() {
  const greeting = "Hello Function Component!";
  return <h1>{greeting}</h1>;
}
```

With JSX, you will able to using your function as "tag", when you trigger `render`, React will internally call your `Header` function, recursively resolve your React element. This process will so this result only the native HTML tag in your DOM after React rendered.

```jsx
const element = <Header />;
RenderDOM.render(element, document.body);
```

result in your HTML DOM will be

```html
<body>
  <h1>Hello Function Component!</h1>
</body>
```

## React Props

You may wondering if you want to passing some paramerter or data Component to displaying or do some calculation, if we write as HTML tag.

In React, _props are used to pass information from component to component_. All attrible that passing into your Component when you write it as HTML tag will got put into the first argument in your Component function as a object. We will call it `Props` or `Property`. For example,

```jsx
<MyComponent
  name="Liaison"
  age={26}
  others={{
    weight: 42,
    height: 175
  }}
/>;

function MyComponent(props) {
  /*
    props = {
      name: "Liaison",
      age: 26,
      other: {
        weight: 42,
        height: 175
      },
    }
  */
  console.log(props);
  return <div>MyComponent</div>;
}
```

## Start Coding

Okay, it should be enough for theory. Let's start coding.

Let's create a new folder called `/components` under `/src`, you can put all your React components file here. And create `Header.js` under `/components`

```jsx
import React from "react";

function Header() {
  return <h1>My Header</h1>;
}

export default Header;
```

And inside your `App.js`, import your `Header` Component and render it. After refresh your browser, you should able to see your `<h1>` display in your page.

```diff
  import "./App.css";
+ import Header from './components/Header';

  function App() {
    return (
      <div className="App">
+       <Header />
      </div>
    )
  }
```

Next thing. Let's create `List` component which accept the `items` as props

```jsx
import React from "react";

export default function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li>{item.children}</li>
      ))}
    </ul>
  );
}
```

Now let's pass item props into `List`, open `src/App.js`

```diff
import "./App.css";
+ import List from "./components/List";

function App() {
+  const items = [
+    {
+      children: "Happy"
+    },
+    {
+      children: "Coding"
+    },
+    {
+      children: "TechLadies"
+    },
+    {
+      children: "React"
+    },
+    {
+      children: "JavaScript"
+    }
+  ];
  return (
    <div className="App">
      <Header items={items} />
+      <List items={items} />
    </div>
  );
}
```

Next step is making `<li>` a React component as your list item can be able to reuse many times if we start putting more logic into it, may lead to a lot duplicate code. Let's name to `ListItem` and put it under `/components/ListItem.js`

```jsx
import React from "react";

export default function ListItem({ children }) {
  return <li>{children}</li>;
}
```

And let's make `List` Component use `ListItem`

```jsx
import React from "react";
import ListItem from "./ListItem";

export default function List({ items }) {
  return (
    <ul>
      {items.map(item => (
        <ListItem {...item} />
      ))}
    </ul>
  );
}
```

Adding more logic into `ListItem`, in `App.js`

```diff
 function App() {
   const items = [
     {
+      dark: true,
+      color: "red",
       children: "Happy"
     },
     {
+      color: "green",
       children: "Coding"
     },
     {
+      dark: true,
+      color: "blue",
       children: "Hellow world!!"
     },
     {
+      dark: false,
+      color: "#111111",
       children: "TechLadies"
     },
     {
+      color: "rgba(0.0, 255, 255, 1.0)",
       children: "React"
     },
     {
+      color: "#ffab00",
       children: "JavaScript"
     }
   ];
   return (
     <div className="App">
       <Header />
       <List items={items} />
     </div>
   );
 }
```

And inside `ListItem.js`, we will add custom text color logic and some custom display base on props `dark` that we passing in.

```jsx
import React from "react";

function ListItem({ dark, color, children }) {
  return (
    <li
      style={{
        color: color,
        listStyle: "none"
      }}
    >
      {dark ? "🌚" : "🌝"} {children}
    </li>
  );
}

export default ListItem;
```
