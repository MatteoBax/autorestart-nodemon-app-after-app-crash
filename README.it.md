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

Copia i file start.js e config.json nella cartella del tuo progetto e per avviarlo usa:

    node start.js
