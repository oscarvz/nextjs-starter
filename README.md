# Personal Next.js starter

When I start a new project, [Next.js](https://nextjs.org/) is my preferred framework to get started with. It comes with SSG & SSR and other optimisations right out of the box and allows you to set up & deploy a product fast.

This repo houses a [bootstrapped Next.js project](https://nextjs.org/docs#setup) with TypeScript as the main language and some preferred libraries so I can get started on new projects immediately!


> For demonstration purposes I added a few components with basic styling to play around with.

#### A few neat things:
- The `styled-compnents` theme is typed so your text editor/IDE will give you suggestions;
- The theme currently generates CSS variables so playing around with different color options from your browser's dev tools is easy!

---

## Get started
You can clone this repo or use Github's '[use this template](https://github.com/oscarvz/nextjs-starter/generate)' function (the green button - it allows you to create a new repo with this code where this Git history is removed).

Before running below commands, make sure to create a `.env.local` file and add `BASE_URL=http://localhost:3000`.

### Using yarn:
```
yarn;
yarn dev
```

### Using NPM:
```
npm install;
npm run dev
```

## Added tech & libraries

### TypeScript

Since I started working with TypeScript in bigger projects I've come to realise I don't want to write vanilla JS anymore in bigger scoped projects.
A few points that made me stick to TS:

- Finding issues/bugs: the compiler points out what & where the problem is - before you're able to deploy anything;
- Working together: there's less backtracing of code and reading code is easier;
- Development process: it forces you to think differently about your code ("What the heck am I _actually_ doing?");
- Code completion & suggestions in text editors & IDE's!

[_website_](https://typescriptlang.org) | [_github_](https://github.com/Microsoft/TypeScript) | [_npm_](https://npmjs.com/package/typescript)

### Styled Components

Styling can easily become cumbersome when working with React. A library like `styled-components` slots perfectly into the React way of 'component thinking'. It allows you to keep the styling separated from the business logic in your components, making sure your components don't get cluttered and stay easier to read.

By making use of `styled-components` you introduce a tiny bit of JS overhead to your project, but will introduce a bunch of benefits:

- Theming: set up a global theme once and all your styled components can access it anywhere within the component tree;
- Modernising: scoped CSS per component, extending components;
- Optimisations: CSS gets injected only where it's needed. No more bulky CSS files!

[_website_](https://styled-components.com) | [_github_](https://github.com/styled-components/styled-components) | [_npm_](https://npmjs.com/package/styled-components)

### Prettier

_How_ you format code can be a personal preference and result in conflicts working with others; this problem is solved by making use of an opiniated formatting library like Prettier. It takes away the hassle of formatting your files manually by running the format command or [use a plugin](https://prettier.io/docs/en/editors.html) in your favorite IDE.

[_website_](https://prettier.io) | [_github_](https://github.com/prettier/prettier) | [_npm_](https://npmjs.com/package/prettier)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
