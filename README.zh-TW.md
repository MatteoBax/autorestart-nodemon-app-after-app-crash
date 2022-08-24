# 自動重啟-nodemon-on-crash

這個項目是為了在崩潰的情況下自動重啟nodemon。

# 要求

•Node.js

•Nodemon（可安裝：

    npm i -g nodemon

)

# Instructions for use:

編輯 config.json 文件，如示例中所示：

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
