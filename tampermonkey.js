// ==UserScript==
// @name         移除互动弹幕
// @namespace    http://tampermonkey.net/
// @version      0.2
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
    $("#bilibiliPlayer").bind("DOMNodeInserted",function(e){
        $(".bilibili-player-link-wrap").children().remove();  // 会移除分辨率切换和视频传送门
        $(".bilibili-player-popup-area").children().remove(); // 会移除互动弹幕
    })
})();
