import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import isTokenExpired from "../util/tokenExpiry";
import axios from "axios";

const httpLink = createHttpLink({
    uri: "http://localhost:4000/graphql",
});



console.log("Here")
const authLink = setContext(async (_, { headers }) => {
    let accessToken = localStorage.getItem("accessToken")
    console.log()
    let refreshToken = localStorage.getItem("refreshToken")
    if (!accessToken || !refreshToken) return
    if (isTokenExpired(accessToken)) {
        const response = await axios.post("http://localhost:3000/refresh-token", { refreshToken });
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
