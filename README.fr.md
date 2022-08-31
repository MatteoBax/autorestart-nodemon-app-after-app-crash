# redémarrage automatique de l'application nodemon après le crash de l'application

Ce projet consiste à redémarrer nodemon automatiquement en cas de plantage.

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
