
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://github.com/koshi37/climatronik',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 23704, hash: '85ce2eac1a36e1d1241284f591ac1ae8a966057e53873a611aa7d79ccda3d514', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17176, hash: 'e55fb0015173416c1a78d06914d7f9573bf53cf952e3e9adcb433ac81c1269e1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZFY3N3BB.css': {size: 7085, hash: 'a316uWVkaw8', text: () => import('./assets-chunks/styles-ZFY3N3BB_css.mjs').then(m => m.default)}
  },
};
