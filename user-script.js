// ==UserScript==
// @name         +4U Tools
// @homepage     https://github.com/powerTea-cz/p4u-pwt-tools
// @version      0.1
// @description  Tools and shortcuts for +4U
// @author       You
// @match        https://plus4u.net/ues/*
// @grant        none
// @require      http://code.jquery.com/jquery-2.1.4.min.js
// ==/UserScript==

/* globals $ */

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
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
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

  let panel = $("<div>")
    .attr("id", "pwt-panel")
    .css("position", "absolute")
    .css("left", "8px")
    .css("top", "264px")
    .css("width", "64px")
    .css("height", "128px")
    .css("border", "solid 2px black")
    .css("background-color", "white")
    .css("text-align", "center")
    .appendTo("body");

  $("<span>")
    .text("Tools")
    .css("display", "block")
    .css("margin-bottom", "8px")
    .appendTo(panel);

  let button = $("<button>")
    .html("Aktuální SA")
    .click(getCurrentSA)
    .appendTo(panel);

  $("body").append(panel);
})();
