
export default {
  basePath: 'https://github.com/MRXShion/candidate',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
