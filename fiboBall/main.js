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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/teams.service */ "./src/app/services/teams.service.ts");
/* harmony import */ var _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ticket-details/ticket-details.component */ "./src/app/ticket-details/ticket-details.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/results.service */ "./src/app/services/results.service.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _fixtures_fixtures_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fixtures/fixtures.component */ "./src/app/fixtures/fixtures.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _hero_hero_component__WEBPACK_IMPORTED_MODULE_5__["HeroComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_7__["TicketsComponent"],
                _teams_teams_component__WEBPACK_IMPORTED_MODULE_8__["TeamsComponent"],
                _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_11__["TicketDetailsComponent"],
                _results_results_component__WEBPACK_IMPORTED_MODULE_12__["ResultsComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_16__["SignUpComponent"],
                _fixtures_fixtures_component__WEBPACK_IMPORTED_MODULE_17__["FixturesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["appRoutes"])
            ],
            providers: [
                _services_tickets_service__WEBPACK_IMPORTED_MODULE_9__["TicketsService"],
                _services_teams_service__WEBPACK_IMPORTED_MODULE_10__["TeamsService"],
                _services_results_service__WEBPACK_IMPORTED_MODULE_13__["ResultsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form\">\n  <h2>CONTACT US</h2>\n  <form>\n    <div class=\"styled-input wide\">\n      <input type=\"text\" required />\n      <label>Name</label>\n    </div>\n\n    <div class=\"grid\">\n      <div class=\"styled-input flex\">\n        <input type=\"text\" required />\n        <label>Email</label>\n      </div>\n      <div class=\"styled-input flex\">\n        <input type=\"text\" required />\n        <label>Phone Number</label>\n      </div>\n    </div>\n\n    <div class=\"styled-input wide\">\n        <textarea required></textarea>\n        <label>Message</label>\n      </div>\n\n      <a class=\"btn\" href=\"#\">Send Message</a>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.scss":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ///// inputs /////*/\ninput:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {\n  font-size: 0.75em;\n  color: #999;\n  top: -5px;\n  transition: all 0.225s ease; }\n.styled-input {\n  width: 293px;\n  margin: 1rem 0;\n  position: relative;\n  border-radius: 4px;\n  font-family: 'Open Sans', sans-serif; }\n.styled-input label {\n  color: #999;\n  padding: 1.3rem 30px 1rem 30px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  transition: all 0.25s ease;\n  pointer-events: none; }\n.styled-input.wide {\n  width: 650px;\n  max-width: 100%; }\ninput,\ntextarea {\n  padding: 30px;\n  border: 0;\n  width: 100%;\n  font-size: 1rem;\n  background-color: #363b41;\n  color: white;\n  border-radius: 4px; }\ninput:focus,\ntextarea:focus {\n  outline: 0; }\ninput:focus ~ span,\ntextarea:focus ~ span {\n  width: 100%;\n  transition: all 0.075s ease; }\ntextarea {\n  width: 100%;\n  min-height: 15em; }\ninput[type=checkbox] + label {\n  color: #ccc;\n  font-style: italic; }\ninput[type=checkbox]:checked + label {\n  color: #f00;\n  font-style: normal; }\n.grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr; }\n.form {\n  width: 45%;\n  margin: 0 auto; }\n.margin {\n  margin-left: 0.2em; }\nh2 {\n  font-family: 'open sans',sans-serif;\n  color: black;\n  font-size: 3em;\n  font-weight: 700;\n  text-shadow: 4px 4px 20px white;\n  text-align: center;\n  padding-top: 1em;\n  padding-bottom: 0.5em; }\n@media only screen and (max-width: 1550px) {\n  .grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr; }\n  .styled-input {\n    width: 100%; } }\n@media only screen and (max-width: 1130px) {\n  .form {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n  form {\n    width: 90%; }\n  .styled-input.wide {\n    width: 100%; } }\n@media only screen and (max-width: 1130px) {\n  .form {\n    width: 80%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column; }\n  form {\n    width: 90%; }\n  .styled-input.wide {\n    width: 100%; } }\n@media only screen and (max-width: 500px) {\n  .form {\n    margin: 0; } }\n.btn {\n  background-image: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  transition: background-color 0.3s;\n  border-radius: 0.25rem;\n  padding: 16px;\n  padding: 1rem;\n  width: 30%;\n  display: flex;\n  margin: 14px;\n  margin: 0.875rem;\n  margin-left: 0;\n  background-color: #FFF05A;\n  color: black;\n  font-weight: 700;\n  text-transform: uppercase;\n  justify-content: center;\n  align-items: center;\n  font-family: 'Open Sans', sans-serif; }\n.btn:hover {\n    background-color: #e8da52; }\n"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
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

var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/contact-us/contact-us.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/fixtures/fixtures.component.html":
/*!**************************************************!*\
  !*** ./src/app/fixtures/fixtures.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixtures\">\n  <h2>{{match.title}}</h2>\n  <div class=\"img-container\">\n    <img class=\"main-img\" src=\"{{match.mainUrl}}\" alt=\"\">\n  </div>\n  <div class=\"article\">\n      <p>Andrej Kramaric has gone against the grain and, against sizeable odds, come out on top. The Hoffenheim forward has risked his career in sticking to his principles and now stands to shine for a Croatia side whose attack has often struggled for fluency.</p>\n\n      <p>A recent court anecdote casts light on the forces Kramaric has had to battle. It also explains why Croatia have lost so much support at home, with players scorned rather than celebrated going into the World Cup.</p>\n      \n      <p>It centres on Zdravko Mamic, the most powerful man in domestic football. Mamic is on trial for, among other things, massive-scale embezzlement of Dinamo Zagreb’s funds. While at the club, he took big chunks of transfer money paid to Dinamo.</p>\n      \n      <p>He would first sign personal contracts with young players that entitled him to a large share of their earnings; then, acting as a club executive, put clauses in their contracts specifying the split of transfer fee between the club and the player. Once a player received a portion of any money a foreign club paid Dinamo for his services — as high as 50% — he would forward most of it to Mamic.</p>\n      \n      <p>That is not being disputed by Mamic’s lawyers. But the prosecution is trying to prove some of those clauses, including in the cases of Luka Modric and Dejan Lovren, were added and backdated only after the players had been sold. Modric and Lovren asserted that during the investigation but changed their testimonies in court as witnesses for the prosecution, saying the investigators had confused them.</p>\n      \n      <img class=\"side-img\" src=\"{{match.sideUrl}}\">\n      \n      <p>Modric has been charged with perjury and Lovren is being investigated for it. This has turned large sections of the public against the players.</p>\n      \n      <p>Among the papers Mamic submitted to court as “evidence of his innocence”, something was discovered: a document investigators claim was a list of instructions for Lovren on how to answer specific questions asked by the prosecution. Apparently he had followed those almost to the letter.</p>\n      \n      <p>Kramaric says he refused to follow in the more experienced players’ footsteps and sign such a contract. It nearly destroyed his career but he does not discuss it. “There is no need; everyone knows what was happening and the stories you hear are true,” he said last year. “I came out of it with a smile on my face and made a success for myself. But of course it left a bitter taste. Dinamo was my dream ever since I was a kid.”</p>\n      \n      <p>The Zagreb-born youngster joined the club at six and scored 452 goals, by his count, for their youth teams. He was the best attacking talent their academy produced in decades and Mamic repeatedly approached Kramaric’s family, promising money and various perks if he came under his wing. The family declined and things were made difficult for Kramaric.</p>\n      \n      <p>Although he made a promising start for the first team, he would be benched at the first sign of a drop in form. He would be sent on loans to Lokomotiva, Dinamo’s farm club, and even after he did very well there Dinamo coaches tended to favour other players. Meanwhile the club declined inquiries from foreign clubs – hoping to break him into signing a contract with Mamic.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/fixtures/fixtures.component.scss":
/*!**************************************************!*\
  !*** ./src/app/fixtures/fixtures.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixtures {\n  width: 60%;\n  margin: 0 auto;\n  border-left: 3px solid black;\n  border-right: 3px solid black;\n  padding: 0 1em;\n  background-color: rgba(255, 255, 255, 0.726); }\n\n.main-img {\n  width: 100%; }\n\n.side-img {\n  width: 40%;\n  float: right; }\n\np {\n  font-size: 1.3em;\n  font-family: 'lato',sans-serif;\n  line-height: 1.5em;\n  padding-bottom: 1em; }\n\nh2 {\n  color: #005689;\n  font-size: 3em;\n  font-family: 'karla',sans-serif;\n  padding-bottom: 1.5em;\n  padding-top: 0.5em;\n  font-weight: 700; }\n"

/***/ }),

/***/ "./src/app/fixtures/fixtures.component.ts":
/*!************************************************!*\
  !*** ./src/app/fixtures/fixtures.component.ts ***!
  \************************************************/
/*! exports provided: FixturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixturesComponent", function() { return FixturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/results.service */ "./src/app/services/results.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FixturesComponent = /** @class */ (function () {
    function FixturesComponent(eventService, route) {
        this.eventService = eventService;
        this.route = route;
    }
    FixturesComponent.prototype.ngOnInit = function () {
        this.match = this.eventService.getResultsId(+this.route.snapshot.params['id']);
    };
    FixturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixtures',
            template: __webpack_require__(/*! ./fixtures.component.html */ "./src/app/fixtures/fixtures.component.html"),
            styles: [__webpack_require__(/*! ./fixtures.component.scss */ "./src/app/fixtures/fixtures.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_results_service__WEBPACK_IMPORTED_MODULE_1__["ResultsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], FixturesComponent);
    return FixturesComponent;
}());



/***/ }),

/***/ "./src/app/hero/hero.component.html":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"hero\">\n    <img src=\"/assets/images/hero-player.png\" alt=\"football-player\" class=\"player\">\n  </div>\n  <!--team-->\n  <a routerLink=\"teams\" class=\"teams yellow\">TEAMS <span class=\"one\"><i class=\"fas fa-angle-right\"></i></span> <span class=\"two\"><i class=\"fas fa-angle-right\"></i></span><span class=\"three\"><i class=\"fas fa-angle-right\"></i></span></a>\n  <!--tickets-->\n  <a routerLink = \"tickets\" class=\"tickets yellow\"><span class=\"three\"><i class=\"fas fa-angle-left\"></i></span> <span class=\"two\"><i class=\"fas fa-angle-left\"></i></span><span class=\"one\"><i class=\"fas fa-angle-left\"></i></span> TICKETS</a>\n</header>\n"

