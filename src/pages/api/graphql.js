import { ApolloServer } from "apollo-server-micro";
import mongoose from "mongoose";
import typeDefs from "../../graphql/typeDefs";
import resolvers from "../../graphql/resolvers";
import { verifyToken } from "../../utils/auth";
import errorHandler from "../../utils/errorHandler";

const MONGO_URI = process.env.MONGO_URI;

if (!global.mongoose) {
    global.mongoose = mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => {
        const token = req.headers.authorization || "";
        return { user: verifyToken(token) };
    },
    formatError: errorHandler,
});

export const config = { api: { bodyParser: false } };
export default apolloServer.createHandler();
