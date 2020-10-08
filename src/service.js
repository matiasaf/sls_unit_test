'use strict';

const databaseManager = require('./io/db/manager');

module.exports.sayHello = (name) => {
    if (name) {
        return `Hello ${name}!`;
    } else {
        return 'Hello World!';
    }
};

module.exports.sayHelloAndRecord = async (name) => {
    if (name) {
        await recordGreeting(name);
    }
    return this.sayHello(name);
};

module.exports.wasGreeted = async (name) => {
    const item = await databaseManager.getItem(name);
    return item !== undefined ? true : false;
};

async function recordGreeting(name) {
    const item = {
        name: name,
        timestamp: Date.now(),
    };
    return await databaseManager.saveItem(item);
}
