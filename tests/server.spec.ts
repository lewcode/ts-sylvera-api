import { server } from '../src/server/index';

let serverInstance: ReturnType<typeof server>;
const PORT = 4000;
const BASE_URL = `http://localhost:${PORT}`;

jest.mock('../src/prisma/client', () => ({
  prisma: {
    projects: {
      findMany: jest.fn().mockResolvedValue([
        { id: 1, name: 'Project A' },
        { id: 2, name: 'Project B' },
      ]),
    },
  },
}));

beforeAll(() => {
  serverInstance = server();
});

describe('server endpoint tests', () => {
  describe('/status', () => {
    it('should return online', async () => {
      const response = await fetch(`${BASE_URL}/status`);
      expect(response.status).toBe(200);
      const text = await response.text();
      expect(text).toBe('online');
    });
  });

  describe('unknown route', () => {
    it('should return 404 for unknown endpoints', async () => {
      const response = await fetch(`${BASE_URL}/unknown`);
      expect(response.status).toBe(404);
    });
  });

   describe('projects', () => {
    it('get should return a list of projects', async () => {
      const response = await fetch(`${BASE_URL}/projects`, {
        method: 'GET'
      });
      const body = await response.json()

      expect(body).toMatchObject([
        { id: 1, name: 'Project A' },
        { id: 2, name: 'Project B' },
      ]);
    });
  });
});