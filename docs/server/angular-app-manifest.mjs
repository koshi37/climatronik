
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23667, hash: '2ef4bd7b13a7de59f4827f89c8cdeb8ac2ec4b1c21fe8664e235df81fd8fe150', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17139, hash: '16efa033abdadfc2adb44b4479ed0b602ac9ec31e6947dcc6b80f35ecc429a77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFY3N3BB.css': {size: 7085, hash: 'a316uWVkaw8', text: () => import('./assets-chunks/styles-ZFY3N3BB_css.mjs').then(m => m.default)}
  },
};