/***/ }),

/***/ "./src/app/hero/hero.component.scss":
/*!******************************************!*\
  !*** ./src/app/hero/hero.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\n  height: 89vh;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end; }\n\n.teams {\n  position: absolute;\n  right: 1em;\n  top: 50%;\n  font-size: 2em; }\n\n.teams span {\n    position: relative;\n    top: 2px; }\n\n.one {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n\n.two {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n\n.three {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s; }\n\n.yellow {\n  color: #ffed01; }\n\n@-webkit-keyframes light {\n  0% { }\n  100% {\n    color: #767678; } }\n\n@keyframes light {\n  0% { }\n  100% {\n    color: #767678; } }\n\n.tickets {\n  position: absolute;\n  left: 1em;\n  top: 50%;\n  font-size: 2em; }\n\n@media only screen and (max-width: 480px) {\n  .teams, .tickets {\n    font-size: 1.4em; } }\n\n@media only screen and (max-width: 320px) {\n  .teams, .tickets {\n    font-size: 1em; } }\n"

/***/ }),

/***/ "./src/app/hero/hero.component.ts":
/*!****************************************!*\
  !*** ./src/app/hero/hero.component.ts ***!
  \****************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
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

var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero',
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.scss */ "./src/app/hero/hero.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>LOGIN</h2>\n<div class=\"align\">\n    <div class=\"grid\">\n  \n      <form action=\"https://httpbin.org/post\" method=\"POST\" class=\"form login\">\n  \n        <div class=\"form__field\">\n          <label for=\"login__username\"><svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#user\"></use></svg><span class=\"hidden\">Username</span></label>\n          <input id=\"login__username\" type=\"text\" autocomplete=\"off\" name=\"username\" class=\"form__input\" placeholder=\"Username\" required>\n        </div>\n  \n        <div class=\"form__field\">\n          <label for=\"login__password\"><svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#lock\"></use></svg><span class=\"hidden\">Password</span></label>\n          <input id=\"login__password\" type=\"password\" name=\"password\" class=\"form__input\" placeholder=\"Password\" required>\n        </div>\n  \n        <div class=\"form__field\">\n          <input type=\"submit\" value=\"Sign In\">\n        </div>\n  \n      </form>\n  \n      <p class=\"text--center\">Not a member? <a routerLink=\"../sign-up\">Sign up now</a> <svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#arrow-right\"></use></svg></p>\n  \n    </div>\n  \n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icons\"><symbol id=\"arrow-right\" viewBox=\"0 0 1792 1792\"><path d=\"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z\"/></symbol><symbol id=\"lock\" viewBox=\"0 0 1792 1792\"><path d=\"M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z\"/></symbol><symbol id=\"user\" viewBox=\"0 0 1792 1792\"><path d=\"M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z\"/></symbol></svg>\n  \n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* config.css */\n/* helpers/align.css */\n.align {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n/* helpers/grid.css */\n.grid {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 320px;\n  max-width: 20rem;\n  width: 90%; }\n/* helpers/hidden.css */\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n/* helpers/icon.css */\n.icons {\n  display: none; }\n.icon {\n  display: inline-block;\n  fill: #606468;\n  font-size: 16px;\n  font-size: 1rem;\n  height: 1em;\n  vertical-align: middle;\n  width: 1em; }\n/* layout/base.css */\n* {\n  box-sizing: inherit; }\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100%; }\n.align {\n  color: #606468;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  height: 100%;\n  line-height: 1.5;\n  margin: 0;\n  min-height: 100vh; }\nh2 {\n  font-family: \"Open Sans\",sans-serif;\n  color: black;\n  font-size: 3em;\n  font-weight: 700;\n  text-shadow: 4px 4px 20px white;\n  text-align: center;\n  position: relative;\n  top: 5em; }\n/* modules/anchor.css */\na {\n  color: #eee;\n  outline: 0;\n  text-decoration: none; }\na:focus,\na:hover {\n  text-decoration: underline; }\n/* modules/form.css */\ninput {\n  background-image: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  transition: background-color 0.3s; }\ninput[type='submit'] {\n  cursor: pointer; }\n.form {\n  margin: -14px;\n  margin: -0.875rem; }\n.form input[type='password'],\n.form input[type='text'],\n.form input[type='submit'] {\n  width: 100%; }\n.form__field {\n  display: flex;\n  margin: 14px;\n  margin: 0.875rem; }\n.form__input {\n  flex: 1; }\n/* modules/login.css */\n.login {\n  color: #eee; }\n.login label,\n.login input[type='text'],\n.login input[type='password'],\n.login input[type='submit'] {\n  border-radius: 0.25rem;\n  padding: 16px;\n  padding: 1rem; }\n.login label {\n  background-color: #363b41;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 20px;\n  padding-left: 1.25rem;\n  padding-right: 20px;\n  padding-right: 1.25rem; }\n.login input[type='password'],\n.login input[type='text'] {\n  background-color: #3b4148;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.login input[type='password']:focus,\n.login input[type='password']:hover,\n.login input[type='text']:focus,\n.login input[type='text']:hover {\n  background-color: #434a52; }\n.login input[type='submit'] {\n  background-color: #FFF05A;\n  color: black;\n  font-weight: 700;\n  text-transform: uppercase; }\n.login input[type='submit']:focus,\n.login input[type='submit']:hover {\n  background-color: #e8da52; }\n/* modules/text.css */\np {\n  margin-bottom: 24px;\n  margin-bottom: 1.5rem;\n  margin-top: 24px;\n  margin-top: 1.5rem; }\n.text--center {\n  text-align: center;\n  color: #313131; }\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n    <div class=\"nav-container\">\n        <nav>\n            <!--nav bar -->\n            <div class=\"nav-btn\" (click)=\"toggleIt()\" >\n                <span class=\"dash1\"></span>\n                <span class=\"middle\"></span>\n                <span class=\"dash2\"></span>\n            </div>\n            <a routerLink=\"/\" class=\"logo\">\n                FIB\n                <span>\n                    <i class=\"fas fa-futbol\"></i>\n                </span>\n            </a>\n            <div class=\"nav-wrapper\">\n                <ul class=\"main-nav\">\n                    <li class=\"nav-item\">\n                        <a routerLink=\"fibo/tickets\">TICKETS</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"fibo/teams\">TEAMS</a>\n                    </li>\n                    <li class=\"nav-item\">\n                        <a routerLink=\"fibo/results\">MATCH RESULTS</a>\n                    </li>\n                </ul>\n                <ul class=\"secondery-nav\">\n                    <li class=\"nav-item\">\n                        <a routerLink=\"fibo/contact-us\">CONTACT US</a>\n                    </li>\n                    <li class=\"nav-item nav-tools tool1\">\n                        <a routerLink=\"fibo/login\">LOGIN</a>\n                    </li>\n                    <li class=\"nav-item nav-tools last\">\n                        <a routerLink=\"fibo/sign-up\">SIGN UP</a>\n                    </li>\n                </ul>\n            </div>\n        </nav>\n        <!-- sidebar -->\n        <div class=\"sidebar\">\n            <div class=\"side-wrapper\">\n                <ul class=\"nav-mobile\">\n                    <li class=\"nav-mob\">\n                        <a routerLink=\"fibo/tickets\" (click)=\"removeClass()\" >TICKETS</a>\n                    </li>\n                    <li class=\"nav-mob\">\n                        <a routerLink=\"fibo/teams\" (click)=\"removeClass()\">TEAMS</a>\n                    </li>\n                    <li class=\"nav-mob\">\n                        <a href=\"#\" (click)=\"removeClass()\">MATCH RESULTS</a>\n                    </li>\n                    <li class=\"nav-mob\">\n                        <a href=\"#\" (click)=\"removeClass()\">CONTACT US</a>\n                    </li>\n                    <li class=\"nav-mob\">\n                        <a href=\"#\" (click)=\"removeClass()\">LOGIN</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  position: absolute;\n  left: 43.7%;\n  transition: z-index 0.8s ease;\n  z-index: 0;\n  transition: fill 0.8s ease;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2.5em;\n  width: 200px;\n  color: #FFF05A;\n  font-family: 'karla';\n  font-size: 2em;\n  font-weight: 700;\n  letter-spacing: 2px; }\n\n.logo span {\n  font-size: 0.7em; }\n\n.nav-container {\n  position: fixed;\n  height: 5em;\n  width: 100%;\n  background-color: #273043; }\n\nnav {\n  width: 100%;\n  height: 5em;\n  position: relative;\n  z-index: 999; }\n\n.nav-wrapper ul {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n  padding-top: 2em; }\n\n.nav-item {\n  padding: 0 1em; }\n\n.nav-item a {\n  color: white;\n  font-family: \"karla\";\n  font-weight: 600;\n  transition: all 0.4s ease; }\n\n.nav-item a:hover {\n    text-shadow: rgba(249, 198, 6, 0.5) 5px -5px 0px; }\n\n.main-nav {\n  float: left; }\n\n.secondery-nav {\n  float: right; }\n\n.nav-tools a {\n  color: #aaaaaa;\n  transition: all 0.4s ease; }\n\n.nav-tools a:hover {\n    color: #231F20;\n    text-shadow: none; }\n\n.tool1 {\n  border-right: 1px solid #aaaaaa; }\n\n.nav-btn {\n  display: none;\n  position: absolute;\n  top: 1.2em;\n  left: 2em;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  transition: z-index 0.8s ease;\n  z-index: 0; }\n\n.nav-btn span {\n  display: block;\n  height: 1.5px;\n  width: 25px;\n  background: #231F20;\n  margin: 0.2em 0; }\n\n.nav-btn .middle {\n  height: 2.3px;\n  transition: all 0.2s ease; }\n\n.nav-btn .dash1 {\n  transition: all 0.5s ease; }\n\n.nav-btn .dash2 {\n  transition: all 0.5s ease; }\n\n.sidebar {\n  width: 70%;\n  background-color: #313131;\n  position: absolute;\n  left: -80%;\n  top: 0;\n  height: 100vh;\n  transition: all 0.5s ease; }\n\n.nav-mob a {\n  display: block;\n  color: white;\n  transition: all 0.4s ease;\n  font-family: 'karla',sans-serif;\n  font-size: 1.3em;\n  font-weight: 500; }\n\n.nav-mob a:hover {\n    color: #aaaaaa; }\n\n.nav-mob {\n  padding: 1em; }\n\n.side-wrapper {\n  padding-top: 7em;\n  position: relative;\n  width: 100%;\n  height: 100%; }\n\n@media only screen and (max-width: 47em) {\n  .nav-btn {\n    display: block; }\n  .nav-item {\n    display: none; }\n  .nav-tools {\n    display: block; }\n  .tool1 {\n    display: none; }\n  .logo p {\n    display: none; }\n  .nav-wrapper ul {\n    padding-top: 1.2em; }\n  .nav-wrapper {\n    height: 3.5em; }\n  nav {\n    height: 3.5em; }\n  .nav-container {\n    height: 3.5em; }\n  header {\n    height: 3.5em; }\n  .logo {\n    left: 38%;\n    top: -10px; } }\n\n@media screen and (max-width: 370px) {\n  .logo {\n    left: 18%; } }\n\n.open {\n  z-index: 999999999; }\n\n.open span {\n  background-color: white; }\n\n.open .middle {\n  opacity: 0; }\n\n.open .dash1 {\n  -webkit-transform: rotateZ(45deg) translateX(7px);\n          transform: rotateZ(45deg) translateX(7px); }\n\n.open .dash2 {\n  -webkit-transform: rotateZ(-45deg) translateX(7.5px);\n          transform: rotateZ(-45deg) translateX(7.5px); }\n\n.open-logo {\n  transition: z-index 0.8s ease;\n  z-index: 999999;\n  transition: all 0.8s ease; }\n\n.showing {\n  left: 0; }\n\n@media only screen and (max-width: 300px) {\n  .last {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleIt = function () {
        var sidebar = document.querySelector('.sidebar');
        var logo = document.querySelector('.logo');
        var navBtn = document.querySelector('.nav-btn');
        sidebar.classList.toggle('showing');
        logo.classList.toggle('open-logo');
        navBtn.classList.toggle('open');
    };
    NavbarComponent.prototype.removeClass = function () {
        var sidebar = document.querySelector('.sidebar');
        var logo = document.querySelector('.logo');
        var navBtn = document.querySelector('.nav-btn');
        sidebar.classList.toggle('showing');
        logo.classList.toggle('open-logo');
        navBtn.classList.toggle('open');
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());

