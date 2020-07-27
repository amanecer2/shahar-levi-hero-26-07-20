(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [["center", ""], ["fixed", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "sl-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-layout-column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutHeaderComponent"], _core_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _pages_pages_pages_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/pages/pages.module */ "./src/app/pages/pages/pages.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/accu-weather.service */ "./src/app/services/accu-weather.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _state_reducers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state/reducers */ "./src/app/state/reducers/index.ts");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_12__["AccuWeatherService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__["TypeaheadModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"].forRoot({ name: 'corporate' }),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot(),
            _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _pages_pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot(_state_reducers__WEBPACK_IMPORTED_MODULE_14__["reducers"], {
                metaReducers: _state_reducers__WEBPACK_IMPORTED_MODULE_14__["metaReducers"]
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__["TypeaheadModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _pages_pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreRootModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_11__["TypeaheadModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbThemeModule"].forRoot({ name: 'corporate' }),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_7__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_6__["NbToastrModule"].forRoot(),
                    _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _pages_pages_pages_module__WEBPACK_IMPORTED_MODULE_9__["PagesModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_13__["StoreModule"].forRoot(_state_reducers__WEBPACK_IMPORTED_MODULE_14__["reducers"], {
                        metaReducers: _state_reducers__WEBPACK_IMPORTED_MODULE_14__["metaReducers"]
                    }),
                ],
                providers: [
                    _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_12__["AccuWeatherService"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbButtonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["sl-header"]], decls: 8, vars: 0, consts: [[1, "row", "align-item-center"], [1, "col-6", "d-flex", "justify-content-start", "justify-content-md-center", "align-items-center"], [1, "col-6", "d-flex", "justify-content-end", "justify-content-md-center"], ["nbButton", "", "routerLink", "/home", "routerLinkActive", "active"], ["nbButton", "", "routerLink", "/favorite", "routerLinkActive", "active"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " herolo weather task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["[_nghost-%COMP%] {\n        width: 100%;\n      }\n      a.active[_ngcontent-%COMP%] {\n        color: red !important;\n      }"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-header',
                template: `
    <div class="row align-item-center">
      <div class="col-6 d-flex  justify-content-start justify-content-md-center align-items-center">
        herolo weather task
      </div>
      <div class="col-6 d-flex justify-content-end justify-content-md-center ">
        <a nbButton  routerLink="/home" routerLinkActive="active">home</a>
        <a nbButton  routerLink="/favorite" routerLinkActive="active">favorite</a>
      </div>
    </div>
  `,
                styles: [
                    `
      :host {
        width: 100%;
      }
      a.active {
        color: red !important;
      }
    `
                ],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages/home/home-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/pages/home/home-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/pages/home/home.component.ts");





const routes = [
    {
        path: '',
        pathMatch: 'full',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }
];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages/home/home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pages/home/home.component.ts ***!
  \****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.service */ "./src/app/pages/pages/home/home.service.ts");
/* harmony import */ var _state_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../state/app-favorite-state.service */ "./src/app/state/app-favorite-state.service.ts");
/* harmony import */ var _location_auto_complete_location_auto_complete_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./location-auto-complete/location-auto-complete.component */ "./src/app/pages/pages/home/location-auto-complete/location-auto-complete.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_current_location_current_location_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/current-location/current-location.component */ "./src/app/shared/components/current-location/current-location.component.ts");











function HomeComponent_ng_container_2_sl_current_location_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "sl-current-location", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("toggleFavorite", function HomeComponent_ng_container_2_sl_current_location_1_Template_sl_current_location_toggleFavorite_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onToggleFavoriteHandler($event, data_r1[ctx_r3.mapper.CURRENT_LOCATION], data_r1[ctx_r3.mapper.CURRENT_LOCATION_FORECAST]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentLocation", data_r1[ctx_r2.mapper.CURRENT_LOCATION])("currentLocation5DaysForecast", data_r1[ctx_r2.mapper.FIVE_DAYS_FORECASTS])("currentLocationForecast", data_r1[ctx_r2.mapper.CURRENT_LOCATION_FORECAST])("isFavoriteLocation", data_r1[ctx_r2.mapper.FAVORITE_LOCATION].mapper[data_r1[ctx_r2.mapper.CURRENT_LOCATION].Key] > 0 - 1);
} }
function HomeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeComponent_ng_container_2_sl_current_location_1_Template, 1, 4, "sl-current-location", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", data_r1[ctx_r0.mapper.FIVE_DAYS_FORECASTS] && data_r1[ctx_r0.mapper.CURRENT_LOCATION_FORECAST]);
} }
class HomeComponent {
    constructor(homeService, favoriteStateService, toasterService) {
        this.homeService = homeService;
        this.favoriteStateService = favoriteStateService;
        this.toasterService = toasterService;
        this.defaultLocation = this.homeService.getUserCurrentLocation() || 'Tel Aviv';
        this.mapper = {
            CURRENT_LOCATION_FORECAST: 0,
            FIVE_DAYS_FORECASTS: 1,
            CURRENT_LOCATION: 2,
            FAVORITE_LOCATION: 3
        };
    }
    ngOnInit() {
        this.locationData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.homeService.currentLocationForecast$, this.homeService.currentLocation5DaysForecast$, this.homeService.currentLocation$, this.favoriteStateService.state$);
        this.homeService.getCurrentLocation(this.defaultLocation)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            this.errorToaster(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }))
            .subscribe();
    }
    locationSelectedHandler(location) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.homeService.fetchLocation5DaysForecast(location.Key), this.homeService.fetchLocation(location.Key))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            this.errorToaster(err);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        })).subscribe();
        this.homeService.setCurrentLocation(location);
    }
    onToggleFavoriteHandler(condition, location, forecast) {
        if (condition) {
            this.favoriteStateService.addFavorite(location, forecast);
        }
        else {
            this.favoriteStateService.removeFavorite(location);
        }
    }
    errorToaster(err) {
        this.toasterService
            .warning(`the  accuweather server return an error: ${err.statusText}`, 'huston we have a problem', { duration: 2000, position: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbGlobalLogicalPosition"].TOP_START });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_5__["AppFavoriteStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["sl-home"]], decls: 4, vars: 4, consts: [[3, "search", "onLocationSelected"], [4, "ngIf"], [3, "currentLocation", "currentLocation5DaysForecast", "currentLocationForecast", "isFavoriteLocation", "toggleFavorite", 4, "ngIf"], [3, "currentLocation", "currentLocation5DaysForecast", "currentLocationForecast", "isFavoriteLocation", "toggleFavorite"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sl-location-auto-complete", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onLocationSelected", function HomeComponent_Template_sl_location_auto_complete_onLocationSelected_1_listener($event) { return ctx.locationSelectedHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomeComponent_ng_container_2_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx.defaultLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, ctx.locationData$));
    } }, directives: [_location_auto_complete_location_auto_complete_component__WEBPACK_IMPORTED_MODULE_6__["LocationAutoCompleteComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_current_location_current_location_component__WEBPACK_IMPORTED_MODULE_8__["CurrentLocationComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-home',
                template: `
    <p>
      <sl-location-auto-complete
        [search]="defaultLocation"
        (onLocationSelected)="locationSelectedHandler($event)"
      ></sl-location-auto-complete>
      <ng-container *ngIf="locationData$ | async as data">

        <sl-current-location *ngIf="data[mapper.FIVE_DAYS_FORECASTS] && data[mapper.CURRENT_LOCATION_FORECAST]"
                             [currentLocation]="data[mapper.CURRENT_LOCATION]"
                             [currentLocation5DaysForecast]="data[mapper.FIVE_DAYS_FORECASTS]"
                             [currentLocationForecast]="data[mapper.CURRENT_LOCATION_FORECAST]"
                             [isFavoriteLocation]="data[mapper.FAVORITE_LOCATION].mapper[data[mapper.CURRENT_LOCATION].Key] > -1"
                             (toggleFavorite)="onToggleFavoriteHandler($event, data[mapper.CURRENT_LOCATION], data[mapper.CURRENT_LOCATION_FORECAST])"
        ></sl-current-location>
      </ng-container>

    </p>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _home_service__WEBPACK_IMPORTED_MODULE_4__["HomeService"] }, { type: _state_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_5__["AppFavoriteStateService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages/home/home.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/pages/home/home.module.ts ***!
  \*************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/pages/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/pages/pages/home/home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _location_auto_complete_location_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./location-auto-complete/location-auto-complete.component */ "./src/app/pages/pages/home/location-auto-complete/location-auto-complete.component.ts");







class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _location_auto_complete_location_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["LocationAutoCompleteComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _location_auto_complete_location_auto_complete_component__WEBPACK_IMPORTED_MODULE_5__["LocationAutoCompleteComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages/home/home.service.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/pages/home/home.service.ts ***!
  \**************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/accu-weather.service */ "./src/app/services/accu-weather.service.ts");





class HomeService {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this._currentLocationForecast$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this._currentLocation5DaysForecast$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this._currentLocation$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined);
        this.currentLocationForecast$ = this._currentLocationForecast$.asObservable();
        this.currentLocation5DaysForecast$ = this._currentLocation5DaysForecast$.asObservable();
        this.currentLocation$ = this._currentLocation$.asObservable();
    }
    getUserCurrentLocation() {
        var _a;
        return (_a = this.weatherService.getUserCurrentLocation()) === null || _a === void 0 ? void 0 : _a.LocalizedName;
    }
    getCurrentLocation(search) {
        return this.weatherService.getAutoComplete(search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            const autoCompleteLocation = res[0];
            this.setCurrentLocation(autoCompleteLocation);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(res => {
            const autoCompleteLocation = res[0];
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.fetchLocation(autoCompleteLocation.Key), this.fetchLocation5DaysForecast(autoCompleteLocation.Key));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(err);
        }));
    }
    fetchLocation(locationKey) {
        return this.weatherService.getCurrentLocation(locationKey).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this._currentLocationForecast$.next(res[0]);
        }));
    }
    fetchLocation5DaysForecast(locationKey) {
        return this.weatherService.get5DaysForecast(locationKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(res => {
            this._currentLocation5DaysForecast$.next(res);
        }));
    }
    setCurrentLocation(currentLocation) {
        this._currentLocation$.next(currentLocation);
    }
}
HomeService.ɵfac = function HomeService_Factory(t) { return new (t || HomeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_accu_weather_service__WEBPACK_IMPORTED_MODULE_3__["AccuWeatherService"])); };
HomeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HomeService, factory: HomeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_3__["AccuWeatherService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/pages/home/location-auto-complete/location-auto-complete.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/pages/home/location-auto-complete/location-auto-complete.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: LocationAutoCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationAutoCompleteComponent", function() { return LocationAutoCompleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _shared_components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/auto-complete/auto-complete.component */ "./src/app/shared/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/accu-weather.service */ "./src/app/services/accu-weather.service.ts");









function LocationAutoCompleteComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r18 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](model_r18.LocalizedName);
} }
class LocationAutoCompleteComponent {
    constructor(weatherService, toasterService) {
        this.weatherService = weatherService;
        this.toasterService = toasterService;
        this.search = '';
        this.onLocationSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.errorMessage = '';
    }
    ngOnInit() {
        let _oldMsg = this.search;
        this.suggestions$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            if (this.search === _oldMsg || !Object(_shared_components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_4__["autocompleteTextValidator"])(this.search)) {
                return;
            }
            observer.next(this.search);
            _oldMsg = this.search;
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((query) => {
            if (query) {
                // using github public api to get users by name
                return this.weatherService.getAutoComplete(this.search)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((data) => {
                    if (data.length === 0) {
                        this.toasterService.warning(`could not found ${this.search}`, 'no match');
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => {
                    this.toasterService
                        .warning(`the  accuweather server return an error: ${err.statusText}`, 'huston we have a problem', { duration: 2000, position: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbGlobalLogicalPosition"].TOP_START });
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
                }));
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
        }));
    }
    onSelectedEvent(data) {
        this.selectedItem = data;
        this.search = data.LocalizedName;
        this.onLocationSelected.emit(data);
    }
}
LocationAutoCompleteComponent.ɵfac = function LocationAutoCompleteComponent_Factory(t) { return new (t || LocationAutoCompleteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_accu_weather_service__WEBPACK_IMPORTED_MODULE_5__["AccuWeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"])); };
LocationAutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocationAutoCompleteComponent, selectors: [["sl-location-auto-complete"]], inputs: { search: "search" }, outputs: { onLocationSelected: "onLocationSelected" }, decls: 4, vars: 4, consts: [[3, "suggestions$", "customTemplate", "search", "placeholder", "onSearchEvent", "onSelectedEvent"], ["itemTemplate", ""]], template: function LocationAutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sl-auto-complete", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSearchEvent", function LocationAutoCompleteComponent_Template_sl_auto_complete_onSearchEvent_1_listener($event) { return ctx.search = $event; })("onSelectedEvent", function LocationAutoCompleteComponent_Template_sl_auto_complete_onSelectedEvent_1_listener($event) { return ctx.onSelectedEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LocationAutoCompleteComponent_ng_template_2_Template, 2, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("suggestions$", ctx.suggestions$)("customTemplate", _r16)("search", ctx.search)("placeholder", "enter location");
    } }, directives: [_shared_components_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_4__["AutoCompleteComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocationAutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-location-auto-complete',
                template: `
    <p>
      <sl-auto-complete
        [suggestions$]="suggestions$"
        [customTemplate]="itemTemplate"
        [search]="search"
        [placeholder]="'enter location'"
        (onSearchEvent)="search = $event"
        (onSelectedEvent)="onSelectedEvent($event)"
      ></sl-auto-complete>
    </p>

    <ng-template #itemTemplate let-model="item" let-index="index">
      <div>{{model.LocalizedName}}</div>
    </ng-template>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_5__["AccuWeatherService"] }, { type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbToastrService"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onLocationSelected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/pages/pages/pages-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/pages/pages-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        redirectTo: "home" /* HOME */,
        pathMatch: 'full'
    },
    {
        path: "home" /* HOME */,
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/pages/pages/home/home.module.ts")).then(m => m.HomeModule)
    },
    {
        path: "favorite" /* FAVORITE */,
        loadChildren: () => __webpack_require__.e(/*! import() | favorite-favorite-module */ "favorite-favorite-module").then(__webpack_require__.bind(null, /*! ./favorite/favorite.module */ "./src/app/pages/pages/favorite/favorite.module.ts")).then(m => m.FavoriteModule)
    }
];
class PagesRoutingModule {
}
PagesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesRoutingModule });
PagesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesRoutingModule_Factory(t) { return new (t || PagesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/pages/pages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/pages/pages.module.ts ***!
  \*********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages/pages-routing.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.module */ "./src/app/pages/pages/home/home.module.ts");





class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
        _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pages_routing_module__WEBPACK_IMPORTED_MODULE_2__["PagesRoutingModule"],
                    _home_home_module__WEBPACK_IMPORTED_MODULE_3__["HomeModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/accu-weather.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/accu-weather.service.ts ***!
  \**************************************************/
/*! exports provided: AccuWeatherService, fakeLocactionKey, fakeAuto, fakeCurrentLocation, fake5DaysForecasts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccuWeatherService", function() { return AccuWeatherService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeLocactionKey", function() { return fakeLocactionKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeAuto", function() { return fakeAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeCurrentLocation", function() { return fakeCurrentLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fake5DaysForecasts", function() { return fake5DaysForecasts; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AccuWeatherService {
    constructor(http) {
        this.http = http;
    }
    setUserCurrentLocation(location) {
        this.currentLocation = location;
    }
    getUserCurrentLocation() {
        return this.currentLocation;
    }
    getAutoComplete(location) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fakeAuto);
        /* return of(location)
           .pipe(
             filter(text => text.length > 2),
             delay(1000),
             distinctUntilChanged(),
             switchMap( res => {
               return this.http.get<IAutoComplete.RootObject[]>(URLS.AUTO_COMPLETE(location))
             })
           );*/
    }
    getCurrentLocation(location) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fakeCurrentLocation);
        /* return of(location)
           .pipe(
             filter(text => text.length > 2),
             delay(1000),
             distinctUntilChanged(),
             switchMap( res => this.http.get<ICurrentLocationForcast.RootObject[]>(URLS.CURRENT_CONDITIONS(location)) ),
             tap(res => {
                 debugger
             }),
             catchError((err, _) => {
                debugger
                return throwError(err);
             })
     
           );*/
    }
    get5DaysForecast(location) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(fake5DaysForecasts);
        /* return of(location)
           .pipe(
             filter(text => text.length > 2),
             delay(1000),
             distinctUntilChanged(),
             switchMap( res => this.http.get<I5DaysForecast.RootObject>(URLS.FIVE_DAYS_DAILY_FORCASTS(location)))
           );*/
    }
}
AccuWeatherService.ɵfac = function AccuWeatherService_Factory(t) { return new (t || AccuWeatherService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AccuWeatherService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AccuWeatherService, factory: AccuWeatherService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccuWeatherService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();
const fakeLocactionKey = '215854'; // tel aviv!;
const fakeAuto = [
    {
        'Version': 1,
        'Key': '215854',
        'Type': 'City',
        'Rank': 31,
        'LocalizedName': 'Tel Aviv',
        'Country': {
            'ID': 'IL',
            'LocalizedName': 'Israel'
        },
        'AdministrativeArea': {
            'ID': 'TA',
            'LocalizedName': 'Tel Aviv'
        }
    },
    {
        'Version': 1,
        'Key': '3431644',
        'Type': 'City',
        'Rank': 45,
        'LocalizedName': 'Telanaipura',
        'Country': {
            'ID': 'ID',
            'LocalizedName': 'Indonesia'
        },
        'AdministrativeArea': {
            'ID': 'JA',
            'LocalizedName': 'Jambi'
        }
    },
    {
        'Version': 1,
        'Key': '300558',
        'Type': 'City',
        'Rank': 45,
        'LocalizedName': 'Telok Blangah New Town',
        'Country': {
            'ID': 'SG',
            'LocalizedName': 'Singapore'
        },
        'AdministrativeArea': {
            'ID': '05',
            'LocalizedName': 'South West'
        }
    },
    {
        'Version': 1,
        'Key': '325876',
        'Type': 'City',
        'Rank': 51,
        'LocalizedName': 'Telford',
        'Country': {
            'ID': 'GB',
            'LocalizedName': 'United Kingdom'
        },
        'AdministrativeArea': {
            'ID': 'TFW',
            'LocalizedName': 'Telford and Wrekin'
        }
    },
    {
        'Version': 1,
        'Key': '169072',
        'Type': 'City',
        'Rank': 51,
        'LocalizedName': 'Telavi',
        'Country': {
            'ID': 'GE',
            'LocalizedName': 'Georgia'
        },
        'AdministrativeArea': {
            'ID': 'KA',
            'LocalizedName': 'Kakheti'
        }
    },
    {
        'Version': 1,
        'Key': '230611',
        'Type': 'City',
        'Rank': 51,
        'LocalizedName': 'Telsiai',
        'Country': {
            'ID': 'LT',
            'LocalizedName': 'Lithuania'
        },
        'AdministrativeArea': {
            'ID': 'TE',
            'LocalizedName': 'Telšiai'
        }
    },
    {
        'Version': 1,
        'Key': '2723742',
        'Type': 'City',
        'Rank': 55,
        'LocalizedName': 'Telégrafo',
        'Country': {
            'ID': 'BR',
            'LocalizedName': 'Brazil'
        },
        'AdministrativeArea': {
            'ID': 'PA',
            'LocalizedName': 'Pará'
        }
    },
    {
        'Version': 1,
        'Key': '186933',
        'Type': 'City',
        'Rank': 55,
        'LocalizedName': 'Tela',
        'Country': {
            'ID': 'HN',
            'LocalizedName': 'Honduras'
        },
        'AdministrativeArea': {
            'ID': 'AT',
            'LocalizedName': 'Atlántida'
        }
    },
    {
        'Version': 1,
        'Key': '3453754',
        'Type': 'City',
        'Rank': 55,
        'LocalizedName': 'Telaga Asih',
        'Country': {
            'ID': 'ID',
            'LocalizedName': 'Indonesia'
        },
        'AdministrativeArea': {
            'ID': 'JB',
            'LocalizedName': 'West Java'
        }
    },
    {
        'Version': 1,
        'Key': '3453755',
        'Type': 'City',
        'Rank': 55,
        'LocalizedName': 'Telagamurni',
        'Country': {
            'ID': 'ID',
            'LocalizedName': 'Indonesia'
        },
        'AdministrativeArea': {
            'ID': 'JB',
            'LocalizedName': 'West Java'
        }
    }
];
const fakeCurrentLocation = [
    {
        'LocalObservationDateTime': '2020-07-26T13:10:00+03:00',
        'EpochTime': 1595758200,
        'WeatherText': 'Sunny',
        'WeatherIcon': 1,
        'HasPrecipitation': false,
        'PrecipitationType': null,
        'IsDayTime': true,
        'Temperature': {
            'Metric': {
                'Value': 31.9,
                'Unit': 'C',
                'UnitType': 17
            },
            'Imperial': {
                'Value': 89,
                'Unit': 'F',
                'UnitType': 18
            }
        },
        'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us',
        'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us'
    }
];
const fake5DaysForecasts = {
    'Headline': {
        'EffectiveEpochDate': 1595782800,
        'Severity': 7,
        'Text': 'Warm Sunday night',
        'Category': 'heat',
        'EndDate': '2020-07-27T08:00:00+03:00',
        'EndEpochDate': 1595826000,
        'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/extended-weather-forecast/215854?lang=en-us',
        'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?lang=en-us'
    },
    'DailyForecasts': [
        {
            'Date': '2020-07-26T07:00:00+03:00',
            'EpochDate': 1595736000,
            'Temperature': {
                'Minimum': {
                    'Value': 78,
                    'Unit': 'F',
                    'UnitType': 18
                },
                'Maximum': {
                    'Value': 91,
                    'Unit': 'F',
                    'UnitType': 18
                }
            },
            'Day': {
                'Icon': 1,
                'IconPhrase': 'Sunny',
                'HasPrecipitation': false
            },
            'Night': {
                'Icon': 35,
                'IconPhrase': 'Partly cloudy',
                'HasPrecipitation': false
            },
            'Sources': [
                'AccuWeather'
            ],
            'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us',
            'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&lang=en-us'
        },
        {
            'Date': '2020-07-27T07:00:00+03:00',
            'EpochDate': 1595822400,
            'Temperature': {
                'Minimum': {
                    'Value': 78,
                    'Unit': 'F',
                    'UnitType': 18
                },
                'Maximum': {
                    'Value': 89,
                    'Unit': 'F',
                    'UnitType': 18
                }
            },
            'Day': {
                'Icon': 2,
                'IconPhrase': 'Mostly sunny',
                'HasPrecipitation': false
            },
            'Night': {
                'Icon': 34,
                'IconPhrase': 'Mostly clear',
                'HasPrecipitation': false
            },
            'Sources': [
                'AccuWeather'
            ],
            'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us',
            'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&lang=en-us'
        },
        {
            'Date': '2020-07-28T07:00:00+03:00',
            'EpochDate': 1595908800,
            'Temperature': {
                'Minimum': {
                    'Value': 79,
                    'Unit': 'F',
                    'UnitType': 18
                },
                'Maximum': {
                    'Value': 89,
                    'Unit': 'F',
                    'UnitType': 18
                }
            },
            'Day': {
                'Icon': 2,
                'IconPhrase': 'Mostly sunny',
                'HasPrecipitation': false
            },
            'Night': {
                'Icon': 33,
                'IconPhrase': 'Clear',
                'HasPrecipitation': false
            },
            'Sources': [
                'AccuWeather'
            ],
            'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us',
            'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&lang=en-us'
        },
        {
            'Date': '2020-07-29T07:00:00+03:00',
            'EpochDate': 1595995200,
            'Temperature': {
                'Minimum': {
                    'Value': 77,
                    'Unit': 'F',
                    'UnitType': 18
                },
                'Maximum': {
                    'Value': 89,
                    'Unit': 'F',
                    'UnitType': 18
                }
            },
            'Day': {
                'Icon': 1,
                'IconPhrase': 'Sunny',
                'HasPrecipitation': false
            },
            'Night': {
                'Icon': 34,
                'IconPhrase': 'Mostly clear',
                'HasPrecipitation': false
            },
            'Sources': [
                'AccuWeather'
            ],
            'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us',
            'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&lang=en-us'
        },
        {
            'Date': '2020-07-30T07:00:00+03:00',
            'EpochDate': 1596081600,
            'Temperature': {
                'Minimum': {
                    'Value': 77,
                    'Unit': 'F',
                    'UnitType': 18
                },
                'Maximum': {
                    'Value': 90,
                    'Unit': 'F',
                    'UnitType': 18
                }
            },
            'Day': {
                'Icon': 1,
                'IconPhrase': 'Sunny',
                'HasPrecipitation': false
            },
            'Night': {
                'Icon': 34,
                'IconPhrase': 'Mostly clear',
                'HasPrecipitation': false
            },
            'Sources': [
                'AccuWeather'
            ],
            'MobileLink': 'http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us',
            'Link': 'http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&lang=en-us'
        }
    ]
};


/***/ }),

