'use strict';

const todoService = require('../src/todoService');
const dbManagerMock = require('../src/io/db/manager');

describe('TodoService', () => {
    test('test getAll function', async () => {
        dbManagerMock.getAll = jest.fn().mockReturnValue([]);
        const res = await todoService.getAll();
        expect(res).toStrictEqual([]);
    });

    test('test getAll function with some tasks', async () => {
        dbManagerMock.getAll = jest
            .fn()
            .mockReturnValue([{ todo: 'todo-sample' }]);
        const res = await todoService.getAll();
        expect(res).toStrictEqual([{ todo: 'todo-sample' }]);
    });

    test('test getAll function with some error', async () => {
        dbManagerMock.getAll = jest.fn().mockImplementation(() => {
            throw new Error();
        });
        const res = await todoService.getAll();
        expect(res).toStrictEqual([]);
    });
});