/*// === nav btn === //

$('.nav-btn').click(function(){
  $('.nav-btn').toggleClass('open');
  $('.sidebar').toggleClass('showing');
  $('.logo').toggleClass('open-logo')
})*/


/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>MATCH RESULTS</h1>\n<div class=\"results\">\n  <div class=\"wrapper\" *ngFor=\"let date of dates| slice:0:show  let i=index\">\n    <div class=\"wrapper2\">\n      <div class=\"title\">\n        <p>{{date.date}}</p>\n      </div>\n      <div class=\"matches\">\n        <div class=\"match\" *ngFor=\"let result of results\" [routerLink]= \"['/fibo/fixtures', result.id]\" >\n          <div class=\"left\">\n            <img class=\"logo\" src=\"{{result.homeUrl}}\" alt=\"team logo\">\n          </div>\n          <div class=\"center\">\n            <span class=\"left-span\">{{result.homeTeam}}</span>\n            <span class=\"result\">{{result.result}}</span>\n            <span class=\"right-span\">{{result.awayTeam}}</span>\n          </div>\n          <div class=\"right\">\n            <img class=\"logo\" src=\"{{result.awayUrl}}\" alt=\"team logo\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"button\">\n  <a class=\"btn show\" (click)=\"showit()\">More</a>\n</div>"

/***/ }),

/***/ "./src/app/results/results.component.scss":
/*!************************************************!*\
  !*** ./src/app/results/results.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".results {\n  width: 40%;\n  margin: 0 auto;\n  font-family: 'karla'; }\n\nh1 {\n  font-family: \"Open Sans\";\n  color: black;\n  font-size: 3em;\n  font-weight: 700;\n  text-shadow: 4px 4px 20px white;\n  text-align: center;\n  padding-top: 0.5em;\n  padding-bottom: 2em; }\n\n.title {\n  color: #FFF05A;\n  font-size: 2em;\n  padding-top: 0.5em;\n  padding-bottom: 0.2em; }\n\n.match {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 4fr 1fr;\n      grid-template-columns: 1fr 4fr 1fr;\n  background-color: rgba(255, 255, 255, 0.694);\n  font-size: 1.5em;\n  padding: 0.5em 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.639);\n  transition: all 0.4s ease;\n  cursor: pointer; }\n\n.match:hover {\n    background-color: rgba(128, 128, 128, 0.701); }\n\n.result {\n  padding: 0 1em;\n  text-align: center; }\n\n.right-span, .left-span {\n  text-align: center; }\n\n.logo {\n  width: 20px; }\n\n.center {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr; }\n\n.right {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 0.5em; }\n\n.left {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  padding-left: 0.5em; }\n\n.button {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.btn {\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n\n.show {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\n  margin: 2em; }\n\n.show:hover {\n    border: 1px solid;\n    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n    outline-color: rgba(255, 255, 255, 0);\n    outline-offset: 15px;\n    text-shadow: 1px 1px 2px #427388; }\n"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_results_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/results.service */ "./src/app/services/results.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(resultService) {
        this.resultService = resultService;
        this.show = 2;
        this.results = this.resultService.getResults();
        this.dates = this.resultService.getDates();
    }
    ResultsComponent.prototype.showit = function () {
        this.show++;
    };
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.scss */ "./src/app/results/results.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_results_service__WEBPACK_IMPORTED_MODULE_1__["ResultsService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/hero/hero.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/tickets/tickets.component.ts");
/* harmony import */ var _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teams/teams.component */ "./src/app/teams/teams.component.ts");
/* harmony import */ var _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-details/ticket-details.component */ "./src/app/ticket-details/ticket-details.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _fixtures_fixtures_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fixtures/fixtures.component */ "./src/app/fixtures/fixtures.component.ts");









var appRoutes = [
    { path: 'fibo', component: _hero_hero_component__WEBPACK_IMPORTED_MODULE_0__["HeroComponent"] },
    { path: 'fibo/tickets', component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_1__["TicketsComponent"] },
    { path: 'fibo/teams', component: _teams_teams_component__WEBPACK_IMPORTED_MODULE_2__["TeamsComponent"] },
    { path: 'fibo/results', component: _results_results_component__WEBPACK_IMPORTED_MODULE_4__["ResultsComponent"] },
    { path: 'fibo/contact-us', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"] },
    { path: 'fibo/login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'fibo/sign-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_7__["SignUpComponent"] },
    { path: 'fibo/fixtures/:id', component: _fixtures_fixtures_component__WEBPACK_IMPORTED_MODULE_8__["FixturesComponent"] },
    { path: 'fibo/tickets/:id', component: _ticket_details_ticket_details_component__WEBPACK_IMPORTED_MODULE_3__["TicketDetailsComponent"] },
    { path: '', redirectTo: 'fibo', pathMatch: 'full' },
];


/***/ }),

/***/ "./src/app/services/results.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/results.service.ts ***!
  \*********************************************/
/*! exports provided: ResultsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsService", function() { return ResultsService; });
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

var ResultsService = /** @class */ (function () {
    function ResultsService() {
    }
    ResultsService.prototype.getResults = function () {
        return RESULTS;
    };
    ResultsService.prototype.getDates = function () {
        return MATCHDATES;
    };
    ResultsService.prototype.getResultsId = function (id) {
        return RESULTS.find(function (ticket) { return ticket.id === id; });
    };
    ResultsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ResultsService);
    return ResultsService;
}());

var MATCHDATES = [
    {
        date: 'Monday 06/5'
    },
    {
        date: 'Tuesday 07/5'
    },
    {
        date: 'Wednesday 08/5'
    },
    {
        date: 'Friday 09/5'
    },
    {
        date: 'Sunday 11/5'
    },
    {
        date: 'Monday 12/5'
    },
    {
        date: 'Wednesday 13/5'
    },
    {
        date: 'Sunday 20/6'
    },
    {
        date: 'Monday 21/6'
    },
    {
        date: 'Tuesday 22/6'
    },
    {
        date: 'Sunday 11/7'
    }
];
var RESULTS = [
    {
        homeTeam: 'Arsenal',
        awayTeam: 'Manchestar',
        homeUrl: '../../assets/images/arsenal.png',
        awayUrl: '../../assets/images/manchester.png',
        result: '1-0',
        theDate: 'Monday 06/18',
        id: 1,
        mainUrl: '../../assets/images/player.jpg',
        sideUrl: '../../assets/images/player2.jpg',
        title: 'Andrej Kramaric: Manchester hero who risked his career for his principles'
    },
    {
        homeTeam: 'Barcelona',
        awayTeam: 'Real Madrid',
        homeUrl: '../../assets/images/barcelona.png',
        awayUrl: '../../assets/images/real.png',
        result: '2-4',
        theDate: 'Monday 06/18',
        id: 2,
        mainUrl: '../../assets/images/ramos.jpg',
        sideUrl: '../../assets/images/ramos2.jpg',
        title: 'Sergio Ramos: I always believed in my ability to tackle every player'
    },
    {
        homeTeam: 'Liverpool',
        awayTeam: 'Arsenal',
        homeUrl: '../../assets/images/liver.png',
        awayUrl: '../../assets/images/arsenal.png',
        result: '1-1',
        theDate: 'Monday 06/18',
        id: 3,
        mainUrl: '../../assets/images/salah.jpg',
        sideUrl: '../../assets/images/salah2.jpg',
        title: 'Mohamed Salah: Winning the European League is a must next season'
    },
    {
        homeTeam: 'Barcelona',
        awayTeam: 'Everton',
        homeUrl: '../../assets/images/barcelona.png',
        awayUrl: '../../assets/images/everton.png',
        result: '3-0',
        theDate: 'Monday 06/18',
        id: 4,
        mainUrl: '../../assets/images/messi.jpg',
        sideUrl: '../../assets/images/messi2.jpg',
        title: 'Messi: I am not that short if you looked close enough'
    },
    {
        homeTeam: 'Bayern',
        awayTeam: 'Everton',
        homeUrl: '../../assets/images/bayern.png',
        awayUrl: '../../assets/images/everton.png',
        result: '3-0',
        theDate: 'Monday 06/18',
        id: 5,
        mainUrl: '../../assets/images/alaba.jpg',
        sideUrl: '../../assets/images/alaba2.jpg',
        title: 'David Alaba: My hair is cool stop yelling at me I love the twinkles '
    },
    {
        homeTeam: 'Manchester',
        awayTeam: 'Bayern',
        homeUrl: '../../assets/images/manchester.png',
        awayUrl: '../../assets/images/bayern.png',
        result: '3-0',
        theDate: 'Monday 06/18',
        id: 6,
        mainUrl: '../../assets/images/juan.jpg',
        sideUrl: '../../assets/images/juan2.jpg',
        title: 'Juan Mata: They told me I look like David Bekham but I belive I am more like Martha Stewart'
    },
];


