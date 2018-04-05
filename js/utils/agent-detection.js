define(['exports'], function (a) {
    'use strict';
    Object.defineProperty(a, '__esModule', {
        value: !0
    }), a.default = function () {
        return {
            iOSversion: function () {
                if (/iP(hone|od touch|ad)/.test(navigator.platform)) {
                    var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                    return parseInt(a[1], 10)
                }
            },
            detectAndroidStockBrowser: function () {
                var a = navigator.userAgent,
                    b = -1 < a.indexOf('Mozilla/5.0') && -1 < a.indexOf('Android ') && -1 < a.indexOf('AppleWebKit') && !(-1 < a.indexOf('Chrome'));
                return b
            }
        }
    }
});