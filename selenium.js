var webdriverio = require('webdriverio');

var options = {desiredCapabilities : {browserName:'chrome'}};

webdriverio
    .remote(options)
    .init()
    .url('http://wwww.msn.com')
    .saveScreenshot('./Screenshots/buddyworks.png')
    .end();


