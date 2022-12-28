const styled = require('esbuild-plugin-styled-components')

module.exports = options => {
  const isDev = !!options.watch
  return {
    bundle: true,
    target: ['es2015'],
    entry: ['src/index.ts'],
    format: ['cjs', 'esm', 'iife'],
    dts: true,
    sourcemap: true,
    minify: !isDev,
    esbuildPlugins: [
      styled({
        displayName: isDev,
        minify: !isDev,
      }),
    ],
    esbuildOptions(options) {
      options.external = ['react', 'react-dom']
    },
  }
}
