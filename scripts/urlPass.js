var previousPageURL = document.referrer;
var currentPageURL = window.location.href;
console.log(window.location.href);
if (previousPageURL.indexOf("?") !== -1) {
    var previousPageQueryString = previousPageURL.split("?")[1];
    currentPageURL += "?" + previousPageQueryString;
    console.log("url replaced");
}
window.history.replaceState({}, "", currentPageURL);