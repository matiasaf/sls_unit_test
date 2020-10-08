'use strict';

const service = require('../src/service');
const dbManagerMock = require('../src/io/db/manager');


describe('sayHello', () => {
    test('Undefined name greet', () => {
        const greet = service.sayHello();
        expect(greet).toBe('Hello World!');
    });

    test('with a name', () => {
        const greet = service.sayHello('Matias');
        expect(greet).toBe('Hello Matias!');
    });
});

describe('sayHelloAndRecord', () => {
    test('With a name', () => {
        dbManagerMock.saveItem = jest.fn();
        return service.sayHelloAndRecord('Juan').then((greet) => {
            expect(dbManagerMock.saveItem).toBeCalledTimes(1);
            expect(greet).toBe('Hello Juan!');
        });
    });
});

describe('getGreeting', () => {
    test('get greeting', async () => {
        const item = {
            name: 'Kilo',
            timestamp: Date.now(),
        };
        dbManagerMock.getItem = jest.fn().mockReturnValue(item);

        const result = await service.wasGreeted('Kilo');

        expect(result).toBe(true);
    });
    test('get greeted non existing name', async () => {
        dbManagerMock.getItem = jest.fn().mockReturnValue(undefined);

        const result = await service.wasGreeted('Kilo');

        expect(result).toBe(false);
    });
});
