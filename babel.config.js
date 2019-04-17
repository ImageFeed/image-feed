module.exports = {
  presets: [
    [ '@babel/env', {
      targets: {
        node: '8'
      }
    } ]
  ],
  plugins: [
    [ 'module-resolver', {
      alias: {
        '@core': './src/core',
        "@theme": "./src/themes/default",
        '@site': './src/site',
        '@worker': './src/worker'
      }
    } ],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread'
  ]
}