// const cors=require("cors")
// import express from "express"
// import userRoute from "./route/userRoute"

// const app=express()
// // app.use(cors())
// app.use(express.json())
// app.use(cors({
//   origin: '*',
//   credentials: true, 
// }))

// console.log("working")
// app.use("/fitmeal",userRoute)
// app.use("/fitmeal/login",userRoute)

// module.exports=app

import express from "express";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { readFile } from "node:fs/promises";
import { json } from "body-parser";
import authenticateUser from "./middlewares/authMiddleware";
import { JwtPayload } from "jsonwebtoken";
import { GraphQLError } from "graphql";
import userRoute from "./route/userRoute";
import path from "path";
import dotenv from "dotenv";

// Load env
dotenv.config({
  path: path.resolve(__dirname, "..", ".env")
});

console.log(process.env.PORT);

const app = express();

// Standard middleware
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());

// REST routes
app.use("/api/fitmeal", userRoute);
app.use("/api/fitmeal/login", userRoute);

// Build GraphQL schema
async function buildSchema() {
  const [userS, recS, prodS] = await Promise.all([
    readFile(path.join(__dirname, "graphql/schemas/userSchema.graphql"), "utf8"),
    readFile(path.join(__dirname, "graphql/schemas/recipeSchema.graphql"), "utf8"),
    readFile(path.join(__dirname, "graphql/schemas/schema.graphql"), "utf8"),
  ]);
  return makeExecutableSchema({
    typeDefs: mergeTypeDefs([userS, recS, prodS]),
    resolvers: (await import("./graphql/resolvers/index")).resolvers,
  });
}

// Wrap Apollo into Express
(async () => {
  const schema = await buildSchema();
  const server = new ApolloServer({ schema });
  await server.start();

  app.use(
    "/api/graphql",
    json(),
    expressMiddleware(server, {
      context: async ({ req }) => {
        if (req.body?.operationName == 'userInfo' || req.body?.operationName == 'CreateRecipe') {
          try {
            const decode = (await authenticateUser(req, null)) as JwtPayload;
            return { decode };
          } catch {
            throw new GraphQLError("Not Authorized");
          }
        }
        return { decode: null };
      },
    })
  );
})();

export default app;
