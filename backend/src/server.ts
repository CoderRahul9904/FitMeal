import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { mergeTypeDefs } from "@graphql-tools/merge"
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from "./graphql/resolvers/index"
import { readFile } from "node:fs/promises"
import { IncomingMessage } from "node:http";
import authenticateUser from "./middlewares/authMiddleware";
import { JwtPayload } from "jsonwebtoken";
import { GraphQLError } from "graphql";




const app = require("./app")
const FitMealDb = require("./connectionDB/RecipeConnectionDB")
const UserDb = require("./connectionDB/UserConnectionDB")
const RecipeModel = require("./models/Recipe")
const UserModel = require("./models/User")
require('dotenv').config({ path: '../config.env' });

const port = process.env.PORT! || 3000

const readSchemas = async () => {
    const userSchema = await readFile(`${__dirname}/graphql/schemas/userSchema.graphql`, { encoding: 'utf8' });
    const recipeSchema = await readFile(`${__dirname}/graphql/schemas/recipeSchema.graphql`, { encoding: 'utf8' });
    const productSchema = await readFile(`${__dirname}/graphql/schemas/schema.graphql`, { encoding: 'utf8' });
    return mergeTypeDefs([userSchema, recipeSchema, productSchema]);
};


interface CustomRequest extends IncomingMessage {
    body?: { operationName?: string };
}

interface BaseContext {
    id: string;
    // Any other properties your context might need
  }

const startGraphQLServer = async () => {
    const typeDefs = await readSchemas()
    const schema = makeExecutableSchema({
        typeDefs, resolvers,

    });
    const server = new ApolloServer({
        schema
    });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
        context:  async({ req, res }: { req: CustomRequest; res: any })=> {
            if (req.body?.operationName == 'userInfo' || req.body?.operationName == 'CreateRecipe') {
                try{
                    const decode=await authenticateUser(req,res) as JwtPayload
                    return {decode}
                }catch(error){
                    console.log(error)
                    throw new GraphQLError("Not Authorized")
                }
            }
            return {decode:null}
            

            // console.log("cookie oooye: ", req.headers.cookie)
            // try{
            //     const user= authenticateUser(req,res)
            //     return  {user}
            // }catch(err){
            //      return {}
            // }
        },
        // cors: {
        //     origin: 'http://localhost:5173', // Allow your frontend
        //     credentials: true, // Send cookies
        // },
    });
    console.log(`🚀  Server ready at: ${url}`)
}

startGraphQLServer()
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/`)
})
