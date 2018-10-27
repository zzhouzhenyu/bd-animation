# 移动端baiduWM多页动画练习

## 环境搭建
  - webpack 4
  - webpack-cli
  - webpack-dev-server
  - clean-webpack-plugin
  
#### html处理
  - html-webpack-plugin

#### css处理
  - stylus
  - stylus-loader
  - css-loader
  - postcss-loader
  - autoprefixer
  - cssnano
  - mini-css-extract-plugin
  
#### 图片处理
  - file-loader
  - url-loader

#### vendor
  - swiper
  - zepto
  - normalize.css
  - fastclick
    + 解决移动端300ms点击延迟
  
## 静态页面
  - loading - page1 普通入场界面
  - page2 - page8 swiper滚动页面
  
## 动画
  - 公共动画
  - 特别动画
  
## 屏幕适配 rem
  - 640宽设计图为标准, 1rem = 40px
  - 移动端html-font-siz计算公式 : 
  - font-size = Width / 640 * 40 px (Width为屏幕宽度)
  - font-size = Width / 16
  
## stylus
  - 使用styles书写css并预编译
  - rem换算
  - function
  - mixin混入
  
#总结:

- 此次练习加深自己对css3动画的理解与熟练度, styuls的使用, 及webpack开发环境的搭建
- 练习中使用styuls语言来书写css, 个人感觉是非常好的, 里面提供了体验非常好的语法, 结合快捷键使用, 比起常规的css书写更加简洁. styuls中大量的语法和js都是相通的, 其变量的书写, 函数的计算, 混入功能写法都非常精简, 比起scss等css预处理语言, 其写法更加优雅.
- 最后是webpack 4, 因为是最近开始倒腾的, 所以只用了常规的插件和基本的配置. 其webpack-dev-server插件拥有模块热更新功能, 在开发环境中调试非常方便. 同时其优秀的打包能力, 代码分割和插件系统非常强大

# bd1.0
