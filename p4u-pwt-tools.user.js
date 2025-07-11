// ==UserScript==
// @name         p4u-pwt-tools
// @description  Tools for +4U made by powerTea
// @version      1.2
// @namespace    https://uuos9.plus4u.net/
// @homepage     https://github.com/powerTea-cz/p4u-pwt-tools
// @author       powerTea-cz
// @license      MIT
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        GM_addStyle
// @match        https://plus4u.net/ues/*
// @run-at       document-idle
// ==/UserScript==

/* globals $, GM_addStyle */

GM_addStyle(`
div.pwt-container {
width: 80px;
min-height: 72px;
text-align: center;
position: absolute;
left: 8px;
top: 264px;
border: solid 2px black;
border-radius: 2px;
background: white;
}

div.pwt-container > span {
display: block;
margin-bottom: 8px;
}

div.pwt-container > button {
width: 64px;
color: white;
background-color: #2196f3;
border-color: #2196f3;
border-radius: 4px;
border-style: solid;
margin-bottom: 8px;
}

`);

(function () {
  "use strict";

  function getTsr() {
    document.getElementById("system-menu-icon-link").click();
    setTimeout(function () {
      document.getElementById("quickFindInput").value = `UNI-BT:SWF.D/TSR`;
      document.getElementById("quickfindLink").click();
    }, 200);
  }

  if (self !== top) return;

  let panel = $("<div class='pwt-container'>")
    .attr("id", "pwt-panel")
    .appendTo("body");

  $("<span>").text("Tools").appendTo(panel);
  $("<button>").html("TSR").click(getTsr).appendTo(panel);

  $("body").append(panel);
})();
