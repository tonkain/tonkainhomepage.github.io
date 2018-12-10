(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["papers-papers-module"],{

/***/ "./src/app/papers/details/papers-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/papers/details/papers-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 5px;\r\n    margin: 0.5%;\r\n}\r\n\r\np {\r\n    text-align: justify;\r\n    margin: 0%;\r\n}\r\n\r\n#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    margin: 0 0 20px 0;\r\n    padding: 1% 1% 0% 2%;\r\n    border: 0px;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: left;\r\n    font-weight: bold;\r\n    margin-bottom: 2%;\r\n}\r\n\r\nh4 {\r\n    text-align: left;\r\n}\r\n\r\n.offerDesc > h4 {\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/papers/details/papers-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/papers/details/papers-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='filteredPapers' id=\"subLink\" class=\"row\">\n    <p><a [routerLink]=\"['/papers', lang, 'papersHome', lang]\" routerLinkActive=\"active\">{{ papersPage?.pageName }}</a> > {{ filteredPapers?.title }}</p>\n  </div>\n  \n  <div *ngIf='filteredPapers'>\n    <div class=\"row\">\n      <h1>{{ filteredPapers?.title }}</h1>\n      <h4>{{ filteredPapers?.date }}</h4>\n    </div>\n  \n    <div id=\"journal\" class=\"row offerDesc\">\n      <h4>Journal:</h4> <br>\n      <p>{{ filteredPapers?.journal }}</p>\n    </div><br>\n  \n    <div id=\"authors\" class=\"row offerDesc\">\n      <h4>Paper Authors:</h4> <br>\n      <ul>\n        <li *ngFor='let authors of filteredPapers.authors; trackBy: trackByMulti'> {{ authors }} </li>\n      </ul>\n    </div>\n  \n    <div id=\"description\" class=\"row offerDesc\">\n      <h4>Description:</h4> <br>\n      <ul>\n        <li *ngFor='let description of filteredPapers.description; trackBy: trackByMulti'> {{ description }} </li>\n      </ul>\n    </div>\n  \n    <div id=\"figure\" class=\"row offerDesc\">\n      <h4>Figure:</h4> <br>\n      <div *ngIf='filteredPapers.image.length > 0' class=\"row\">\n        <div class=\"col-xs-12\">\n          <div id=\"paperImages\" class=\"carousel slide\" data-ride=\"carousel\">\n            <ol class=\"carousel-indicators\">\n              <li *ngFor='let image of filteredPapers.image; trackBy: trackBySingle' \n                  data-target=\"#paperImages\" [attr.data-slide-to]=\"filteredPapers.image.indexOf(image)\"\n                  [ngClass]=\"{'active': filteredPapers.image.indexOf(image) === 0 }\"></li>\n            </ol>\n    \n            <div class=\"carousel-inner\">\n    \n              <div *ngFor='let image of filteredPapers.image; trackBy: trackBySingle' class=\"item\" \n                    [ngClass]=\"{'active': filteredPapers.image.indexOf(image) === 0 }\">\n                <img alt=\"First slide\" [src]=\"image\" style=\"width:100%;\">\n              </div>\n            </div>\n    \n            <a class=\"left carousel-control\" href=\"#paperImages\" data-slide=\"prev\">\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"right carousel-control\" href=\"#paperImages\" data-slide=\"next\">\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/papers/details/papers-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/papers/details/papers-details.component.ts ***!
  \************************************************************/
/*! exports provided: PapersDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersDetailsComponent", function() { return PapersDetailsComponent; });
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
 * Component corresponding to the papers details page of Papers
 */
var PapersDetailsComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class,
     * its role is to create the service objects used for data acquisition as well as a routing object to read the parameters in the URL
     */
    function PapersDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    /**
     * On intialization of the component, we first load all data inside the papers.json and then filtering them to have a single paper
     * after it, we will display our paper specification in the template.
     */
    PapersDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * this statement retrieves the parameter in the URL
         */
        // const name = this.route.snapshot.paramMap.get('name');
        var urlParam;
        this.route.paramMap.subscribe(function (pmap) { return urlParam = pmap.get('name'); });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.papers = this.dataService.getTranslation('papers_' + this.lang);
        this.dataService.getTranslation('papers_' + this.lang)
            .subscribe(function (papers) {
            _this.filteredPapers = papers.filter(function (paper) {
                return paper.title === urlParam;
            })[0];
        });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.papersPage = pages.filter(function (page) {
                return page.id === 'papers';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    PapersDetailsComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    PapersDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./papers-details.component.css */ "./src/app/papers/details/papers-details.component.css")],
            template: __webpack_require__(/*! ./papers-details.component.html */ "./src/app/papers/details/papers-details.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], PapersDetailsComponent);
    return PapersDetailsComponent;
}());



/***/ }),

