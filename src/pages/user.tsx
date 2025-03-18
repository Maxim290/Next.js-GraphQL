import { gql } from "@apollo/client";
import { GetServerSideProps } from "next";
import client from "../lib/apolloClient";

interface User {
    id: string;
    name: string;
    email: string;
}

interface UsersPageProps {
    users: User[];
}

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
`;

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const { data } = await client().query({ query: GET_USERS });
        return { props: { users: data.users } };
    } catch (error) {
        return { props: { users: [] } };
    }
};

export default function UsersPage({ users }: UsersPageProps) {
    return (
        <div>
            <h1>Users (SSR)</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} ({user.email})
                    </li>
                ))}
            </ul>
        </div>
    );
}
