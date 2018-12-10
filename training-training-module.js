(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "./src/app/training/course-details/course-details.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/training/course-details/course-details.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\r\n    margin: 1%;\r\n}\r\n\r\n#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    margin: 0 0 20px 0;\r\n    padding: 1% 1% 0% 2%;\r\n    border: 0px;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: left;\r\n    font-weight: bold;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.panel-group h3 {\r\n    color: rgb(27, 112, 183);\r\n    font-weight: bold;\r\n}\r\n\r\n.logo {\r\n    padding: 0;\r\n    width: 3%;\r\n    height: 1%;\r\n}\r\n\r\n.offset-3 {\r\n    margin-left: 30%;\r\n}\r\n\r\n.row {\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.carousel-indicators {\r\n    bottom: -10%;\r\n    margin-left: -30%;\r\n}\r\n\r\n.carousel-indicators > li {\r\n    background: black;\r\n}\r\n\r\n.carousel-control[data-slide=\"prev\"] {\r\n    left: -10%;\r\n    background: none;\r\n    color: black;\r\n}\r\n\r\n.carousel-control[data-slide=\"next\"] {\r\n    right: -10%;\r\n    background: none;\r\n    color: black;\r\n}\r\n\r\n.panel-group .panel {\r\n    margin-bottom: 1%;\r\n    padding: 0;\r\n}\r\n\r\n.panel-group .panel:hover {\r\n    background: rgb(238, 237, 237);\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/training/course-details/course-details.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/training/course-details/course-details.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='filteredCourses' id=\"subLink\" class=\"row\">\n  <p><a [routerLink]=\"['/training', lang, 'trainingHome', lang]\" routerLinkActive=\"active\">{{ trainingPage?.pageName }}</a> > <a [routerLink]=\"['/training', lang, 'courseGroup', filteredCourses.groupName, lang]\" routerLinkActive=\"active\">{{ groupName }}</a> > {{ filteredCourses.name }}</p>\n</div>\n\n<div *ngIf='filteredCourses'>\n  <div id=\"header\" class=\"row\">\n    <div *ngFor='let logo of filteredCourses.logo; trackBy: trackBySingle' \n          [ngClass]=\"{'offset-3': filteredCourses.logo.indexOf(logo) === 0 }\"\n          class=\"col-xs-1 logo\">  \n      <img [src]='logo' class=\"img-responsive\" alt=\"Logo\">\n    </div>\n    <div class=\" col-xs-8 col-sm-5\">  \n      <h1>{{ filteredCourses?.name }}</h1>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <p>{{ filteredCourses?.description }} </p>\n  </div>\n\n  <div *ngIf='filteredCourses.praticePicture.length > 0' class=\"row\">\n    <div class=\"col-xs-12\">\n      <div id=\"courseExample\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li *ngFor='let praticePicture of filteredCourses.praticePicture; trackBy: trackBySingle' \n              data-target=\"#courseExample\" [attr.data-slide-to]=\"filteredCourses.praticePicture.indexOf(praticePicture)\"\n              [ngClass]=\"{'active': filteredCourses.praticePicture.indexOf(praticePicture) === 0 }\"></li>\n        </ol>\n\n        <div class=\"carousel-inner\">\n\n          <div *ngFor='let praticePicture of filteredCourses.praticePicture; trackBy: trackBySingle' class=\"item\" \n                [ngClass]=\"{'active': filteredCourses.praticePicture.indexOf(praticePicture) === 0 }\">\n            <img alt=\"First slide\" [src]=\"praticePicture\" style=\"width:100%;\">\n          </div>\n        </div>\n\n        <a class=\"left carousel-control\" href=\"#courseExample\" data-slide=\"prev\">\n          <span class=\"glyphicon glyphicon-chevron-left\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control\" href=\"#courseExample\" data-slide=\"next\">\n          <span class=\"glyphicon glyphicon-chevron-right\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf='filteredCourses.plan.length > 0' class=\"row\">\n    <h1 style=\"text-align: center\">Course Plan</h1>\n  </div>\n\n  <div *ngFor='let plan of filteredCourses.plan; trackBy: trackByMulti' class=\"row\">\n    <div class=\"panel-group\" [id]='plan.title.replace(\" \", \"\").substr(0, 4) + \"Accordion\"'>\n      <h3>{{ plan?.title }}</h3>\n      \n      <div *ngFor='let planItem of plan.planItem; trackBy: trackByMulti' data-toggle=\"collapse\"\n          [class]='\"panel panel-default col-sm-offset-\" + plan.planItem.indexOf(planItem)'\n          [attr.data-parent]='\"#\" + plan.title.replace(\" \", \"\").substr(0, 4) + \"Accordion\"'\n          [attr.href]='\"#\" + plan.title.replace(\" \",\"\").substr(0, 4) + \"Collapse\" + plan.planItem.indexOf(planItem)' >\n        <div class=\"panel-heading\">\n          <h4 class=\"panel-title\">\n              {{ planItem?.item }}\n          </h4>\n        </div>\n        <div [id]='plan.title.replace(\" \",\"\").substr(0, 4) + \"Collapse\" + plan.planItem.indexOf(planItem)' \n            class=\"panel-collapse collapse\">\n          <div class=\"panel-body\">\n              Estimated time\n              <ul>\n                <li>Course: {{ planItem?.courseTime }}h</li>\n                <li *ngIf='planItem.practiceTime'>Practice: {{ planItem?.practiceTime }}h</li>\n              </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/training/course-details/course-details.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/training/course-details/course-details.component.ts ***!
  \*********************************************************************/
/*! exports provided: CourseDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsComponent", function() { return CourseDetailsComponent; });
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
 * Component corresponding to the course page of Training
 */
var CourseDetailsComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class,
     * its role is to create the service objects used for data acquisition as well as a routing object to read the parameters in the URL
     */
    function CourseDetailsComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    /**
     * This function is called to get courses then apply a filter by name to have data with same name in output
     * This function also assigns a literal value to the groupName variable based on the current course.
     */
    CourseDetailsComponent.prototype.ngOnInit = function () {
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
        this.courses = this.dataService.getTranslation('courses_' + this.lang);
        this.dataService.getTranslation('courses_' + this.lang)
            .subscribe(function (courses) {
            _this.filteredCourses = courses.filter(function (course) {
                return course.name === urlParam;
            })[0];
            /**
             * this statement decodes the code of the corresponding course group for sub-navigation
             */
            switch (_this.filteredCourses.groupName) {
                case 'SFEB':
                    _this.groupName = 'Software Front End Beginner';
                    break;
                case 'SFEA':
                    _this.groupName = 'Software Front End Advanced';
                    break;
                case 'SBEB':
                    _this.groupName = 'Software Back End Beginner';
                    break;
                case 'SBEA':
                    _this.groupName = 'Software Back End Advanced';
                    break;
                default: _this.groupName = 'undefined';
            }
        });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.trainingPage = pages.filter(function (page) {
                return page.id === 'training';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the  item as arguments and needs to return this item
     */
    CourseDetailsComponent.prototype.trackBySingle = function (item) {
        return item;
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    CourseDetailsComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    CourseDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./course-details.component.css */ "./src/app/training/course-details/course-details.component.css")],
            template: __webpack_require__(/*! ./course-details.component.html */ "./src/app/training/course-details/course-details.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], CourseDetailsComponent);
    return CourseDetailsComponent;
}());



/***/ }),

