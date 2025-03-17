export const verifyToken = (token: string) => {
    if (!token) {
        throw new Error("Authentication token is required");
    }

    try {
        const decoded = { userId: 1 };
        return decoded;
    } catch (error) {
        throw new Error("Invalid or expired token");
    }
};
