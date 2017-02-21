
// 加 md5
fis.match('/img/*.{js,css,png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF}', {
  useHash: true,
});

// 所有的 js,css发布到/static/目录下
fis.match('*.{js,css}', {
  release : '/static/$0'
});

// 所有的.png，.gif，.jpeg, .jpg文件
fis.match('/img/*.{png,PNG,jpg,JPG,jpeg,JPEG,gif,GIF}', {
    //发布到/static/img/xxx目录下
    release: '/static/img/$1$2'
});

// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.js', {
  // fis-optimizer-uglify-js 插件进行压缩，已内置
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  // fis-optimizer-clean-css 插件进行压缩，已内置
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});

// //合并打包需加
// fis.match('::package', {
//   postpackager: fis.plugin('loader')
// });

// //css打包配置
// fis.match('*.css', {
//   packTo: '/static/baiduindex.css'
// });

// //js打包配置
// fis.match('*.js', {
//   packTo: '/static/baiduindex.js'
// });