/***/ }),

/***/ "./src/app/services/teams.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/teams.service.ts ***!
  \*******************************************/
/*! exports provided: TeamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsService", function() { return TeamsService; });
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

var TeamsService = /** @class */ (function () {
    function TeamsService() {
    }
    TeamsService.prototype.getTeams = function () {
        return TEAMS;
    };
    TeamsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TeamsService);
    return TeamsService;
}());

var TEAMS = [
    {
        id: 1,
        team: 'Real Madrid',
        imgUrl: 'real.png',
        infoUrl: 'https://www.realmadrid.com/en'
    },
    {
        id: 2,
        team: 'Barcelona',
        imgUrl: 'barcelona.png',
        infoUrl: 'https://www.fcbarcelona.com/'
    },
    {
        id: 3,
        team: 'Liverpool',
        imgUrl: 'liver.png',
        infoUrl: 'https://www.liverpoolfc.com/welcome-to-liverpool-fc'
    },
    {
        id: 4,
        team: 'Arsenal',
        imgUrl: 'arsenal.png',
        infoUrl: 'https://www.arsenal.com/'
    },
    {
        id: 5,
        team: 'Manchester United',
        imgUrl: 'manchester.png',
        infoUrl: 'http://www.manutd.com/'
    },
    {
        id: 6,
        team: 'Everton',
        imgUrl: 'everton.png',
        infoUrl: 'http://www.evertonfc.com/home'
    },
    {
        id: 7,
        team: 'Tottenham',
        imgUrl: 'tottenham.png',
        infoUrl: 'http://www.tottenhamhotspur.com/'
    },
    {
        id: 8,
        team: 'Bayern Munich',
        imgUrl: 'bayern.png',
        infoUrl: 'https://fcbayern.com/en'
    },
    {
        id: 8,
        team: 'Paris Saint-Germain',
        imgUrl: 'Paris.png',
        infoUrl: 'https://www.psg.fr/'
    },
];


/***/ }),

/***/ "./src/app/services/tickets.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/tickets.service.ts ***!
  \*********************************************/
/*! exports provided: TicketsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsService", function() { return TicketsService; });
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

var TicketsService = /** @class */ (function () {
    function TicketsService() {
    }
    TicketsService.prototype.getTickets = function () {
        return TICKETS;
    };
    ;
    TicketsService.prototype.getEvent = function (id) {
        return TICKETS.find(function (ticket) { return ticket.id === id; });
    };
    TicketsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TicketsService);
    return TicketsService;
}());

var TICKETS = [
    {
        id: 1,
        homeTeam: 'Barcelona',
        awayTeam: 'Manchester',
        homeUrl: '../../assets/images/barcelona.png',
        awayUrl: '../../assets/images/manchester.png',
        day: 21,
        month: 'aug',
        year: 2018,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 789,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1896,
        },
    },
    {
        id: 2,
        homeTeam: 'Arsenal',
        awayTeam: 'Barcelona',
        homeUrl: '../../assets/images/arsenal.png',
        awayUrl: '../../assets/images/barcelona.png',
        day: 22,
        month: 'aug',
        year: 2018,
        cat4: {
            name: 'Cat4',
            availability: 'Less than 15%',
            price: 589,
        },
        cat3: {
            name: 'Cat3',
            availability: 'In stock',
            price: 1555,
        },
        cat2: {
            name: 'Cat2',
            availability: 'In stock',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1896,
        },
    },
    {
        id: 3,
        homeTeam: 'PSG',
        awayTeam: 'Bayern',
        homeUrl: '../../assets/images/Paris.png',
        awayUrl: '../../assets/images/bayern.png',
        day: 11,
        month: 'May',
        year: 2019,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 600,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'In Stock',
            price: 1796,
        },
    },
    {
        id: 4,
        homeTeam: 'Chelsea',
        awayTeam: 'Real Madrid',
        homeUrl: '../../assets/images/chelsea.png',
        awayUrl: '../../assets/images/real.png',
        day: 24,
        month: 'aug',
        year: 2018,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 789,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1896,
        },
    },
    {
        id: 5,
        homeTeam: 'Liverpool',
        awayTeam: 'Real Madrid',
        homeUrl: '../../assets/images/liver.png',
        awayUrl: '../../assets/images/real.png',
        day: 26,
        month: 'may',
        year: 2018,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 600,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1000,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 33%',
            price: 1267,
        },
        cat1: {
            name: 'Cat1',
            availability: 'In Stock',
            price: 1796,
        },
    },
    {
        id: 6,
        homeTeam: 'Everton',
        awayTeam: 'Tottenham',
        homeUrl: '../../assets/images/everton.png',
        awayUrl: '../../assets/images/tottenham.png',
        day: 16,
        month: 'aug',
        year: 2018,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 789,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 16%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'In stock',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1700,
        },
    },
    {
        id: 7,
        homeTeam: 'Manchester',
        awayTeam: 'Liverpool',
        homeUrl: '../../assets/images/manchester.png',
        awayUrl: '../../assets/images/liver.png',
        day: 21,
        month: 'Feb',
        year: 2019,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 600,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'In Stock',
            price: 1796,
        },
    },
    {
        id: 8,
        homeTeam: 'Arsenal',
        awayTeam: 'Real Madrid',
        homeUrl: '../../assets/images/arsenal.png',
        awayUrl: '../../assets/images/real.png',
        day: 22,
        month: 'oct',
        year: 2019,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 789,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1896,
        },
    },
    {
        id: 9,
        homeTeam: 'Everton',
        awayTeam: 'Liverpool',
        homeUrl: '../../assets/images/everton.png',
        awayUrl: '../../assets/images/liver.png',
        day: 11,
        month: 'May',
        year: 2019,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 789,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1896,
        },
    },
    {
        id: 10,
        homeTeam: 'Everton',
        awayTeam: 'Barcelona',
        homeUrl: '../../assets/images/everton.png',
        awayUrl: '../../assets/images/barcelona.png',
        day: 11,
        month: 'dec',
        year: 2019,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 789,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'Less than 10%',
            price: 1896,
        },
    },
    {
        id: 11,
        homeTeam: 'Liverpool',
        awayTeam: 'Manchester',
        homeUrl: '../../assets/images/liver.png',
        awayUrl: '../../assets/images/manchester.png',
        day: 26,
        month: 'may',
        year: 2019,
        cat4: {
            name: 'Cat4',
            availability: 'In Stock',
            price: 600,
        },
        cat3: {
            name: 'Cat3',
            availability: 'Less than 10%',
            price: 1255,
        },
        cat2: {
            name: 'Cat2',
            availability: 'Less than 30%',
            price: 1567,
        },
        cat1: {
            name: 'Cat1',
            availability: 'In Stock',
            price: 1796,
        },
    },
];


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>SIGN UP</h2>\n<div class=\"align\">\n    <div class=\"grid\">\n  \n      <form action=\"https://httpbin.org/post\" method=\"POST\" class=\"form login\">\n  \n        <div class=\"form__field\">\n          <label for=\"login__username\"><svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#user\"></use></svg><span class=\"hidden\">Username</span></label>\n          <input id=\"login__username\" type=\"text\" autocomplete=\"off\" name=\"username\" class=\"form__input\" placeholder=\"Username\" required>\n        </div>\n  \n        <div class=\"form__field\">\n          <label for=\"login__password\"><svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#lock\"></use></svg><span class=\"hidden\">Password</span></label>\n          <input id=\"login__password\" type=\"password\" name=\"password\" class=\"form__input\" placeholder=\"Password\" required>\n        </div>\n  \n        <div class=\"form__field\">\n          <input type=\"submit\" value=\"Sign Up\">\n        </div>\n  \n      </form>\n  \n      <p class=\"text--center\">Have account? <a routerLink=\"../login\">Login now</a> <svg class=\"icon\"><use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"assets/images/icons.svg#arrow-right\"></use></svg></p>\n  \n    </div>\n  \n    <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icons\"><symbol id=\"arrow-right\" viewBox=\"0 0 1792 1792\"><path d=\"M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z\"/></symbol><symbol id=\"lock\" viewBox=\"0 0 1792 1792\"><path d=\"M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z\"/></symbol><symbol id=\"user\" viewBox=\"0 0 1792 1792\"><path d=\"M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z\"/></symbol></svg>\n  \n  </div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.scss":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* config.css */\n/* helpers/align.css */\n.align {\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center; }\n/* helpers/grid.css */\n.grid {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 320px;\n  max-width: 20rem;\n  width: 90%; }\n/* helpers/hidden.css */\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n/* helpers/icon.css */\n.icons {\n  display: none; }\n.icon {\n  display: inline-block;\n  fill: #606468;\n  font-size: 16px;\n  font-size: 1rem;\n  height: 1em;\n  vertical-align: middle;\n  width: 1em; }\n/* layout/base.css */\n* {\n  box-sizing: inherit; }\nhtml {\n  box-sizing: border-box;\n  font-size: 100%;\n  height: 100%; }\n.align {\n  color: #606468;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-size: 0.875rem;\n  font-weight: 400;\n  height: 100%;\n  line-height: 1.5;\n  margin: 0;\n  min-height: 100vh; }\nh2 {\n  font-family: \"Open Sans\",sans-serif;\n  color: black;\n  font-size: 3em;\n  font-weight: 700;\n  text-shadow: 4px 4px 20px white;\n  text-align: center;\n  position: relative;\n  top: 5em; }\n/* modules/anchor.css */\na {\n  color: #eee;\n  outline: 0;\n  text-decoration: none; }\na:focus,\na:hover {\n  text-decoration: underline; }\n/* modules/form.css */\ninput {\n  background-image: none;\n  border: 0;\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n  transition: background-color 0.3s; }\ninput[type='submit'] {\n  cursor: pointer; }\n.form {\n  margin: -14px;\n  margin: -0.875rem; }\n.form input[type='password'],\n.form input[type='text'],\n.form input[type='submit'] {\n  width: 100%; }\n.form__field {\n  display: flex;\n  margin: 14px;\n  margin: 0.875rem; }\n.form__input {\n  flex: 1; }\n/* modules/login.css */\n.login {\n  color: #eee; }\n.login label,\n.login input[type='text'],\n.login input[type='password'],\n.login input[type='submit'] {\n  border-radius: 0.25rem;\n  padding: 16px;\n  padding: 1rem; }\n.login label {\n  background-color: #363b41;\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  padding-left: 20px;\n  padding-left: 1.25rem;\n  padding-right: 20px;\n  padding-right: 1.25rem; }\n.login input[type='password'],\n.login input[type='text'] {\n  background-color: #3b4148;\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n.login input[type='password']:focus,\n.login input[type='password']:hover,\n.login input[type='text']:focus,\n.login input[type='text']:hover {\n  background-color: #434a52; }\n.login input[type='submit'] {\n  background-color: #FFF05A;\n  color: black;\n  font-weight: 700;\n  text-transform: uppercase; }\n.login input[type='submit']:focus,\n.login input[type='submit']:hover {\n  background-color: #e8da52; }\n/* modules/text.css */\np {\n  margin-bottom: 24px;\n  margin-bottom: 1.5rem;\n  margin-top: 24px;\n  margin-top: 1.5rem; }\n.text--center {\n  text-align: center;\n  color: #313131; }\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
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

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/teams/teams.component.html":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"teams\">\n    <h2>TEAMS</h2>\n    <div class=\"grid\">\n      <div class=\"team\" *ngFor = \"let team of teams\">\n        <div class=\"back\">\n          <div class=\"image\">\n            <div class=\"overlay\">\n              <h3>{{team.team}}</h3>\n              <img src=\"/assets/images/{{team.imgUrl}}\" alt=\"team logo\" class=\"team-logo\">\n            </div>\n          </div>\n          <div class=\"text\">\n            <a class=\"btn btn-5\" href=\"{{team.infoUrl}}\" target=\"_blanck\">More Info</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n  <a routerLink=\"/fibo\" class=\"backit yellow\"><span class=\"three\"><i class=\"fas fa-angle-left\"></i></span> <span class=\"two\"><i class=\"fas fa-angle-left\"></i></span><span class=\"one\"><i class=\"fas fa-angle-left\"></i></span></a>"

