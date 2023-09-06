chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {

    if (message.action === "tab_create") {

        chrome.tabs.create({ url: "index.html"});
        sendResponse("index.html 오픈.");

        return true; // 비동기 통신과 연관이 있다.
    }
 
});