/***/ "./src/app/papers/home/papers-home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/papers/home/papers-home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 5px;\r\n    margin: 1%;\r\n}\r\n\r\np {\r\n    text-align: justify;\r\n    margin: 0%;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\nh3 {\r\n    color: rgb(27, 112, 183);\r\n    font-weight: bold;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 1%;\r\n}\r\n\r\n#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    padding: 1% 1% 0% 2%;\r\n    margin-top: 0%;\r\n    border: 0px;\r\n}\r\n\r\n.col-sm-4 {\r\n    width: 30%;\r\n    margin: 0 1% 2% 2%;\r\n}\r\n\r\n.col-sm-4 > img {\r\n    text-align: center;\r\n}\r\n\r\n.tonkainPaper .col-sm-4 {\r\n    margin: 0 1% 3% 2%;\r\n    width: 30%;\r\n    height: 150px;\r\n    border: 1px solid lightgray;\r\n    border-bottom: 5px solid lightgray;\r\n}\r\n\r\n.tonkainPaper .col-sm-4 > button {\r\n    position: absolute;\r\n    bottom: 5%;\r\n}\r\n\r\n.tonkainPaper .col-sm-4:hover {\r\n    background: rgb(238, 237, 237);\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) { \r\n    .tonkainPaper .col-sm-4, .col-sm-4 {\r\n        margin-left: 10%;\r\n        width: 80%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/papers/home/papers-home.component.html":
/*!********************************************************!*\
  !*** ./src/app/papers/home/papers-home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"subLink\" class=\"row\">\n  <p>{{ papersPage?.pageName }} </p>\n</div>\n\n<div *ngFor='let category of papersPage?.category; trackBy: trackByMulti' class=\"row category\">\n  <div class=\"row\">\n    <h1>{{ category?.title }}</h1>\n  </div>\n  \n  <div class=\"row\">\n    <p>{{ category?.textDesc }}</p>\n  </div>\n</div>\n\n<div class=\"row tonkainPaper\">\n  <div *ngFor='let papers of filteredpapers; trackBy: trackByMulti' class=\"col-sm-4\" [routerLink]=\"['/papers', lang, 'details', papers?.title, lang]\">\n    <h3>{{ papers?.title }}</h3>\n    <br>\n    <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/papers', lang, 'details', papers?.title, lang]\">View details</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/papers/home/papers-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/papers/home/papers-home.component.ts ***!
  \******************************************************/
/*! exports provided: PapersHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersHomeComponent", function() { return PapersHomeComponent; });
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
 * Component corresponding to the Papers home page
 */
var PapersHomeComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class,
     * its role is to create the service objects used for data acquisition as well as a routing object to read the parameters in the URL
     */
    function PapersHomeComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    /**
     * This function is called to get papers in output.
     */
    PapersHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.papers = this.dataService.getTranslation('papers_' + this.lang);
        this.dataService.getTranslation('papers_' + this.lang)
            .subscribe(function (papers) {
            _this.filteredpapers = papers;
        });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.papersPage = pages.filter(function (page) {
                return page.id === 'papers';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    PapersHomeComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    PapersHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./papers-home.component.css */ "./src/app/papers/home/papers-home.component.css")],
            template: __webpack_require__(/*! ./papers-home.component.html */ "./src/app/papers/home/papers-home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], PapersHomeComponent);
    return PapersHomeComponent;
}());



/***/ }),

/***/ "./src/app/papers/papers.component.css":
/*!*********************************************!*\
  !*** ./src/app/papers/papers.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\r\n    height: 400px;\r\n    padding-top: 150px;\r\n}\r\n\r\n#title > h1 {\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.container {\r\n    margin-bottom: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/papers/papers.component.html":
/*!**********************************************!*\
  !*** ./src/app/papers/papers.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"title\" class=\"col-xs-12\" [ngStyle]=\"{ 'background': 'url(' + papersPage?.titleImage + ') no-repeat fixed center',\n     'background-size': papersPage?.titleImage ? 'cover': ''}\">\n  <h1>{{ papersPage?.title }}</h1>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/papers/papers.component.ts":
/*!********************************************!*\
  !*** ./src/app/papers/papers.component.ts ***!
  \********************************************/
/*! exports provided: PapersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersComponent", function() { return PapersComponent; });
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
 * Component corresponding to the Papers page
 */
var PapersComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class, its role is to create a service object used for page contain acquisition
     */
    function PapersComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    /**
     * This function is called during the initialization of our component to load the content of the page into the variables defined above.
     */
    PapersComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang).subscribe(function (pages) {
            _this.papersPage = pages.filter(function (page) {
                return page.id === 'papers';
            })[0];
        });
        if (this.route.firstChild == null) {
            this.router.navigate(['/papers', this.lang, 'papersHome', this.lang]);
        }
    };
    PapersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./papers.component.css */ "./src/app/papers/papers.component.css")],
            template: __webpack_require__(/*! ./papers.component.html */ "./src/app/papers/papers.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PapersComponent);
    return PapersComponent;
}());



/***/ }),

/***/ "./src/app/papers/papers.module.ts":
/*!*****************************************!*\
  !*** ./src/app/papers/papers.module.ts ***!
  \*****************************************/
/*! exports provided: PapersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PapersModule", function() { return PapersModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _details_papers_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/papers-details.component */ "./src/app/papers/details/papers-details.component.ts");
/* harmony import */ var _home_papers_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/papers-home.component */ "./src/app/papers/home/papers-home.component.ts");
/* harmony import */ var _papers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./papers.component */ "./src/app/papers/papers.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PapersModule = /** @class */ (function () {
    function PapersModule() {
    }
    PapersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _papers_component__WEBPACK_IMPORTED_MODULE_5__["PapersComponent"],
                _home_papers_home_component__WEBPACK_IMPORTED_MODULE_4__["PapersHomeComponent"],
                _details_papers_details_component__WEBPACK_IMPORTED_MODULE_3__["PapersDetailsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: ':lang',
                        // tslint:disable-next-line:object-literal-sort-keys
                        component: _papers_component__WEBPACK_IMPORTED_MODULE_5__["PapersComponent"],
                        children: [
                            { path: 'papersHome/:lang', component: _home_papers_home_component__WEBPACK_IMPORTED_MODULE_4__["PapersHomeComponent"] },
                            { path: 'details/:name/:lang', component: _details_papers_details_component__WEBPACK_IMPORTED_MODULE_3__["PapersDetailsComponent"] }
                        ]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            providers: []
        })
    ], PapersModule);
    return PapersModule;
}());



/***/ })

}]);
//# sourceMappingURL=papers-papers-module.js.map