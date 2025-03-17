declare module "../../graphql/typeDefs" {
    import { DocumentNode } from "graphql";

    const typeDefs: DocumentNode;
    export default typeDefs;
}

declare module "../../graphql/resolvers" {
    const resolvers: any;
    export default resolvers;
}