/***/ }),

/***/ "./src/app/teams/teams.component.scss":
/*!********************************************!*\
  !*** ./src/app/teams/teams.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n.backit {\n  position: fixed;\n  top: 52%;\n  left: 1em;\n  font-size: 2em;\n  cursor: pointer; }\n.one {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n.two {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n.three {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s; }\n.yellow {\n  color: #ffed01; }\n@-webkit-keyframes light {\n  0% { }\n  100% {\n    color: #767678; } }\n@keyframes light {\n  0% { }\n  100% {\n    color: #767678; } }\n.teams {\n  text-align: center;\n  font-family: \"Open Sans\";\n  padding: 1em; }\nh2 {\n  font-family: \"Open Sans\";\n  color: black;\n  font-size: 3em;\n  font-weight: 700;\n  text-shadow: 4px 4px 20px white; }\n.team {\n  height: 300px;\n  width: 300px;\n  background-color: white;\n  background-image: url(\"/../../assets/images/back3.jpeg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0 auto; }\n.back {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.653); }\n.overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 200px;\n  color: white;\n  position: relative; }\n.text {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\nh3 {\n  font-size: 2em; }\n.btn {\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%; }\n.btn-5 {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1); }\n.btn-5:hover {\n  border: 1px solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 15px;\n  text-shadow: 1px 1px 2px #427388; }\n.grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 1em;\n  padding: 1em;\n  padding-top: 3em;\n  width: 85%;\n  margin: 0 auto; }\n@media only screen and (max-width: 1300px) {\n  .grid {\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr; } }\n@media only screen and (max-width: 1150px) {\n  .grid {\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr; } }\n@media only screen and (max-width: 750px) {\n  .grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n    width: 90%; }\n  .ticket {\n    width: 80%; } }\n.team-logo {\n  width: 50px;\n  height: 50px;\n  padding-top: 0.3em; }\n"

/***/ }),

/***/ "./src/app/teams/teams.component.ts":
/*!******************************************!*\
  !*** ./src/app/teams/teams.component.ts ***!
  \******************************************/
/*! exports provided: TeamsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamsComponent", function() { return TeamsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_teams_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/teams.service */ "./src/app/services/teams.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamsComponent = /** @class */ (function () {
    function TeamsComponent(teamsService) {
        this.teamsService = teamsService;
        this.teams = this.teamsService.getTeams();
    }
    TeamsComponent.prototype.ngOnInit = function () {
    };
    TeamsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-teams',
            template: __webpack_require__(/*! ./teams.component.html */ "./src/app/teams/teams.component.html"),
            styles: [__webpack_require__(/*! ./teams.component.scss */ "./src/app/teams/teams.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_teams_service__WEBPACK_IMPORTED_MODULE_1__["TeamsService"]])
    ], TeamsComponent);
    return TeamsComponent;
}());



/***/ }),

