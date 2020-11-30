# webpack-federation-obj-exposes

Configure Webpack 5 Module Federation exposes through a nested object hierarchy.

## Install

```bash
> npm i --save-dev webpack-federation-obj-exposes
```

## Usage

```javascript
const objectExposes = require("webpack-federation-obj-exposes");

const exposes = objectExposes({
  components: {
    AppShell: "./src/components/AppShell.jsx",
  },
});

// ...

new ModuleFederationPlugin({
  name: "abtests",
  library: { type: "var", name: "abtests" },
  filename: "remoteEntry.js",
  exposes,
});
```

## Examples

### Basic

Input

```javascript
const objectExposes = require("webpack-federation-obj-exposes");

const exposes = objectExposes({
  components: {
    AppShell: "./src/components/AppShell.jsx",
  },
});
```

Output

```javascript
const exposes = {
  "./components/AppShell": "./src/components/AppShell.jsx",
};
```

### Custom Path

Input

```javascript
const objectExposes = require("webpack-federation-obj-exposes");

const exposes = objectExposes(
  {
    components: {
      AppShell: "./src/components/AppShell.jsx",
    },
  },
  "./example"
);
```

Output

```javascript
const exposes = {
  "./example/components/AppShell": "./src/components/AppShell.jsx",
};
```
