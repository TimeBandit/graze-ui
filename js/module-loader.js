define(['exports','./utils/jquery-loader'],function(a,b){'use strict';Object.defineProperty(a,'__esModule',{value:!0}),a.default=function(){var a=Object.assign([],d);Object.keys(a).map(function(b){var d=document.querySelectorAll('[data-p-module="'+b+'"]'),e=b;d&&require(['pistachio/modules/'+a[b]],function(a){[].forEach.call(d,function(b){var d=a.default(c.default)((0,c.default)(b));d&&((0,c.default)(b).data('p.'+e,d),(0,c.default)(b).trigger('p.'+e+'.init',d))})})})};var c=function(a){return a&&a.__esModule?a:{default:a}}(b),d={accordion:'accordion',dropDown:'drop-down',formField:'form-field',offScreenMenu:'off-screen-menu',tabbedContent:'tabbed-content',"tabbed-content":'tabbed-content',tabs:'tabbed-content',"love-like-dislike":'love-like-dislike',offScreenSearch:'off-screen-search'}});