// ==UserScript==
// @name         ivan2adam
// @version      1.0
// @description  Changes for the IVAN app
// @match        http://172.18.4.102/IVAN/*
// @grant        none
// @homepage     https://github.com/powerTea-cz/p4u-pwt-tools
// @author       powerTea-cz
// @license      MIT
// ==/UserScript==

/* globals $ */

(function() {
    'use strict';

    $("span:contains('BUFSUC')").parents("tr").css("background-color", "#e8f3ff");
    $("span:contains('FE-BUF-DEV')").parents("tr").css("background-color", "#e8f3ff");
    $("span:contains('FE-BUF-TEST')").parents("tr").css("background-color", "#e8f3ff");
    $("span:contains('BUFFET')").parents("tr").css("background-color", "#e8f3ff");
    $("span:contains('UNIT_MASTER_I')").parents("tr").css("background-color", "#e8f3ff");
    setTimeout(function() {
        $("body > nav > div > div.navbar-collapse.collapse > ul:nth-child(1) > li:nth-child(2) > a").html("<span class='glyphicon glyphicon-fire'></span> Commitnul jsem").css('font-weight', 'bold');
        $("body > nav > div > div.navbar-collapse.collapse > ul:nth-child(1) > li:nth-child(3) > a:first").html("<span class='glyphicon glyphicon-lamp'></span> Prostředí vole").css('font-weight', 'bold');
        $("body > nav > div > div.navbar-header > a > span").text("ADAM");
        $("body > nav > div > div.navbar-header > a > img").remove();
        $("title").html("ADAM")
        $(".container-fluid > p").html("© 2020 - Ivan Adamovič Poletov");
    },0);
    $("body > div > div.jumbotron > h2").html("ADAM");
    $("body > div > div:nth-child(5) > div > h3").html("Administrace Damasů Auditovaná Manažery");
})();