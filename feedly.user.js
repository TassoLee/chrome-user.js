// ==UserScript==
// @match http://*.feedly.com/*
// @match https://*.feedly.com/*
// ==/UserScript==

var css = " @namespace url(http://www.w3.org/1999/xhtml); ";

css += " div#sideArea { display: none !important; } "; // hide side area
css += " div#feedlyPage { width: auto !important; } "; // auto fit feedly page 

GM_addStyle(css);
