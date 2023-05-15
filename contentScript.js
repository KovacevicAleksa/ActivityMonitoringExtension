(() => {

    chrome.runtime.onMessage.addLisener((obj, sender, response) => {

        const {type, time} = obj;
        console.log(tabId);

        if(type == "NEW"){
            currentTab = tabId;
            newTabLoaded();

        }

    });

})();