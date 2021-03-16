// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse): void => {
  res.statusCode = 200;

  res.json([
    {
      name: 'Next.js',
      description:
        'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
      url: 'https://nextjs.org',
      logo: 'https://buttercms.com/static/images/tech_banners/Nextjs.b8a717322c08.png',
    },
    {
      name: 'TypeScript',
      description:
        'TypeScript extends JavaScript by adding types. By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code. Any browser, any OS, anywhere JavaScript runs. Entirely Open Source.',
      url: 'https://typescriptlang.org',
      logo: 'https://www.mlguides.com/wp-content/uploads/2019/08/typescript-logo-500x500.png',
    },
    {
      name: 'Styled Components',
      description:
        'styled-components is the result of wondering how we could enhance CSS for styling React component systems. By focusing on a single use case we managed to optimize the experience for developers as well as the output for end user',
      url: 'https://styled-components.com',
      logo: 'https://styled-components.com/logo.png',
    },
    {
      name: 'Prettier',
      description:
        'Prettier is an opinionated code formatter which removes all original styling and ensures that all outputted code conforms to a consistent style.',
      url: 'https://prettier.io',
      logo: 'https://prettier.io/icon.png',
    },
  ]);
};
