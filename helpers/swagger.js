import "dotenv/config";

import swaggerJSDoc from "swagger-jsdoc";

const { PORT } = process.env;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node JS is awesome",
      version: "1.0.0",
    },
    servers: [
      {
        url: `http://localhost:${PORT}/`,
      },
      {
        url: `https://backend-final-project-cut0.onrender.com/`,
      },
    ],
  },
  apis: [
    "./app.js",
    "./routes/index.js",
    "./routes/auth.js",
    "./routes/testRouter.js",
  ],
};

export const swaggerSpecification = swaggerJSDoc(options);
