(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-body></app-body>\n<app-footer></app-footer>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'clientfwersed';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _body_body_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./body/body.module */ "./src/app/body/body.module.ts");
/* harmony import */ var _shared_rest_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/rest.service */ "./src/app/shared/rest.service.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _body_body_module__WEBPACK_IMPORTED_MODULE_6__["BodyModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_8__["HeaderModule"]
            ],
            providers: [_shared_rest_service__WEBPACK_IMPORTED_MODULE_7__["RestService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bgimg-1, .bgimg-2, .bgimg-3, .bgimg-4 {\n  position: relative;\n  opacity: 0.8;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n}\n.bgimg-1 {\n  background-image: url('image_3.jpg');\n  min-height: 100vh;\n}\n.bgimg-2 {\n  background-image: url('cover_page.jpg');\n  min-height: 80vh;\n}\n.bgimg-3 {\n  background-image: url('image_1.jpg');\n  min-height: 400px;\n}\n.bgimg-4 {\n  background-image: url('image_4.jpg');\n}\n.flex-container {\n  display: flex;\n  flex-direction: column;\n  padding-top: 15%;\n  padding-left: 50%;\n}\n.flex-container > div {\n  margin: 10px;\n  padding: 10px;\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n.flex-container .text1 {\n  width: 45vw;\n  padding-left: 8%;\n}\n.flex-container .text2 {\n  width: 35vw;\n  padding-left: 8%;\n}\n.flex-container .sign-up-btn {\n  font-size: 1.2rem;\n}\n.youtube-container{\n  padding: 70px 30px;\n}\n.donation-container{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  min-height: 80vh;\n}\n.donation-container > div {\n  -ms-grid-row-align: center;\n      align-self: center;\n}\n.sign-up {\n  display: inline-block;\n  border: 2px solid #ffffde;\n  border-radius: 7px;\n  text-align: center;\n  line-height: 70px;\n  width: 300px;\n  height: 70px;\n  font-weight: 500;\n}\n.message1 {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: right;\n}\n.message2 {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: right;\n}\n.button1 {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: right;\n}\n.button2 {\n  position: absolute;\n  top: 60%;\n  width: 100%;\n  text-align: right;\n}\n.caption span.border {\n  color: #fff;\n  padding: 18px;\n  font-size: 25px;\n  font-weight: 700;\n  line-height: 1.3;\n  text-shadow: 0 0 2em rgba(0,0,0,.5);\n  font-family: Asap,sans-serif;\n  width: 66.6666666667%;\n}\nh1 {\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #111;\n}\n.gallery h2 {\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  color: #111;\n}\np{\n  color: #000;\n  font-size: 20px;\n}\n.Nav-settings {\n  position: fixed;\n  background: none;\n  z-index: 999;\n  border: 0;\n  width: 100%;\n  border-radius: 0;\n  background: rgba(5, 5, 5, 0.6);\n}\n.video-container {\n  overflow:hidden;\n  padding-bottom:56.25%;\n  position:relative;\n  height:0;\n}\n.video-container {\n  position: relative;\n  padding-bottom: 56.25%;\n  padding-top: 30px; height: 0; overflow: hidden;\n}\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 767px){\n  .flex-container {\n    padding-top: 35%;\n    padding-left: 0%;\n  }\n\n  .flex-container .text1,\n  .flex-container .text2 {\n    width: 100%;\n    padding-left: 0;\n  }\n}\n.about{\n\n  background-color: rgb(224, 213, 180);\n  align-items: center;\n  padding: 30px 0;\n  justify-content: center;\n}\n.about h3{\n  text-align: center;\n}\n.about p{\n  font-size: 1rem;\n}\ndark-modal .modal-content {\n  background-color: #292b2c;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"bgimg-1\">\n    <div class=\"flex-container\">\n      <div>\n        <img src=\"../../assets/message_2.png\" class=\"text1\" alt=\"550th Birth Anniversary of Guru Nanak in 2019.\"/>\n      </div>\n      <div>\n        <img src=\"../../assets/message_3.png\" class=\"text2\" alt=\"Lets celebrate by planting 550 trees at 1820 locations worldwide.\"/>\n      </div>\n      <div>\n        <button type=\"button\" class=\"btn btn-info sign-up-btn\" (click)=\"openVerticallyCentered(content)\">Sign Up</button>\n      </div>\n\n    </div>\n  </div>\n\n  <div class=\"about\" id=\"about-ecosikh\">\n    <div class=\"container\">\n      <h3>About EcoSikh</h3>\n      <p class=\"text-justify\">EcoSikh is a response from the Sikh community to the threats of climate change and the deterioration of the natural environment. Our organization arose as part of the Long Term Plans for Generational Change programme initiated in 2009 by the United Nations Development Programme (UNDP) and the Alliance of Religions and Conservation, UK (ARC) to help the world’s major religious traditions create long-term plan to improve their relationship with the environment and to guide their investment towards environmental protection.</p>\n    </div>\n  </div>\n\n  <div class=\"bgimg-4\">\n    <div class=\"container youtube-container\">\n      <div class=\"video-container\">\n        <iframe width=\"853\" height=\"480\" src=\"https://www.youtube.com/embed/1fbNsC3jlFU\" frameBorder=\"0\" title=\"Embeded youtube video\"></iframe>\n      </div>\n    </div>\n  </div>\n\n</div>\n<app-gallery></app-gallery>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Sign Up Form</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <p>Please fill in this form to create an account.</p>\n    <hr>\n\n    <form [formGroup]=\"signup_form\">\n      <div class=\"form-row\">\n        <div class=\"col-md-4 mb-3\">\n          <!--<label>Full Name</label>-->\n          <input type=\"text\" class=\"form-control\" formControlName=\"fullName\" placeholder=\"Full Name\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n          <!--<label>Email</label>-->\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email\" required>\n        </div>\n\n        <div class=\"col-md-4 mb-3\">\n          <!--<label>Password</label>-->\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"col-md-4 mb-3\">\n          <!--<label>Phone Number</label>-->\n          <input type=\"text\" class=\"form-control\" formControlName=\"phoneNumber\" placeholder=\"Phone Number\" required>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <!--<label>Age</label>-->\n          <input type=\"text\" class=\"form-control\" formControlName=\"age\" placeholder=\"Age\" required>\n        </div>\n        <div class=\"col-md-4 mb-3\">\n          <!--<label>Organization Name</label>-->\n          <input type=\"text\" class=\"form-control\" formControlName=\"organizationName\" placeholder=\"Organization Name\" required>\n        </div>\n      </div>\n\n      <div class=\"form-row\">\n        <div class=\"col-md-8 mb-3\">\n          <!--<label>Address</label>-->\n          <input type=\"text\" class=\"form-control\" formControlName=\"address\" placeholder=\"Address\" required>\n        </div>\n      </div>\n\n      <button class=\"btn btn-primary\" type=\"submit\" (click)=\"onSubmit()\">Submit form</button>\n    </form>\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/rest.service */ "./src/app/shared/rest.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BodyComponent = /** @class */ (function () {
    function BodyComponent(modalService, restService) {
        this.modalService = modalService;
        this.restService = restService;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    BodyComponent.prototype.onSubmit = function () {
        console.log(this.signup_form.value);
        var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](this.signup_form.value.fullName, this.signup_form.value.email, this.signup_form.value.password, this.signup_form.value.phoneNumber, this.signup_form.value.age, this.signup_form.value.address, this.signup_form.value.organizationName);
        console.log(user);
        this.restService.registerUser(user)
            .subscribe(function (data) { return console.log(data); });
    };
    BodyComponent.prototype.createForm = function () {
        this.signup_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            phoneNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            organizationName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]
        });
    };
    BodyComponent.prototype.openVerticallyCentered = function (content) {
        this.modalService.open(content, { centered: true, size: 'lg' });
    };
    BodyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _shared_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/body/body.module.ts":
/*!*************************************!*\
  !*** ./src/app/body/body.module.ts ***!
  \*************************************/
/*! exports provided: BodyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyModule", function() { return BodyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _body_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/body/gallery/gallery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BodyModule = /** @class */ (function () {
    function BodyModule() {
    }
    BodyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_body_component__WEBPACK_IMPORTED_MODULE_1__["BodyComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_2__["GalleryComponent"]],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            exports: [
                _body_component__WEBPACK_IMPORTED_MODULE_1__["BodyComponent"]
            ]
        })
    ], BodyModule);
    return BodyModule;
}());



