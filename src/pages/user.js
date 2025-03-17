import { gql } from "@apollo/client";
import client from "../lib/apolloClient";

const GET_USERS = gql`
    query GetUsers {
        users {
            id
            name
            email
        }
    }
`;

export async function getServerSideProps() {
    try {
        const { data } = await client.query({ query: GET_USERS });
        return { props: { users: data.users } };
    } catch (error) {
        return { props: { users: [] } };
    }
}

export default function UsersPage({ users }) {
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
