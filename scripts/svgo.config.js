module.exports = {
  multipass: true,
  plugins: [
    "removeDimensions",
    { name: "removeAttrs", params: { attrs: "fill" } },
    "convertShapeToPath",
    "mergePaths",
    "convertPathData",
  ],
};
