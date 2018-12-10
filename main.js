(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./career/career.module": [
		"./src/app/career/career.module.ts",
		"career-career-module"
	],
	"./papers/papers.module": [
		"./src/app/papers/papers.module.ts",
		"papers-papers-module"
	],
	"./training/training.module": [
		"./src/app/training/training.module.ts",
		"training-training-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home/:lang', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'company/:lang', component: _company_company_component__WEBPACK_IMPORTED_MODULE_2__["CompanyComponent"] },
    { path: 'training', loadChildren: './training/training.module#TrainingModule' },
    { path: 'career', loadChildren: './career/career.module#CareerModule' },
    { path: 'papers', loadChildren: './papers/papers.module#PapersModule' },
    { path: '', redirectTo: 'home/:lang', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
/**
 * App routing module
 */
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            // tslint:disable-next-line:object-literal-sort-keys
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\r\n    background: white;\r\n    top: 0px;\r\n    z-index: 200;\r\n    position: fixed;\r\n    width: 100%;\r\n}\r\nspan {\r\n    color: rgb(102, 100, 100);\r\n    background: rgb(102, 100, 100);\r\n}\r\n.navigation {\r\n    margin: 1% 0 0 0;\r\n}\r\n.navbar-custom {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n}\r\n.navbar-custom a {\r\n    color: rgb(102, 100, 100);\r\n}\r\n.active {\r\n    background: rgba(255, 255, 255, 0) !important;\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}\r\n.active:hover {\r\n    border-bottom: 0px solid rgb(27, 112, 183);\r\n}\r\n.navbar-custom a:hover {\r\n    background: rgba(255, 255, 255, 0.1) !important;\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}\r\n.contain {\r\n    margin-top: 140px;\r\n}\r\nfooter {\r\n    color: white;\r\n    background: #333741;\r\n    font-size: 1.1em;\r\n    height: 40px;\r\n    padding: 8px;\r\n    margin: 0;\r\n    text-align: center;\r\n}\r\n.info {\r\n    background-color: rgb(231, 230, 230);\r\n    color: rgb(27, 112, 183);\r\n    height: 40px;\r\n    padding: 10px;\r\n    margin: 0;\r\n}\r\n.infoblock {\r\n  background-color: rgb(231, 230, 230);\r\n  color: rgb(27, 112, 183);\r\n  height: 100px;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n.info b, .infoblock b {\r\n  text-decoration: underline;\r\n}\r\n@media (max-width: 767px) { \r\n    .contain {\r\n        margin-top: 110px;\r\n    }\r\n    footer {\r\n      font-size:smaller;\r\n    }\r\n    .info {\r\n      display: none;\r\n    }\r\n    .infoblock {\r\n      display: block;\r\n    }\r\n}\r\n@media (max-width: 320px) {\r\n  footer {\r\n    font-size: xx-small;\r\n  }\r\n}\r\n@media (min-width: 768px) and (max-width: 992px) { \r\n    .contain {\r\n        margin-top: 115px;\r\n    }\r\n}\r\n@media (min-width: 768px) and (max-width: 1200px) { \r\n    .contain {\r\n        margin-top: 115px;\r\n    }\r\n}\r\n@media (min-width: 768px) {\r\n  .info {\r\n    display: block;\r\n  }\r\n  .infoblock {\r\n    display: none;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<header>\r\n  <div class=\"container\">\r\n    <div class=\"col-xs-3 col-sm-2\" style=\"padding: 10px;\" [routerLink]=\"['/', navbarPage?.category[0].article[0].image[0].link, translate.currentLang]\">\r\n      <img [src]='navbarPage?.category[0].article[0].image[0].src' class=\"img-responsive\" alt=\"Image\">\r\n    </div>\r\n    <div class=\"col-xs-4 col-xs-offset-4 col-sm-2 col-sm-offset-8\" style=\"padding: 10px;\">\r\n      <select class=\"form-control\" #langSelect (change)='changeLanguage(langSelect.value)'>\r\n        <option *ngFor=\"let lang of languageList; trackBy: trackByMulti\" [value]=\"lang\" [selected]='lang === translate.currentLang'>{{ languageName(lang) }}</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <nav class=\"navigation navbar navbar-custom\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li *ngFor='let page of othersPages; trackBy: trackByMulti' routerLinkActive=\"active\">\r\n            <a [routerLink]=\"['/', page.id, translate.currentLang]\">{{ page.pageName }}</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<div class=\"contain\" ng-cloak>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"info\">\r\n  <i><b>B.P:</b> 9365 Bangangte Cameroon.</i>\r\n  <i style=\"padding-left: 10px;\"><b>Tel:</b> +237 680 43 40 23</i>\r\n  <i style=\"padding-left: 10px;\"><b>Email:</b> info@TonkaIn.com</i>\r\n</div>\r\n\r\n<div class=\"infoblock\">\r\n  <p><b>B.P:</b> 9365 Bangangte Cameroon.</p>\r\n  <p><b>Tel:</b> +237 680 43 40 23</p>\r\n  <p><b>Email:</b> info@TonkaIn.com</p>\r\n</div>\r\n\r\n<footer>\r\n  <div>\r\n    <p class=\"copyright\" style=\"display: inline; float: left;\">&copy; 2018 TonkaIn. All Rights Reserved.</p>\r\n    <p style=\"float: right; display: inline;\">\r\n      <a href=\"#\" style=\"display: inline; padding-right: 10px;\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\" style=\"display: inline; padding-right: 10px;\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\" style=\"display: inline; padding-right: 10px;\"><i class=\"fa fa-youtube\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\" style=\"display: inline; padding-right: 10px;\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\r\n      <a href=\"#\" style=\"display: inline; padding-right: 10px;\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i></a>\r\n    </p>\r\n  </div>\r\n</footer>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Our rout component
 */
var AppComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class, its role is to create a service object used for page contain acquisition
     */
    function AppComponent(translate, router) {
        this.translate = translate;
        this.router = router;
        /**
         * This variable contains all available language
         */
        this.languageList = ['de', 'en', 'zh', 'fr'];
    }
    /**
     * This function is called during the initialization of our component to load the content of the page into the variables defined above.
     */
    AppComponent.prototype.ngOnInit = function () {
        this.translate.addLangs(this.languageList);
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        this.changeLanguage(this.translate.getLangs().indexOf(browserLang) !== -1 ? browserLang : 'en');
    };
    /**
     * Allow to change the language of the nav bar
     * @param lang the language we want to apply
     */
    AppComponent.prototype.changeLanguage = function (lang) {
        var _this = this;
        this.othersPages = [];
        this.translate.currentLang = lang;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.navigate(['/home', lang]);
        // this.router.navigate(['/home', lang]);
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.translate.getTranslation('pageContain_' + lang);
        /**
         * this instruction retrieves the contents of the pages and filters them to return those corresponding to the navbar page
         */
        this.translate.getTranslation('pageContain_' + lang).subscribe(function (pages) {
            _this.navbarPage = pages.filter(function (page) {
                return page.id === 'navbar';
            })[0];
            _this.othersPages = pages.filter(function (page) {
                return page.id !== 'navbar';
            });
        });
    };
    /**
     * this function take a language code in input and return language name in corresponding language
     */
    AppComponent.prototype.languageName = function (lang) {
        switch (lang) {
            case 'de': return 'Deutsch';
            case 'en': return 'English';
            case 'zh': return '漢語';
            case 'fr': return 'Français';
            default: return 'Unknow';
        }
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    AppComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: LanguageLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _company_company_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./company/company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * here, we use ngx-translate as service
 */
var LanguageLoader = /** @class */ (function () {
    /**
     * This is the constructor of TranslateLoader
     */
    function LanguageLoader(inej) {
        this.inej = inej;
    }
    /**
     * We redefine the getTranslation method of ngs-translate with our local api and using HttpClient
     */
    LanguageLoader.prototype.getTranslation = function (lang) {
        var http = this.inej.get(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]);
        return http.get("./assets/api/" + lang + ".json");
    };
    LanguageLoader = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], LanguageLoader);
    return LanguageLoader;
}());

