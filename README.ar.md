# تطبيق nodemon autorestart بعد تعطل التطبيق

This project is to restart nodemon automatically in case of a crash.

# متطلبات

• Node.js

• Nodemon (قابل للتثبيت مع:

    npm i -g nodemon

)

# تعليمات الاستخدام:

قم بتحرير ملف config.json كما في المثال:

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

انسخ ملفات start.js و config.json إلى مجلد مشروعك ولبدأ تشغيله ، استخدم:

    node start.js
