function apiFailure(message, code, statusCode) {
    return {
        status: statusCode,
        data: {
            status: false,
            data: {
                errors: [message, ],
            },
            code,
            type: 'ClientError',
        },
    };
}


export const Unauthorized401 = apiFailure('Your session has expired. Please Login again.', 'ERR401', 401);
export const Unauthorized403 = apiFailure('Your session has expired. Please Login again.', 'ERR403', 403);
export const InternalServerError = apiFailure('The server encountered some error.', 'ERR500', 500);