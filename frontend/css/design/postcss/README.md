> PostCSS 基础教程

- introduce

- install

  ```
  npm i -g|-D postcss-cli
  ```

- use

  ```
  npm run build
  ```

- config

  - postcss.config.js 是必须的配置，需要注意的是如果配置了 postcss.config.js，但是未配置响应的 postcss 插件的话，运行 npm run build 是无法生产编译文件的
  - 基本配置

    ```js
    const autoprefixer = require('autoprefixer');

    module.exports = {
      plugins: [
        autoprefixer({
          browsers: ['last 2 versions'],
        }),
      ],
    };
    ```

- plugins

  - autoprefixer

    - github 地址：https://github.com/postcss/autoprefixer
    - [配置项](https://github.com/postcss/autoprefixer#options)：

      ```js
      // 配置参考
      autoprefixer({
        browsers: ['last 2 versions'],
      });
      ```

  - custom
