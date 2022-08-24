# ऑटोरेस्टार्ट-नोडमोन-ऑन-क्रैश

यह परियोजना दुर्घटना की स्थिति में स्वचालित रूप से नोडमॉन को पुनः आरंभ करने के लिए है।

# Requirements

•नोड.जेएस

•Nodemon (installable with:

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

start.js और config.json फ़ाइलों को अपने प्रोजेक्ट फ़ोल्डर में कॉपी करें और इसे शुरू करने के लिए उपयोग करें:

    node start.js