/***/ "./src/app/ticket-details/ticket-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/ticket-details/ticket-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ticket-details\">\n  <div class=\"grid\">\n    <div class=\"tickets-table\">\n      <div class=\"preview\">\n        <div class=\"team\">\n          <h2>{{ticket.homeTeam}}</h2>\n          <img class=\"logo\" src=\"{{ticket.homeUrl}}\" alt=\"soccer football team logo\">\n        </div>\n        <div class=\"vs\">\n          <p>VS</p>\n        </div>\n        <div class=\"team\">\n            <h2>{{ticket.awayTeam}}</h2>\n            <img class=\"logo \" src=\"{{ticket.awayUrl}}\" alt=\"soccer football team logo\">\n          </div>\n      </div>\n      <div class=\"table\">\n        <table>\n          <thead>\n            <th class=\"first\">Category</th>\n            <th>Availability</th>\n            <th>Price($)</th>\n            <th>Amount</th>\n          </thead>\n          <tbody>\n            <tr>\n              <td>{{ticket.cat4.name}}</td>\n              <td>{{ticket.cat4.availability}}</td>\n              <td>{{ticket.cat4.price | currency: 'USD'}}</td>\n              <td class=\"btns\">\n                <a id=\"minus1\" class=\"btnless\">\n                  <i class=\"fas fa-minus\"></i>\n                </a>\n                <span id=\"number1\">0</span>\n                <a id=\"plus1\" class=\"btnmore\">\n                  <i class=\"fas fa-plus\"></i>\n                </a>\n                <span id=\"cat1-text\" class=\"tooltiptext\">Choose tickets number</span>\n              </td>\n            </tr>\n            <tr>\n              <td>{{ticket.cat3.name}}</td>\n              <td>{{ticket.cat3.availability}}</td>\n              <td>{{ticket.cat3.price | currency: 'USD'}}</td>\n              <td class=\"btns\">\n                <a id=\"minus2\" class=\"btnless\">\n                  <i class=\"fas fa-minus\"></i>\n                </a>\n                <span id=\"number2\">0</span>\n                <a id=\"plus2\" class=\"btnmore\">\n                  <i class=\"fas fa-plus\"></i>\n                </a>\n                <span id=\"cat2-text\" class=\"tooltiptext\">Choose tickets number</span>\n              </td>\n            </tr>\n            <tr>\n              <td>{{ticket.cat2.name}}</td>\n              <td>{{ticket.cat2.availability}}</td>\n              <td>{{ticket.cat2.price | currency: 'USD'}}</td>\n              <td class=\"btns\">\n                <a id=\"minus3\" class=\"btnless\">\n                  <i class=\"fas fa-minus\"></i>\n                </a>\n                <span id=\"number3\">0</span>\n                <a class=\"btnmore\">\n                  <i id=\"plus3\" class=\"fas fa-plus\"></i>\n                </a>\n                <span id=\"cat3-text\" class=\"tooltiptext\">Choose tickets number</span>\n              </td>\n            </tr>\n            <tr>\n              <td>{{ticket.cat1.name}}</td>\n              <td>{{ticket.cat1.availability}}</td>\n              <td>{{ticket.cat1.price | currency: 'USD'}}</td>\n              <td class=\"btns\">\n                <a id=\"minus4\" class=\"btnless\">\n                  <i class=\"fas fa-minus\"></i>\n                </a>\n                <span id=\"number4\">0</span>\n                <a id=\"plus4\" class=\"btnmore\">\n                  <i class=\"fas fa-plus\"></i>\n                </a>\n                <span id=\"cat4-text\" class=\"tooltiptext\">Choose tickets number</span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div class=\"buy\">\n          <a href=\"#\">Purchase</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"tickets-stad\">\n      <div class=\"scheme_parent\">\n\n\n        <!--?xml version=\"1.0\" encoding=\"utf-8\"?-->\n        <!-- Generator: Adobe Illustrator 21.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n        <svg version=\"1.1\" id=\"Слой_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n          viewBox=\"0 0 522.4 459.1\" style=\"enable-background:new 0 0 522.4 459.1;\" xml:space=\"preserve\" class=\"\">\n          <g id=\"box\" class=\"\">\n            <path class=\"st0\" d=\"M353.4,80.1H168.9c-39.7,0-71.9,32.3-71.9,71.9v125c0,39.7,32.3,71.9,71.9,71.9h184.5c2.9,0,5.8-0.2,8.7-0.5\n            v-11.8c-2.8,0.4-5.7,0.6-8.7,0.6l-181.1-0.2c-34.3,0-62.9-28.4-62.9-62.7l-0.3-122c0-34.3,27-60.6,61.3-60.6l181.3-0.2\n            c34.3,0,61.4,28.6,61.4,62.9v121.4c0,4.9-0.7,10.3-1.8,14.9l12.6,0.4c0.9-4.6,1.4-9.4,1.4-14.3v-125\n            C425.4,112.4,393.1,80.1,353.4,80.1z\"></path>\n            <path class=\"st1\" d=\"M352.6,81.4H169.8c-39.3,0-71.3,32-71.3,71.3v123.9c0,39.3,32,71.3,71.3,71.3h182.8c2.9,0,5.8-0.2,8.6-0.5\n            v-9.7c-2.8,0.4-5.7,0.6-8.6,0.6H169.8c-34,0-61.6-27.6-61.6-61.6V152.6c0-34,27.6-61.6,61.6-61.6h182.8c34,0,61.6,27.6,61.6,61.6\n            v123.9c0,4.9-0.6,9.6-1.7,14.2h9.9c0.9-4.6,1.4-9.3,1.4-14.2V152.6C423.8,113.3,391.9,81.4,352.6,81.4z\"></path>\n          </g>\n          <g id=\"kat1\" class=\"\">\n            <rect x=\"276.5\" y=\"95.1\" class=\"st2\" width=\"25.1\" height=\"53.1\"></rect>\n            <path class=\"st2\" d=\"M347.5,148.9l15.6-49.5c-7.4-2.8-15.4-4.3-23.8-4.3h-7v53.1h11.3C345,148.2,346.3,148.5,347.5,148.9z\"></path>\n            <rect x=\"192.9\" y=\"95.1\" class=\"st2\" width=\"25.1\" height=\"53.1\"></rect>\n            <path class=\"st2\" d=\"M350.1,150.2c0.3,0.2,0.5,0.4,0.8,0.6l35.9-36.4c-6-5.8-13.1-10.6-20.9-13.9L350.1,150.2z\"></path>\n            <rect x=\"248.7\" y=\"95.1\" class=\"st2\" width=\"25.1\" height=\"53.1\"></rect>\n            <rect x=\"220.8\" y=\"95.1\" class=\"st2\" width=\"25.1\" height=\"53.1\"></rect>\n            <rect x=\"304.4\" y=\"95.1\" class=\"st2\" width=\"25.1\" height=\"53.1\"></rect>\n            <path class=\"st2\" d=\"M159.2,99.4l15.6,49.5c1.2-0.4,2.5-0.7,3.9-0.7H190V95.1h-7C174.7,95.1,166.6,96.6,159.2,99.4z\"></path>\n            <path class=\"st2\" d=\"M135.6,114.4l35.9,36.4c0.2-0.2,0.5-0.4,0.8-0.6l-15.7-49.8C148.7,103.8,141.7,108.5,135.6,114.4z\"></path>\n            <path class=\"st2\" d=\"M376.3,77.3l10.6-48.5c-12.9-4.3-26.5-7.1-40.5-8v55.3h17.3C368,76.1,372.2,76.5,376.3,77.3z\"></path>\n            <rect x=\"279.3\" y=\"20.4\" class=\"st2\" width=\"30.7\" height=\"55.8\"></rect>\n            <path class=\"st2\" d=\"M343.5,20.6c-2.9-0.2-5.8-0.2-8.7-0.2h-21.9v55.7h30.7V20.6z\"></path>\n            <rect x=\"212.4\" y=\"20.4\" class=\"st2\" width=\"30.7\" height=\"55.8\"></rect>\n            <path class=\"st2\" d=\"M389.6,29.7L379,77.9c8.1,1.9,15.7,5.2,22.5,9.7l25.9-38.7C415.7,41,403.1,34.5,389.6,29.7z\"></path>\n            <rect x=\"245.9\" y=\"20.4\" class=\"st2\" width=\"30.7\" height=\"55.8\"></rect>\n            <path class=\"st2\" d=\"M209.5,20.4h-21.9c-2.9,0-5.8,0.1-8.7,0.2v55.5h30.7V20.4z\"></path>\n            <path class=\"st2\" d=\"M134.9,29c-13.7,4.6-26.6,11-38.4,18.9l25.9,38.7c6.9-4.4,14.7-7.6,23.1-9.2L134.9,29z\"></path>\n            <path class=\"st2\" d=\"M176,76.1V20.8c-13.3,0.9-26.2,3.4-38.4,7.3l10.7,48.8c3.4-0.5,6.9-0.8,10.4-0.8H176z\"></path>\n            <path class=\"st2\" d=\"M386.3,315.2l-35.9-36.5c-0.2,0.1-0.4,0.3-0.5,0.4l15.7,49.7C373.3,325.5,380.3,320.9,386.3,315.2z\"></path>\n            <polygon class=\"st2\" points=\"290.3,311 297.6,311 300.4,311 300.4,334 329.5,334 329.5,281 290.3,281 \t\"></polygon>\n            <path class=\"st2\" d=\"M347.3,280.3c-1.2,0.4-2.4,0.6-3.7,0.6h-11.3V334h7c8.3,0,16.2-1.5,23.6-4.2L347.3,280.3z\"></path>\n            <path class=\"st2\" d=\"M172.5,279.1c-0.2-0.1-0.4-0.3-0.5-0.4L136,315.2c6,5.7,13,10.4,20.8,13.6L172.5,279.1z\"></path>\n            <path class=\"st2\" d=\"M175.1,280.3l-15.6,49.5c7.4,2.7,15.3,4.2,23.6,4.2h7V281h-11.3C177.5,281,176.2,280.7,175.1,280.3z\"></path>\n            <polygon class=\"st2\" points=\"232,311 232,281 192.9,281 192.9,334 221.9,334 221.9,311 224.8,311 \t\"></polygon>\n            <path class=\"st2\" d=\"M389.6,399.4c13.5-4.8,26.2-11.3,37.8-19.2l-25.9-38.7c-6.7,4.5-14.3,7.9-22.5,9.8L389.6,399.4z\"></path>\n            <path class=\"st2\" d=\"M134.9,400.1l10.6-48.4c-8.3-1.6-16.1-4.8-23.1-9.2l-25.9,38.7C108.3,389.1,121.2,395.5,134.9,400.1z\"></path>\n            <path class=\"st2\" d=\"M148.2,352.2L137.6,401c8,2.6,16.3,4.5,24.8,5.8V353h-3.7C155.2,353,151.7,352.8,148.2,352.2z\"></path>\n            <path class=\"st2\" d=\"M376.3,351.8c-4.1,0.8-8.3,1.2-12.6,1.2H360v53.8c9.2-1.4,18.2-3.6,26.9-6.5L376.3,351.8z\"></path>\n          </g>\n          <g id=\"kat2\" class=\"\">\n            <path class=\"st3\" d=\"M115,171.7h52.4v-12.2c0-1.3,0.2-2.5,0.6-3.6l-49.3-15c-2.4,7-3.7,14.4-3.7,22.2V171.7z\"></path>\n            <path class=\"st3\" d=\"M354.9,159.5v12.2h52.4v-8.6c0-7.8-1.3-15.2-3.7-22.2l-49.3,15C354.7,157.1,354.9,158.3,354.9,159.5z\"></path>\n            <path class=\"st3\" d=\"M407.3,257.5h-52.4v12.2c0,1.5-0.3,3-0.8,4.3l49.3,15c2.6-7.2,4-14.9,4-22.9V257.5z\"></path>\n            <path class=\"st3\" d=\"M167.4,269.6v-12.2H115v8.6c0,8,1.4,15.7,4,22.9l49.3-15C167.7,272.6,167.4,271.1,167.4,269.6z\"></path>\n            <path class=\"st3\" d=\"M392.9,112.1L352,153.7l56.1-17C404.8,127.4,399.6,119,392.9,112.1z\"></path>\n            <path class=\"st3\" d=\"M170.4,153.7l-40.9-41.6c-6.7,6.9-11.9,15.3-15.2,24.5L170.4,153.7z\"></path>\n            <path class=\"st3\" d=\"M352,276.2l40.6,41.2c6.7-6.8,12-15.1,15.3-24.2L352,276.2z\"></path>\n            <path class=\"st3\" d=\"M129.8,317.4l40.6-41.2l-55.9,17C117.8,302.4,123.1,310.6,129.8,317.4z\"></path>\n            <path class=\"st3\" d=\"M486.1,308.6l-55.7-10.9c-1.5,8-4.4,15.6-8.5,22.3l40.8,27.5C472.2,335.8,480.1,322.7,486.1,308.6z\"></path>\n            <path class=\"st3\" d=\"M431.7,265.1V285c0,3.4-0.3,6.7-0.7,9.9l56.3,11c5.2-12.9,8.8-26.6,10.6-40.8H431.7z\"></path>\n            <path class=\"st3\" d=\"M462.7,81.5L421.9,109c4.1,6.8,7,14.3,8.5,22.3l55.6-10.9C480.1,106.3,472.2,93.3,462.7,81.5z\"></path>\n            <path class=\"st3\" d=\"M431.7,144.2V164h66.2c-1.8-14.3-5.4-28-10.7-40.9l-56.3,11C431.4,137.4,431.7,140.7,431.7,144.2z\"></path>\n            <path class=\"st3\" d=\"M403.8,89.3c6.5,4.8,12.1,10.6,16.6,17.4l40.5-27.3c-9.1-10.9-19.6-20.6-31.2-28.8L403.8,89.3z\"></path>\n            <path class=\"st3\" d=\"M120,340.9c-6.8-4.7-12.7-10.6-17.4-17.4l-40.4,27.2c9.3,11,20,20.7,31.9,28.9L120,340.9z\"></path>\n            <path class=\"st3\" d=\"M420.4,322.5c-4.4,6.7-10.1,12.6-16.6,17.4l25.9,38.7c11.6-8.2,22.1-17.9,31.2-28.8L420.4,322.5z\"></path>\n            <path class=\"st3\" d=\"M102.7,105.6c4.7-6.8,10.6-12.7,17.4-17.4L94.2,49.5c-11.9,8.2-22.6,17.9-31.9,28.9L102.7,105.6z\"></path>\n            <path class=\"st3\" d=\"M90.7,285v-19.9H24.5c1.8,14.4,5.5,28.2,10.8,41.2l56.2-11C90.9,292,90.7,288.5,90.7,285z\"></path>\n            <path class=\"st3\" d=\"M60.5,80.5c-9.8,11.9-17.9,25.2-24,39.5L92,130.9c1.6-8.3,4.8-16,9.1-22.9L60.5,80.5z\"></path>\n            <path class=\"st3\" d=\"M90.7,144.2c0-3.6,0.3-7.1,0.8-10.5l-56.2-11c-5.3,13-9,26.9-10.8,41.3h66.2V144.2z\"></path>\n            <path class=\"st3\" d=\"M101.1,321.1c-4.3-6.9-7.5-14.7-9.1-23L36.4,309c6.1,14.3,14.3,27.6,24,39.5L101.1,321.1z\"></path>\n          </g>\n          <g id=\"kat3\" class=\"\">\n            <rect x=\"354.9\" y=\"174.5\" class=\"st4\" width=\"52.4\" height=\"24.8\"></rect>\n            <rect x=\"354.9\" y=\"229.8\" class=\"st4\" width=\"52.4\" height=\"24.8\"></rect>\n            <rect x=\"115\" y=\"202.2\" class=\"st4\" width=\"52.4\" height=\"24.8\"></rect>\n            <rect x=\"354.9\" y=\"202.2\" class=\"st4\" width=\"52.4\" height=\"24.8\"></rect>\n            <rect x=\"115\" y=\"229.8\" class=\"st4\" width=\"52.4\" height=\"24.8\"></rect>\n            <rect x=\"115\" y=\"174.5\" class=\"st4\" width=\"52.4\" height=\"24.8\"></rect>\n            <path class=\"st4\" d=\"M431.7,262.3h66.5c0.6-5.9,1-11.9,1-17.9v-12h-67.5V262.3z\"></path>\n            <path class=\"st4\" d=\"M431.7,166.9v29.9h67.5v-12c0-6.1-0.3-12-1-17.9H431.7z\"></path>\n            <path class=\"st4\" d=\"M90.7,262.3v-29.9H23.2v12c0,6.1,0.3,12,1,17.9H90.7z\"></path>\n            <path class=\"st4\" d=\"M90.7,166.9H24.2c-0.6,5.9-1,11.9-1,17.9v12h67.5V166.9z\"></path>\n          </g>\n          <g id=\"kat4\" class=\"\">\n            <rect x=\"431.7\" y=\"199.6\" class=\"st5\" width=\"67.5\" height=\"29.9\"></rect>\n            <rect x=\"23.2\" y=\"199.6\" class=\"st5\" width=\"67.5\" height=\"29.9\"></rect>\n          </g>\n          <g id=\"TXT\">\n            <path id=\"POLE\" class=\"st9\" d=\"M175,165.2c0,32.5,0,65.1,0,97.6c57.4,0,114.8,0,172.3,0c0-36,0-63.6,0-97.6H175z M177.9,168.1h81.8\n            v26c-10.4,0.7-18.7,9.4-18.7,20s8.3,19.2,18.7,20v26h-81.8v-18.2h28.2v-17.7c4.8-0.9,8.4-5.1,8.4-10.1c0-4.9-3.6-9.1-8.4-10v-17.7\n            h-28.2V168.1z M262.6,168.1h81.8v18.2h-28.2V204c-4.8,0.9-8.4,5-8.4,10s3.6,9.2,8.4,10.1v17.7h28.2V260h-81.8v-26\n            c10.4-0.7,18.7-9.4,18.7-20s-8.3-19.2-18.7-20L262.6,168.1L262.6,168.1z M177.9,189.1h25.4c0,16.6,0,33.1,0,49.8h-25.4v-11.2h10.6\n            v-27.4h-10.6V189.1z M319,189.1h25.4v11.2h-10.6v27.4h10.6v11.2H319V189.1z M259.7,196.9v34.2c-8.9-0.7-15.8-8.1-15.8-17.1\n            S250.8,197.6,259.7,196.9L259.7,196.9z M262.6,196.9c8.9,0.7,15.8,8.1,15.8,17.1s-7,16.4-15.8,17.1V196.9L262.6,196.9z\n             M177.9,203.2h7.7v21.7h-7.7V203.2z M336.7,203.2h7.7v21.7h-7.7V203.2z M316.2,206.9v14.2c-3.2-0.8-5.5-3.7-5.5-7.1\n            S313,207.7,316.2,206.9L316.2,206.9z M206.1,206.9c3.2,0.8,5.5,3.7,5.5,7.1s-2.3,6.3-5.5,7.1V206.9z\"></path>\n            <rect x=\"211.5\" y=\"336.3\" class=\"st10\" width=\"99\" height=\"13.3\"></rect>\n            <path id=\"st10\" class=\"st10\" d=\"M248.7,281h25.1V334h-25.1V281z M234.9,313.9h-10.1V334h21.1V281h-10.9V313.9z M287.5,281h-10.9V334h21.1\n            v-20.2h-10.1V281z M165.2,407.3c7.3,1,14.8,1.5,22.4,1.5h147.2c7.6,0,15.1-0.5,22.4-1.5V353H165.2V407.3z\"></path>\n          </g>\n        </svg>\n\n\n\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ticket-details/ticket-details.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/ticket-details/ticket-details.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.st0 {\n  fill: #222220; }\n.st1 {\n  fill: #423E3C; }\n.st2 {\n  fill: #C3007A; }\n.st3 {\n  fill: #50918D; }\n.st4 {\n  fill: #815F8F; }\n.st5 {\n  fill: #E18C44; }\n.st6 {\n  fill: #43454B; }\n.st7 {\n  font-family: 'Panton-Bold'; }\n.st8 {\n  font-size: 8px; }\n.st9 {\n  fill: #E0E2F2; }\n.st10 {\n  fill: #C8C8C8; }\n.grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr;\n      grid-template-columns: 1fr 1fr; }\n.active {\n  opacity: 1;\n  -webkit-transform: scale(1.005);\n          transform: scale(1.005); }\n.transparent {\n  opacity: 0.2; }\n#kat1, #kat2, #kat3, #kat4 {\n  transition: all 0.4s ease; }\n#Слой_1:hover {\n  cursor: pointer; }\n.table {\n  width: 80%;\n  margin: 3em auto;\n  background-color: white;\n  text-align: center;\n  height: 33.5em;\n  position: relative;\n  bottom: 2.5em; }\ntable {\n  width: 100%;\n  height: 30em; }\nthead {\n  background-color: #273043;\n  color: #FFF05A; }\nth {\n  height: 80px;\n  box-sizing: border-box;\n  padding-top: 25px;\n  font-size: 1.8em;\n  font-family: 'karla',sans-serif; }\ntd {\n  font-size: 1.3em;\n  font-family: 'lato',sans-serif;\n  box-sizing: border-box;\n  padding-top: 5%; }\n.buy {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.buy a {\n  display: block;\n  background-color: #273043;\n  border-radius: 20px;\n  color: white;\n  padding: 0.2em 1em;\n  font-size: 1.5em;\n  font-family: 'karla',sans-serif;\n  transition: all 0.4s ease;\n  border: 1px solid #273043; }\n.buy a:hover {\n    background-color: white;\n    color: #273043; }\n.btns {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%; }\n.btnless, .btnmore {\n  display: block;\n  border: 2px solid white;\n  padding: 0.3em;\n  border-radius: 50%;\n  margin: 0 0.5em;\n  transition: all 0.3s ease;\n  cursor: pointer; }\n.btnless:hover, .btnmore:hover {\n    color: gray;\n    border-color: gray; }\n.btns {\n  position: relative; }\n.btns .tooltiptext {\n  visibility: hidden;\n  width: 200px;\n  background-color: #273043;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 20px 0;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -100px;\n  -webkit-animation: jump 0.9s infinite forwards;\n          animation: jump 0.9s infinite forwards; }\n.btns .tooltiptext::after {\n  content: \"\";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: #273043 transparent transparent transparent; }\n.visible {\n  visibility: visible !important; }\n@-webkit-keyframes jump {\n  0% { }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n@keyframes jump {\n  0% { }\n  50% {\n    -webkit-transform: translateY(10px);\n            transform: translateY(10px); }\n  100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n@media only screen and (max-width: 1230px) {\n  .tickets-stad {\n    padding-top: 5em; }\n  th {\n    font-size: 1.3em; } }\n@media only screen and (max-width: 990px) {\n  .tickets-stad {\n    display: none; }\n  .grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr; } }\n@media only screen and (max-width: 500px) {\n  td {\n    font-size: 1em; }\n  th {\n    font-size: 1em;\n    padding-left: 5px; }\n  .table {\n    width: 95%; } }\n.preview {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-top: 1.5em; }\n.team {\n  color: white;\n  font-family: 'karla',sans-serif;\n  font-size: 2em;\n  padding: 0 5%;\n  width: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column; }\n.logo {\n  width: 50px;\n  margin-top: 3px; }\n.vs {\n  font-size: 4em;\n  color: white;\n  font-family: 'karla',sans-serif; }\n.tickets-stad {\n  padding-top: 2em; }\n"

