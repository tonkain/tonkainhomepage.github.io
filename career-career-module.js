(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["career-career-module"],{

/***/ "./src/app/career/career.component.css":
/*!*********************************************!*\
  !*** ./src/app/career/career.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\r\n    height: 400px;\r\n    padding-top: 150px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  #title {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n#title > h1 {\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.container {\r\n    margin-bottom: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/career/career.component.html":
/*!**********************************************!*\
  !*** ./src/app/career/career.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"title\" class=\"col-xs-12\" [ngStyle]=\"{ 'background': 'url(' + careerPage?.titleImage + ') no-repeat fixed center',\n     'background-size': careerPage?.titleImage ? 'cover': ''}\">\n  <h1>{{ careerPage?.title }}</h1>\n</div>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/career/career.component.ts":
/*!********************************************!*\
  !*** ./src/app/career/career.component.ts ***!
  \********************************************/
/*! exports provided: CareerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerComponent", function() { return CareerComponent; });
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
 * Component corresponding to the Career page
 */
var CareerComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class, its role is to create a service object used for page contain acquisition
     */
    function CareerComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    /**
     * This function is called during the initialization of our component to load the content of the page into the variables defined above.
     */
    CareerComponent.prototype.ngOnInit = function () {
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
            _this.careerPage = pages.filter(function (page) {
                return page.id === 'career';
            })[0];
        });
        if (this.route.firstChild == null) {
            this.router.navigate(['/career', this.lang, 'careerHome', this.lang]);
        }
    };
    CareerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./career.component.css */ "./src/app/career/career.component.css")],
            template: __webpack_require__(/*! ./career.component.html */ "./src/app/career/career.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CareerComponent);
    return CareerComponent;
}());



/***/ }),

/***/ "./src/app/career/career.module.ts":
/*!*****************************************!*\
  !*** ./src/app/career/career.module.ts ***!
  \*****************************************/
/*! exports provided: CareerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerModule", function() { return CareerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _career_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./career.component */ "./src/app/career/career.component.ts");
/* harmony import */ var _home_career_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/career-home.component */ "./src/app/career/home/career-home.component.ts");
/* harmony import */ var _position_career_position_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./position/career-position.component */ "./src/app/career/position/career-position.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CareerModule = /** @class */ (function () {
    function CareerModule() {
    }
    CareerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _career_component__WEBPACK_IMPORTED_MODULE_3__["CareerComponent"],
                _home_career_home_component__WEBPACK_IMPORTED_MODULE_4__["CareerHomeComponent"],
                _position_career_position_component__WEBPACK_IMPORTED_MODULE_5__["CareerPositionComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: ':lang',
                        // tslint:disable-next-line:object-literal-sort-keys
                        component: _career_component__WEBPACK_IMPORTED_MODULE_3__["CareerComponent"],
                        children: [
                            { path: 'careerHome/:lang', component: _home_career_home_component__WEBPACK_IMPORTED_MODULE_4__["CareerHomeComponent"] },
                            { path: 'position/:name/:lang', component: _position_career_position_component__WEBPACK_IMPORTED_MODULE_5__["CareerPositionComponent"] }
                        ]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            providers: []
        })
    ], CareerModule);
    return CareerModule;
}());



/***/ }),

