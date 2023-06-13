# 應用程序崩潰後自動重啟 nodemon 應用程序

這個項目是在崩潰的情況下自動重啟 nodemon。

# 要求

•Node.js

•Nodemon（可安裝：

    npm i -g nodemon

)

# 使用說明：

如示例所示編輯 config.json 文件：

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
