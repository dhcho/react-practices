## webpack-practice: ex07
1. 간단한 webpack loader 작성하고 설정해보기(src/text-loader.js)

2. 프로젝트 구조
    <pre>
      /ex07
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- bundle.js
        |--- src
        |       |--- text-loader.js
        |       |--- index.js
        |       |--- App.js
        |--- webpack.config.js [webpack 설정 파일]
    </pre>

3. webpack.config.js
```json
module.exports = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.txt$/i,
            use: path.resolve('src/text-loader')
        }]
    },
    devServer: {
        contentBase: path.resolve('public'),
        host: "0.0.0.0",
        port: 9999,
        inline: true,
        liveReload: true,
        hot: false,
        compress: true,
        historyApiFallback: true
    }
}
```

4. 빌드하기
```bash
$ npx webpack
```

5. test server 실행
```bash
$ npx webpack serve --progress
```