/**
 * Our rout module
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _company_company_component__WEBPACK_IMPORTED_MODULE_6__["CompanyComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forRoot({
                    loader: { provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateLoader"], useClass: LanguageLoader }
                }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            // tslint:disable-next-line:object-literal-sort-keys
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homeBackground {\r\n  background-size: cover;\r\n  height: 400px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  #homeBackground {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n#homeBackground .backgroundContent {\r\n  color: white;\r\n  padding-top: 100px;\r\n}\r\n\r\n.border-bottom {\r\n  border-bottom: 1px solid rgb(230, 214, 214);\r\n}\r\n"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Identity of the page. We can modify this structure-->\r\n<div id=\"homeBackground\" [ngStyle]=\"{background: 'url(' + contain[0]?.titleImage + ') no-repeat center fixed',\r\n     'background-size': contain[0]?.titleImage ? 'cover' : ''}\">\r\n  <div class=\"col-sm-12 backgroundContent\">\r\n    <h1 style=\"padding-left: 60px; color: rgb(226, 226, 241)\">{{contain[0]?.title}}</h1>\r\n    <h3 style=\"padding-left: 60px;\">\r\n      {{contain[0]?.subTitle[0]}}\r\n    </h3>\r\n  </div>\r\n</div>\r\n\r\n<!--Dynamic content-->\r\n<div class=\"container\" *ngFor=\"let item of categoryArray; trackBy: trackByFn\">\r\n  <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n    <!--If the carousel objet is detected-->\r\n    <div *ngIf=\"item?.id==='carousel' && item.statut===1\">\r\n      <app-carousel [contain]=\"item.article\" [lang]=\"lang\"></app-carousel>\r\n    </div>\r\n    <!--If the card component is detected-->\r\n    <div *ngIf=\"item?.id==='card' && item.statut===1\">\r\n      <div *ngFor=\"let data of item.article; trackBy: trackByFn\">\r\n        <div *ngIf=\"data.statut === 1\" [ngClass]=\"gridClass(item.article)\" [ngStyle]=\"styleClass(item.article)\">\r\n          <app-card [contain]=\"data\" [lang]=\"lang\"></app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_utility_grid_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/utility/grid/grid */ "./src/app/shared/utility/grid/grid.ts");
/* harmony import */ var _shared_utility_sort_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utility/sort/sort */ "./src/app/shared/utility/sort/sort.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * company papge
 */
var CompanyComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function CompanyComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
        /**
         * Contain all the category of our data
         */
        this.categoryArray = [];
        /**
         * Contain the data to display on the view
         */
        // tslint:disable:object-literal-sort-keys
        // tslint:disable:max-line-length
        this.contain = [];
        //
    }
    /**
     * Initialize some variable
     */
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        this.dataService.getTranslation('pageContain_' + this.lang).subscribe(function (data) {
            _this.contain = data.filter(function (value) { return value.id === 'company'; });
            _this.contain[0].category = _this.contain[0].category.sort(_shared_utility_sort_sort__WEBPACK_IMPORTED_MODULE_4__["Sort"].arraySort);
            _this.contain[0].category.forEach(function (element) {
                // I sort the article from priority 1 to last priority
                element.article = element.article.sort(_shared_utility_sort_sort__WEBPACK_IMPORTED_MODULE_4__["Sort"].arraySort);
                _this.categoryArray.push(element);
            });
        });
    };
    /**
     * compute the size of an element and return the bootstrap class that match the size
     * @param article the element we want to compute the size on the html view
     * @returns the size of the element on the view
     */
    CompanyComponent.prototype.gridClass = function (article) {
        var activeStatut = 0;
        article.forEach(function (element) {
            if (element.statut === 1) {
                activeStatut += 1;
            }
        });
        return _shared_utility_grid_grid__WEBPACK_IMPORTED_MODULE_3__["Grid"].gridSystem_sm(activeStatut);
    };
    /**
     * apply the border-bottom style on an element
     * @param article will allow to verify that the size of the element we want to apply the style
     * is greater than 1
     */
    CompanyComponent.prototype.styleClass = function (article) {
        var activeStatut = 0;
        if (article.length > 1) {
            article.forEach(function (element) {
                if (element.statut === 1) {
                    activeStatut += 1;
                }
            });
        }
        return (activeStatut > 1) ? { 'border-bottom': '1px solid rgb(230, 214, 214)' } : '';
    };
    /**
     * @ignore
     */
    CompanyComponent.prototype.trackByFn = function (index, item) {
        return index; // or item.id
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")],
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
            ],
            // tslint:disable-next-line:object-literal-sort-keys
            declarations: []
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homeBackground {\r\n  height: 400px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  #homeBackground {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n#homeBackground .backgroundContent {\r\n  color: white;\r\n  padding-top: 100px;\r\n}\r\n\r\n.border-bottom {\r\n  border-bottom: 1px solid rgb(230, 214, 214);\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Identity of the page. We can modify this structure-->\r\n<!--[ngStyle]=\"{background: 'url(' + contain[0]?.titleImage + ') no-repeat center fixed'}\"-->\r\n<div id=\"homeBackground\" [ngStyle]=\"{background: 'url(' + contain[0]?.titleImage + ') no-repeat center fixed',\r\n     'background-size': contain[0]?.titleImage ? 'cover' : ''}\">\r\n  <div class=\"col-sm-12 backgroundContent\">\r\n    <h1 style=\"padding-left: 60px; color: rgb(226, 226, 241)\">{{contain[0]?.title}}</h1>\r\n    <h4 style=\"padding-left: 60px;\">{{contain[0]?.subTitle[0]}}</h4>\r\n    <a href=\"#getStarted\" class=\"btn btn-primary\" style=\"margin-left: 60px;\">\r\n      <span class=\"glyphicon glyphicon-hand-right\"></span>\r\n      Get Started\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<!--Dynamic content-->\r\n<div class=\"container\" *ngFor=\"let item of categoryArray; trackBy: trackByFn\">\r\n  <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n    <!--If the carousel objet is detected-->\r\n    <div *ngIf=\"item?.id==='carousel' && item.statut===1\">\r\n      <app-carousel [contain]=\"item.article\" [lang]=\"lang\"></app-carousel>\r\n    </div>\r\n    <!--If the card component is detected-->\r\n    <div *ngIf=\"item?.id==='card' && item.statut===1\">\r\n      <div *ngFor=\"let data of item.article; trackBy: trackByFn\">\r\n        <div *ngIf=\"data.statut === 1\" [ngClass]=\"gridClass(item.article)\" [ngStyle]=\"styleClass(item.article)\">\r\n          <app-card [contain]=\"data\" [lang]=\"lang\"></app-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _shared_utility_favicon_favicon_factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/utility/favicon/favicon-factory */ "./src/app/shared/utility/favicon/favicon-factory.ts");
/* harmony import */ var _shared_utility_grid_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/utility/grid/grid */ "./src/app/shared/utility/grid/grid.ts");
/* harmony import */ var _shared_utility_sort_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/utility/sort/sort */ "./src/app/shared/utility/sort/sort.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Page home
 */
var HomeComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function HomeComponent(dataService, route, metaData, docTitle) {
        this.dataService = dataService;
        this.route = route;
        this.metaData = metaData;
        this.docTitle = docTitle;
        /**
         * Contain all the category of our data
         */
        this.categoryArray = [];
        /**
         * Contain the data to display on the view
         */
        // tslint:disable:object-literal-sort-keys
        // tslint:disable:max-line-length
        this.contain = [];
        // Contain the language that is currently used
        this.lang = 'en';
        //
    }
    /**
     * Initialize some variable
     */
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * We get the datas
         */
        this.dataService.getTranslation('pageContain_' + this.lang).subscribe(function (data) {
            _this.contain = data.filter(function (value) { return value.id === 'home'; });
            // I sort te category from priority 1 to last priority
            _this.contain[0].category = _this.contain[0].category.sort(_shared_utility_sort_sort__WEBPACK_IMPORTED_MODULE_6__["Sort"].arraySort);
            _this.contain[0].category.forEach(function (element) {
                // I sort the article from priority 1 to last priority
                element.article = element.article.sort(_shared_utility_sort_sort__WEBPACK_IMPORTED_MODULE_6__["Sort"].arraySort);
                // Then, I extract all the category to an array of category
                _this.categoryArray.push(element);
            });
            // I get and set all the meta data of the page
            _this.pageMetaData = data.filter(function (value) { return value.id === 'meta'; })[0].meta;
            _this.metaData.addTags(_this.pageMetaData.meta);
            // I set the title of the document
            _this.docTitle.setTitle(_this.pageMetaData.title);
            // I set the favicon of the page
            _shared_utility_favicon_favicon_factory__WEBPACK_IMPORTED_MODULE_4__["FaviconFactory"].favicon(_this.pageMetaData.favicon);
        });
    };
    /**
     * compute the size of an element and return the bootstrap class that match the size
     * @param article the element we want to compute the size on the html view
     * @returns the size of the element on the view
     */
    HomeComponent.prototype.gridClass = function (article) {
        var activeStatut = 0;
        article.forEach(function (element) {
            if (element.statut === 1) {
                activeStatut += 1;
            }
        });
        return _shared_utility_grid_grid__WEBPACK_IMPORTED_MODULE_5__["Grid"].gridSystem_sm(activeStatut);
    };
    /**
     * apply the border-bottom style on an element
     * @param article will allow to verify that the size of the element we want to apply the style
     * is greater than 1
     */
    HomeComponent.prototype.styleClass = function (article) {
        var activeStatut = 0;
        if (article.length > 1) {
            article.forEach(function (element) {
                if (element.statut === 1) {
                    activeStatut += 1;
                }
            });
        }
        return (activeStatut > 1) ? { 'border-bottom': '1px solid rgb(230, 214, 214)' } : '';
    };
    /**
     * @ignore
     */
    HomeComponent.prototype.trackByFn = function (index, item) {
        return index; // or item.id
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"border: 1px solid red\">pageNotFound</div>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Page not found
 */
var PageNotFoundComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function PageNotFoundComponent() {
        //
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")],
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/card/card.component.css":
/*!************************************************!*\
  !*** ./src/app/shared/card/card.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div.polaroid {\r\n  width: 100%;\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 25px;\r\n}\r\n\r\nimg {\r\n  width: 100%;\r\n}\r\n\r\n.polaroid img {\r\n  height: 250px;\r\n  border-radius: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .polaroid img {\r\n    height: 150px;\r\n    border-radius: 10px;\r\n  }\r\n}\r\n\r\ndiv.zoom {\r\n  width: 100%;\r\n  background-color: white;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.zoom img {\r\n  height: 250px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.zoom img:hover {\r\n  height: 260px;\r\n  width: 105%; /* Safari */\r\n  transition: width 1s, height 1s;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .zoom img {\r\n    height: 150px;\r\n    border-radius: 10px;\r\n  } \r\n}\r\n\r\n.read_more {\r\n  cursor: pointer;\r\n  font-size: 15px;\r\n  color: rgb(27, 112, 183);\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/card/card.component.html":
/*!*************************************************!*\
  !*** ./src/app/shared/card/card.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"contain.statut===1\" [ngClass]=\"{'polaroid': contain['id']==='polaroid', 'zoom': contain['id']==='zoom'}\">\r\n  <div *ngIf=\"contain.image\">\r\n      <!--Internal link on image-->\r\n      <a *ngIf=\"contain.image[0].int_link\" [routerLink]=\"['/' + contain.image[0].int_link, lang]\">\r\n        <img [src]=\"contain.image[0].src\" [alt]=\"contain.image[0].alt\" [tooltip]=\"contain.image[0].tooltip\">\r\n      </a>\r\n      <!--External link on image-->\r\n      <a *ngIf=\"contain.image[0].ext_link\" [href]=\"contain.image[0].ext_link\">\r\n        <img [src]=\"contain.image[0].src\" [alt]=\"contain.image[0].alt\" [tooltip]=\"contain.image[0].tooltip\">\r\n      </a>\r\n      <!--show normal image-->\r\n      <img *ngIf=\"contain.image && (!contain.image[0].ext_link && !contain.image[0].int_link)\" [src]=\"contain.image[0].src\"\r\n          [alt]=\"contain.image[0].alt\" [tooltip]=\"contain.image[0].tooltip\">\r\n  </div>\r\n</div>\r\n<div *ngIf=\"contain.statut===1\" style=\"text-align: justify\">\r\n  <!--title-->\r\n  <h2 style=\"text-align: center\">{{contain.title}}</h2>\r\n  <!--Sub title-->\r\n  <h3 *ngFor=\"let subtitle of contain.subTitle; trackBy: trackByFn\" style=\"text-align: center\">{{subtitle}}</h3>\r\n  <!--data contain-->\r\n  <p *ngFor=\"let data of contain['contenu']; trackBy: trackByFn\">{{data}}</p>\r\n  <!--read more-->\r\n  <div *ngIf=\"contain.read_more\">\r\n    <div *ngIf='viewDetails'>\r\n      <p *ngFor=\"let data of contain.read_more['textDesc']; trackBy: trackByFn\">{{data}}</p>\r\n    </div>\r\n    <p *ngIf=\"contain.read_more?.title\" class=\"read_more\"\r\n       (click)=\"moreDetail()\">\r\n      {{titleText}}\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component allow to manage card
 */
var CardComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function CardComponent() {
        /**
         * Allow to hide or show detail informations in template
         * When true, more informations are shown
         */
        this.viewDetails = false;
        /**
         * Its values is Hide or More when viewDetils is either
         * true or false
         */
        this.titleText = 'read More';
        /**
         * Contain the data that are shown
         */
        // tslint:disable:object-literal-sort-keys
        this.contain = {};
        /**
         * Contain the language that is currently used
         */
        this.lang = 'en';
        //
    }
    /**
     * this function toggle viewDetails when user click on view more or Hide
     */
    CardComponent.prototype.moreDetail = function () {
        this.viewDetails = !this.viewDetails;
        if (this.titleText === 'read More') {
            this.titleText = 'Hide';
        }
        else {
            this.titleText = 'read More';
        }
    };
    /**
     * @ignore
     */
    CardComponent.prototype.trackByFn = function (index, item) {
        return index; // or item.id
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "contain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "lang", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            styles: [__webpack_require__(/*! ./card.component.css */ "./src/app/shared/card/card.component.css")],
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/shared/card/card.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.css":
/*!********************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n  width: 100%;\r\n}\r\n\r\nslide img {\r\n  height: 400px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  slide img {\r\n    height: 200px;\r\n  }\r\n}\r\n\r\n.read_more {\r\n  color: rgb(255, 223, 223);\r\n  -webkit-text-decoration-style: solid;\r\n          text-decoration-style: solid;\r\n}\r\n\r\n.carousel-caption.animation {\r\n  background: rgba(255, 255, 255, 0.5);\r\n  color: black;\r\n  display: none;\r\n}\r\n\r\n.carousel-caption.slideAnimation {\r\n  display: block\r\n}\r\n"

/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<carousel (activeSlideChange)=\"activeSlide($event)\" [noPause]=\"slidePause\" [interval]=\"interval\">\r\n  <slide *ngFor=\"let item of contain let i=index; trackBy: trackByFn\">\r\n    <div *ngIf=\"item.image\">\r\n       <!--Image-->\r\n       <img [src]=\"item.image[0].src\" [alt]=\"item.image[0].alt\" style=\"display: block;\">\r\n    </div>\r\n    <!--Caption-->\r\n    <div class=\"carousel-caption d-none d-md-block\" [ngClass]=\"{'slideAnimation': activeSlideNumber===i && item['id']==='delay',\r\n              'animation': item['id']==='delay'}\">\r\n      <!--Title-->\r\n      <h2>{{item.title}}</h2>\r\n      <!--SubTitle-->\r\n      <h3 *ngFor=\"let subtitle of item.subTitle; trackBy: trackByFn\">{{subtitle}}</h3>\r\n      <!--content Description-->\r\n      <p *ngFor=\"let content of item?.contenu; trackBy: trackByFn\">{{content}}</p>\r\n      <!--Read more-->\r\n      <a class=\"read_more\" *ngIf=\"item.read_more?.ext_link\" [href]=\"item.read_more?.ext_link\">\r\n        {{item.read_more?.title}}\r\n      </a>\r\n      <a class=\"read_more\" *ngIf=\"item.read_more?.int_link\" [routerLink]=\"['/' + item.read_more?.int_link, lang]\">\r\n        {{item.read_more?.title}}\r\n      </a>\r\n    </div>\r\n  </slide>\r\n</carousel>\r\n\r\n"

/***/ }),

/***/ "./src/app/shared/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * This component manage carousel
 */
var CarouselComponent = /** @class */ (function () {
    /**
     * @ignore
     */
    function CarouselComponent() {
        /**
         * Contain the slide number that is display
         */
        this.activeSlideNumber = 0;
        /**
         * contain the data that will be displayed in the carousel
         */
        // tslint:disable:object-literal-sort-keys
        this.contain = [];
        /**
         * determine if the slider will pause automatically when user hover it
         */
        this.slidePause = false;
        /**
         * Define the delay between two slide in ms
         */
        this.interval = 2000;
        // Contain the language that is actually apply
        this.lang = 'en';
        //
    }
    /**
     * Is called automatically when slide image change
     * @param event the slide number that is display
     */
    CarouselComponent.prototype.activeSlide = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.activeSlideNumber = event;
        }, 1000);
    };
    /**
     * @ignore
     */
    CarouselComponent.prototype.trackByFn = function (index, item) {
        return index; // or item.id
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "contain", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "slidePause", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "interval", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CarouselComponent.prototype, "lang", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carousel',
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/shared/carousel/carousel.component.css")],
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/shared/carousel/carousel.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/shared/carousel/carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_3__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_4__["TooltipModule"].forRoot(),
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"]
            ],
            // tslint:disable-next-line:object-literal-sort-keys
            declarations: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"], _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]],
            exports: [
                _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_7__["CarouselComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/utility/favicon/favicon-factory.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/utility/favicon/favicon-factory.ts ***!
  \***********************************************************/
/*! exports provided: FaviconFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaviconFactory", function() { return FaviconFactory; });
/**
 * This class manage the favicon of the document
 * We remove is spec test because it is not necessary to test this class
 * Why?: it modify the state of the home page browser and do not modify a variable
 */
var FaviconFactory = /** @class */ (function () {
    function FaviconFactory() {
    }
    /**
     * Set the favicon of the web page
     * @param url the url of the favicon
     */
    FaviconFactory.favicon = function (url) {
        if (url === void 0) { url = 'assets/img/logo/logo.jpg'; }
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'icon';
        link.href = url + '?any=param' || 'base64';
        document.getElementsByTagName('head')[0].appendChild(link);
    };
    return FaviconFactory;
}());



/***/ }),

