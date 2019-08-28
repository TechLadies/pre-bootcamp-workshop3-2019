# Getting Started

## using Create React App

[Create React App](https://github.com/facebookincubator/create-react-app) is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.

It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. You’ll need to have Node >= 8.10 and npm >= 5.6 on your machine. To create a project, run:

```shell
$ npx create-react-app my-app
# or
$ npm install -g create-react-app
$ create-react-app my-app
```

This will bootstrap your project under the `my-app` folder.

```
my-app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

## Start development

After you run create-react-app create, you can starting working on your application. To start development server, you can `cd my-app` and then run `yarn start`

```shell
$ yarn start
# or
$ npm start
```

This command will start web server at your http://localhost:3000/. View it via the browser.

## App.js

Whole page you have seen in the boostraped site is come from `src/App.js`. You can start edit this file, your page will be updated.

## Remove everythings

Before we start building our Pokemon App. We will clear all the code that bootstraped project given

App.js

```diff
function App() {
  return (
    <div className="App">
-      <header className="App-header">
-        <img src={logo} className="App-logo" alt="logo" />
-        <p>
-          Edit <code>src/App.js</code> and save to reload.
-        </p>
-        <a
-          className="App-link"
-          href="https://reactjs.org"
-          target="_blank"
-          rel="noopener noreferrer"
-        >
-          Learn React
-        </a>
-      </header>
    </div>
  );
}
```

App.css

```diff
.App {
  text-align: center;
}

- .App-logo {
-   animation: App-logo-spin infinite 20s linear;
-   height: 40vmin;
-   pointer-events: none;
- }
-
- .App-header {
-   background-color: #282c34;
-   min-height: 100vh;
-   display: flex;
-   flex-direction: column;
-   align-items: center;
-   justify-content: center;
-   font-size: calc(10px + 2vmin);
-   color: white;
- }
-
- .App-link {
-   color: #61dafb;
- }
-
- @keyframes App-logo-spin {
-   from {
-     transform: rotate(0deg);
-   }
-   to {
-     transform: rotate(360deg);
-   }
- }
```

index.css

```diff
+ html, body, #root {
+   height: 100%;
+ }

body {
+ height: 100%;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
```
