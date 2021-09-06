本项目代码示例旨在帮助开发者理解和上手企业微信群机器人相关的开发，基于 `Express` 与 `VueCli` 构建。


<img src="https://wwcdn.weixin.qq.com/node/wework/images/wecom-temp-9d97515494480d008d3f52f03ffaa9f8.bb20633533.png" width="500" />




## 主要功能

本代码示例中包含群机器人相关的以下功能：

* 发送文本类消息
* 发送图片类消息
* 发送 MarkDown 类消息
* 发送文件类消息

关于群机器人开发更多的信息，可以参考 [群机器人开发](https://openoss.wxwork.woa.com/api/docEdit/90000/90136/91770) 文档。参考以下操作，下载示例代码并完成服务部署：


## 下载示例代码

打开命令行工具，执行以下命令，下载服务端代码。
```bash
git clone https://github.com/WecomTeam/RobotSample.git
```

## 配置项目信息

打开下载的代码工程，在根目录将 `main.config.demo.js` 复制一份到 `main.config.js` 文件中，并根据实际项目情况补充以下配置信息：

> **提示：**该文件配置的信息极其重要，切勿泄漏。

```javascript
{
	// 对应群聊机器人的 Webhook URL
	webhookurl : 'PLEASE_INPUT_YOUR_WEBHOOK_URL'
}
```

## 安装项目依赖

在已下载的示例代码项目根目录下，执行以下代码完成依赖安装：
```bash
# with npm
npm install 
# with yarn
yarn i
```

## 启动服务

执行以下命令，启动后端服务

```bash
# with npm
npm run start
# with yarn
yarn  start
```

## 访问服务

在浏览器中访问 http://localhost:3000/#/ 检查服务是否启动成功。

