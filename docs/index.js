const YAML = require("yamljs");
const fs = require("fs");
const path = require("path");

const dirname = path.resolve();
const docsPath = path.join(dirname, "docs");
const apiDocs = [];

fs.readdirSync(docsPath).forEach((file) => {
  if (path.extname(file) === ".yaml") {
    const doc = YAML.load(path.join(docsPath, file));
    apiDocs.push(doc);
  }
});

// this will combine each YAML file created by team member into one object
const combinedDocs = {
  swagger: "2.0",
  info: {
    title: "Parental control project ",
    version: "1.0.0",
  },
  paths: {},
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  security: [{ bearerAuth: [] }],
};

apiDocs.forEach((doc) => {
  for (const path in doc.paths) {
    combinedDocs.paths[path] = doc.paths[path];
  }
});

module.exports = combinedDocs;
