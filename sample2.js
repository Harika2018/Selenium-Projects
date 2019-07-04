var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder()
    		.withCapabilities(webdriver.Capabilities.chrome()).build();
browser.get('https://nationwide.co.uk') ;
browser.quit()	