/***/ "./src/app/training/course-group/course-group.component.css":
/*!******************************************************************!*\
  !*** ./src/app/training/course-group/course-group.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    margin: 0 0 20px 0;\r\n    padding: 1% 1% 0% 2%;\r\n    border: 0px;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 3%;\r\n}\r\n\r\nh3 {\r\n    color: rgb(27, 112, 183);\r\n    font-weight: bold;\r\n}\r\n\r\np {\r\n    text-align: justify;\r\n}\r\n\r\n.col-sm-3 {\r\n    margin: 0 1% 3% 2%;\r\n    width: 30%;\r\n    height: 270px;\r\n    border: 1px solid lightgray;\r\n    border-bottom: 5px solid lightgray;\r\n}\r\n\r\n.col-sm-3 > button {\r\n    position: absolute;\r\n    bottom: 5%;\r\n}\r\n\r\n.col-sm-3:hover {\r\n    background: rgb(238, 237, 237);\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}\r\n\r\n@media (max-width: 768px) { \r\n    .col-sm-3 {\r\n        margin-left: 20%;\r\n        width: 60%;\r\n    }\r\n}\r\n\r\n@media (min-width: 768px) and (max-width: 992px) { \r\n    .col-sm-3 {\r\n        margin: 0 0% 3% 5%;\r\n        width: 40%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/training/course-group/course-group.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/training/course-group/course-group.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf='filteredCourses'>\n  <div id=\"subLink\" class=\"row\">\n    <p><a [routerLink]=\"['/training', lang, 'trainingHome', lang]\" routerLinkActive=\"active\">{{ trainingPage?.pageName }}</a> > {{ groupName }}</p>\n  </div>\n\n  <div class=\"row\">\n    <h1>{{ groupName }}</h1>\n  </div>\n\n  <div class=\"row\">\n    <div *ngFor='let course of filteredCourses; trackBy: trackByMulti' class=\"col-sm-3\" [routerLink]=\"['/training', lang, 'courseDetail', course.name, lang]\">\n      <h3>{{ course?.name }}</h3>\n      <br>\n      <p>{{ course?.goal }}</p>\n      <br>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/training', lang, 'courseDetail', course.name, lang]\">Show course</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/training/course-group/course-group.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/training/course-group/course-group.component.ts ***!
  \*****************************************************************/