/***/ }),

/***/ "./src/app/ticket-details/ticket-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/ticket-details/ticket-details.component.ts ***!
  \************************************************************/
/*! exports provided: TicketDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketDetailsComponent", function() { return TicketDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/tickets.service */ "./src/app/services/tickets.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicketDetailsComponent = /** @class */ (function () {
    function TicketDetailsComponent(ticketService, route) {
        this.ticketService = ticketService;
        this.route = route;
    }
    TicketDetailsComponent.prototype.ngOnInit = function () {
        this.ticket = this.ticketService.getEvent(+this.route.snapshot.params['id']);
        var kat1 = document.querySelector('#kat1');
        var kat2 = document.querySelector('#kat2');
        var kat3 = document.querySelector('#kat3');
        var kat4 = document.querySelector('#kat4');
        var cat1 = document.querySelector('#cat1-text');
        var cat2 = document.querySelector('#cat2-text');
        var cat3 = document.querySelector('#cat3-text');
        var cat4 = document.querySelector('#cat4-text');
        kat1.addEventListener('mouseenter', function () {
            kat1.classList.add('active');
            kat2.classList.add('transparent');
            kat3.classList.add('transparent');
            kat4.classList.add('transparent');
            cat1.classList.add('visible');
        });
        kat1.addEventListener('mouseleave', function () {
            kat1.classList.remove('active');
            kat2.classList.remove('transparent');
            kat3.classList.remove('transparent');
            kat4.classList.remove('transparent');
            cat1.classList.remove('visible');
        });
        kat2.addEventListener('mouseenter', function () {
            kat1.classList.add('transparent');
            kat2.classList.add('active');
            kat3.classList.add('transparent');
            kat4.classList.add('transparent');
            cat2.classList.add('visible');
        });
        kat2.addEventListener('mouseleave', function () {
            kat1.classList.remove('transparent');
            kat2.classList.remove('active');
            kat3.classList.remove('transparent');
            kat4.classList.remove('transparent');
            cat2.classList.remove('visible');
        });
        kat3.addEventListener('mouseenter', function () {
            kat1.classList.add('transparent');
            kat2.classList.add('transparent');
            kat3.classList.add('active');
            kat4.classList.add('transparent');
            cat3.classList.add('visible');
        });
        kat3.addEventListener('mouseleave', function () {
            kat1.classList.remove('transparent');
            kat2.classList.remove('transparent');
            kat3.classList.remove('active');
            kat4.classList.remove('transparent');
            cat3.classList.remove('visible');
        });
        kat4.addEventListener('mouseenter', function () {
            kat1.classList.add('transparent');
            kat2.classList.add('transparent');
            kat3.classList.add('transparent');
            kat4.classList.add('active');
            cat4.classList.add('visible');
        });
        kat4.addEventListener('mouseleave', function () {
            kat1.classList.remove('transparent');
            kat2.classList.remove('transparent');
            kat3.classList.remove('transparent');
            kat4.classList.remove('active');
            cat4.classList.remove('visible');
        });
        // === add and minus tickets === //
        var add = document.querySelector('#plus1');
        var minus = document.querySelector('#minus1');
        var add2 = document.querySelector('#plus2');
        var minus2 = document.querySelector('#minus2');
        var add3 = document.querySelector('#plus3');
        var minus3 = document.querySelector('#minus3');
        var add4 = document.querySelector('#plus4');
        var minus4 = document.querySelector('#minus4');
        var i;
        i = 0;
        var a;
        a = 0;
        var b;
        b = 0;
        var c;
        c = 0;
        add.addEventListener('click', function () {
            var max = document.querySelector('#number1');
            if (i < 5) {
                i++;
                max.innerHTML = i;
            }
        });
        // minus 
        minus.addEventListener('click', function () {
            var max = document.querySelector('#number1');
            if (i > 0) {
                i--;
                max.innerHTML = i;
            }
        });
        // === seconed one === //
        add2.addEventListener('click', function () {
            var max = document.querySelector('#number2');
            if (a < 5) {
                a++;
                max.innerHTML = a;
            }
        });
        // minus 
        minus2.addEventListener('click', function () {
            var max = document.querySelector('#number2');
            if (a > 0) {
                a--;
                max.innerHTML = a;
            }
        });
        // === third one === //
        add3.addEventListener('click', function () {
            var max = document.querySelector('#number3');
            if (b < 5) {
                b++;
                max.innerHTML = b;
            }
        });
        // minus 
        minus3.addEventListener('click', function () {
            var max = document.querySelector('#number3');
            if (b > 0) {
                b--;
                max.innerHTML = b;
            }
        });
        // === fourth one === //
        add4.addEventListener('click', function () {
            var max = document.querySelector('#number4');
            if (c < 5) {
                c++;
                max.innerHTML = c;
            }
        });
        // minus 
        minus4.addEventListener('click', function () {
            var max = document.querySelector('#number4');
            if (c > 0) {
                c--;
                max.innerHTML = c;
            }
        });
    };
    TicketDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./ticket-details.component.html */ "./src/app/ticket-details/ticket-details.component.html"),
            styles: [__webpack_require__(/*! ./ticket-details.component.scss */ "./src/app/ticket-details/ticket-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TicketDetailsComponent);
    return TicketDetailsComponent;
}());



