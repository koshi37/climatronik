
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/climatronik/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23679, hash: 'c6597577647c9e8266d8bfa086969a481fa5c0371fd78ef1ea7f650004946d7a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17151, hash: 'eaeaf6d164cc2dd6484542393636ad98d4901f70dcca097e728804c44ee9c80f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFY3N3BB.css': {size: 7085, hash: 'a316uWVkaw8', text: () => import('./assets-chunks/styles-ZFY3N3BB_css.mjs').then(m => m.default)}
  },
};