/*! exports provided: CourseGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGroupComponent", function() { return CourseGroupComponent; });
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
 * Component corresponding to the course group page of Training
 */
var CourseGroupComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class,
     * its role is to create the service objects used for data acquisition as well as a routing object to read the parameters in the URL
     */
    function CourseGroupComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
    }
    /**
     * This function is called to get courses then apply a filter by group to have data with same group name in output
     * This function also assigns a literal value to the groupName variable based on the group code passed as a parameter in the URL.
     */
    CourseGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * this statement retrieves the parameter in the URL
         */
        var group;
        this.route.paramMap.subscribe(function (pmap) { return group = pmap.get('group'); });
        /**
         * this instruction decodes the code of the course group transmitted in parameter in the URL
         */
        switch (group) {
            case 'SFEB':
                this.groupName = 'Software Front End Beginner';
                break;
            case 'SFEA':
                this.groupName = 'Software Front End Advanced';
                break;
            case 'SBEB':
                this.groupName = 'Software Back End Beginner';
                break;
            case 'SBEA':
                this.groupName = 'Software Back End Advanced';
                break;
            default: this.groupName = 'undefined';
        }
        /**
         * this instruction retrieves the contents of the pages
         */
        this.courses = this.dataService.getTranslation('courses_' + this.lang);
        this.dataService.getTranslation('courses_' + this.lang)
            .subscribe(function (courses) {
            _this.filteredCourses = courses.filter(function (course) {
                return course.groupName === group;
            });
        });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.trainingPage = pages.filter(function (page) {
                return page.id === 'training';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    CourseGroupComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    CourseGroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            styles: [__webpack_require__(/*! ./course-group.component.css */ "./src/app/training/course-group/course-group.component.css")],
            template: __webpack_require__(/*! ./course-group.component.html */ "./src/app/training/course-group/course-group.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], CourseGroupComponent);
    return CourseGroupComponent;
}());



/***/ }),

