interface ErrorHandlerResponse {
    message: string;
    statusCode: number;
}

interface ExtendedError extends Error {
    extensions?: {
        code?: number;
    };
}

export default function errorHandler(err: ExtendedError): ErrorHandlerResponse {
    console.error(err);
    return {
        message: err.message || "Internal Server Error",
        statusCode: err.extensions?.code || 500,
    };
}