/***/ "./src/app/services/trackby.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/trackby.service.ts ***!
  \*********************************************/
/*! exports provided: TrackByService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackByService", function() { return TrackByService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class TrackByService {
    itemID(index, item) {
        return item.id;
    }
    index(index, order) {
        return index;
    }
}
TrackByService.ɵfac = function TrackByService_Factory(t) { return new (t || TrackByService)(); };
TrackByService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrackByService, factory: TrackByService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrackByService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/auto-complete/auto-complete.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/auto-complete/auto-complete.component.ts ***!
  \****************************************************************************/
/*! exports provided: AutoCompleteComponent, autocompleteTextValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoCompleteComponent", function() { return AutoCompleteComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autocompleteTextValidator", function() { return autocompleteTextValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function AutoCompleteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.errorMessage, " ");
} }
function AutoCompleteComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const model_r10 = ctx.item;
    const index_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("This is: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, model_r10), " Index: ", index_r11, "");
} }
class AutoCompleteComponent {
    constructor() {
        this.search = '';
        this.placeholder = '';
        this.onSearchEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSelectedEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSearchEventHandler(str) {
        if (!autocompleteTextValidator(str)) {
            if (str !== '[object Object]') {
                this.errorMessage = 'only english letters is allowed';
            }
            return;
        }
        this.errorMessage = '';
        this.onSearchEvent.emit(str);
    }
    onSelectedHandler(selected) {
        this.onSelectedEvent.emit(selected.item);
    }
}
AutoCompleteComponent.ɵfac = function AutoCompleteComponent_Factory(t) { return new (t || AutoCompleteComponent)(); };
AutoCompleteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AutoCompleteComponent, selectors: [["sl-auto-complete"]], inputs: { search: "search", suggestions$: "suggestions$", customTemplate: "customTemplate", errorMessage: "errorMessage", placeholder: "placeholder" }, outputs: { onSearchEvent: "onSearchEvent", onSelectedEvent: "onSelectedEvent" }, decls: 4, vars: 10, consts: [[1, "form-control", 3, "ngModel", "typeahead", "typeaheadAsync", "typeaheadItemTemplate", "typeaheadOptionsLimit", "typeaheadMinLength", "isAnimated", "typeaheadWaitMs", "placeholder", "ngModelChange", "typeaheadOnSelect"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["defaultItemTemplate", ""], ["role", "alert", 1, "alert", "alert-danger"]], template: function AutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AutoCompleteComponent_Template_input_ngModelChange_0_listener($event) { return ctx.search = $event; })("ngModelChange", function AutoCompleteComponent_Template_input_ngModelChange_0_listener($event) { return ctx.onSearchEventHandler($event); })("typeaheadOnSelect", function AutoCompleteComponent_Template_input_typeaheadOnSelect_0_listener($event) { return ctx.onSelectedHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AutoCompleteComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AutoCompleteComponent_ng_template_2_Template, 3, 4, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search)("typeahead", ctx.suggestions$)("typeaheadAsync", true)("typeaheadItemTemplate", ctx.customTemplate || _r8)("typeaheadOptionsLimit", 7)("typeaheadMinLength", 2)("isAnimated", true)("typeaheadWaitMs", 1000)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_2__["TypeaheadDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["JsonPipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutoCompleteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-auto-complete',
                template: `
    <input
      [(ngModel)]="search"
      [typeahead]="suggestions$"
      [typeaheadAsync]="true"
      [typeaheadItemTemplate]="customTemplate || defaultItemTemplate"

      [typeaheadOptionsLimit]="7"
      [typeaheadMinLength]="2"
      [isAnimated]="true"
      [typeaheadWaitMs]="1000"
      (ngModelChange)="onSearchEventHandler($event)"
      (typeaheadOnSelect)="onSelectedHandler($event)"
      class="form-control"
      [placeholder]="placeholder">

    <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
      {{ errorMessage }}
    </div>


    <ng-template #defaultItemTemplate let-model="item" let-index="index">
      <div>This is: {{model | json}} Index: {{ index }}</div>
    </ng-template>

  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], suggestions$: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], customTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], errorMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onSearchEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onSelectedEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();
function autocompleteTextValidator(text) {
    switch (true) {
        case !/^[0-9A-Za-z ]+$/.test(text):
            return false;
    }
    return true;
}


/***/ }),

