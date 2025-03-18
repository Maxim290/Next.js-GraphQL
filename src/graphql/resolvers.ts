interface User {
    id: string;
    name: string;
    email: string;
}

interface AddUserArgs {
    name: string;
    email: string;
}

const resolvers = {
    Query: {
        users: async (): Promise<User[]> => {
            return [
                { id: "1", name: "John Doe", email: "john@example.com" },
                { id: "2", name: "Jane Doe", email: "jane@example.com" },
            ];
        },
    },
    Mutation: {
        addUser: async (
            _: unknown,
            { name, email }: AddUserArgs
        ): Promise<User> => {
            return { id: Math.random().toString(), name, email };
        },
    },
};

export default resolvers;
