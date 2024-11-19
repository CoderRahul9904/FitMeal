import { ApolloServer, ApolloServerOptionsWithTypeDefs } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { resolvers } from "./graphql/resolvers/index"
import { readFile } from "node:fs/promises"
const app=require("./app")
const FitMealDb=require("./connectionDB/RecipeConnectionDB")
const UserDb=require("./connectionDB/UserConnectionDB")
const RecipeModel=require("./models/Recipe")
const UserModel=require("./models/User")
require('dotenv').config({ path: '../config.env' });

const port=process.env.PORT! || 3000


const startGraphQLServer=async()=>{
    const typeDefs=await readFile('./graphql/schemas/schema.graphql','utf8')
    console.log(typeDefs)
    const server = new ApolloServer({typeDefs,resolvers});
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at: ${url}`)
}

startGraphQLServer()
app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}/`)
})
