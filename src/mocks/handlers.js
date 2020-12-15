import { rest } from 'msw';
import uuid from 'uuid-random';

export const handlers = [
  rest.get('https://publisher-9bb8.restdb.io/rest/books', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          _id: uuid(), title: 'Тихий Дон', chapters: [
            { id: 0, title: 'глава 1', subsections: [{id: 0, title: 'подраздел 1', ready: false}] }
          ]
        }
      ])
    );
  })
]
