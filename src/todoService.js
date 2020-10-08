'use strict';
const { v4: uuidv4 } = require('uuid');
const databaseManager = require('./io/db/manager');

module.exports.getAll = async () => {
    try {
        const items = await databaseManager.getAll();
        return items;
    } catch (error) {
        return [];
    }
};

module.exports.add = async (todo) => {
    const _todo = {
        id: uuidv4(),
        todo: todo,
        created: Date.now(),
        done: false,
    };
    return await databaseManager.add(_todo);
};

module.exports.update = async (todo) => {
    const _todo = {
        ...todo,
        done: !todo.done,
    };
    return await databaseManager.update(_todo);
};
