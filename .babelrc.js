module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './components',
        },
      },
    ],
    [
      'styled-components',
      {
        ssr: true,
        displayName: process.env.NODE_ENV !== 'production',
        preprocess: false,
      },
    ],
  ],
};