/***/ }),

/***/ "./src/app/tickets/tickets.component.html":
/*!************************************************!*\
  !*** ./src/app/tickets/tickets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"tickets\">\n  <h2>TICKETS</h2>\n  <div class=\"grid\">\n    <div class=\"ticket\" *ngFor=\"let ticket of tickets\">\n      <div class=\"back\">\n        <div class=\"image\">\n          <div class=\"overlay\">\n            <div class=\"title\">\n              <div class=\"home\">\n                  <img class=\"logo\" src=\"{{ticket.homeUrl}}\" alt=\"football soccer logo\">\n              </div>\n              <div class=\"home\">\n                  <h3>VS</h3>\n              </div>\n              <div class=\"home\">\n                  <img class=\"logo\" src=\"{{ticket.awayUrl}}\" alt=\"football soccer logo\">\n              </div>\n            </div>\n            <div class=\"date\">\n              <p class=\"day\">{{ticket.day}}</p>\n              <p class=\"month\">{{ticket.month}}</p>\n              <p class=\"year\">{{ticket.year}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"text\">\n          <a class=\"btn btn-5\" [routerLink]= \"['/fibo/tickets', ticket.id]\">BUY TICKET</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<a routerLink=\"/fibo\" class=\"backit yellow\"><span class=\"one\"><i class=\"fas fa-angle-right\"></i></span> <span class=\"two\"><i class=\"fas fa-angle-right\"></i></span><span class=\"three\"><i class=\"fas fa-angle-right\"></i></span></a>"

/***/ }),

/***/ "./src/app/tickets/tickets.component.scss":
/*!************************************************!*\
  !*** ./src/app/tickets/tickets.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);\n.backit {\n  position: fixed;\n  top: 52%;\n  right: 1em;\n  font-size: 2em;\n  cursor: pointer; }\n.one {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.2s;\n          animation-delay: 0.2s; }\n.two {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.5s;\n          animation-delay: 0.5s; }\n.three {\n  -webkit-animation: light 1s infinite forwards;\n          animation: light 1s infinite forwards;\n  -webkit-animation-delay: 0.7s;\n          animation-delay: 0.7s; }\n.yellow {\n  color: #ffed01; }\n@-webkit-keyframes light {\n  0% { }\n  100% {\n    color: #767678; } }\n@keyframes light {\n  0% { }\n  100% {\n    color: #767678; } }\n.tickets {\n  text-align: center;\n  font-family: \"Open Sans\";\n  padding: 1em; }\nh2 {\n  font-family: \"Open Sans\";\n  color: black;\n  font-size: 3em;\n  font-weight: 700;\n  text-shadow: 4px 4px 20px white; }\nh3 {\n  font-size: 1.2em; }\n.ticket {\n  height: 300px;\n  width: 300px;\n  background-color: white;\n  background-image: url(\"/../../assets/images/back2.jpeg\");\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  margin: 0 auto; }\n.back {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.653); }\n.overlay {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 200px;\n  color: white;\n  position: relative; }\n.date {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: #77d7b9;\n  color: #fff;\n  padding: 0.8em; }\n.date .day {\n    font-weight: 700;\n    font-size: 24px;\n    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.18); }\n.date .month {\n    text-transform: uppercase; }\n.date .month,\n  .date .year {\n    font-size: 12px; }\n.text {\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.btn {\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 45px;\n  max-width: 160px;\n  position: relative;\n  text-decoration: none;\n  text-transform: uppercase;\n  width: 100%; }\n.btn-5 {\n  border: 0 solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);\n  outline: 1px solid;\n  outline-color: rgba(255, 255, 255, 0.5);\n  outline-offset: 0px;\n  text-shadow: none;\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1); }\n.btn-5:hover {\n  border: 1px solid;\n  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.2);\n  outline-color: rgba(255, 255, 255, 0);\n  outline-offset: 15px;\n  text-shadow: 1px 1px 2px #427388; }\n.grid {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\n      grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-gap: 1em;\n  padding: 1em;\n  padding-top: 3em;\n  width: 85%;\n  margin: 0 auto; }\n@media only screen and (max-width: 1300px) {\n  .grid {\n    -ms-grid-columns: 1fr 1fr 1fr;\n        grid-template-columns: 1fr 1fr 1fr; } }\n@media only screen and (max-width: 1150px) {\n  .grid {\n    -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr; } }\n@media only screen and (max-width: 750px) {\n  .grid {\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n    width: 90%; }\n  .ticket {\n    width: 80%; } }\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5em 0.3em; }\n.home {\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: center; }\n.home h3 {\n    margin-bottom: 5px;\n    font-size: 3em;\n    padding: 0 0.3em; }\n.logo {\n  width: 50px; }\n"

/***/ }),

/***/ "./src/app/tickets/tickets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/tickets/tickets.component.ts ***!
  \**********************************************/
/*! exports provided: TicketsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsComponent", function() { return TicketsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/tickets.service */ "./src/app/services/tickets.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TicketsComponent = /** @class */ (function () {
    function TicketsComponent(ticketService) {
        this.ticketService = ticketService;
        this.tickets = this.ticketService.getTickets();
    }
    TicketsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tickets',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.scss */ "./src/app/tickets/tickets.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_tickets_service__WEBPACK_IMPORTED_MODULE_1__["TicketsService"]])
    ], TicketsComponent);
    return TicketsComponent;
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

module.exports = __webpack_require__(/*! C:\fiboBall\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map