require("../dist/app");            // ensure dist/app.js is loaded
const app = require("../dist/app").default; // ES default export
module.exports = app;