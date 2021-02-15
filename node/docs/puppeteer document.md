> [Puppeteer 中文使用手册](https://zhaoqize.github.io/puppeteer-api-zh_CN/#/)

- 暂定

> Puppeteer 部署问题

- Puppeteer 使用 liunx 部署存在一些问题， 需要自己配置对应的环境，尤其在 docker 的沙箱环境中尤为明显

- Puppeteer 对应的解决问题的文档：[地址](https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md)

- Puppeteer 在部署时应该根据对应的 linux 环境, 配置对应的运行参数，但是存在一个问题，Puppeteer 的内存限制是否应该解除，是需要根据项目的情况决定的，但是建议运行复数容器也不建议解除内存限制

- 以下 Dockerfile 的代码：

  ```dockerfile
  # 内核版本 (debian), 其他内核请查看上面的文档
  FROM node:latest

  RUN apt-get update

  RUN apt-get update -qqy \
  && apt-get -qqy --no-install-recommends install \
      fonts-droid \
      ttf-wqy-zenhei \
      ttf-wqy-microhei \
      fonts-arphic-ukai \
      fonts-arphic-uming

  RUN apt-get install -yq gconf-service \
      libasound2 libatk1.0-0 libc6 \
      libcairo2 libcups2 libdbus-1-3 \
      libexpat1 libfontconfig1 \
      libgcc1 libgconf-2-4 \
      libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 \
      libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
      libstdc++6 libx11-6 libx11-xcb1 \
      libxcb1 libxcomposite1 libxcursor1 \
      libxdamage1 libxext6 libxfixes3 \
      libxi6 libxrandr2 libxrender1 \
      libxss1 libxtst6 ca-certificates fonts-liberation \
      libappindicator1 libnss3 \
      lsb-release xdg-utils
  ```

> Puppeteer 在 nodejs 中的使用

- Puppeteer 需要挂载在全局环境中，否则在并发请求中，内存可能是令人崩溃的

- 全局样例：

  ```

  ```

- 对应使用 Puppeteer 来实现的 API 需要将 Puppeteer 操作的结果转换为对应的类型数据，而非保存到服务器本地中

- API 样例

  ```

  ```
