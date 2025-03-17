const resolvers = {
    Query: {
        users: async () => {
            return [
                { id: "1", name: "John Doe", email: "john@example.com" },
                { id: "2", name: "Jane Doe", email: "jane@example.com" },
            ];
        },
    },
    Mutation: {
        addUser: async (
            _: any,
            { name, email }: { name: string; email: string }
        ) => {
            return { id: Math.random().toString(), name, email };
        },
    },
};

export default resolvers;
