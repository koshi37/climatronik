
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/climatronik/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23679, hash: '5d3a9ea812eb69e26fcce58f05c026363cb5902f7ba4680efa42ba9009c821e8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17151, hash: '77c621ef8a14e8bf5e2c533451d6564a9a20e4b3730aa277d28aa28d63da6403', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFY3N3BB.css': {size: 7085, hash: 'a316uWVkaw8', text: () => import('./assets-chunks/styles-ZFY3N3BB_css.mjs').then(m => m.default)}
  },
};
