(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{hRsO:function(t,c,n){"use strict";n.r(c);var o=n("ofXK"),e=n("tyNb"),r=n("fXoL"),i=n("L9Nt"),a=n("doXx"),s=n("Xkyj"),f=n("pycE");function b(t,c){if(1&t){const t=r.Xb();r.Wb(0,"div",3),r.Wb(1,"div",4),r.Wb(2,"div",5),r.Wb(3,"div",6),r.ec("click",(function(){r.tc(t);const n=c.$implicit;return r.gc(2).onFavoriteLocationHandler(n)})),r.Rb(4,"sl-forecast-location",7),r.Vb(),r.Vb(),r.Vb(),r.Vb()}if(2&t){const t=c.$implicit,n=c.index,o=r.gc().ngIf;r.Eb(4),r.mc("currentLocation",t)("currentLocationForecast",o.locationsForecasts[n])}}function u(t,c){if(1&t&&(r.Ub(0),r.Wb(1,"div",1),r.zc(2,b,5,2,"div",2),r.Vb(),r.Tb()),2&t){const t=c.ngIf,n=r.gc();r.Eb(2),r.mc("ngForOf",t.locations)("ngForTrackBy",n.trackByService.index)}}const l=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(t,c,n,o){this.favoriteStateService=t,this.trackByService=c,this.weatherService=n,this.router=o}ngOnInit(){this.favorites$=this.favoriteStateService.state$}onFavoriteLocationHandler(t){this.weatherService.setUserCurrentLocation(t),this.router.navigate(["home"])}}return t.\u0275fac=function(c){return new(c||t)(r.Qb(i.a),r.Qb(a.a),r.Qb(s.a),r.Qb(e.c))},t.\u0275cmp=r.Kb({type:t,selectors:[["sl-favorite"]],decls:3,vars:3,consts:[[4,"ngIf"],[1,"row"],["class","forecast-table col-sm-6 p-2",4,"ngFor","ngForOf","ngForTrackBy"],[1,"forecast-table","col-sm-6","p-2"],[1,"container"],[1,"forecast-container"],[1,"today","forecast",3,"click"],[3,"currentLocation","currentLocationForecast"]],template:function(t,c){1&t&&(r.Wb(0,"section"),r.zc(1,u,3,2,"ng-container",0),r.hc(2,"async"),r.Vb()),2&t&&(r.Eb(1),r.mc("ngIf",r.ic(2,1,c.favorites$)))},directives:[o.n,o.m,f.a],pipes:[o.b],encapsulation:2,changeDetection:0}),t})()}];let v=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(c){return new(c||t)},imports:[[e.g.forChild(l)],e.g]}),t})();var p=n("PCNd");n.d(c,"FavoriteModule",(function(){return d}));let d=(()=>{class t{}return t.\u0275mod=r.Ob({type:t}),t.\u0275inj=r.Nb({factory:function(c){return new(c||t)},imports:[[o.c,v,p.a]]}),t})()}}]);