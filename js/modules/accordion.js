define(['exports','../utils/agent-detection','../utils/viewport-detection','../utils/respond'],function(a,b,c,d){'use strict';function e(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(a,'__esModule',{value:!0}),a.default=function(a){var b=(0,f.default)(a),c=(0,g.default)(a);return function(d){function e(){j.each(function(){a(this).off('click keydown',k.elementSelector('title')+':first'),i?-1<a.inArray(c.getViewportSize(),i)?(l.enable(a(this)),a(this).attr('data-accordion-open')?l.show(a(this)):l.hide(a(this))):(l.disable(a(this)),l.show(a(this))):(l.enable(a(this)),a(this).attr('data-accordion-open')?l.show(a(this)):l.hide(a(this)))}),j.on('click keydown',k.elementSelector('title')+':first',function(b){k.hasModifier('enabled')&&-1<[1,13].indexOf(b.which)&&(l.toggle(a(this).parent(f.elementSelector('section'))),b.preventDefault())})}var f=d.block('accordion').data('p.block'),g=f.getAttr('data-accordion-responsive'),i=g?g.split(','):null,j=f.element('section').block('accordion__section'),k=j.data('p.block');if(0==j.length)return!1;var l={init:function(){e()},enable:function(a){var b=a.data('p.block'),c='accordion_'+a.data('p.block').generateRandomId(),d=c+'_title',e=c+'_content',f=a.siblings(b).length;b.addModifier('enabled'),b.element('title').attr('id',d),b.element('title').addClass(b.elementClass('title--icon')),b.element('title').attr('tabindex','0'),b.element('title').attr('aria-controls',e),b.element('content').attr('id',e),b.element('content').attr('aria-labelledby',d),f&&(a.parent('.accordion').attr('role','tablist'),b.element('title').attr('role','tab'),b.element('content').attr('role','tabpanel'))},disable:function(a){var b=a.data('p.block'),c=a.siblings(b).length;b.removeModifier('enabled'),b.element('title').removeAttr('id'),b.element('title').removeClass(b.elementClass('title--icon')),b.element('title').removeAttr('tabIndex'),b.element('title').removeAttr('aria-controls'),b.element('content').removeAttr('id'),b.element('content').removeAttr('aria-labelledby'),c&&(a.parent('.accordion').removeAttr('role'),b.element('title').removeAttr('role'),b.element('content').removeAttr('role'))},show:function(a){var b=a.data('p.block');b.addModifier('active'),b.element('title').attr('aria-expanded','true'),b.element('content').attr('aria-hidden','false')},hide:function(a){var b=a.data('p.block');b.removeModifier('active'),b.element('title').attr('aria-expanded','false'),b.element('content').attr('aria-hidden','true')},toggle:function(a){a.data('p.block').hasModifier('active')?l.hide(a):l.show(a)}};if(l.init(),i){var m=(0,h.default)(a,c,b);m.respondOnBreakpoints(l.init,i)}return l}};var f=e(b),g=e(c),h=e(d)});