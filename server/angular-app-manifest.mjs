
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://mrxshion.github.io/candidate/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/candidate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 752, hash: '3cc8dbff44bb88b009197914a6ea937d4081e5526647eca9df799d61ea0efc2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1265, hash: 'c6b4e8b4263fd994bbbed62eda023cfa398107cfa8e47f53c16579d23361d073', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4222, hash: '10715ed5c6692ed41c9587cc313f87bd2c24412f000ebf105b7ebf0d6c10730f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
