'use strict';

const handler = require('../../../src/io/handler');

describe('Handler', () => {
    test('test query params', () => {
        const event = {
            queryStringParameters: {
                name: 'Matias',
            },
        };
        const { name } = handler.inputQueryParams(event);
        expect(name).toBe('Matias');
    });

    test('test success response and status code equals to 200', () => {
        const res = handler.successResponse('OK response');
        expect(res.statusCode).toBe(200);
    });

    test('test error response and status code equals to 404', () => {
      const res = handler.errorResponse('Error response');
      expect(res.statusCode).toBe(404);
  });
});
