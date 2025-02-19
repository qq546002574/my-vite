let config = {
  plugins: [
    {
      name: 'vite:pre-alias',
      configureServer: [Function: configureServer
      ],
      resolveId: [AsyncFunction: resolveId
      ]
    },
    {
      name: 'alias',
      buildStart: [AsyncFunction: buildStart
      ],
      resolveId: [Function: resolveId
      ]
    },
    {
      name: 'vite:modulepreload-polyfill',
      resolveId: [Function: resolveId
      ],
      load: [Function: load
      ]
    },
    {
      name: 'vite:resolve',
      configureServer: [Function: configureServer
      ],
      resolveId: [AsyncFunction: resolveId
      ],
      load: [Function: load
      ]
    },
    {
      name: 'vite:optimized-deps',
      configureServer: [Function: configureServer
      ],
      load: [AsyncFunction: load
      ]
    },
    {
      name: 'vite:html-inline-proxy',
      resolveId: [Function: resolveId
      ],
      load: [Function: load
      ]
    },
    {
      name: 'vite:css',
      configureServer: [Function: configureServer
      ],
      buildStart: [Function: buildStart
      ],
      transform: [AsyncFunction: transform
      ]
    },
    {
      name: 'vite:esbuild',
      configureServer: [Function: configureServer
      ],
      configResolved: [AsyncFunction: configResolved
      ],
      buildEnd: [Function: buildEnd
      ],
      transform: [AsyncFunction: transform
      ]
    },
    { name: 'vite:json', transform: [Function: transform
      ]
    },
    {
      name: 'vite:wasm',
      resolveId: [Function: resolveId
      ],
      load: [AsyncFunction: load
      ]
    },
    {
      name: 'vite:worker',
      buildStart: [Function: buildStart
      ],
      load: [Function: load
      ],
      transform: [AsyncFunction: transform
      ],
      renderChunk: [Function: renderChunk
      ]
    },
    {
      name: 'vite:asset',
      buildStart: [Function: buildStart
      ],
      resolveId: [Function: resolveId
      ],
      load: [AsyncFunction: load
      ],
      renderChunk: [Function: renderChunk
      ],
      generateBundle: [Function: generateBundle
      ]
    },
    {
      name: 'vite:vue',
      handleHotUpdate: [Function: handleHotUpdate
      ],
      config: [Function: config
      ],
      configResolved: [Function: configResolved
      ],
      configureServer: [Function: configureServer
      ],
      buildStart: [Function: buildStart
      ],
      resolveId: [AsyncFunction: resolveId
      ],
      load: [Function: load
      ],
      transform: [Function: transform
      ]
    },
    { name: 'vite:define', transform: [Function: transform
      ]
    },
    {
      name: 'vite:css-post',
      buildStart: [Function: buildStart
      ],
      transform: [AsyncFunction: transform
      ],
      renderChunk: [AsyncFunction: renderChunk
      ],
      generateBundle: [AsyncFunction: generateBundle
      ]
    },
    {
      name: 'vite:worker-import-meta-url',
      configureServer: [Function: configureServer
      ],
      transform: [AsyncFunction: transform
      ]
    },
    { name: 'vite:client-inject', transform: [Function: transform
      ]
    },
    {
      name: 'vite:import-analysis',
      configureServer: [Function: configureServer
      ],
      transform: [AsyncFunction: transform
      ]
    }
  ],
  server: {
    preTransformRequests: true,
    fs: { strict: true, allow: [Array
      ], deny: [Array
      ]
    }
  },
  define: { __VUE_OPTIONS_API__: true, __VUE_PROD_DEVTOOLS__: false
  },
  ssr: { external: [ 'vue', '@vue/server-renderer'
    ]
  },
  configFile: 'D:/code/FE/my_vite/vite.config.ts',
  configFileDependencies: [ 'D:/code/FE/my_vite/vite.config.ts'
  ],
  inlineConfig: {
    root: undefined,
    base: undefined,
    mode: undefined,
    configFile: undefined,
    logLevel: undefined,
    clearScreen: undefined,
    server: {}
  },
  root: 'D:/code/FE/my_vite',
  base: '/',
  resolve: { dedupe: undefined, alias: [
      [Object
      ],
      [Object
      ]
    ]
  },
  publicDir: 'D:\\code\\FE\\my_vite\\public',
  cacheDir: 'D:\\code\\FE\\my_vite\\node_modules\\.vite',
  command: 'serve',
  mode: 'development',
  isWorker: false,
  isProduction: false,
  build: {
    target: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'
    ],
    polyfillModulePreload: true,
    outDir: 'dist',
    assetsDir: 'assets',
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    cssTarget: [ 'es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'
    ],
    sourcemap: false,
    rollupOptions: {},
    minify: 'esbuild',
    terserOptions: {},
    write: true,
    emptyOutDir: null,
    manifest: false,
    lib: false,
    ssr: false,
    ssrManifest: false,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500,
    watch: null,
    commonjsOptions: { include: [Array
      ], extensions: [Array
      ]
    },
    dynamicImportVarsOptions: { warnOnError: true, exclude: [Array
      ]
    }
  },
  preview: {
    port: undefined,
    strictPort: undefined,
    host: undefined,
    https: undefined,
    open: undefined,
    proxy: undefined,
    cors: undefined,
    headers: undefined
  },
  env: { BASE_URL: '/', MODE: 'development', DEV: true, PROD: false
  },
  assetsInclude: [Function: assetsInclude
  ],
  logger: {
    hasWarned: false,
    info: [Function: info
    ],
    warn: [Function: warn
    ],
    warnOnce: [Function: warnOnce
    ],
    error: [Function: error
    ],
    clearScreen: [Function: clearScreen
    ],
    hasErrorLogged: [Function: hasErrorLogged
    ]
  },
  packageCache: Map(0) {},
  createResolver: [Function: createResolver
  ],
  optimizeDeps: {
    esbuildOptions: { keepNames: undefined, preserveSymlinks: undefined
    }
  },
  worker: {
    format: 'iife',
    plugins: [
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ],
      [Object
      ]
    ],
    rollupOptions: {}
  }
}