# ऐप क्रैश के बाद ऑटोरेस्टार्ट नोडमॉन ऐप

This project is to restart nodemon automatically in case of a crash.

# आवश्यकताएं

•नोड.जेएस

•नोडमोन (इसके साथ स्थापित करने योग्य:

    npm i -g nodemon

)

# Instructions for use:

config.json फ़ाइल को उदाहरण के अनुसार संपादित करें:

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
