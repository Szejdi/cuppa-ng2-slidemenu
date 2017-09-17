webpackJsonp([2,4],{

/***/ 292:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 292;


/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(407);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/shadi/WebstormProjects/cuppa-ng2-slidemenu/src/main.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent() {
        this.menuItemsArray = [
            { "title": "Electricity", "link": "#" },
            { "title": "Mobile Bill", "link": "#" },
            { "title": "Home and Kitchen", "link": "#",
                "subItems": [
                    { "title": "Furniture", "link": "#" },
                    { "title": "Cookware", "link": "#" },
                ]
            },
            { "title": "Car and Bike Accessories", "link": "#",
                "subItems": [
                    { "title": "Tyres and Alloys", "link": "#" },
                    { "title": "Comfort and Safety", "link": "#" },
                ]
            },
            { "title": "Interior Design", "link": "#",
                "subItems": [
                    { "title": "Furniture", "link": "#" },
                    { "title": "Matress and Flowers", "link": "#" },
                ]
            },
            { "title": "Televisions", "link": "#",
                "subItems": [
                    { "title": "Samsung", "link": "#" },
                    { "title": "LG", "link": "#" },
                ]
            },
            { "title": "Computer Accessories", "link": "#",
                "subItems": [
                    { "title": "Keyboards", "link": "#" },
                    { "title": "Monitors", "link": "#" },
                ]
            },
        ];
        this.showdemomsg = false;
        this.npminstallScript = 'npm install cuppa-ng2-slidemenu';
        this.installScript = "import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';";
        this.moduleScript = "import { NgModule } from '@angular/core';\n" +
            "import { BrowserModule } from '@angular/platform-browser';\n" +
            "import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';\n" +
            "import { AppComponent } from './app.component';\n" +
            "\n" +
            "@NgModule({\n" +
            "   bootstrap: [ AppComponent ],\n" +
            "   declarations: [AppComponent],\n" +
            "   imports: [SlideMenuModule] // Import SlideMenu module variable here \n" +
            "})\n" +
            "export class AppModule {\n" +
            "}";
        this.htmlTag = '<cuppa-slidemenu [menulist]="menuItemsArray" (open)="onMenuOpen()" (close)="onMenuClose()" (onItemSelect)="onItemSelect($event)"></cuppa-slidemenu>';
        this.jsScript = 'private menuItemsArray: any[] = [ \n' +
            '       {"title":"Electricity","link":"#"},\n' +
            '       {"title":"Mobile Bill","link":"#"},\n' +
            '       {"title":"Home and Kitchen","link":"#",\n' +
            '       "subItems":[\n' +
            '                   {"title":"Furniture","link":"#"},\n' +
            '                   {"title":"Cookware","link":"#"},\n' +
            '                  ]\n' +
            '       },\n' +
            '       {"title":"Car and Bike Accessories","link":"#",\n' +
            '        "subItems":[\n' +
            '                     {"title":"Tyres and Alloys","link":"#"},\n' +
            '                     {"title":"Comfort and Safety","link":"#"},\n' +
            '                    ]\n' +
            '       },\n' +
            ' ];\n' +
            'public onMenuClose(){\n' +
            '    console.log("menu closed");\n' +
            '}\n' +
            'public onMenuOpen(){\n' +
            '    console.log("menu Opened");\n' +
            '}\n' +
            'private onItemSelect(item:any){\n' +
            '    console.log(item);\n' +
            '};';
    }
    AppComponent.prototype.onMenuClose = function () {
        console.log("menu closed");
    };
    AppComponent.prototype.onMenuOpen = function () {
        console.log("menu Opened");
    };
    AppComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.showMsg = function () {
        this.showdemomsg = true;
    };
    AppComponent.prototype.hideMsg = function () {
        this.showdemomsg = false;
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'app',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* ViewEncapsulation */].None,
            styles: [__webpack_require__(464)],
            template: __webpack_require__(470)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/shadi/WebstormProjects/cuppa-ng2-slidemenu/src/app.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__slideMenuNavigation_slideMenu__ = __webpack_require__(406);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__slideMenuNavigation_slideMenu__["a" /* SlideMenuModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/shadi/WebstormProjects/cuppa-ng2-slidemenu/src/app.module.js.map

/***/ }),

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickOutsideDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
    }
    ClickOutsideDirective.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])(), 
        __metadata('design:type', Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* HostListener */])('document:click', ['$event', '$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object, Object]), 
        __metadata('design:returntype', void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Directive */])({
            selector: '[clickOutside]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _a) || Object])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
    var _a;
}());
//# sourceMappingURL=/Users/shadi/WebstormProjects/cuppa-ng2-slidemenu/src/clickOutside.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clickOutside__ = __webpack_require__(405);
/* unused harmony export SlideMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlideMenu = (function () {
    function SlideMenu(_elementRef, sanitizer) {
        this._elementRef = _elementRef;
        this.sanitizer = sanitizer;
        this.open = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.itemSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.addOverlayElement();
    }
    SlideMenu.prototype.ngOnInit = function () {
        this.menuState = false;
    };
    SlideMenu.prototype.ngAfterViewInit = function () {
    };
    SlideMenu.prototype.menuToggle = function () {
        this.menuState = !this.menuState;
        this.toggleOverlay();
        if (this.menuState) {
            this.open.emit();
        }
        else {
            this.close.emit();
        }
    };
    SlideMenu.prototype.closeMenu = function () {
        this.menuState = false;
        this.overlayElem.style['opacity'] = 0;
    };
    SlideMenu.prototype.onItemClick = function (item) {
        this.itemSelect.emit(item);
    };
    SlideMenu.prototype.toggleSubMenu = function (item) {
        item.expand = !item.expand;
    };
    SlideMenu.prototype.addOverlayElement = function () {
        this.overlayElem = document.createElement('div');
        this.overlayElem.classList.add('cuppa-menu-overlay');
        this.overlayElem.style['position'] = 'fixed';
        this.overlayElem.style['background'] = 'rgba(0, 0, 0, 0.7)';
        this.overlayElem.style['top'] = 0;
        this.overlayElem.style['left'] = 0;
        this.overlayElem.style['right'] = 0;
        this.overlayElem.style['bottom'] = 0;
        this.overlayElem.style['opacity'] = 0;
        this.overlayElem.style['pointer-events'] = 'none';
        this.overlayElem.style['transition'] = 'all .2s linear';
        document.getElementsByTagName('body')[0].appendChild(this.overlayElem);
    };
    SlideMenu.prototype.toggleOverlay = function () {
        if (this.overlayElem.style['opacity'] == 0) {
            this.overlayElem.style['opacity'] = 1;
        }
        else if (this.overlayElem.style['opacity'] == 1) {
            this.overlayElem.style['opacity'] = 0;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Input */])(), 
        __metadata('design:type', Object)
    ], SlideMenu.prototype, "menulist", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])('open'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === 'function' && _a) || Object)
    ], SlideMenu.prototype, "open", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])('close'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === 'function' && _b) || Object)
    ], SlideMenu.prototype, "close", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Output */])('onItemSelect'), 
        __metadata('design:type', (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]) === 'function' && _c) || Object)
    ], SlideMenu.prototype, "itemSelect", void 0);
    SlideMenu = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
            selector: 'cuppa-slidemenu',
            template: __webpack_require__(471),
            styles: [__webpack_require__(463)]
        }), 
        __metadata('design:paramtypes', [(typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* ElementRef */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === 'function' && _e) || Object])
    ], SlideMenu);
    return SlideMenu;
    var _a, _b, _c, _d, _e;
}());
var SlideMenuModule = (function () {
    function SlideMenuModule() {
    }
    SlideMenuModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* CommonModule */]],
            declarations: [SlideMenu, __WEBPACK_IMPORTED_MODULE_3__clickOutside__["a" /* ClickOutsideDirective */]],
            exports: [SlideMenu, __WEBPACK_IMPORTED_MODULE_3__clickOutside__["a" /* ClickOutsideDirective */]]
        }), 
        __metadata('design:paramtypes', [])
    ], SlideMenuModule);
    return SlideMenuModule;
}());
//# sourceMappingURL=/Users/shadi/WebstormProjects/cuppa-ng2-slidemenu/src/slideMenu.js.map