/***/ }),

/***/ "./src/app/body/gallery/gallery.component.css":
/*!****************************************************!*\
  !*** ./src/app/body/gallery/gallery.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery{\n  text-align: center;\n  padding-top: 5%;\n}\n\n.gallery-img{\n  width: 100%;\n  max-width: 350px;\n  height: auto;\n  width: 500;\n  height: 400;\n}\n\na{\n  padding-right: 1%;\n}\n\nh2{\n  color: #000;\n}\n\n.gallery-container{\n  color: #777;\n  background-color: rgb(224, 213, 180);\n  padding: 30px 0;\n}\n"

/***/ }),

/***/ "./src/app/body/gallery/gallery.component.html":
/*!*****************************************************!*\
  !*** ./src/app/body/gallery/gallery.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div style={{color: '#777', backgroundColor: 'rgb(224, 213, 180)', padding: '30px 0' }} id=\"resources\">-->\n<div class=\"gallery-container\">\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center mb-2\">\n        <h2>Gallery</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <a target=\"_blank\" href=\"../../../assets/trees_info_1.png\" class=\"d-block mb-5 h-100\">\n          <img src=\"../../../assets/trees_info_1.png\" class=\"img-fluid img-thumbnail rounded mx-auto\" alt=\"Benefits-1\" />\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <a target=\"_blank\" href=\"../../../assets/trees_info_2.png\" class=\"d-block mb-5 h-100\">\n          <img src=\"../../../assets/trees_info_2.png\" class=\"img-fluid img-thumbnail rounded mx-auto\" alt=\"Benefits-2\" />\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <a target=\"_blank\" href=\"../../../assets/trees_info_3.png\" class=\"d-block mb-5 h-100\">\n          <img src=\"../../../assets/trees_info_3.png\" class=\"img-fluid img-thumbnail rounded mx-auto\" alt=\"Benefits-3\" />\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <a target=\"_blank\" href=\"../../../assets/trees_info_4.png\" class=\"d-block mb-5 h-100\">\n          <img src=\"../../../assets/trees_info_4.png\" class=\"img-fluid img-thumbnail rounded mx-auto\" alt=\"Benefits-4\" />\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <a target=\"_blank\" href=\"../../../assets/trees_info_5.png\" class=\"d-block mb-5 h-100\">\n          <img src=\"../../../assets/trees_info_5.png\" class=\"img-fluid img-thumbnail rounded mx-auto\" alt=\"Benefits-5\" />\n        </a>\n      </div>\n      <div class=\"col-lg-4 col-md-6 col-sm-12\">\n        <a target=\"_blank\" href=\"../../../assets/trees_info_6.png\" class=\"d-block mb-5 h-100\">\n          <img src=\"../../../assets/trees_info_6.png\" class=\"img-fluid img-thumbnail rounded mx-auto\" alt=\"Benefits-6\" />\n        </a>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12 text-center\">\n        <a href=\"../../../assets/How%20to%20Plant%20a%20Tree.docx\" download>\n          <button type=\"button\" class=\"btn btn-primary btn-lg \">\n            <i class=\"fa fa-download\"></i>  &nbsp;How to Plant a Tree\n          </button>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/body/gallery/gallery.component.ts":
/*!***************************************************!*\
  !*** ./src/app/body/gallery/gallery.component.ts ***!
  \***************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
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

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/body/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.css */ "./src/app/body/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer{\n  color: rgb(0, 147, 181);\n  background-color: rgb(122, 96, 66);\n  align-items: center;\n  padding: 30px 0;\n  justify-content: center;\n  text-align: center;\n\n}\n\n#contact-us {\n  font-family: Open Sans;\n  color: white;\n}\n\nh2{\n  color: #A8C545;\n  font-family: BlinkMacSystemFont, Open Sans;\n}\n\n.icon{\n  color: #77a6a3;\n}\n\na{\n  color: #fff;\n}\n\nh6{\n  text-decoration: underline;\n}\n\n.facebook{\n  background-color: #0069d9;\n}\n\n.font{\n  font-size: .9rem;\n}\n"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer\" id=\"contact-us\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xl-8 col-lg-12\">\n        <div>\n          <h2>Donation Information</h2><br>\n          <div class=\"row\">\n            <div class=\"col-sm-12 col-md-4 mb-4 font\">\n            <h5>Pay by Cheque/NEFT</h5><br>\n            <h6>Account in India</h6>\n            EcoSikh Charitable Society<br>\n            A/c No: 039088700000014<br>\n            Bank Name: Yes Bank Ltd, Miller Ganj, Ludhiana<br>\n            IFSC Code: YESB0000390\n          </div>\n          <div class=\"col-sm-12 col-md-4 mb-4\">\n            <h5>For online donations outside India</h5><br>\n            <a href=\"https://tinyurl.com/yalw6dv2\" class=\"btn btn-primary btn-lg\" role=\"button\" aria-pressed=\"true\" target=\"_blank\" rel=\"noopener noreferrer\">Donate Online</a>\n\n          </div>\n          <div class=\"col-sm-12 col-md-4 mb-4 font\">\n          <h5>Pay by Cheque in United States of America (USA)</h5><br>\n          EcoSikh<br>\n          2621 University Boulevard West<br>\n          Silver Spring, MD 20902\n        </div>\n      </div>\n    </div>\n      </div>\n      <div class=\"col-xl-4 col-lg-12\">\n        <div>\n          <h2>Contact Us</h2><br>\n          <div>\n            <i class=\"fas fa-phone icon\"></i>  <a href=\"tel:+91 84273 19268\">+91 84273 19268</a>\n            &nbsp; | &nbsp;\n            <i class=\"fas fa-envelope icon\"></i>  <a href=\"mailto:info@ecosikh.org\">info@ecosikh.org</a>\n            <br>\n            <br>\n            <a href=\"https://www.facebook.com/EcoSikh/\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <button type=\"button\" class=\"btn btn-primary btn-sm facebook\" >\n              <i class=\"fab fa-facebook fa-2x\"></i>\n              </button>\n            </a>\n            &nbsp; &nbsp;\n            <a href=\"https://twitter.com/ecosikh\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <button type=\"button\" class=\"btn btn-info btn-sm\">\n                <i class=\"fab fa-twitter fa-2x\"></i>\n              </button>\n            </a>\n            &nbsp; &nbsp;\n            <a href=\"https://www.youtube.com/user/ecosikhorg\" target=\"_blank\" rel=\"noopener noreferrer\">\n              <button type=\"button\" class=\"btn btn-danger btn-sm\">\n                <i class=\"fab fa-youtube fa-2x\"></i>\n              </button>\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Nav-settings {\n  width: 100%;\n  background: rgba(122, 96, 66, 0.6);\n  height: 7%;\n}\n.nav-color{\n  background: rgb(122, 96, 66);\n}\n.masthead {\n  margin-bottom: 2rem;\n}\n.masthead-brand {\n  margin-bottom: 0;\n}\n.nav-masthead .nav-link {\n  font-weight: 700;\n  color: rgba(122, 96, 66, .5);\n  background-color: transparent;\n  border-bottom: .25rem solid transparent;\n}\n.nav-masthead .nav-link:hover,\n.nav-masthead .nav-link:focus {\n  border-bottom-color: rgba(255, 255, 255, .25);\n}\n.nav-masthead .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n.nav-masthead .active {\n  color: #fff;\n  border-bottom-color: #fff;\n}\nul.navbar-nav li {\n  padding: 0 8px;\n}\n.navbar .logo {\n  height: 48px;\n}\n\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark sticky-top nav-color\">\n\n  <div class=\"container\">\n    <img src=\"../../assets/logo.png\" alt=\"Gurunanak 550 logo\" class=\"logo\"/>\n    <div>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n    </div>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarsExampleDefault\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" href=\"#menu\">Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#about-ecosikh\">About EcoSikh</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#resources\">Resources</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"#contact-us\">Contact Us</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"login\">\n          <a class=\"nav-link\" href=\"#contact-us\">Hello, {{user.fullName}}</a>\n        </li>\n        <!--<a class=\"btn btn-info navbar-btn\" href=\"#contact-us\">Donate</a>-->\n        &nbsp; &nbsp;\n        <button *ngIf=\"!login\" type=\"button\" class=\"btn btn-info sign-up-btn\" (click)=\"onLogin(loginContent)\">Login</button>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n\n<ng-template #loginContent let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Please sign in</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body text-center\">\n\n    <form [formGroup]=\"login_form\" >\n      <div class=\"form-row\">\n        <div class=\"col-md-12 mb-3\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Email address\" required>\n        </div>\n      </div>\n\n      <div class=\"form-row text-center\">\n        <div class=\"col-md-12 mb-3\">\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\" required>\n        </div>\n      </div>\n\n      <button class=\"btn btn-primary col-md-12\" type=\"submit\" (click)=\"onSubmit()\">Sign in</button>\n    </form>\n\n  </div>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_rest_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/rest.service */ "./src/app/shared/rest.service.ts");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService, restService) {
        this.modalService = modalService;
        this.restService = restService;
        this.login = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.restService.getProfile().subscribe(function (data) {
            _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](data['full_name'], data['email'], "", "", 0, data['address'], data['organization_name']);
            console.log(_this.user);
            //this.login = true;
        });
    };
    HeaderComponent.prototype.createForm = function () {
        this.login_form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"],
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]
        });
    };
    HeaderComponent.prototype.onLogin = function (loginContent) {
        this.modalService.open(loginContent, { centered: true, size: 'sm' });
    };
    HeaderComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.login_form.value);
        this.restService.loginUser(this.login_form.value.email, this.login_form.value.password)
            .subscribe(function (data) {
            console.log(data);
            _this.user = new _models_user_model__WEBPACK_IMPORTED_MODULE_4__["User"](data['full_name'], data['email'], "", "", 0, data['address'], data['organization_name']);
            _this.restService.storeUserData(data['token'], _this.user);
            _this.login = true;
        });
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"], _shared_rest_service__WEBPACK_IMPORTED_MODULE_3__["RestService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(full_name, email, password, phone_number, age, address, organization_name) {
        this.full_name = full_name;
        this.email = email;
        this.password = password;
        this.phone_number = phone_number;
        this.age = age;
        this.address = address;
        this.organization_name = organization_name;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/shared/rest.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/rest.service.ts ***!
  \****************************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
        this.registerUrl = '/api/userRoutes/register';
        this.loginUrl = '/api/userRoutes/login';
        this.profileUrl = '/api/userRoutes/profile';
    }
    RestService.prototype.registerUser = function (user) {
        return this.http.post(this.registerUrl, user);
    };
    RestService.prototype.loginUser = function (email, password) {
        return this.http.post(this.loginUrl, { email: email, password: password });
    };
    RestService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    RestService.prototype.getProfile = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'authorization': localStorage.getItem('token')
            })
        };
        console.log(httpOptions);
        return this.http.get(this.profileUrl, httpOptions);
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
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
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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

module.exports = __webpack_require__(/*! /Users/ivesingh/Documents/WebStormProjects/gurunanak550-angular/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map