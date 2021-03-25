// ==UserScript==
// @name         p4u-pwt-tools
// @description  Tools for +4U made by powerTea
// @version      1.0.0
// @namespace    https://uuos9.plus4u.net/
// @homepage     https://github.com/powerTea-cz/p4u-pwt-tools
// @author       powerTea-cz
// @license      MIT
// @require      https://code.jquery.com/jquery-3.2.1.min.js
// @grant        GM_addStyle
// @match        https://plus4u.net/ues/*
// @run-at       document-idle
// ==/UserScript==

/* globals $ */

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
}

`);

const SWF_UNIT_NAME = "D9";

(function () {
  "use strict";
  function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    // Get first day of year
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    // Return array of year and week number
    return [d.getUTCFullYear(), weekNo];
  }

  function getCurrentSA() {
    document.getElementById("system-menu-icon-link").click();
    let currentWeek = getWeekNumber(new Date());
    console.log("SA for week", currentWeek);
    setTimeout(function () {
      document.getElementById(
        "quickFindInput"
      ).value = `UNI-BT:SWF.${SWF_UNIT_NAME}/SA${currentWeek[0]}${currentWeek[1]}`;
      document.getElementById("quickfindLink").click();
    }, 200);
  }

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

  $("<button>").html("Aktuální SA").click(getCurrentSA).appendTo(panel);

  $("<button>").html("TSR").click(getTsr).appendTo(panel);

  $("body").append(panel);
})();
