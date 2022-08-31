# 应用程序崩溃后自动重启 nodemon 应用程序

这个项目是为了在崩溃的情况下自动重启nodemon。

# 要求

•Node.js

•Nodemon（可安装：

    npm i -g nodemon

)

# 使用说明：

编辑 config.json 文件，如示例中所示：

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

将 start.js 和 config.json 文件复制到您的项目文件夹并启动它，使用：

    node start.js
