import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import isTokenExpired from "../util/tokenExpiry";
import api from "../util/api";


const GRAPHQL_ENDPOINT = import.meta.env.VITE_GRAPHQL_ENDPOINT || "/api/graphql";

const httpLink = createHttpLink({
    uri: GRAPHQL_ENDPOINT,
});



console.log("Here")
const authLink = setContext(async (_, { headers }) => {
    
    let accessToken = localStorage.getItem("accessToken")
    console.log("Bhai frontend se hai",accessToken)
    let refreshToken = localStorage.getItem("refreshToken")
    console.log("Bhai front foot pe khel :",refreshToken)
    if (!accessToken || !refreshToken) return
    if (isTokenExpired(accessToken)) {
        const response = await api.post("/refresh-token", { refreshToken });
        console.log(response)
        accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken!);
    }
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;
