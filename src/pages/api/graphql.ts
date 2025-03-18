import { ApolloServer } from "apollo-server-micro";
import mongoose from "mongoose";
import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";
import { verifyToken } from "../../utils/auth";
import errorHandler from "../../utils/errorHandler";

const MONGO_URI: string = process.env.MONGO_URI || "";

if (!global.mongoose) {
    global.mongoose = mongoose.connect(MONGO_URI);
}

interface ApolloContext {
    user: {
        userId: number;
    } | null;
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }): ApolloContext => {
        const token = req.headers.authorization || "";
        let user = null;

        try {
            user = verifyToken(token);
        } catch (error) {
            console.error("Token verification failed", error);
        }
        return { user };
    },
    formatError: errorHandler,
});

export const config = { api: { bodyParser: false } };

const startServer = apolloServer.start();

export default async function handler(req, res) {
    await startServer;
    return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}
