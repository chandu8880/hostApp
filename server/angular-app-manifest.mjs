
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/hostApp/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/hostApp/login",
    "route": "/hostApp"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U72ZBK4X.js",
      "chunk-APVXYIED.js",
      "chunk-ZAQTHZHB.js"
    ],
    "route": "/hostApp/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z5ZO33CS.js",
      "chunk-ZAQTHZHB.js"
    ],
    "route": "/hostApp/shell"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z5ZO33CS.js",
      "chunk-ZAQTHZHB.js",
      "chunk-COKUO36C.js"
    ],
    "route": "/hostApp/shell/dashboard"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z5ZO33CS.js",
      "chunk-ZAQTHZHB.js",
      "chunk-44LLFR2A.js",
      "chunk-APVXYIED.js"
    ],
    "route": "/hostApp/shell/users"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-Z5ZO33CS.js",
      "chunk-ZAQTHZHB.js",
      "chunk-44LLFR2A.js",
      "chunk-APVXYIED.js"
    ],
    "route": "/hostApp/shell/users/userscreate"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 769, hash: '50ecba1859435f9fab74a332a815e42f2e3b5e8e74bcfa9c585ad2c76b3fa291', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1114, hash: '154f2a46509231adc5d12cffa7a58522364c9cf2b77fa51ee847545e792856a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 4872, hash: 'b3ac0828834a3cfc7963f9c1cc614f34b3fe5250a660dc51a5b3c4711eee93df', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'shell/users/userscreate/index.html': {size: 4924, hash: 'ef38b405ef2eae229b9db8781cfee357ca7fd672e45056abed9995a706019f55', text: () => import('./assets-chunks/shell_users_userscreate_index_html.mjs').then(m => m.default)},
    'shell/index.html': {size: 4820, hash: 'a87719cc79a9da2562bd4bc56aae325f5fb6b533814c73428160f8f94c7bce7e', text: () => import('./assets-chunks/shell_index_html.mjs').then(m => m.default)},
    'shell/dashboard/index.html': {size: 4872, hash: 'eab09be4a016bf1c967e82e628752f22f3516a221215a0f046c76c9dbe828e30', text: () => import('./assets-chunks/shell_dashboard_index_html.mjs').then(m => m.default)},
    'shell/users/index.html': {size: 4924, hash: 'ef38b405ef2eae229b9db8781cfee357ca7fd672e45056abed9995a706019f55', text: () => import('./assets-chunks/shell_users_index_html.mjs').then(m => m.default)},
    'styles-BTFZHADD.css': {size: 819, hash: 'O0csshp8+/U', text: () => import('./assets-chunks/styles-BTFZHADD_css.mjs').then(m => m.default)}
  },
};
