'use strict';

const dbConnector = require('./connector');

module.exports.saveItem = async (item) => {
    const params = {
        TableName: process.env.GREETER_DYNAMODB_TABLE,
        Item: item,
    };
    return await dbConnector.saveItem(params);
};

module.exports.getItem = async (name) => {
    const params = {
        TableName: process.env.GREETER_DYNAMODB_TABLE,
        Key: {
            name: name,
        },
    };
    return await dbConnector.getItem(params);
};

module.exports.getAll = async () => {
    const params = {
        TableName: process.env.TODO_DYNAMODB_TABLE,
    };
    return await dbConnector.getAll(params);
};

module.exports.add = async (item) => {
    const params = {
        TableName: process.env.TODO_DYNAMODB_TABLE,
        Item: item,
    };
    return await dbConnector.add(params);
};

module.exports.update = async (item) => {
    const params = {
        TableName: process.env.TODO_DYNAMODB_TABLE,
        Key: {
            id: item.id,
        },
        UpdateExpression: 'set done = :done',
        ExpressionAttributeValues: {
            ':done': item.done,
        },
        ReturnValues: 'UPDATED_NEW',
    };
    return await dbConnector.update(params);
};
