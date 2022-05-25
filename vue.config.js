module.exports = {
  pluginOptions: {
    apollo: {
      enableMocks: false,
      enableEngine: true
    }
  }
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias.set('vue', '@vue/compat')
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.transpileOptions = {
          transforms: {
            dangerousTaggedTemplateString: true,
          },
        }
        return {options,compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }}
      })
  }
}
