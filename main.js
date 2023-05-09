var tabId = window.performance.getEntriesByType('navigation')[0].sourceIndex;

var tabName = document.title;


//Is brower supprt Page Visibility API
if (typeof document.hidden !== "undefined") {
  
  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        //tab is unactive
      //trackTimeOnTab(false);
      console.log("Tab je " + tabName +" ID "+ tabId)
    } else {
      //tab is active
      //trackTimeOnTab(true);
      console.log("Tab je " + tabName +" ID "+ tabId)
      
    }
  });
} else {
    alert("Brower dont support Visibility API");

}

;