/***/ "./src/app/training/home/training-home.component.css":
/*!***********************************************************!*\
  !*** ./src/app/training/home/training-home.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    padding: 5px;\r\n    margin: 1%;\r\n}\r\n\r\nhr {\r\n    border: 1px solid lightgray;\r\n    padding: 0px;\r\n}\r\n\r\np {\r\n    text-align: justify;\r\n    margin: 0%;\r\n}\r\n\r\nh1 {\r\n    color: rgb(27, 112, 183);\r\n    text-align: center;\r\n    font-weight: bold;\r\n}\r\n\r\nh3 {\r\n    color: rgb(27, 112, 183);\r\n    font-weight: bold;\r\n}\r\n\r\n#subLink {\r\n    background: rgb(231, 230, 230);\r\n    color: rgb(102, 100, 100);\r\n    padding: 1% 1% 0% 2%;\r\n    margin-top: 0%;\r\n    border: 0px;\r\n}\r\n\r\n.category {\r\n    margin-top: 5%;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.category > .row, .category > .row {\r\n    margin-top: 2%;\r\n}\r\n\r\n.col-sm-5 {\r\n    margin-left: 5%;\r\n    margin-bottom: 2%;\r\n    height: 280px;\r\n    border: 1px solid lightgray;\r\n    border-bottom: 5px solid lightgray;\r\n}\r\n\r\n.col-sm-5 > button {\r\n    position: absolute;\r\n    bottom: 5%;\r\n}\r\n\r\n.col-sm-5:hover {\r\n    background: rgb(238, 237, 237);\r\n    border-bottom: 5px solid rgb(27, 112, 183);\r\n    cursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/training/home/training-home.component.html":
/*!************************************************************!*\
  !*** ./src/app/training/home/training-home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"subLink\" class=\"row\">\n  <p>{{ trainingPage?.pageName }} </p>\n</div>\n\n<div *ngFor='let category of trainingPage?.category; trackBy: trackByMulti' class=\"row category\">\n  <div class=\"row\">\n    <h1>{{ category?.title }}</h1>\n  </div>\n  \n  <div class=\"row\">\n    <p>{{ category?.textDesc }}</p>\n  </div>\n  \n  <div class=\"row\">\n    <div *ngFor='let article of category.article; trackBy: trackByMulti' class=\"col-xs-11 col-sm-5 article\" [routerLink]=\"['/training', lang, 'courseGroup', article.id, lang]\">\n      <h3>{{ article?.title }}</h3><hr>\n      <p *ngFor='let contenu of article.contenu; trackBy: trackByMulti'>{{ contenu }}</p>\n      <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/training', lang, 'courseGroup', article.id, lang]\">Show courses</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/training/home/training-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/training/home/training-home.component.ts ***!
  \**********************************************************/
/*! exports provided: TrainingHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingHomeComponent", function() { return TrainingHomeComponent; });
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
 * Component corresponding to the home page Training
 */
var TrainingHomeComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class, its role is to create a service object used for data acquisition
     */
    function TrainingHomeComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    /**
     * This function is called during the initialization of our component to load the content of the page into the variables defined above.
     */
    TrainingHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * this statement retrieves the language parameter in the URL
         */
        this.route.paramMap.subscribe(function (pmap) { return _this.lang = pmap.get('lang'); });
        /**
         * this instruction retrieves the contents of the pages
         */
        this.pages = this.dataService.getTranslation('pageContain_' + this.lang);
        this.dataService.getTranslation('pageContain_' + this.lang)
            .subscribe(function (pages) {
            _this.trainingPage = pages.filter(function (page) {
                return page.id === 'training';
            })[0];
        });
    };
    /**
     * we have a problem because Angular can’t keep track of items in the collection and has no knowledge of which items have been removed or added.
     * We can help Angular to track which items added or removed by providing a trackBy function.
     * The trackBy function takes the index and the current item as arguments and needs to return the unique identifier for this item
     */
    TrainingHomeComponent.prototype.trackByMulti = function (index, item) {
        return index;
    };
    TrainingHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training-home',
            styles: [__webpack_require__(/*! ./training-home.component.css */ "./src/app/training/home/training-home.component.css")],
            template: __webpack_require__(/*! ./training-home.component.html */ "./src/app/training/home/training-home.component.html")
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TrainingHomeComponent);
    return TrainingHomeComponent;
}());



