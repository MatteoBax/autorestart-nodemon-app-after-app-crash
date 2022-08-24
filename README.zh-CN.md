# 自动重启-nodemon-on-crash

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

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
