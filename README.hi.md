# ऐप क्रैश के बाद ऑटोरेस्टार्ट नोडमॉन ऐप

यह प्रोजेक्ट क्रैश होने की स्थिति में स्वचालित रूप से नोडमॉन को पुनरारंभ करना है।

# आवश्यकताएं

• नोड.जे.एस

•Nodemon (के साथ स्थापित करने योग्य:

    npm i -g nodemon

)

# उपयोग के लिए निर्देश:

उदाहरण के अनुसार config.json फ़ाइल संपादित करें:

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
