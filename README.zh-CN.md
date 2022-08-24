# 自动重启-nodemon-on-crash

This project is to restart nodemon automatically in case of a crash.

# 要求

•Node.js

•Nodemon (installable with:

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
