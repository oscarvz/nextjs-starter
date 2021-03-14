// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;
  res.json([
    {
      name: 'TypeScript',
      description: 'lorem',
      url: 'https://typescriptlang.org',
      logo: 'https://www.mlguides.com/wp-content/uploads/2019/08/typescript-logo-500x500.png',
    },
  ]);
};