/***/ "./src/app/shared/utility/grid/grid.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utility/grid/grid.ts ***!
  \*********************************************/
/*! exports provided: Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/**
 * This class help to manage the grid systeme of bootstrap
 */
var Grid = /** @class */ (function () {
    function Grid() {
    }
    /**
     * compute the number of call an element need to be dísplay depending of its size
     * @param size the number of element we want to display
     * @returns the bootstrap col
     */
    Grid.gridSystem_sm = function (size) {
        var col = (size >= 4) ? 3 : Math.round(12 / size);
        return this.grid[col - 1];
    };
    /**
     * Contain the bootstrap grid column
     */
    Grid.grid = ['col-sm-1', 'col-sm-2', 'col-sm-3', 'col-sm-4', 'col-sm-5', 'col-sm-6',
        'col-sm-7', 'col-sm-8', 'col-sm-9', 'col-sm-10', 'col-sm-11', 'col-sm-12'];
    return Grid;
}());



/***/ }),

/***/ "./src/app/shared/utility/sort/sort.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/utility/sort/sort.ts ***!
  \*********************************************/
/*! exports provided: Sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sort", function() { return Sort; });
/**
 * This class contain utilities method that allow to sort an array
 */
var Sort = /** @class */ (function () {
    function Sort() {
    }
    /**
     * Allow to sort and array. itmust be use in combinaison with the method Array.prototype.sort()
     * @param first
     * @param second
     */
    Sort.arraySort = function (first, second) {
        var result;
        if (first.priorite === second.priorite) {
            result = 0;
        }
        else if (first.priorite < second.priorite) {
            result = -1;
        }
        else {
            return 1;
        }
        return result;
    };
    return Sort;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * The environment
 */
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! X:\Tonkain home page\Homepages\homepage_Release-main\homepage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map