define(['exports','../utils/agent-detection'],function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0}),a.default=function(a){var b=(0,c.default)(a);return function(c){function d(){i.css('top',j.outerHeight(!0)),k.androidJsSupport()&&k.initOffScreenAndroidStock(),k.iOSJsSupport()&&k.initOffScreenIos()}function e(){g.on('click',function(b){b.preventDefault(),a(this).toggleClass('off-screen--active'),h.toggleClass('off-screen--active'),i.toggleClass('off-screen--active'),j.toggleClass('off-screen--active')})}function f(){g.on('click',function(){a('#off-screen-trigger').removeAttr('checked'),a(this).toggleClass('off-screen--active'),h.toggleClass('off-screen--active'),i.toggleClass('off-screen--active'),j.toggleClass('off-screen--active')})}var g=c,h=a('.off-screen-menu:first'),i=a('.page-wrapper:first'),j=a('.off-screen-header:first'),k={init:function(){d()},initOffScreenAndroidStock:function(){e()},initOffScreenIos:function(){f()},androidJsSupport:function(){if(b.detectAndroidStockBrowser())return!0},iOSJsSupport:function(){if(5>b.iOSversion())return!0}};return k.init(),k}};var c=function(a){return a&&a.__esModule?a:{default:a}}(b)});