'use strict';

const AWS = require('aws-sdk');
let dynamo = new AWS.DynamoDB.DocumentClient();

module.exports.saveItem = async (params) => {
    return await dynamo.put(params).promise();
};

module.exports.getItem = async (params) => {
    return await dynamo
        .get(params)
        .promise()
        .then((result) => result.Item);
};

module.exports.getAll = async (params) => {
    return await dynamo
        .scan(params)
        .promise()
        .then((result) => result.Items);
};

module.exports.add = async (params) => {
    return await dynamo.put(params).promise();
};

module.exports.update = async (params) => {
    return await dynamo.update(params).promise();
};
