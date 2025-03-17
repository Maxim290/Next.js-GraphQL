import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createApolloClient = () => {
    return new ApolloClient({
        ssrMode: true,
        link: new HttpLink({
            uri: "/api/graphql",
        }),
        cache: new InMemoryCache(),
    });
};

export default createApolloClient;
