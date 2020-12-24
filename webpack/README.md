<h1> Webpack 结合 figma-plugin-ds 示例</h>

<img src="./assets/panel.png" style="width:221px; height:611px;"></img>

* * *

# 安装
```bash
npm install
```

# 构建
```bash
npx webpack
```

在 macOS 10.15 上构建时，会出现如下错误：
```bash
ERROR in   TypeError: Cannot read property 'source' of undefined
  
  - index.js:53 HtmlWebpackInlineSourcePlugin.resolveSourceMaps
    [webpack]/[html-webpack-inline-source-plugin]/index.js:53:22
```

找到 `node_modules/html-webpack-inline-source-plugin/index.js` 的第116行
```javascript
var assetName = path.posix.relative(publicUrlPrefix, assetUrl);
```

将其改为
```javascript
var assetName = path.posix.relative(publicUrlPrefix, assetUrl).replace(/^(\.\.\/)+/g, '');
```

* * *

# 参考链接
- https://www.figma.com/plugin-docs/bundling-webpack/
- https://github.com/figma/plugin-typings
- https://github.com/thomas-lowry/figma-plugin-ds

<br/>

- **figma-plugin-ds.css** https://cdn.jsdelivr.net/gh/thomas-lowry/figma-plugin-ds/dist/figma-plugin-ds.css

- **figma-plugin-ds.js**  https://cdn.jsdelivr.net/gh/thomas-lowry/figma-plugin-ds/dist/iife/figma-plugin-ds.js

- **figma.d.ts**  https://raw.githubusercontent.com/figma/plugin-typings/master/index.d.ts