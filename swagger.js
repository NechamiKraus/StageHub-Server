
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs'); // Ensure yamljs is installed (`npm install yamljs`)
const swaggerDocument = YAML.load('./swagger.yaml');

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};