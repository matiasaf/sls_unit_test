'use strict';

module.exports.inputQueryParams = (event) => {
    if (event.queryStringParameters) {
        return event.queryStringParameters;
    } else {
        return event;
    }
};

module.exports.inputPathParams = (event) => {
    if (event.pathParameters) {
        return event.pathParameters;
    } else {
        return event;
    }
};

module.exports.inputBodyParsed = (event) => {
    if (event.body) {
        return JSON.parse(event.body);
    } else {
        return event;
    }
};

module.exports.successResponse = (data) => {
    return {
        statusCode: 200,
        body: JSON.stringify(data),
    };
};

module.exports.errorResponse = (data) => {
    return {
        statusCode: 404,
        body: JSON.stringify(data),
    };
};
