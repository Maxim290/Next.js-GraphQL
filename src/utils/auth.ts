interface DecodedToken {
    userId: number;
}

export const verifyToken = (token: string): DecodedToken => {
    if (!token) {
        throw new Error("Authentication token is required");
    }

    try {
        const decoded: DecodedToken = { userId: 1 };
        return decoded;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error("Invalid or expired token");
        }
        throw new Error("Unknown error during token verification");
    }
};
