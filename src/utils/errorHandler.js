export default function errorHandler(err) {
    console.error(err);
    return {
        message: err.message || "Internal Server Error",
        statusCode: err.extensions?.code || 500,
    };
}
