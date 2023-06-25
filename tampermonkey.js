// ==UserScript==
// @name         移除互动弹幕
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       ADBIN
// @match        *://*.bilibili.com/video/*
// @grant        none
// @run-at       document-end
// @require      https://code.jquery.com/jquery-1.7.2.min.js
// ==/UserScript==

(function() {
    'use strict';
    console.log("JqueryVersion: ",$.fn.jquery);  //显示jquery版本
    //console.log("aaa")
    $("#bilibili-player").bind("DOMNodeInserted",function(e){
        $(".bpx-player-cmd-dm-inside").children().remove();
    })
})();
