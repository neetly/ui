module.exports = {
  multipass: true,
  plugins: [
    "removeXMLNS",
    "removeDimensions",
    { name: "removeAttrs", params: { attrs: "fill" } },
    "convertShapeToPath",
    "mergePaths",
    "convertPathData",
  ],
};
