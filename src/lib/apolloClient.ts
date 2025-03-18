import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: true,
        link: new HttpLink({
            uri: "http://localhost:3000/api/graphql",
        }),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
