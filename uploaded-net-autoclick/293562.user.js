// ==UserScript==
// @name        Uploaded.net free download autoclick on page load
// @namespace   dx
// @include     http://uploaded.net/file/*
// @version     1.0
// @grant       none
// @require     http://code.jquery.com/jquery-1.10.0.min.js
// ==/UserScript==
this.jQuery = jQuery.noConflict(true);
jQuery(function () {
    var h1 = jQuery("#captcha button.free h1");
    if (h1.text() == "Free Download") {
        h1.parent().click();
    }
})