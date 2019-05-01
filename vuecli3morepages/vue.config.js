// vue.config.js
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');  //去掉console.log
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
    outputDir:'dist',
    pages: {
      ui: {
        // page 的入口
        entry: "src/views/index/main.js",
        // 模板来源
        template: "public/index.html",
        // 在 dist/index.html 的输出
        filename: "index.html",
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: "Index Page",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", "ui"]
      },
      hh: {
        // page 的入口
        entry: "src/views/ui/main.js",
        // 模板来源
        template: "public/ui.html",
        // 在 dist/index.html 的输出
        filename: "ui.html",
        // 当使用 title 选项时，
        // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
        title: "Index Page",
        // 在这个页面中包含的块，默认情况下会包含
        // 提取出来的通用 chunk 和 vendor chunk。
        chunks: ["chunk-vendors", "chunk-common", "hh"]
      },
      // 当使用只有入口的字符串格式时，
      // 模板会被推导为 `public/subpage.html`
      // 并且如果找不到的话，就回退到 `public/index.html`。
      // 输出文件名会被推导为 `subpage.html`。

    },
    chainWebpack:config=>{
          /**
     * 删除懒加载模块的 prefetch preload，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#preload
     * 而且预渲染时生成的 prefetch 标签是 modern 版本的，低版本浏览器是不需要的
     */
      config.plugins
      .delete('prefetch')
      .delete('preload')
    // 解决 cli3 热更新失效 https://github.com/vuejs/vue-cli/issues/1559
     config.resolve
      .symlinks(true)
      config
      // 开发环境
      .when(process.env.NODE_ENV === 'development',
      // sourcemap不包含列信息

        config => config.devtool('cheap-source-map')
      )
      // 非开发环境
      .when(process.env.NODE_ENV !== 'development', config => {
          config.optimization
            .minimizer([
              new UglifyJsPlugin({
                uglifyOptions: {
                  // 移除 console
                  // 其它优化选项 https://segmentfault.com/a/1190000010874406
                  compress: {
                    warnings: false,
                    drop_console: true,
                    drop_debugger: true,
                    pure_funcs: ['console.log']
                  }
                }
              })
            ])
        })
      //添加别名
      config.resolve.alias
      .set('@',resolve('src'))
    }
  }