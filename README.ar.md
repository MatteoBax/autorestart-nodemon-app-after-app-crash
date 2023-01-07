# تطبيق nodemon autorestart بعد تعطل التطبيق

هذا المشروع هو إعادة تشغيل nodemon تلقائيًا في حالة حدوث عطل.

# متطلبات

•Node.js

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