/***/ "./src/app/shared/components/components.module.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto-complete/auto-complete.component */ "./src/app/shared/components/auto-complete/auto-complete.component.ts");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/typeahead/fesm2015/ngx-bootstrap-typeahead.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _current_location_current_location_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-location/current-location.component */ "./src/app/shared/components/current-location/current-location.component.ts");
/* harmony import */ var _current_location_forecast_daily_content_forecast_daily_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-location/forecast-daily-content/forecast-daily-content.component */ "./src/app/shared/components/current-location/forecast-daily-content/forecast-daily-content.component.ts");
/* harmony import */ var _current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./current-location/forecast-location/forecast-location.component */ "./src/app/shared/components/current-location/forecast-location/forecast-location.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");










class ComponentsModule {
}
ComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
            ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__["TypeaheadModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"],
        _current_location_current_location_component__WEBPACK_IMPORTED_MODULE_5__["CurrentLocationComponent"],
        _current_location_forecast_daily_content_forecast_daily_content_component__WEBPACK_IMPORTED_MODULE_6__["ForecastDailyContentComponent"],
        _current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_7__["ForecastLocationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
        ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__["TypeaheadModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], exports: [_auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"],
        _current_location_current_location_component__WEBPACK_IMPORTED_MODULE_5__["CurrentLocationComponent"],
        _current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_7__["ForecastLocationComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"],
                    _current_location_current_location_component__WEBPACK_IMPORTED_MODULE_5__["CurrentLocationComponent"],
                    _current_location_forecast_daily_content_forecast_daily_content_component__WEBPACK_IMPORTED_MODULE_6__["ForecastDailyContentComponent"],
                    _current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_7__["ForecastLocationComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_8__["NbButtonModule"],
                    ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_3__["TypeaheadModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                exports: [
                    _auto_complete_auto_complete_component__WEBPACK_IMPORTED_MODULE_2__["AutoCompleteComponent"],
                    _current_location_current_location_component__WEBPACK_IMPORTED_MODULE_5__["CurrentLocationComponent"],
                    _current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_7__["ForecastLocationComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/components/current-location/current-location.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/current-location/current-location.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CurrentLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLocationComponent", function() { return CurrentLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_trackby_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/trackby.service */ "./src/app/services/trackby.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forecast-location/forecast-location.component */ "./src/app/shared/components/current-location/forecast-location/forecast-location.component.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _forecast_daily_content_forecast_daily_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forecast-daily-content/forecast-daily-content.component */ "./src/app/shared/components/current-location/forecast-daily-content/forecast-daily-content.component.ts");







function CurrentLocationComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add to favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurrentLocationComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "remove from favorite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CurrentLocationComponent_sl_forecast_daily_content_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sl-forecast-daily-content", 14);
} if (rf & 2) {
    const dailyForecast_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dailyForecast", dailyForecast_r15);
} }
class CurrentLocationComponent {
    constructor(trackByService) {
        this.trackByService = trackByService;
        this.toggleFavorite = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onToggleFavorite(condition) {
        this.toggleFavorite.emit(!condition);
    }
}
CurrentLocationComponent.ɵfac = function CurrentLocationComponent_Factory(t) { return new (t || CurrentLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trackby_service__WEBPACK_IMPORTED_MODULE_1__["TrackByService"])); };
CurrentLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrentLocationComponent, selectors: [["sl-current-location"]], inputs: { currentLocationForecast: "currentLocationForecast", currentLocation5DaysForecast: "currentLocation5DaysForecast", currentLocation: "currentLocation", isFavoriteLocation: "isFavoriteLocation" }, outputs: { toggleFavorite: "toggleFavorite" }, decls: 17, vars: 18, consts: [[1, "forecast-table"], [1, "container"], [1, "forecast-container"], [1, "today", "forecast"], [1, "forecast-header"], [1, "day"], [1, "date"], [3, "click"], ["nbButton", "", "status", "success", 4, "ngIf"], ["nbButton", "", "status", "danger", 4, "ngIf"], [3, "currentLocation", "currentLocationForecast"], [3, "dailyForecast", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["nbButton", "", "status", "success"], ["nbButton", "", "status", "danger"], [3, "dailyForecast"]], template: function CurrentLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CurrentLocationComponent_Template_span_click_9_listener() { return ctx.onToggleFavorite(ctx.isFavoriteLocation); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CurrentLocationComponent_button_10_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CurrentLocationComponent_button_11_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "sl-forecast-location", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CurrentLocationComponent_sl_forecast_daily_content_16_Template, 1, 1, "sl-forecast-daily-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 9, ctx.currentLocationForecast.LocalObservationDateTime, "EEEE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFavoriteLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isFavoriteLocation);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 12, ctx.currentLocationForecast.LocalObservationDateTime, "d"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 15, ctx.currentLocationForecast.LocalObservationDateTime, "MMM"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentLocation", ctx.currentLocation)("currentLocationForecast", ctx.currentLocationForecast);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.currentLocation5DaysForecast.DailyForecasts)("ngForTrackBy", ctx.trackByService.index);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_3__["ForecastLocationComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbButtonComponent"], _forecast_daily_content_forecast_daily_content_component__WEBPACK_IMPORTED_MODULE_5__["ForecastDailyContentComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2N1cnJlbnQtbG9jYXRpb24vY3VycmVudC1sb2NhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CurrentLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-current-location',
                template: `
    <div class="forecast-table">
      <div class="container">
        <div class="forecast-container">
          <div class="today forecast">
            <div class="forecast-header">
              <div class="day">{{currentLocationForecast.LocalObservationDateTime | date : 'EEEE'}}</div>
              <div class="date">
                <span (click)="onToggleFavorite(isFavoriteLocation)">
                  <button nbButton status="success" *ngIf="!isFavoriteLocation">add to favorite</button>
                  <button nbButton status="danger" *ngIf="isFavoriteLocation">remove from favorite</button>
                </span>
                {{currentLocationForecast.LocalObservationDateTime | date : 'd'}}
                {{currentLocationForecast.LocalObservationDateTime | date : 'MMM'}}
              </div>
            </div> <!-- .forecast-header -->
            <sl-forecast-location
              [currentLocation]="currentLocation"
              [currentLocationForecast]="currentLocationForecast"
            ></sl-forecast-location>

          </div>
          <sl-forecast-daily-content
            *ngFor="let dailyForecast of currentLocation5DaysForecast.DailyForecasts; trackBy: trackByService.index"
            [dailyForecast]="dailyForecast"
          ></sl-forecast-daily-content>
        </div>
      </div>
    </div>
  `,
                styleUrls: ['./current-location.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _services_trackby_service__WEBPACK_IMPORTED_MODULE_1__["TrackByService"] }]; }, { currentLocationForecast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentLocation5DaysForecast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isFavoriteLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], toggleFavorite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/current-location/forecast-daily-content/forecast-daily-content.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/shared/components/current-location/forecast-daily-content/forecast-daily-content.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ForecastDailyContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastDailyContentComponent", function() { return ForecastDailyContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class ForecastDailyContentComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ForecastDailyContentComponent.ɵfac = function ForecastDailyContentComponent_Factory(t) { return new (t || ForecastDailyContentComponent)(); };
ForecastDailyContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForecastDailyContentComponent, selectors: [["sl-forecast-daily-content"]], inputs: { dailyForecast: "dailyForecast" }, decls: 17, vars: 8, consts: [[1, "forecast"], [1, "forecast-header"], [1, "day"], [1, "forecast-content"], [1, "forecast-icon"], ["alt", "", "width", "48", 3, "src"], [1, "degree"]], template: function ForecastDailyContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 5, ctx.dailyForecast.Date, "EEEE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-" + ctx.dailyForecast.Day.Icon + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dailyForecast.Temperature.Maximum.Value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dailyForecast.Temperature.Maximum.Unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dailyForecast.Temperature.Minimum.Value);
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastDailyContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-forecast-daily-content',
                template: `
    <div class="forecast">
      <div class="forecast-header">
        <div class="day">{{dailyForecast.Date | date : 'EEEE'}}</div>
      </div> <!-- .forecast-header -->
      <div class="forecast-content">
        <div class="forecast-icon">
          <img
            [src]="'https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-' + dailyForecast.Day.Icon  + '.svg'"
            alt="" width="48">
        </div>
        <div class="degree">{{dailyForecast.Temperature.Maximum.Value}}<sup>o</sup>{{dailyForecast.Temperature.Maximum.Unit}}</div>
        <small>{{dailyForecast.Temperature.Minimum.Value}}<sup>o</sup></small>
      </div>
    </div>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { dailyForecast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/current-location/forecast-location/forecast-location.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/shared/components/current-location/forecast-location/forecast-location.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ForecastLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForecastLocationComponent", function() { return ForecastLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ForecastLocationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ForecastLocationComponent.ɵfac = function ForecastLocationComponent_Factory(t) { return new (t || ForecastLocationComponent)(); };
ForecastLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForecastLocationComponent, selectors: [["sl-forecast-location"]], inputs: { currentLocationForecast: "currentLocationForecast", currentLocation: "currentLocation" }, decls: 11, vars: 4, consts: [[1, "forecast-content"], [1, "location"], [1, "degree"], [1, "num"], [1, "forecast-icon"], ["alt", "", "width", "90", 3, "src"]], template: function ForecastLocationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentLocation.LocalizedName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentLocationForecast.Temperature.Metric.Value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentLocationForecast.Temperature.Metric.Unit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-" + ctx.currentLocationForecast.WeatherIcon + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForecastLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sl-forecast-location',
                template: `
    <div class="forecast-content">
      <div class="location">{{currentLocation.LocalizedName}}</div>
      <div class="degree">
        <div class="num">{{currentLocationForecast.Temperature.Metric.Value}}
          <sup>o</sup>{{currentLocationForecast.Temperature.Metric.Unit}}</div>
        <div class="forecast-icon">
          <img
            [src]="'https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-' + currentLocationForecast.WeatherIcon + '.svg'"
            alt="" width="90">
        </div>
      </div>
    </div>
  `,
                styles: [],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { currentLocationForecast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], currentLocation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/components.module */ "./src/app/shared/components/components.module.ts");




class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
        ],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]], exports: [_components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
                ],
                exports: [
                    _components_components_module__WEBPACK_IMPORTED_MODULE_2__["ComponentsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/utils/local-strorage.ts":
/*!************************************************!*\
  !*** ./src/app/shared/utils/local-strorage.ts ***!
  \************************************************/
/*! exports provided: getLocalStorage, setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalStorage", function() { return getLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
};
const setLocalStorage = (key, value = '') => {
    localStorage.setItem(key, JSON.stringify(value));
};


/***/ }),

/***/ "./src/app/state/app-favorite-state.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/state/app-favorite-state.service.ts ***!
  \*****************************************************/
/*! exports provided: __INIT_FAVORITE_STATE, AppFavoriteStateService, AppFavoriteStateService2, setMapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__INIT_FAVORITE_STATE", function() { return __INIT_FAVORITE_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFavoriteStateService", function() { return AppFavoriteStateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFavoriteStateService2", function() { return AppFavoriteStateService2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMapper", function() { return setMapper; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_utils_local_strorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utils/local-strorage */ "./src/app/shared/utils/local-strorage.ts");
/* harmony import */ var _reducers_favorite_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/favorite.selector */ "./src/app/state/reducers/favorite.selector.ts");
/* harmony import */ var _reducers_favorite_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reducers/favorite.action */ "./src/app/state/reducers/favorite.action.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");







const __INIT_FAVORITE_STATE = {
    mapper: {},
    locations: [],
    locationsForecasts: []
};
const INIT_STATE = Object(_shared_utils_local_strorage__WEBPACK_IMPORTED_MODULE_2__["getLocalStorage"])("app-state" /* STATE */) || __INIT_FAVORITE_STATE;
class AppFavoriteStateService {
    constructor(store) {
        this.store = store;
        this.state$ = this.store.select(_reducers_favorite_selector__WEBPACK_IMPORTED_MODULE_3__["selectFavoriteStore"]);
    }
    addFavorite(location, locationForecast) {
        this.store.dispatch(Object(_reducers_favorite_action__WEBPACK_IMPORTED_MODULE_4__["addFavorite"])({ payload: { location, locationForecast } }));
    }
    removeFavorite(location) {
        this.store.dispatch(Object(_reducers_favorite_action__WEBPACK_IMPORTED_MODULE_4__["removeFavorite"])({ payload: { location } }));
    }
}
AppFavoriteStateService.ɵfac = function AppFavoriteStateService_Factory(t) { return new (t || AppFavoriteStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
AppFavoriteStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppFavoriteStateService, factory: AppFavoriteStateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppFavoriteStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();
///// this is self implement.. you wanted state management/
// but because you wanted NGRX to implemented i used the above code
/**
 * State (ish) management
 * I could used NGRX but it's over kill for small usage
 * i used the same pattern (immutable) and API for updating the state
 *
 * @deprecated not in used
 */
class AppFavoriteStateService2 {
    constructor() {
        this._state$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](INIT_STATE);
        this.state$ = this._state$.asObservable();
    }
    get state() {
        return this._state$.getValue();
    }
    set state(__state) {
        Object(_shared_utils_local_strorage__WEBPACK_IMPORTED_MODULE_2__["setLocalStorage"])("app-state" /* STATE */, __state);
        this._state$.next(__state);
    }
    addFavorite(location, locationForecast) {
        const _oldState = Object.assign({}, this.state);
        const locations = [..._oldState.locations, location];
        const locationsForecasts = [..._oldState.locationsForecasts, locationForecast];
        _oldState.locations = locations;
        _oldState.locationsForecasts = locationsForecasts;
        _oldState.mapper = setMapper(locations);
        this.state = Object.assign(Object.assign({}, this.state), _oldState);
    }
    removeFavorite(location) {
        const _oldState = Object.assign({}, this.state);
        const index = _oldState.locations.findIndex(l => l.Key === location.Key);
        if (index > -1) {
            const locations = _oldState.locations.filter((l, __index) => __index !== index);
            const locationsForecasts = _oldState.locationsForecasts.filter((l, __index) => __index !== index);
            _oldState.locations = locations;
            _oldState.locationsForecasts = locationsForecasts;
            _oldState.mapper = setMapper(locations);
        }
        this.state = Object.assign(Object.assign({}, this.state), _oldState);
    }
}
AppFavoriteStateService2.ɵfac = function AppFavoriteStateService2_Factory(t) { return new (t || AppFavoriteStateService2)(); };
AppFavoriteStateService2.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppFavoriteStateService2, factory: AppFavoriteStateService2.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppFavoriteStateService2, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
function setMapper(locations) {
    const mapper = {};
    locations.forEach((l, index) => mapper[l.Key] = index);
    return mapper;
}


/***/ }),

/***/ "./src/app/state/reducers/favorite.action.ts":
/*!***************************************************!*\
  !*** ./src/app/state/reducers/favorite.action.ts ***!
  \***************************************************/
/*! exports provided: FAVORITE, addFavorite, removeFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAVORITE", function() { return FAVORITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFavorite", function() { return addFavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFavorite", function() { return removeFavorite; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const FAVORITE = '[favorite]';
const addFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${FAVORITE} add favorite`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeFavorite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`${FAVORITE} remove favorite`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/state/reducers/favorite.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/state/reducers/favorite.reducer.ts ***!
  \****************************************************/
/*! exports provided: _favoriteReducer, favoriteReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_favoriteReducer", function() { return _favoriteReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "favoriteReducer", function() { return favoriteReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-favorite-state.service */ "./src/app/state/app-favorite-state.service.ts");
/* harmony import */ var _favorite_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./favorite.action */ "./src/app/state/reducers/favorite.action.ts");



