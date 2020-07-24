# JavaScript Module Formats

This is a simple project showing how to run various JavaScript module formats in
Node and the browser. The following formats are used:

1. CommonJS: This is the format popularized by Node.js and uses `exports` and
   `require`.

2. ES Modules: This is the ES6 format that uses `export` and `import` syntax.

## Node.js Examples

To run each example, change to the appropriate directory and run the listed
commands.

### node-1-commonjs

This example uses CommonJS modules (`exports` and `require`) and runs them
directly in Node.

```bash
node src/index.js
```

### node-2-esmodules

This example uses ES modules (`export` and `import`) and runs them directly in
Node. This is achieved by adding `"type": "module"` in package.json.

```bash
node src/index.js
```

### node-3-es6-babel

In this example, the ES6 source is transpiled to ES5 using Babel. Babel outputs
CommonJS modules in the dist folder with `exports` and `require`. The transpiled
code is then run in Node.

You can play with Babel's `targets` option to control the kind of code that is
generated (see `babel.config.js`). For example, change the target
`node: 'current'` to `"ie": "11"`. This will transpile the arrow functions in
`temperature.js` to ES5 style functions.

```bash
npm install
npm run build
node dist/index.js
```

### node-4-typescript-babel

In this example, the TypeScript source is transpiled to ES5 using Babel. Babel
essentially strips out TypeScript type annotations (details
[here](https://babeljs.io/docs/en/#type-annotations-flow-and-typescript)! It
then outputs CommonJS modules in the dist folder with `exports` and `require`.
The transpiled code is then run in Node.

```bash
npm install
npm run build
node dist/index.js
```

### node-5-typescript-tsc

In this example, the TypeScript source is compiled to ES6 using the TypeScript
compiler. ES6 because Node.js can run ES6, except for `import` and `export`
statements. Hence, we ask the TypeScript compiler to output commonjs modules.
The compiled code is then run in Node.

```bash
npm install
npm run build
node dist/index.js
```

## Browser Examples

To run browser example, install a static HTTP server globally, e.g.
`npm install -g serve`. Then change to the appropriate directory and run the
listed commands. Finally, point your browser to http://localhost:5000.

### browser-1-esmodules

This example uses ES modules (`export` and `import`) and runs them directly in
Node. This is achieved by adding `type="module"` on the `<script>` tag (see
`index.html`).

```bash
serve src
```