/***/ }),

/***/ "./src/app/training/training.component.css":
/*!*************************************************!*\
  !*** ./src/app/training/training.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\r\n    height: 400px;\r\n    background-size: cover;\r\n    padding-top: 150px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  #title {\r\n    height: 300px;\r\n  }\r\n}\r\n\r\n#title > h1 {\r\n    text-align: center;\r\n    color: white;\r\n}\r\n\r\n.container {\r\n    margin-bottom: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/training/training.component.html":
/*!**************************************************!*\
  !*** ./src/app/training/training.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div id=\"title\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" [ngStyle]=\"{ 'background': 'url(' + trainingPage?.titleImage + ') no-repeat fixed center',\n     'background-size': trainingPage?.titleImage ? 'cover': ''}\">\n  <h1>{{ trainingPage?.title }}</h1>\n</div>\n\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ "./src/app/training/training.component.ts":
/*!************************************************!*\
  !*** ./src/app/training/training.component.ts ***!
  \************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
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
 * Component corresponding to the Training page
 */
var TrainingComponent = /** @class */ (function () {
    /**
     * This function represents the constructor of our class, its role is to create a service object used for page contain acquisition
     */
    function TrainingComponent(dataService, route, router) {
        this.dataService = dataService;
        this.route = route;
        this.router = router;
    }
    /**
     * This function is called during the initialization of our component to load the content of the page into the variables defined above.
     */
    TrainingComponent.prototype.ngOnInit = function () {
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
            _this.trainingPage = pages.filter(function (page) {
                return page.id === 'training';
            })[0];
        });
        if (this.route.firstChild == null) {
            this.router.navigate(['/training', this.lang, 'trainingHome', this.lang]);
        }
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            styles: [__webpack_require__(/*! ./training.component.css */ "./src/app/training/training.component.css")],
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/training/training.component.html"),
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/training/training.module.ts":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: TrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingModule", function() { return TrainingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-details/course-details.component */ "./src/app/training/course-details/course-details.component.ts");
/* harmony import */ var _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-group/course-group.component */ "./src/app/training/course-group/course-group.component.ts");
/* harmony import */ var _home_training_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/training-home.component */ "./src/app/training/home/training-home.component.ts");
/* harmony import */ var _training_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training.component */ "./src/app/training/training.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TrainingModule = /** @class */ (function () {
    function TrainingModule() {
    }
    TrainingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _training_component__WEBPACK_IMPORTED_MODULE_6__["TrainingComponent"],
                _home_training_home_component__WEBPACK_IMPORTED_MODULE_5__["TrainingHomeComponent"],
                _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_4__["CourseGroupComponent"],
                _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_3__["CourseDetailsComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: ':lang',
                        // tslint:disable-next-line:object-literal-sort-keys
                        component: _training_component__WEBPACK_IMPORTED_MODULE_6__["TrainingComponent"],
                        children: [
                            { path: 'trainingHome/:lang', component: _home_training_home_component__WEBPACK_IMPORTED_MODULE_5__["TrainingHomeComponent"] },
                            { path: 'courseGroup/:group/:lang', component: _course_group_course_group_component__WEBPACK_IMPORTED_MODULE_4__["CourseGroupComponent"] },
                            { path: 'courseDetail/:name/:lang', component: _course_details_course_details_component__WEBPACK_IMPORTED_MODULE_3__["CourseDetailsComponent"] },
                        ]
                    }
                ]),
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            providers: []
        })
    ], TrainingModule);
    return TrainingModule;
}());



/***/ })

}]);
//# sourceMappingURL=training-training-module.js.map