const _favoriteReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__["__INIT_FAVORITE_STATE"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_favorite_action__WEBPACK_IMPORTED_MODULE_2__["addFavorite"], (state, { payload }) => {
    const _oldState = Object.assign({}, state);
    const locations = [..._oldState.locations, payload.location];
    const locationsForecasts = [..._oldState.locationsForecasts, payload.locationForecast];
    _oldState.locations = locations;
    _oldState.locationsForecasts = locationsForecasts;
    _oldState.mapper = Object(_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__["setMapper"])(locations);
    return Object.assign(Object.assign({}, state), _oldState);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_favorite_action__WEBPACK_IMPORTED_MODULE_2__["removeFavorite"], (state, { payload }) => {
    const _oldState = Object.assign({}, state);
    const index = _oldState.locations.findIndex(l => l.Key === payload.location.Key);
    if (index > -1) {
        const locations = _oldState.locations.filter((l, __index) => __index !== index);
        const locationsForecasts = _oldState.locationsForecasts.filter((l, __index) => __index !== index);
        _oldState.locations = locations;
        _oldState.locationsForecasts = locationsForecasts;
        _oldState.mapper = Object(_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__["setMapper"])(locations);
    }
    return Object.assign(Object.assign({}, state), _oldState);
}));
function favoriteReducer(state, action) {
    return _favoriteReducer(state, action);
}


/***/ }),

/***/ "./src/app/state/reducers/favorite.selector.ts":
/*!*****************************************************!*\
  !*** ./src/app/state/reducers/favorite.selector.ts ***!
  \*****************************************************/
/*! exports provided: selectFavoriteState, selectFavoriteStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFavoriteState", function() { return selectFavoriteState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFavoriteStore", function() { return selectFavoriteStore; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const selectFavoriteState = (state) => state.favorite;
const selectFavoriteStore = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectFavoriteState, (state) => state);


/***/ }),

/***/ "./src/app/state/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/state/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _favorite_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorite.reducer */ "./src/app/state/reducers/favorite.reducer.ts");


const reducers = {
    favorite: _favorite_reducer__WEBPACK_IMPORTED_MODULE_1__["favoriteReducer"]
};
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    accuweatherKey: 'uGrLKGTzBbeirdbQgtblr7nN4BDn17eG'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WEB_PROJECTS\home tasks\herolo-weather-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map