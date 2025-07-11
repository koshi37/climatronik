
export default {
  basePath: 'https://github.com/koshi37/climatronik',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
