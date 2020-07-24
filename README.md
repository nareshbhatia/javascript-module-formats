# JavaScript Module Formats

This is a simple project showing how to run various JavaScript module formats
in Node and the browser. The following formats are used:

1. CommonJS: This is the format popularized by Node.js and uses `exports`
   and `require`.
   
2. ES Modules: This is the ES6 format that uses `export` and `import` syntax.

## Examples

To run each example, change to the appropriate directory and run the listed
commands. For browser examples install a static HTTP server globally, e.g.
`npm install -g serve`


### 1-node-commonjs

```bash
node src/index.js
```

### 2-node-esmodules

```bash
node src/index.js
```

### 3-browser-esmodules

```bash
serve src
```

Point your browser to http://localhost:5000.
