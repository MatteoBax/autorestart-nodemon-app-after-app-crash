# autorestart-nodemon-on-crash

This project is to restart nodemon automatically in case of a crash.

# Conditions

• Node.js

• Nodemon (installable avec :

    npm i -g nodemon

)

# Mode d'emploi:

Modifiez le fichier config.json comme dans l'exemple :

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copiez les fichiers start.js et config.json dans votre dossier de projet et pour le démarrer, utilisez :

    node start.js