/***/ }),

/***/ 407:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/shadi/WebstormProjects/cuppa-ng2-slidemenu/src/environment.js.map

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, ".menu-container {\n  width: 250px;\n  height: 100%;\n  position: fixed;\n  background: #fff;\n  top: 52px;\n  bottom: 0;\n  right: 0;\n  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);\n  border-right: 1px solid #ccc;\n  font-family: 'Arial',sans-serif;\n  overflow: auto;\n  height: calc(100% - 60px);\n  z-index: 9999999;\n  box-shadow: 0px 5px 2px #ccc; }\n\n.menu-container .show-menu {\n  right: 0; }\n\n.menu-container.hide-menu {\n  right: -250px; }\n\n.menu-open {\n  margin-left: 250px !important; }\n\n.cuppa-menu ul {\n  list-style: none;\n  padding: 0px; }\n\n.sub-menu > li > a {\n  padding-left: 50px !important; }\n\n.cuppa-menu ul > li > a {\n  display: block;\n  padding: 15px 30px;\n  background: #fff;\n  text-decoration: none;\n  border-bottom: 1px solid #ccc; }\n\n.cuppa-menu ul > li > a:hover {\n  background: #3fd48f !important;\n  color: #fff; }\n\n.cuppa-menu ul > li > a > i {\n  font-size: 24px;\n  float: right;\n  margin-top: -2px;\n  pointer-events: none; }\n\n/*!\n * Hamburgers\n * @description Tasty CSS-animated hamburgers\n * @author Jonathan Suh @jonsuh\n * @site https://jonsuh.com/hamburgers\n * @link https://github.com/jonsuh/hamburgers\n */\n/*.hamburger {\n  float: left;\n  padding: 15px 15px;\n  display: inline-block;\n  cursor: pointer;\n  transition-property: opacity, filter;\n  transition-duration: 0.15s;\n  transition-timing-function: linear;\n  font: inherit;\n  color: inherit;\n  text-transform: none;\n  background-color: transparent;\n  border: 0;\n  margin: 0;\n  height: 26px;\n  overflow: visible; }\n  .hamburger:hover {\n    opacity: 0.7; }\n\n.hamburger-box {\n  width: 40px;\n  height: 24px;\n  display: inline-block;\n  position: relative; }\n.hamburger:focus{\n    outline: none;\n}\n.hamburger-inner {\n  display: block;\n  top: 50%;\n  margin-top: -2px; }\n  .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {\n    width: 40px;\n    height: 2px;\n    background-color: #000;\n    border-radius: 4px;\n    position: absolute;\n    transition-property: transform;\n    transition-duration: 0.15s;\n    transition-timing-function: ease; }\n  .hamburger-inner::before, .hamburger-inner::after {\n    content: \"\";\n    display: block; }\n  .hamburger-inner::before {\n    top: -10px; }\n  .hamburger-inner::after {\n    bottom: -10px; }\n\n.hamburger--arrow.is-active .hamburger-inner::before {\n  transform: translate3d(-9px, 0, 0) rotate(-45deg) scale(0.7, 1); }\n\n.hamburger--arrow.is-active .hamburger-inner::after {\n  transform: translate3d(-9px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::before {\n  transform: translate3d(9px, 0, 0) rotate(45deg) scale(0.7, 1); }\n\n.hamburger--arrow-r.is-active .hamburger-inner::after {\n  transform: translate3d(9px, 0, 0) rotate(-45deg) scale(0.7, 1); }*/\n.cuppa-menu-overlay {\n  position: fixed;\n  background: #000;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: none;\n  transition: all 1s linear; }\n\n.show-overlay {\n  display: block; }\n\n.hide-overlay {\n  display: none; }\n\n/* Hamburger Styles */\n.hamburger {\n  font-size: 50px;\n  float: left;\n  display: inline-block;\n  width: 40px;\n  height: 24px;\n  padding: 0;\n  margin-top: 12px;\n  margin-left: 15px;\n  cursor: pointer;\n  transition: -webkit-transform .2s ease-in-out;\n  transition: transform .2s ease-in-out;\n  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n  -moz-transition: transform .2s ease-in-out;\n  -webkit-transition: transform .2s ease-in-out;\n  vertical-align: middle;\n  border: 0 none;\n  background: transparent; }\n\n.hamburger::-moz-focus-inner {\n  padding: 0;\n  border: 0 none; }\n\n.hamburger:focus {\n  outline: 0; }\n\n.hamburger:before,\n.hamburger:after {\n  content: \"\"; }\n\n.hamburger:before,\n.hamburger .icon,\n.hamburger:after {\n  display: block;\n  width: 100%;\n  height: 4px;\n  margin: 0 0 8px;\n  transition: -webkit-transform .2s ease-in-out;\n  transition: transform .2s ease-in-out;\n  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n  -moz-transition: transform .2s ease-in-out;\n  -webkit-transition: transform .2s ease-in-out;\n  border-radius: .25em;\n  -moz-border-radius: 25em;\n  -webkit-border-radius: .25em;\n  background: #000; }\n\n.hamburger.is-active:before,\n.hamburger.is-active .icon,\n.hamburger.is-active:after {\n  background: #000; }\n\n.hamburger.hamburger-arrow-left.is-active {\n  transform: rotate(180deg);\n  -moz-transform: rotate(180deg);\n  -webkit-transform: rotate(180deg); }\n\n.hamburger.hamburger-arrow-left.is-active:before {\n  width: 23px;\n  transform: translateX(0.4em) translateY(0.2em) rotate(45deg);\n  -moz-transform: translateX(0.4em) translateY(0.2em) rotate(45deg);\n  -webkit-transform: translateX(19px) translateY(4px) rotate(45deg); }\n\n.hamburger.hamburger-arrow-left.is-active:after {\n  width: 23px;\n  transform: translateX(0.4em) translateY(-0.2em) rotate(-45deg);\n  -moz-transform: translateX(0.4em) translateY(-0.2em) rotate(-45deg);\n  -webkit-transform: translateX(19px) translateY(-4px) rotate(-45deg); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(53)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 470:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n         <cuppa-slidemenu [menulist]=\"menuItemsArray\" (open)=\"onMenuOpen()\" (close)=\"onMenuClose()\" (onItemSelect)=\"onItemSelect($event)\"></cuppa-slidemenu>\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          <a class=\"navbar-brand\" href=\"https://cuppalabs.github.io/cuppa-ng2-slidemenu/\">\n          <img alt=\"Brand\" src=\"assets/img/cuppa-logo.png\">\n          Cuppa Slide Menu</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li><a href=\"http://cuppalabs.github.io/components/slidemenu\">Getting Started<span class=\"sr-only\">(current)</span></a></li>\n              <li><a href=\"http://cuppalabs.github.io/components/slidemenu/\">Documentation</a></li>\n              <li><a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu\">Github</a></li>\n\n            </ul>\n        </div><!--/.navbar-collapse -->\n      </div>\n    </nav>\n    <div class=\"jumbotron col-md-12\">\n      <div class=\"col-md-6\">\n        <img style=\"width:18%;\" src=\"assets/img/angular-logo.png\">\n        <h1 class=\"component-title\">Cuppa Slide Menu</h1>\n        <h2>Angular 2 slide out navigation menu for web and mobile</h2>\n        <h4>Click on hamburger menu on top left  corner</h4>\n\n        <p class=\"bt-group\">\n            <a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu\" target=\"_blank\" type=\"button\" class=\"btn btn-danger btn-lg\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i><span class=\"hidden-xs\">Github</span></a>\n            <a href=\"#\" (click)=\"showMsg()\" type=\"button\" class=\"btn btn-danger btn-lg\"><i class=\"fa fa-tv\" aria-hidden=\"true\"></i><span class=\"hidden-xs\">Demo</span></a>\n            <a href=\"https://github.com/CuppaLabs/cuppa-ng2-slidemenu/archive/master.zip\" type=\"button\" class=\"btn btn-danger btn-lg\"><i class=\"fa fa-download\" aria-hidden=\"true\"></i><span class=\"hidden-xs\"> Download </span></a>\n        </p>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"iphone-img\">\n        <img style=\"width: 100%;\" src=\"assets/img/iphone-empty.png\">\n        <video type=\"video/webm\" loop=\"\" autoplay=\"\" src=\"assets/img/demo4.webm\"></video>\n        </div>\n      </div>\n    </div>\n    <div class=\"guiding-overlay\" *ngIf=\"showdemomsg\" (click)=\"hideMsg()\">\n        <div class=\"message-content\">\n            <h3>For Demo Click on the hamburger on top left</h3>\n            <button class=\"btn btn-default btn-md\" (click)=\"hideMsg()\">Ok !! Got it !!</button>\n        </div>\n        \n    </div>"

