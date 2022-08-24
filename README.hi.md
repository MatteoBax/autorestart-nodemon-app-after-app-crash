# ऑटोरेस्टार्ट-नोडमोन-ऑन-क्रैश

यह परियोजना दुर्घटना की स्थिति में स्वचालित रूप से नोडमॉन को पुनः आरंभ करने के लिए है।

# आवश्यकताएं

•नोड.जेएस

•नोडमोन (इसके साथ स्थापित करने योग्य:

    npm i -g nodemon

)

# उपयोग के लिए निर्देश:

config.json फ़ाइल को उदाहरण के अनुसार संपादित करें:

```json
{
    "file":"/sdcard/bot/main.js",
    "pathToWatch":"/sdcard/bot"
}
```

Copy the start.js and config.json files to your project folder and to start it use:

    node start.js
