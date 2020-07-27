function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favorite-favorite-module"], {
  /***/
  "./src/app/pages/pages/favorite/favorite-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/pages/favorite/favorite-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: FavoriteRoutingModule */

  /***/
  function srcAppPagesPagesFavoriteFavoriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteRoutingModule", function () {
      return FavoriteRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _favorite_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./favorite.component */
    "./src/app/pages/pages/favorite/favorite.component.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      component: _favorite_component__WEBPACK_IMPORTED_MODULE_2__["FavoriteComponent"]
    }];

    var FavoriteRoutingModule = function FavoriteRoutingModule() {
      _classCallCheck(this, FavoriteRoutingModule);
    };

    FavoriteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FavoriteRoutingModule
    });
    FavoriteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FavoriteRoutingModule_Factory(t) {
        return new (t || FavoriteRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoriteRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages/favorite/favorite.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/pages/favorite/favorite.component.ts ***!
    \************************************************************/

  /*! exports provided: FavoriteComponent */

  /***/
  function srcAppPagesPagesFavoriteFavoriteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function () {
      return FavoriteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _state_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../state/app-favorite-state.service */
    "./src/app/state/app-favorite-state.service.ts");
    /* harmony import */


    var _services_trackby_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/trackby.service */
    "./src/app/services/trackby.service.ts");
    /* harmony import */


    var _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/accu-weather.service */
    "./src/app/services/accu-weather.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/components/current-location/forecast-location/forecast-location.component */
    "./src/app/shared/components/current-location/forecast-location/forecast-location.component.ts");

    function FavoriteComponent_ng_container_1_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FavoriteComponent_ng_container_1_div_2_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

          var location_r23 = ctx.$implicit;

          var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r25.onFavoriteLocationHandler(location_r23);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "sl-forecast-location", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var location_r23 = ctx.$implicit;
        var i_r24 = ctx.index;

        var state_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentLocation", location_r23)("currentLocationForecast", state_r21.locationsForecasts[i_r24]);
      }
    }

    function FavoriteComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FavoriteComponent_ng_container_1_div_2_Template, 5, 2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var state_r21 = ctx.ngIf;

        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", state_r21.locations)("ngForTrackBy", ctx_r20.trackByService.index);
      }
    }

    var FavoriteComponent =
    /*#__PURE__*/
    function () {
      function FavoriteComponent(favoriteStateService, trackByService, weatherService, router) {
        _classCallCheck(this, FavoriteComponent);

        this.favoriteStateService = favoriteStateService;
        this.trackByService = trackByService;
        this.weatherService = weatherService;
        this.router = router;
      }

      _createClass(FavoriteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.favorites$ = this.favoriteStateService.state$;
        }
      }, {
        key: "onFavoriteLocationHandler",
        value: function onFavoriteLocationHandler(location) {
          this.weatherService.setUserCurrentLocation(location);
          this.router.navigate(["home"
          /* HOME */
          ]);
        }
      }]);

      return FavoriteComponent;
    }();

    FavoriteComponent.ɵfac = function FavoriteComponent_Factory(t) {
      return new (t || FavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__["AppFavoriteStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_accu_weather_service__WEBPACK_IMPORTED_MODULE_3__["AccuWeatherService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    FavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FavoriteComponent,
      selectors: [["sl-favorite"]],
      decls: 3,
      vars: 3,
      consts: [[4, "ngIf"], [1, "row"], ["class", "forecast-table col-sm-6 p-2", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "forecast-table", "col-sm-6", "p-2"], [1, "container"], [1, "forecast-container"], [1, "today", "forecast", 3, "click"], [3, "currentLocation", "currentLocationForecast"]],
      template: function FavoriteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FavoriteComponent_ng_container_1_Template, 3, 2, "ng-container", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.favorites$));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _shared_components_current_location_forecast_location_forecast_location_component__WEBPACK_IMPORTED_MODULE_6__["ForecastLocationComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]],
      encapsulation: 2,
      changeDetection: 0
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'sl-favorite',
          template: "\n    <section>\n\n      <ng-container *ngIf=\"favorites$ | async as state\">\n        <div class=\"row\">\n          <div class=\"forecast-table col-sm-6 p-2\" *ngFor=\"let location of state.locations; let i = index; trackBy: trackByService.index\">\n            <div class=\"container\">\n              <div class=\"forecast-container\">\n                <div class=\"today forecast\" (click)=\"onFavoriteLocationHandler(location)\">\n                  <sl-forecast-location\n                    [currentLocation]=\"location\"\n                    [currentLocationForecast]=\"state.locationsForecasts[i]\"\n                  ></sl-forecast-location>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </section>\n  ",
          styles: [],
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }]
      }], function () {
        return [{
          type: _state_app_favorite_state_service__WEBPACK_IMPORTED_MODULE_1__["AppFavoriteStateService"]
        }, {
          type: _services_trackby_service__WEBPACK_IMPORTED_MODULE_2__["TrackByService"]
        }, {
          type: _services_accu_weather_service__WEBPACK_IMPORTED_MODULE_3__["AccuWeatherService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/pages/favorite/favorite.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/pages/favorite/favorite.module.ts ***!
    \*********************************************************/

  /*! exports provided: FavoriteModule */

  /***/
  function srcAppPagesPagesFavoriteFavoriteModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoriteModule", function () {
      return FavoriteModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _favorite_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./favorite-routing.module */
    "./src/app/pages/pages/favorite/favorite-routing.module.ts");
    /* harmony import */


    var _favorite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./favorite.component */
    "./src/app/pages/pages/favorite/favorite.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var FavoriteModule = function FavoriteModule() {
      _classCallCheck(this, FavoriteModule);
    };

    FavoriteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FavoriteModule
    });
    FavoriteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FavoriteModule_Factory(t) {
        return new (t || FavoriteModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_2__["FavoriteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FavoriteModule, {
        declarations: [_favorite_component__WEBPACK_IMPORTED_MODULE_3__["FavoriteComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_2__["FavoriteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FavoriteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_favorite_component__WEBPACK_IMPORTED_MODULE_3__["FavoriteComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _favorite_routing_module__WEBPACK_IMPORTED_MODULE_2__["FavoriteRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=favorite-favorite-module-es5.js.map