/***/ "./src/app/career/home/career-home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/career/home/career-home.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 5px;\r\n    margin: 1%;\r\n}\r\n\r\np {\r\n    text-align: justify;\r\n    margin: 0%;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\nh3 {\r\n    color: rgb(27, 112, 183);\r\n    font-weight: bold;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 1%;\r\n}\r\n\r\n#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    padding: 1% 1% 0% 2%;\r\n    margin-top: 0%;\r\n    border: 0px;\r\n}\r\n\r\n.col-sm-4 {\r\n    width: 30%;\r\n    margin: 0 1% 2% 2%;\r\n}\r\n\r\n.col-sm-4 > img {\r\n    text-align: center;\r\n}\r\n\r\n.tonkainJob .col-sm-4 {\r\n    margin: 0 1% 3% 2%;\r\n    width: 30%;\r\n    height: 150px;\r\n    border: 1px solid lightgray;\r\n    border-bottom: 5px solid lightgray;\r\n}\r\n\r\n.tonkainJob .col-sm-4 > button {\r\n    position: absolute;\r\n    bottom: 5%;\r\n}\r\n\r\n.tonkainJob .col-sm-4:hover {\r\n    background: rgb(238, 237, 237);\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) { \r\n    .tonkainJob .col-sm-4, .col-sm-4 {\r\n        margin-left: 10%;\r\n        width: 80%;\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/career/home/career-home.component.html":
/*!********************************************************!*\
  !*** ./src/app/career/home/career-home.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"subLink\" class=\"row\">\n  <p>{{ careerPage?.pageName }} </p>\n</div>\n\n<div *ngFor='let category of careerPage?.category; trackBy: trackByMulti' class=\"row category\">\n  <div class=\"row\">\n    <h1>{{ category?.title }}</h1>\n  </div>\n  \n  <div class=\"row\">\n    <p>{{ category?.textDesc }}</p>\n  </div>\n  \n  <div class=\"row\" *ngIf='category?.article'>\n    <div *ngFor='let article of category?.article; trackBy: trackByMulti' class=\"col-sm-4 article\">\n      <img *ngIf='article?.image[0].src' [src]='article?.image[0].src' class=\"img-responsive\" [alt]='article?.title'>\n      <h3>{{ article?.title }}</h3>\n      <p *ngFor='let contenu of article?.contenu; trackBy: trackByMulti'>{{ contenu }}</p>\n    </div>\n  </div>\n</div>\n\n<div class=\"row tonkainJob\">\n  <div *ngFor='let job of filteredjobs; trackBy: trackByMulti' class=\"col-sm-4\" [routerLink]=\"['/career', lang, 'position', job?.name, lang]\">\n    <h3>{{ job?.name }}</h3>\n    <br>\n    <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/career', lang, 'position', job?.name, lang]\">View position</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/career/home/career-home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/career/home/career-home.component.ts ***!
  \******************************************************/
/*! exports provided: CareerHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerHomeComponent", function() { return CareerHomeComponent; });
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
 * Component corresponding to the career home page
 */
var CareerHomeComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class,
     * its role is to create the service objects used for data acquisition as well as a routing object to read the parameters in the URL
     */
    function CareerHomeComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    /**
     * This function is called to get jobs in output.
     */
    CareerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.jobs = this.dataService.getTranslation('jobs_' + this.lang);
        this.dataService.getTranslation('jobs_' + this.lang)
            .subscribe(function (jobs) {
            _this.filteredjobs = jobs;
        });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.careerPage = pages.filter(function (page) {
                return page.id === 'career';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    CareerHomeComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    CareerHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-career-home',
            styles: [__webpack_require__(/*! ./career-home.component.css */ "./src/app/career/home/career-home.component.css")],
            template: __webpack_require__(/*! ./career-home.component.html */ "./src/app/career/home/career-home.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], CareerHomeComponent);
    return CareerHomeComponent;
}());



/***/ }),

/***/ "./src/app/career/position/career-position.component.css":
/*!***************************************************************!*\
  !*** ./src/app/career/position/career-position.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 5px;\r\n    margin: 0.5%;\r\n}\r\n\r\np {\r\n    text-align: justify;\r\n    margin: 0%;\r\n}\r\n\r\n#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    margin: 0 0 20px 0;\r\n    padding: 1% 1% 0% 2%;\r\n    border: 0px;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: left;\r\n    font-weight: bold;\r\n    margin-bottom: 2%;\r\n}\r\n\r\nh4 {\r\n    text-align: left;\r\n}\r\n\r\n.offerDesc > h4 {\r\n    font-weight: bold;\r\n}\r\n\r\n.carousel-indicators {\r\n    bottom: -10%;\r\n    margin-left: -30%;\r\n}\r\n\r\n.carousel-indicators > li {\r\n    background: black;\r\n}\r\n\r\n.carousel-control[data-slide=\"prev\"] {\r\n    left: -10%;\r\n    background: none;\r\n    color: black;\r\n}\r\n\r\n.carousel-control[data-slide=\"next\"] {\r\n    right: -10%;\r\n    background: none;\r\n    color: black;\r\n}"

/***/ }),

