# autorestart-nodemon-in caso di arresto anomalo

Questo progetto prevede il riavvio automatico di nodemon in caso di arresto anomalo.

# Requisiti

•Node.js

•Nodemon (installabile con:

    npm i -g nodemon

)

# Istruzioni per l'uso:

Modifica il file config.json come nell'esempio:

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
