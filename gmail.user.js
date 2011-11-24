// ==UserScript==
// @match http://mail.google.com/*
// @match https://mail.google.com/*
// ==/UserScript==

var css = " @namespace url(http://www.w3.org/1999/xhtml); ";

css += " table.T1HY1.nH.iY { width:100% !important; } "; // expand mail text
css += " table.Bs.nH.iY td.Bu:last-child { display:none; } "; // hide right bar ads
css += " div.Zs { display:none; } "; // ads under a open mail
css += " div.pS.pY { display:none; } "; // Invite a friend
css += " div.w-asK.w-atd { display:none; } "; // Send feedback

GM_addStyle(css);
