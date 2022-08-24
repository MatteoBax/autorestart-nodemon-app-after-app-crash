# برنامج autorestart-nodemon-on-كراش

هذا المشروع هو إعادة تشغيل nodemon تلقائيًا في حالة حدوث عطل.

# متطلبات

• Node.js

• Nodemon (قابل للتثبيت مع:

    npm i -g nodemon

)

# تعليمات الاستخدام:

Edit the config.json file as in the example:

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

انسخ ملفات start.js و config.json إلى مجلد مشروعك ولبدأ تشغيله ، استخدم:

    node start.js
