
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/MRXShion/candidate/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/MRXShion/candidate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 753, hash: '301ba048caed3cf24458eba6754b5fa1c6b0e409c4947f24c1e68e627ea6810c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1266, hash: '3ce344e52fb793478cd341959f76c584d6ee9bc8d5c0dcf6a78d29e23b586930', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4223, hash: '1b866dd5ca7d591c74976979d3b7f8ffc6e1f4f7e1e019319a33c0d1aaa5b680', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
