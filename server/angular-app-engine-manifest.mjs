
export default {
  basePath: 'https://mrxshion.github.io/candidate',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
