## ex07: CRA 로 만든 Application 직접 설정해서 만들어보기

1. 프로젝트 생성
    ```bash
    $ mkdir ex07
    $ cd ex07
    $ npm init -y
    $ npm i -D webpack webpack-cli webpack-dev-server babel-loader @babel/core @babel/preset-env @babel/preset-react css-loader style-loader sass-loader node-sass file-loader
    $ npm i react react-dom
    ```
2. 프로젝트 디렉토리
    <pre>
      /ex07
        |--- package.json
        |--- package-lock.json
        |--- node-modules
        |--- public
        |       |--- index.html
        |       |--- bundle.js    [빌드결과물]
        |--- src

        |       |--- index.js
        |       |--- App.js
        |--- webpack.config.js
        |--- babel.config.json
    </pre>

3. scripts
```javascript
  "scripts": {
    "start": "npx webpack serve --progress",
    "build": "npx webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

4. webpack.config.js
    ```javascript
    const path = require('path');

    module.exports = {
        entry: path.resolve('src/index.js'),
        output: {
            path: path.resolve('public'),
            filename: 'bundle.js'
        },
        module: {
            rules:[{
                test: /\.css$/i,
                use:['style-loader', 'css-loader']
            }, {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.(svg|jpe?g|gif|png|tiff?|bmp|ico|)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: '/assets/images',
                    name: '[name].[ext]'
                }
            }, {
                test: /\.js$/i,
                exclude: /node_modules/,
                loader: 'babel-loader'
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

5. babel.config.json
    ```json
    {
        "presets":[["@babel/env", {
            "targets": {
                "ie": "11",
                "edge": "89",
                "firefox": "92",
                "chrome": "90",
                "opera": "76",
                "safari": "15"
            }
        }], "@babel/react"]
    }
    ```

6. 빌드(번들링)
```bash
$ npm run build
```

7. test(개발서버 실행)
```
$ npm start
```