/***/ "./src/app/career/position/career-position.component.html":
/*!****************************************************************!*\
  !*** ./src/app/career/position/career-position.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='filteredJob' id=\"subLink\" class=\"row\">\n    <p><a [routerLink]=\"['/career', lang, 'careerHome', lang]\" routerLinkActive=\"active\">{{ careerPage?.pageName }}</a> > {{ filteredJob?.name }}</p>\n  </div>\n  \n  <div *ngIf='filteredJob'>\n    <div class=\"row\">\n      <h1>{{ filteredJob?.name }}</h1>\n      <h4>{{ filteredJob?.date }}</h4>\n    </div>\n  \n    <div id=\"whoWeAre\" class=\"row offerDesc\">\n      <h4>Who we are:</h4> <br>\n      <p>{{ filteredJob?.whoWeAre }}</p>\n    </div><br>\n  \n    <div id=\"responsibilities\" class=\"row offerDesc\">\n      <h4>Position Responsibilities:</h4> <br>\n      <ul>\n        <li *ngFor='let responsibility of filteredJob.responsibilities; trackBy: trackByMulti'> {{ responsibility }} </li>\n      </ul>\n    </div>\n  \n    <div id=\"education\" class=\"row offerDesc\">\n      <h4>Education and Training:</h4> <br>\n      <ul>\n        <li *ngFor='let education of filteredJob.education; trackBy: trackByMulti'> {{ education }} </li>\n      </ul>\n    </div>\n  \n    <div id=\"knowledge\" class=\"row offerDesc\">\n      <h4>Knowledge:</h4> <br>\n      <ul>\n        <li *ngFor='let knowledge of filteredJob.knowledge; trackBy: trackByMulti'> {{ knowledge }} </li>\n      </ul>\n    </div>\n  \n    <div id=\"experience\" class=\"row offerDesc\">\n      <h4>Experience:</h4> <br>\n      <ul>\n        <li *ngFor='let experience of filteredJob.experience; trackBy: trackByMulti'> {{ experience }} </li>\n      </ul>\n    </div>\n  \n    <div id=\"whatWeOffer\" class=\"row offerDesc\">\n      <h4>What we Offer:</h4> <br>\n      <ul>\n        <li *ngFor='let whatWeOffer of filteredJob.whatWeOffer; trackBy: trackByMulti'> {{ whatWeOffer }} </li>\n      </ul>\n    </div><br>\n  \n    <div id=\"deathLines\" class=\"row offerDesc\">\n      <p>{{ filteredJob?.deathLines }}</p>\n    </div>\n  \n  </div>\n"

/***/ }),

/***/ "./src/app/career/position/career-position.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/career/position/career-position.component.ts ***!
  \**************************************************************/
/*! exports provided: CareerPositionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareerPositionComponent", function() { return CareerPositionComponent; });
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
 * Component corresponding to the job details page of Career
 */
var CareerPositionComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class,
     * its role is to create the service objects used for data acquisition as well as a routing object to read the parameters in the URL
     */
    function CareerPositionComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    /**
     * On intialization of the component, we first load all data inside the jobs.json and then filtering them to have a single job
     * after it, we will display our job specification in the template.
     */
    CareerPositionComponent.prototype.ngOnInit = function () {
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
        this.jobs = this.dataService.getTranslation('jobs_' + this.lang);
        this.dataService.getTranslation('jobs_' + this.lang)
            .subscribe(function (jobs) {
            _this.filteredJob = jobs.filter(function (job) {
                return job.name === urlParam;
            })[0];
        });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.careerPage = pages.filter(function (page) {
                return page.id === 'career';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    CareerPositionComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    CareerPositionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./career-position.component.css */ "./src/app/career/position/career-position.component.css")],
            template: __webpack_require__(/*! ./career-position.component.html */ "./src/app/career/position/career-position.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], CareerPositionComponent);
    return CareerPositionComponent;
}());



/***/ })

}]);
//# sourceMappingURL=career-career-module.js.map