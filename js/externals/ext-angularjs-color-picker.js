/*!
 * angular-color-picker v0.3.5
 * https://github.com/ruhley/angular-color-picker/
 *
 * Copyright 2015 ruhley
 *
 * 2015-05-27 19:06:53
 *
 */
!function(){"use strict";angular.module("color.picker",[])}(),function(){"use strict";var a=function(a,b){return{restrict:"E",require:["^ngModel"],scope:{ngModel:"=",colorPickerAlpha:"=",colorPickerCase:"=",colorPickerFormat:"=",colorPickerPos:"=",colorPickerSwatch:"=",colorPickerSwatchOnly:"=",colorPickerSwatchPos:"="},templateUrl:"template/color-picker/directive.html",link:function(c,d,e,f){c.init=function(){if(void 0===c.ngModel)c.hue=0,c.saturation=0,c.lightness=100;else{var b=tinycolor(c.ngModel);if(b.isValid()){var d=b.toHsv();c.hue=d.h,c.saturation=100*d.s,c.lightness=100*d.v}}c.initConfig(),a.on("click",function(a){0===c.find(a.target).length&&(c.log("Color Picker: Document Hide Event"),c.hide())})},c.initConfig=function(){c.config={},c.config.alpha=void 0===c.colorPickerAlpha?!0:c.colorPickerAlpha,c.config.case=void 0===c.colorPickerCase?"upper":c.colorPickerCase,c.config.format=void 0===c.colorPickerFormat?"hsl":c.colorPickerFormat,c.config.pos=void 0===c.colorPickerPos?"bottom left":c.colorPickerPos,c.config.swatch=void 0===c.colorPickerSwatch?!0:c.colorPickerSwatch,c.config.swatchOnly=void 0===c.colorPickerSwatchOnly?!1:c.colorPickerSwatchOnly,c.config.swatchPos=void 0===c.colorPickerSwatchPos?"left":c.colorPickerSwatchPos,c.log("Color Picker: Config",c.config)},c.focus=function(){c.log("Color Picker: Focus Event"),c.find(".color-picker-input")[0].focus()},c.show=function(){c.log("Color Picker: Show Event"),c.visible=!0,c.hueMouse=!1,c.opacityMouse=!1,c.colorMouse=!1},c.hide=function(a){c.log("Color Picker: Hide Event"),c.visible=!1,a!==!1&&c.$apply()},c.update=function(){var a,b=tinycolor({h:c.hue,s:c.saturation/100,v:c.lightness/100});switch(c.config.alpha&&b.setAlpha(c.opacity/100),c.log("Color Picker: COLOR CHANGED TO ",b,c.hue,c.saturation,c.lightness,c.opacity),c.swatchColor=b.toHslString(),c.config.format){case"rgb":a=b.toRgbString();break;case"hex":a=b.toHexString(),a="lower"===c.config.case?a.toLowerCase():a.toUpperCase();break;case"hex8":a=b.toHex8String(),a="lower"===c.config.case?a.toLowerCase():a.toUpperCase();break;case"hsv":a=b.toHsvString();break;default:a=b.toHslString()}c.ngModel=a},c.$watch("ngModel",function(a,d){if(void 0!==a&&a!==d){c.log("Color Picker: MODEL - CHANGED",a);var g=tinycolor(a);if(g.isValid()){var h=g.toHsv();c.isValid?(c.hue=h.h,c.saturation=100*h.s,c.lightness=100*h.v,c.config.alpha&&(c.opacity=100*h.a)):(c.show(),b(function(){c.hue=h.h,c.saturation=100*h.s,c.lightness=100*h.v,c.config.alpha&&(c.opacity=100*h.a),c.hide()})),c.isValid=!0}else c.isValid=!1;f[0].$setValidity(e.name,c.isValid),void 0!==d&&f[0].$setDirty()}}),c.$watch("colorPickerFormat",function(a,b){void 0!==a&&a!==b&&("hex"===a&&(c.colorPickerAlpha=!1),c.initConfig(),c.update())}),c.$watchGroup(["colorPickerAlpha","colorPickerCase"],function(a,b){void 0!==a&&(c.initConfig(),c.update())}),c.$watchGroup(["colorPickerSwatchPos","colorPickerSwatchOnly","colorPickerSwatch","colorPickerPos"],function(a,b){void 0!==a&&c.initConfig()}),c.hueDown=function(){c.log("Color Picker: HUE - MOUSE DOWN"),c.hueMouse=!0},c.hueUp=function(){c.log("Color Picker: HUE - MOUSE UP"),c.hueMouse=!1},c.hueChange=function(a,b){if(c.hueMouse||b){c.log("Color Picker: HUE - MOUSE CHANGE");var d=c.find(".color-picker-hue");c.hue=360*(1-(a.pageY-c.offset(d,"top"))/d.prop("offsetHeight"))}},c.$watch("hue",function(a,b){void 0!==a&&(c.log("Color Picker: HUE - CHANGED"),c.huePos=100*(1-a/360),c.grid=tinycolor({h:a,s:100,v:1}).toHslString(),c.huePos<0?c.huePos=0:c.huePos>100&&(c.huePos=100),c.update())}),c.opacityDown=function(){c.log("Color Picker: OPACITY - MOUSE DOWN"),c.opacityMouse=!0},c.opacityUp=function(){c.log("Color Picker: OPACITY - MOUSE UP"),c.opacityMouse=!1},c.opacityChange=function(a,b){if(c.opacityMouse||b){c.log("Color Picker: OPACITY - MOUSE CHANGE");var d=c.find(".color-picker-opacity");c.opacity=100*(1-(a.pageY-c.offset(d,"top"))/d.prop("offsetHeight"))}},c.$watch("opacity",function(a,b){void 0!==a&&(c.log("Color Picker: OPACITY - CHANGED"),c.opacityPos=100*(1-a/100),c.opacityPos<0?c.opacityPos=0:c.opacityPos>100&&(c.opacityPos=100),c.update())}),c.colorDown=function(){c.log("Color Picker: COLOR - MOUSE DOWN"),c.colorMouse=!0},c.colorUp=function(){c.log("Color Picker: COLOR - MOUSE UP"),c.colorMouse=!1},c.colorChange=function(a,b){if(c.colorMouse||b){c.log("Color Picker: COLOR - MOUSE CHANGE");var d=c.find(".color-picker-grid-inner");c.saturation=(a.pageX-c.offset(d,"left"))/d.prop("offsetWidth")*100,c.lightness=100*(1-(a.pageY-c.offset(d,"top"))/d.prop("offsetHeight"))}},c.$watch("saturation",function(a,b){void 0!==a&&a!==b&&(c.log("Color Picker: SATURATION - CHANGED"),c.saturationPos=a/100*100,c.saturationPos<0?c.saturationPos=0:c.saturationPos>100&&(c.saturationPos=100),c.update())}),c.$watch("lightness",function(a,b){void 0!==a&&a!==b&&(c.log("Color Picker: LIGHTNESS - CHANGED"),c.lightnessPos=100*(1-a/100),c.lightnessPos<0?c.lightnessPos=0:c.lightnessPos>100&&(c.lightnessPos=100),c.update())}),c.log=function(){},c.find=function(a){var b,e=c.wrapper?c.wrapper[0]:d[0],f=[];if(!a)return f;if("string"==typeof a){if(1!==(b=e.nodeType)&&9!==b)return[];f=e.querySelectorAll(a)}else c.contains(e,a)&&f.push(a);return angular.element(f)},c.contains=function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},c.offset=function(a,b){var c,d=0,e=0,f=document.documentElement||document.body;return 0===a.length?null:(d=a[0].getBoundingClientRect().left+(window.pageXOffset||f.scrollLeft),e=a[0].getBoundingClientRect().top+(window.pageYOffset||f.scrollTop),c={left:d,top:e},void 0!==b?c[b]:c)},c.init()}}};a.$inject=["$document","$timeout"],angular.module("color.picker").directive("colorPicker",a)}(),angular.module("color.picker").run(["$templateCache",function(a){a.put("template/color-picker/directive.html",'<div class="color-picker-wrapper" ng-class="{\'color-picker-swatch-only\': config.swatchOnly}">\n   <input class="color-picker-input form-control" type="text" ng-model="ngModel" size="7" ng-focus="show()" ng-class="{\'color-picker-input-swatch\': config.swatch && !config.swatchOnly && config.swatchPos === \'left\'}">\n   <span class="color-picker-swatch" ng-click="focus()" ng-show="config.swatch" ng-class="{\'color-picker-swatch-left\': config.swatchPos !== \'right\', \'color-picker-swatch-right\': config.swatchPos === \'right\'}">\n       <span class="color-picker-swatch-color" style="background-color: {{swatchColor}};"></span>\n   </span>\n   <div class="color-picker-panel" ng-show="visible" ng-class="{\n       \'color-picker-panel-top color-picker-panel-right\': config.pos === \'top right\',\n       \'color-picker-panel-top color-picker-panel-left\': config.pos === \'top left\',\n       \'color-picker-panel-bottom color-picker-panel-right\': config.pos === \'bottom right\',\n       \'color-picker-panel-bottom color-picker-panel-left\': config.pos === \'bottom left\',\n   }">\n       <div class="color-picker-hue color-picker-sprite" ng-click="hueChange($event, true)" ng-mousemove="hueChange($event, false)" ng-mousedown="hueDown()" ng-mouseup="hueUp()">\n           <div class="color-picker-slider" style="top: {{huePos}}%;"></div>\n       </div>\n       <div class="color-picker-opacity color-picker-sprite" ng-show="config.alpha" ng-click="opacityChange($event, true)" ng-mousemove="opacityChange($event, false)" ng-mousedown="opacityDown()" ng-mouseup="opacityUp()">\n           <div class="color-picker-slider" style="top: {{opacityPos}}%;"></div>\n           </div>\n       <div class="color-picker-grid color-picker-sprite" style="background-color: {{grid}};" ng-click="colorChange($event, true)" ng-mousemove="colorChange($event, false)" ng-mousedown="colorDown()" ng-mouseup="colorUp()">\n           <div class="color-picker-grid-inner"></div>\n           <div class="color-picker-picker" style="top: {{lightnessPos}}%; left: {{saturationPos}}%;">\n               <div></div>\n           </div>\n       </div>\n   </div>\n</div>')}]);
