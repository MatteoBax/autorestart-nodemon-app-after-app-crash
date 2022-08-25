# autorestart-nodemon-on-crash

這個項目是為了在崩潰的情況下自動重啟nodemon。

# 要求

•Node.js

•Nodemon (installable with:

    npm i -g nodemon

)

# 使用說明：

編輯 config.json 文件，如示例中所示：

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

將 start.js 和 config.json 文件複製到您的項目文件夾並啟動它，使用：

    node start.js
