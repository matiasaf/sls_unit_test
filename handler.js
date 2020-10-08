'use strict';

const service = require('./src/service');
const todoService = require('./src/todoService');
const handler = require('./src/io/handler');

module.exports.hello = async (event) => {
    const { name } = handler.inputQueryParams(event);
    const greet = service.sayHello(name);
    return handler.successResponse(greet);
};

module.exports.moi = async (event) => {
    const { name } = handler.inputQueryParams(event);
    const greet = await service.sayHelloAndRecord(name);
    return handler.successResponse(greet);
};

module.exports.wasGreeted = async (event) => {
    const { name } = handler.inputQueryParams(event);
    const result = await service.wasGreeted(name);
    if (result) {
        return handler.successResponse('Greet found');
    } else {
        return handler.errorResponse('Greet NOT found');
    }
};

// TODO LAMBDAS

module.exports.getAll = async (event) => {
    const results = await todoService.getAll();
    return handler.successResponse(results);
};

module.exports.add = async (event) => {
    const { todo } = handler.inputBodyParsed(event);
    try {
        await todoService.add(todo);
        return handler.successResponse('OK');
    } catch (error) {
        return handler.errorResponse('Some problems creating the task');
    }
};

module.exports.update = async (event) => {
    const todo = handler.inputBodyParsed(event);
    try {
        await todoService.update(todo);
        return handler.successResponse('OK');
    } catch (error) {
        return handler.errorResponse(error);
    }
};
