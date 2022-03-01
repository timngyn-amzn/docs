import {postCallback} from '../app';
import httpMocks from '../../src/node_modules/node-mocks-http';

describe('Express app', () => {
  describe('Post feedback', () => {
    it('Should return 400 error when vote is not boolean', () => {
      const request = httpMocks.createRequest({
        method: 'POST',
        url: '/feedback',
        headers: {
          "content-type": "application/json"
        },
        body: {
          vote: 1,
          page_path: "path"
        }
      });

      const response = httpMocks.createResponse();
      postCallback(request, response)

      expect(response.statusCode).toBe(400);
    });

    it('Should return 400 error when vote is not in body', () => {
      const request = httpMocks.createRequest({
        method: 'POST',
        url: '/feedback',
        headers: {
          "content-type": "application/json"
        },
        body: {
          page_path: "path"
        }
      });

      const response = httpMocks.createResponse();
      postCallback(request, response)

      expect(response.statusCode).toBe(400);
    });

    it('Should return 400 error when path is not a string', () => {
      const request = httpMocks.createRequest({
        method: 'POST',
        url: '/feedback',
        headers: {
          "content-type": "application/json"
        },
        body: {
          vote: true,
          page_path: 1
        }
      });

      const response = httpMocks.createResponse();
      postCallback(request, response)

      expect(response.statusCode).toBe(400);
    });

    it('Should return 400 error when path is not in body', () => {
      const request = httpMocks.createRequest({
        method: 'POST',
        url: '/feedback',
        headers: {
          "content-type": "application/json"
        },
        body: {
          vote: true
        }
      });

      const response = httpMocks.createResponse();
      postCallback(request, response)

      expect(response.statusCode).toBe(400);
    });
  });
});