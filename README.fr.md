# autorestart-nodemon-on-crash

Ce projet consiste à redémarrer nodemon automatiquement en cas de plantage.

# Conditions

•Node.js

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

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