/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<span (clickOutside)=\"closeMenu()\">\n    <button (click)=\"menuToggle()\" class=\"hamburger hamburger-arrow-left\" [ngClass]=\"{'is-active': menuState, '': !menuState}\">\n        <span class=\"icon\"></span>\n    </button>\n<div class=\"menu-container cuppa-menu\" [ngClass]=\"{'show-menu': menuState, 'hide-menu': !menuState}\">\n    <ul>\n        <li *ngFor=\"let item of menulist\" (click)=\"onItemClick(item)\">\n            <a (click)=\"toggleSubMenu(item)\">{{item.title}} \n                <i *ngIf=\"item.subItems && !item.expand\" class=\"fa fa-angle-down\"></i>\n                <i *ngIf=\"item.subItems && item.expand\" class=\"fa fa-angle-up\"></i>\n            </a>\n           <ul *ngIf=\"item.subItems\" class=\"sub-menu\" [hidden]=\"!item.expand\">\n               <li *ngFor=\"let subitem of item.subItems\" (click)=\"onItemClick(subitem)\"><a>{{subitem.title}}</a></li>\n           </ul>\n        </li>\n    </ul>\n</div>\n<span>\n<!--<div class=\"cuppa-menu-overlay\" [ngClass]=\"{'show-overlay': menuState, 'hide-overlay': !menuState}\"></div> -->"

/***/ }),

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(293);


/***/ })

},[490]);
//# sourceMappingURL=main.bundle.js.map