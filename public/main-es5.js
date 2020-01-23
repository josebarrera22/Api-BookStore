(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<app-navbar></app-navbar>\n<div class=\"container\">\n<router-outlet></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/list-books/list-books.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/list-books/list-books.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"row mt-5\">\r\n  <div class=\"col\">\r\n    <button class=\"btn btn-primary float-right mb-3\" data-toggle=\"modal\" data-target=\"#modalBook\">New Book</button>\r\n    <!--ADMIN: {{isAdmin}}-->\r\n    <table class=\"table table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Titulo</th>\r\n          <th scope=\"col\">Autor</th>\r\n          <th scope=\"col\">Idioma</th>\r\n          <th scope=\"col\">Precio</th>\r\n          <th scope=\"col\">Oferta</th>\r\n          <th scope=\"col\">&nbsp;</th>\r\n          <th scope=\"col\">&nbsp;</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let book of books; index as i\">\r\n          <th scope=\"row\">{{i+1}}</th>\r\n          <td>{{book.titulo}}</td>\r\n          <td>{{book.autor}}</td>\r\n          <td>{{book.idioma}}</td>\r\n          <td>{{book.precio}}</td>\r\n          <td>{{book.oferta == 1 ? 'Si' : 'No'}}</td>\r\n          <td *ngIf=\"book.userUid == userUid || isAdmin == true; else noOwner\">\r\n            <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#modalBook\"\r\n              (click)=\"onPreUpdateBook(book)\">Update</button>\r\n          </td>\r\n          <ng-template #noOwner>\r\n            <td>\r\n              <button class=\"btn btn-secondary\" disabled=\"true\">Update</button>\r\n            </td>\r\n          </ng-template>\r\n          <td *ngIf=\"isAdmin == true; else noAdmin\">\r\n            <button class=\"btn btn-danger\" (click)=\"onDeleteBook(book.id)\">Delete</button>\r\n          </td>\r\n          <ng-template #noAdmin>\r\n            <td>\r\n              <button class=\"btn btn-danger\" disabled=\"true\">Delete</button>\r\n            </td>\r\n          </ng-template>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</section>\r\n<app-modal [userUid]=\"userUid\"></app-modal>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"book\" class=\"mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n             <div class=\"card_book\">\n                 <div class=\"card\">\n                     <div class=\"card-body text-center\">\n                         <p><img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\"></p>\n                         <h4 class=\"card-title\">{{book.titulo}}</h4>\n                         <p class=\"card-text\">\n                             {{book.descripcion}}\n                         </p>\n                         <a href=\"{{book.link_amazon}}\" target=\"_blank\" class=\"btn btn-block btn-primary\">Buy</a>\n                     </div>\n                 </div>\n             </div>\n            </div>\n        </div>\n    </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero/hero.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero/hero.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>hero works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"books\" class=\"mt-5\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n          <div class=\"card_book\">\n            <div class=\"card\">\n              <div class=\"card-body text-center\">\n                <p>\n                  <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n                </p>\n                <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n                <p class=\"card-text\">\n                  {{book.descripcion}}\n                </p>\n                <div class=\"container-precio-idioma\">\n                  <p class=\"badge badge-info\">\n                    {{book.precio}}€\n                  </p>\n                  <p class=\"badge badge-info\">\n                    {{book.idioma}}\n                  </p>\n                </div>\n                <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"modal fade\" id=\"modalBook\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n          {{ !this.dataApi.selectedBook.id ? 'New Book' : 'Update Book' }}\n        </h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <form #formBook=\"ngForm\" (ngSubmit)=\"onSaveBook(formBook)\">\n          <input type=\"hidden\" name=\"id\" [(ngModel)]=\"this.dataApi.selectedBook.id\">\n          <input type=\"hidden\" name=\"userUid\" [value] = \"userUid\">\n          <div class=\"form-group\">\n            <label for=\"titulo\" class=\"col-form-label\">Titulo:</label>\n            <input type=\"text\" class=\"form-control\" name=\"titulo\" [(ngModel)]=\"this.dataApi.selectedBook.titulo\">\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"idioma\">Idioma</label>\n              <select name=\"idioma\" class=\"form-control\" [(ngModel)]=\"this.dataApi.selectedBook.idioma\">\n                <option value=\"Inglés\">Inglés</option>\n                <option value=\"Castellano\">Castellano</option>\n              </select>\n            </div>\n            <div class=\"form-group col-md-6\">\n              <label for=\"precio\">Precio</label>\n              <input type=\"text\" name=\"precio\" class=\"form-control\" placeholder=\"0,00$\" [(ngModel)]=\"this.dataApi.selectedBook.precio\">\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group-col-md-6\">\n              <label for=\"autor\">Autor</label>\n              <input type=\"text\" name=\"autor\" class=\"form-control\" placeholder=\"Autor\" [(ngModel)]=\"this.dataApi.selectedBook.autor\">\n            </div>\n            <div class=\"form-group-col-md-6\">\n              <label for=\"oferta\">Oferta</label>\n              <select name=\"oferta\" class=\"form-control\"  [(ngModel)]=\"this.dataApi.selectedBook.oferta\">\n                <option value=\"1\">Si</option>\n                <option value=\"0\">No</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-row\">\n            <div class=\"form-group-col-md-6\">\n             <label for=\"portada\">Portada</label>\n             <input type=\"text\" name=\"portada\" class=\"form-control\" placeholder=\"Portada\"  [(ngModel)]=\"this.dataApi.selectedBook.portada\">\n            </div>\n            <div class=\"form-group-col-md-6\">\n              <label for=\"link_amazon\">Link Amazon</label>\n              <input type=\"text\" name=\"link_amazon\" class=\"form-control\" placeholder=\"Link Amazon\" [(ngModel)]=\"this.dataApi.selectedBook.link_amazon\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"descripcion\" class=\"col-form-label\">Descripcion:</label>\n            <textarea class=\"form-control\" name=\"descripcion\" [(ngModel)]=\"this.dataApi.selectedBook.descripcion\"></textarea>\n          </div>\n          <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-secondary\" #btnClose\n              data-dismiss=\"modal\">Close</button>\n              <button type=\"submit\" class=\"btn btn-primary\">Save Book</button>\n            </div>\n        </form>\n      </div>\n     \n    </div>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-primary\">\n    <a class=\"navbar-brand\" routerLink=\"/\">{{app_name}}</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#mainNavbar\" aria-controls=\"mainNavbar\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"mainNavbar\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/offers\">Offers\n          </a>\n        </li>\n      <!--  LOGGED: {{isLogged}}  --> \n      </ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\n          <a class=\"nav-link\" routerLink=\"/user/register\">Register\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/user/profile\">Profile</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a class=\"nav-link\" routerLink=\"/admin/list-books\">List Books</a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"!isLogged\">\n          <a class=\"nav-link\" routerLink=\"/user/login\">Login\n          </a>\n        </li>\n        <li class=\"nav-item\" *ngIf=\"isLogged\">\n          <a href=\"#\" class=\"nav-link\" (click)=\"onLogout()\">Logout\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/offers/offers.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/offers/offers.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"books\" class=\"mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4\" *ngFor=\"let book of books\">\n        <div class=\"card_book\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <p>\n                <img class=\"img-fluid\" src=\"{{book.portada}}\" alt=\"{{book.titulo}}\">\n              </p>\n              <h4 routerLink=\"/book/{{book.id}}\" class=\"card-title\">{{book.titulo}}</h4>\n              <p class=\"card-text\">\n                {{book.descripcion}}\n              </p>\n              <div class=\"container-precio-idioma\">\n                <p class=\"badge badge-info\">\n                  {{book.precio}}€\n                </p>\n                <p class=\"badge badge-info\">\n                  {{book.idioma}}\n                </p>\n              </div>\n              <a href=\"{{book.link_amazon}}\" class=\"btn btn-block btn-primary\" target=\"_blank\">Buy</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<p>page404 works!</p>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"login\" class=\"mb-5 mt-5\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n        <div class=\"card_login\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <form #formLogin=\"ngForm\" (submit)=\"onLogin()\">\n                <h1 class=\"h3 mb-3 font-weight-normal\" *ngIf=\"!isError\">Login</h1>\n                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                  Something is wrong!\n                </div>\n                <div class=\"form-group\">\n                  <input [(ngModel)]=\"email\" type=\"email\" id=\"email\" name=\"email\" class=\"form-control\"\n                    placeholder=\"Email\" required>\n                </div>\n                <div class=\"form-group\">\n                  <input [(ngModel)]=\"password\" type=\"password\" id=\"password\" name=\"password\" class=\"form-control\"\n                    placeholder=\"Password\" required>\n                </div>\n                <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Login</button>\n                <div class=\"form-group\">\n                  <a routerLink=\"/user/register\" class=\"form-control login-user\">Are you new ?</a>\n                </div>\n                <div class=\"from-group\">\n                  <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\n                    <span class=\"fa fa-facebook\"></span>\n                    FACEBOOK\n                  </button>\n                  <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\n                    <span class=\"fa fa-google\"></span>\n                    GOOGLE\n                  </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/profile.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/profile.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"profile\" class=\"container\">\n    <div class=\"row mt-5\">\n      <div class=\"offset-lg-4 col-lg-4 col-sm-6 col-12 main-section text-center card\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-sm-12 col-12 profile-header\"></div>\n        </div>\n        <div class=\"row user-details\">\n          <div class=\"col-12\">\n            <img src=\"{{user.photoUrl}}\" class=\"rounded-circle img-thumbnail\" alt=\"profile\">\n            <h5 *ngIf=\"providerId != 'password'\">{{user.name}}</h5>\n            <p>\n              {{user.email}}\n            </p>\n  \n            <hr>\n            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores suscipit itaque minima quae.</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/register/register.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/register/register.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section id=\"register\" class=\"mb-5 mt-5\">\n    <div class=\"container\">\n        <div class=\"row\">\n\n            <div class=\"col-xs-12 col-sm-6 col-md-4 mx-auto\">\n                <div class=\"card_register\">\n                    <div class=\"card\">\n                        <div class=\"card-body text-center\">\n                            <form #formRegister=\"ngForm\" (ngSubmit)=\"onAddUser()\">\n                                <h1 class=\"h3 mb-3 font-weight-normal\">Register</h1>\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"isError\">\n                                    {{msgError}}\n                                </div>\n\n                                <div class=\"form-group\">\n                                    <input type=\"email\" name=\"email\" class=\"form-control\" placeholder=\"Email\"\n                                        [(ngModel)]=\"email\" required minlength=\"8\">\n                                </div>\n                                <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"email.touched && !email.valid\">\n                                    <div *ngIf=\"email.errors.required\">Email is required</div>\n                                    <div *ngIf=\"email.errors.minlength\">Email must be at least 8 characters</div>\n                                </div>\n                                \n                                <div class=\"form-group\">\n                                    <input type=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\"\n                                        [(ngModel)]=\"password\" required minlength=\"5\" maxlength=\"10\">\n                                </div>\n                                <div class=\"alert alert-danger\" role=\"alert\"\n                                    *ngIf=\"password.touched && !password.valid\">\n                                    <div *ngIf=\"password.errors.required\">Password is required</div>\n                                    <div *ngIf=\"password.errors.minlength\">Password must be at least 5 characters</div>\n                                </div>\n                                <br>\n                                <div class=\"form-group\">\n                                        <h5>Seleccionar imagen:</h5>\n                                        <input type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n                                    </div>\n                                    <div class=\"progress\">\n                                        <div class=\"progress-bar progress-bar-striped bg-sucess\" role=\"progressbar\"\n                                        [style.width]=\"(uploadPercent | async) + '%'\">\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n                                \n                                <button *ngIf=\"urlImage | async; else btnDisabled\"\n                                type=\"submit\" class=\"btn btn-lg btn-primary btn-block\">Register</button>\n                                <ng-template #btnDisabled>\n                                        <button type=\"submit\" disabled=true class=\"btn btn-lg btn-secondary btn-block\">Register</button>\n                                </ng-template>\n                                \n                                <div class=\"form-group\">\n                                    <a routerLink=\"/user/login\" class=\"form-control login-user\">Do you have account?</a>\n                                </div>\n                                <div class=\"from-group\">\n                                    <button class=\"btn btn-block btn-social btn-facebook\" (click)=\"onLoginFacebook()\">\n                                        <span class=\"fa fa-facebook\"></span>\n                                        FACEBOOK\n                                    </button>\n                                    <button class=\"btn btn-block btn-social btn-google\" (click)=\"onLoginGoogle()\">\n                                        <span class=\"fa fa-google\"></span>\n                                        GOOGLE\n                                    </button>\n                                </div>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var src_app_components_offers_offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
            /* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
            /* harmony import */ var _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/list-books/list-books.component */ "./src/app/components/admin/list-books/list-books.component.ts");
            /* harmony import */ var src_app_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
            /* harmony import */ var src_app_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
            /* harmony import */ var src_app_components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
            /* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            var routes = [
                { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'offers', component: src_app_components_offers_offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'book/:id', component: _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_5__["DetailsBookComponent"] },
                { path: 'admin/list-books', component: _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_6__["ListBooksComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: 'user/login', component: src_app_components_users_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
                { path: 'user/register', component: src_app_components_users_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"] },
                { path: 'user/profile', component: src_app_components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]] },
                { path: '**', component: _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"] }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'bookStore';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/list-books/list-books.component */ "./src/app/components/admin/list-books/list-books.component.ts");
            /* harmony import */ var _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/details-book/details-book.component */ "./src/app/components/details-book/details-book.component.ts");
            /* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/components/modal/modal.component.ts");
            /* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
            /* harmony import */ var _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/offers/offers.component */ "./src/app/components/offers/offers.component.ts");
            /* harmony import */ var _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/users/login/login.component */ "./src/app/components/users/login/login.component.ts");
            /* harmony import */ var _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/profile/profile.component */ "./src/app/components/users/profile/profile.component.ts");
            /* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
            /* harmony import */ var _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/page404/page404.component */ "./src/app/components/page404/page404.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
            /* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_admin_list_books_list_books_component__WEBPACK_IMPORTED_MODULE_5__["ListBooksComponent"],
                        _components_details_book_details_book_component__WEBPACK_IMPORTED_MODULE_6__["DetailsBookComponent"],
                        _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_7__["HeroComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_9__["ModalComponent"],
                        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                        _components_offers_offers_component__WEBPACK_IMPORTED_MODULE_11__["OffersComponent"],
                        _components_users_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                        _components_users_profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"],
                        _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                        _components_page404_page404_component__WEBPACK_IMPORTED_MODULE_15__["Page404Component"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                        _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].firebaseConfig),
                        _angular_fire_database__WEBPACK_IMPORTED_MODULE_19__["AngularFireDatabaseModule"],
                        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_21__["AngularFireStorageModule"]
                    ],
                    providers: [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_22__["AngularFirestore"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/admin/list-books/list-books.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/components/admin/list-books/list-books.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vbGlzdC1ib29rcy9saXN0LWJvb2tzLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin/list-books/list-books.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/components/admin/list-books/list-books.component.ts ***!
          \*********************************************************************/
        /*! exports provided: ListBooksComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBooksComponent", function () { return ListBooksComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data-api.service */ "./src/app/services/data-api.service.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            var ListBooksComponent = /** @class */ (function () {
                function ListBooksComponent(dataApi, authService) {
                    this.dataApi = dataApi;
                    this.authService = authService;
                    this.isAdmin = null;
                    this.userUid = null;
                }
                ListBooksComponent.prototype.ngOnInit = function () {
                    this.getListBooks();
                    this.getCurrentUser();
                };
                ListBooksComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    this.authService.isAuth().subscribe(function (auth) {
                        if (auth) {
                            _this.userUid = auth.uid;
                            _this.authService.isUserAdmin(_this.userUid).subscribe(function (userRole) {
                                _this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
                                // this.isAdmin = true;
                            });
                        }
                    });
                };
                ListBooksComponent.prototype.getListBooks = function () {
                    var _this = this;
                    this.dataApi.getAllBooks()
                        .subscribe(function (books) {
                        _this.books = books;
                    });
                };
                ListBooksComponent.prototype.onDeleteBook = function (idBook) {
                    var confirmacion = confirm('Are you sure?');
                    if (confirmacion) {
                        this.dataApi.deleteBook(idBook);
                    }
                };
                ListBooksComponent.prototype.onPreUpdateBook = function (book) {
                    console.log('BOOK', book);
                    this.dataApi.selectedBook = Object.assign({}, book);
                };
                return ListBooksComponent;
            }());
            ListBooksComponent.ctorParameters = function () { return [
                { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
            ]; };
            ListBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-list-books',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin/list-books/list-books.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-books.component.css */ "./src/app/components/admin/list-books/list-books.component.css")).default]
                })
            ], ListBooksComponent);
            /***/ 
        }),
        /***/ "./src/app/components/details-book/details-book.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/details-book/details-book.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("p.card-text{\r\n    text-align: justify;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXRhaWxzLWJvb2svZGV0YWlscy1ib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RldGFpbHMtYm9vay9kZXRhaWxzLWJvb2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAuY2FyZC10ZXh0e1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/details-book/details-book.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/details-book/details-book.component.ts ***!
          \*******************************************************************/
        /*! exports provided: DetailsBookComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsBookComponent", function () { return DetailsBookComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var DetailsBookComponent = /** @class */ (function () {
                function DetailsBookComponent(dataApi, route) {
                    this.dataApi = dataApi;
                    this.route = route;
                    this.book = {};
                }
                DetailsBookComponent.prototype.ngOnInit = function () {
                    var idBook = this.route.snapshot.params['id'];
                    this.getDetails(idBook);
                };
                DetailsBookComponent.prototype.getDetails = function (idBook) {
                    var _this = this;
                    this.dataApi.getOneBook(idBook).subscribe(function (book) {
                        _this.book = book;
                    });
                };
                return DetailsBookComponent;
            }());
            DetailsBookComponent.ctorParameters = function () { return [
                { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            DetailsBookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-details-book',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details-book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/details-book/details-book.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details-book.component.css */ "./src/app/components/details-book/details-book.component.css")).default]
                })
            ], DetailsBookComponent);
            /***/ 
        }),
        /***/ "./src/app/components/hero/hero.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/hero/hero.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVyby9oZXJvLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/hero/hero.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/hero/hero.component.ts ***!
          \***************************************************/
        /*! exports provided: HeroComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function () { return HeroComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HeroComponent = /** @class */ (function () {
                function HeroComponent() {
                }
                HeroComponent.prototype.ngOnInit = function () {
                };
                return HeroComponent;
            }());
            HeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-hero',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./hero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hero/hero.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./hero.component.css */ "./src/app/components/hero/hero.component.css")).default]
                })
            ], HeroComponent);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(dataApi) {
                    this.dataApi = dataApi;
                    this.books = [];
                    this.book = '';
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.dataApi.getAllBooks().subscribe(function (books) {
                        console.log('BOOKS', books);
                        _this.books = books;
                    });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/modal/modal.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/modal/modal.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/modal/modal.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/modal/modal.component.ts ***!
          \*****************************************************/
        /*! exports provided: ModalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function () { return ModalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
            var ModalComponent = /** @class */ (function () {
                function ModalComponent(dataApi) {
                    this.dataApi = dataApi;
                }
                ModalComponent.prototype.ngOnInit = function () {
                };
                ModalComponent.prototype.onSaveBook = function (bookForm) {
                    if (bookForm.value.id === null) {
                        bookForm.value.userUid = this.userUid;
                        this.dataApi.addBook(bookForm.value);
                    }
                    else {
                        this.dataApi.updateBook(bookForm.value);
                    }
                    bookForm.resetForm();
                    this.btnClose.nativeElement.click();
                };
                return ModalComponent;
            }());
            ModalComponent.ctorParameters = function () { return [
                { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnClose', { static: true })
            ], ModalComponent.prototype, "btnClose", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ModalComponent.prototype, "userUid", void 0);
            ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-modal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.css */ "./src/app/components/modal/modal.component.css")).default]
                })
            ], ModalComponent);
            /***/ 
        }),
        /***/ "./src/app/components/navbar/navbar.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/navbar/navbar.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/navbar/navbar.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/navbar/navbar.component.ts ***!
          \*******************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(authService, afsAuth) {
                    this.authService = authService;
                    this.afsAuth = afsAuth;
                    this.app_name = 'BookStore';
                    this.isLogged = false;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                    this.getCurrentUser();
                };
                NavbarComponent.prototype.getCurrentUser = function () {
                    var _this = this;
                    this.authService.isAuth().subscribe(function (auth) {
                        if (auth) {
                            console.log('user logged');
                            _this.isLogged = true;
                        }
                        else {
                            console.log('user not logged');
                            _this.isLogged = false;
                        }
                    });
                };
                NavbarComponent.prototype.onLogout = function () {
                    this.afsAuth.auth.signOut();
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/offers/offers.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/offers/offers.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/offers/offers.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/offers/offers.component.ts ***!
          \*******************************************************/
        /*! exports provided: OffersComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function () { return OffersComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data-api.service */ "./src/app/services/data-api.service.ts");
            var OffersComponent = /** @class */ (function () {
                function OffersComponent(dataApi) {
                    this.dataApi = dataApi;
                }
                OffersComponent.prototype.ngOnInit = function () {
                    this.getOffers();
                    console.log('OFERTAS', this.books);
                };
                OffersComponent.prototype.getOffers = function () {
                    var _this = this;
                    this.dataApi.getAllBooksOffers().subscribe(function (offers) { return _this.books = offers; });
                };
                return OffersComponent;
            }());
            OffersComponent.ctorParameters = function () { return [
                { type: _services_data_api_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"] }
            ]; };
            OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-offers',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./offers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/offers/offers.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./offers.component.css */ "./src/app/components/offers/offers.component.css")).default]
                })
            ], OffersComponent);
            /***/ 
        }),
        /***/ "./src/app/components/page404/page404.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/components/page404/page404.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZTQwNC9wYWdlNDA0LmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/page404/page404.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/components/page404/page404.component.ts ***!
          \*********************************************************/
        /*! exports provided: Page404Component */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function () { return Page404Component; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var Page404Component = /** @class */ (function () {
                function Page404Component() {
                }
                Page404Component.prototype.ngOnInit = function () {
                };
                return Page404Component;
            }());
            Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-page404',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page404/page404.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page404.component.css */ "./src/app/components/page404/page404.component.css")).default]
                })
            ], Page404Component);
            /***/ 
        }),
        /***/ "./src/app/components/users/login/login.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/components/users/login/login.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\r\n    border: 0 solid #fff !important;\r\n  }\r\n  .btn-social {\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #fff;\r\n    border-color: rgba(0, 0, 0, 2);\r\n  }\r\n  .btn-facebook {\r\n    \r\n    background: #3b5998;\r\n   \r\n  }\r\n  .btn-google {\r\n    background: #dd4b39;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0VBQ2pDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCw4QkFBOEI7RUFDaEM7RUFDQTs7SUFFRSxtQkFBbUI7O0VBRXJCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwIHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmJ0bi1zb2NpYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDIpO1xyXG4gIH1cclxuICAuYnRuLWZhY2Vib29rIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICAgXHJcbiAgfVxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/users/login/login.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/components/users/login/login.component.ts ***!
          \***********************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(afAuth, router, authService) {
                    this.afAuth = afAuth;
                    this.router = router;
                    this.authService = authService;
                    this.email = '';
                    this.password = '';
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    this.authService.loginEmailUser(this.email, this.password)
                        .then(function (res) {
                        _this.onLoginRedirect();
                    }).catch(function (err) { return console.log('err', err.message); });
                };
                LoginComponent.prototype.onLoginGoogle = function () {
                    var _this = this;
                    this.authService.loginGoogleUser()
                        .then(function (res) {
                        _this.onLoginRedirect();
                    }).catch(function (err) { return console.log('err', err.message); });
                };
                LoginComponent.prototype.onLoginFacebook = function () {
                    var _this = this;
                    this.authService.loginFacebookUser()
                        .then(function (res) {
                        _this.onLoginRedirect();
                    }).catch(function (err) { return console.log('err', err.message); });
                };
                LoginComponent.prototype.onLogout = function () {
                    this.authService.logoutUser();
                };
                LoginComponent.prototype.onLoginRedirect = function () {
                    this.router.navigate(['admin/list-books']);
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/users/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/users/profile/profile.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/users/profile/profile.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".main-section {\r\n    border: 1px solid #007bff;\r\n    background: #fff;\r\n  }\r\n  .profile-header {\r\n    background: #007bff;\r\n    height: 150px;\r\n  }\r\n  .user-detail {\r\n    margin: -50px 0 30px 0;\r\n  }\r\n  img {\r\n    height: 100px;\r\n    width: 100px;\r\n  }\r\n  .user-details h5 {\r\n    margin: 15px 0 5px 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0VBQ2Y7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNlY3Rpb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2JmZjtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbiAgLnVzZXItZGV0YWlsIHtcclxuICAgIG1hcmdpbjogLTUwcHggMCAzMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICAudXNlci1kZXRhaWxzIGg1IHtcclxuICAgIG1hcmdpbjogMTVweCAwIDVweCAwO1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/users/profile/profile.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/users/profile/profile.component.ts ***!
          \***************************************************************/
        /*! exports provided: ProfileComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () { return ProfileComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            var ProfileComponent = /** @class */ (function () {
                function ProfileComponent(authService) {
                    this.authService = authService;
                    this.user = {
                        name: '',
                        email: '',
                        photoUrl: '',
                        roles: {}
                    };
                    this.providerId = 'null';
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.isAuth().subscribe(function (user) {
                        if (user) {
                            _this.user.name = user.displayName;
                            _this.user.email = user.email;
                            _this.user.photoUrl = user.photoURL;
                            _this.providerId = user.providerData[0].providerId;
                        }
                    });
                };
                return ProfileComponent;
            }());
            ProfileComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
            ]; };
            ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-profile',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/profile/profile.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/components/users/profile/profile.component.css")).default]
                })
            ], ProfileComponent);
            /***/ 
        }),
        /***/ "./src/app/components/users/register/register.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/users/register/register.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".form-control.login-user {\r\n    border: 0px solid #fff !important;\r\n  }\r\n\r\n  .btn-social {\r\n    position: relative;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    color: #fff;\r\n    border-color: rgba(0, 0, 0, 2);\r\n  }\r\n\r\n  .btn-facebook {\r\n    \r\n    background: #3b5998;\r\n   \r\n  }\r\n\r\n  .btn-google {\r\n    background: #dd4b39;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c2Vycy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUNBQWlDO0VBQ25DOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsOEJBQThCO0VBQ2hDOztFQUNBOztJQUVFLG1CQUFtQjs7RUFFckI7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3VzZXJzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLmxvZ2luLXVzZXIge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI2ZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1zb2NpYWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDIpO1xyXG4gIH1cclxuICAuYnRuLWZhY2Vib29rIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogIzNiNTk5ODtcclxuICAgXHJcbiAgfVxyXG4gIC5idG4tZ29vZ2xlIHtcclxuICAgIGJhY2tncm91bmQ6ICNkZDRiMzk7XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/users/register/register.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/users/register/register.component.ts ***!
          \*****************************************************************/
        /*! exports provided: RegisterComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () { return RegisterComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var RegisterComponent = /** @class */ (function () {
                function RegisterComponent(router, authService, storage) {
                    this.router = router;
                    this.authService = authService;
                    this.storage = storage;
                    this.email = '';
                    this.password = '';
                }
                RegisterComponent.prototype.ngOnInit = function () {
                };
                RegisterComponent.prototype.onUpload = function (e) {
                    var _this = this;
                    // console.log('subir', e.target.files[0]);
                    var id = Math.random().toString(36).substring(2);
                    var file = e.target.files[0];
                    var filePath = "uploads/profile_" + id;
                    var ref = this.storage.ref(filePath);
                    var task = this.storage.upload(filePath, file);
                    this.uploadPercent = task.percentageChanges();
                    task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.urlImage = ref.getDownloadURL(); })).subscribe();
                };
                RegisterComponent.prototype.onAddUser = function () {
                    var _this = this;
                    this.authService.registerUser(this.email, this.password)
                        .then(function (res) {
                        _this.authService.isAuth().subscribe(function (user) {
                            if (user) {
                                user.updateProfile({
                                    displayName: '',
                                    photoURL: _this.inputImageUser.nativeElement.value
                                }).then(function () {
                                    _this.router.navigate(['admin/list-books']);
                                }).catch(function (error) { return console.log('error', error); });
                            }
                        });
                    }).catch(function (err) { return console.log('err', err.message); });
                };
                RegisterComponent.prototype.onLoginGoogle = function () {
                    var _this = this;
                    this.authService.loginGoogleUser().then(function (res) {
                        _this.onLoginRedirect();
                    }).catch(function (err) { return console.log('err', err.message); });
                };
                RegisterComponent.prototype.onLoginFacebook = function () {
                    var _this = this;
                    this.authService.loginFacebookUser().then(function (res) {
                        _this.onLoginRedirect();
                    }).catch(function (err) { return console.log('err', err.message); });
                };
                RegisterComponent.prototype.onLoginRedirect = function () {
                    this.router.navigate(['admin/list-books']);
                };
                return RegisterComponent;
            }());
            RegisterComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUser', { static: true })
            ], RegisterComponent.prototype, "inputImageUser", void 0);
            RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-register',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/users/register/register.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")).default]
                })
            ], RegisterComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(afsAuth, router) {
                    this.afsAuth = afsAuth;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    var _this = this;
                    return this.afsAuth.authState
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (authState) { return !!authState; }))
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (auth) {
                        if (!auth) {
                            _this.router.navigate(['/user/login']);
                        }
                    }));
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
            /* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            var AuthService = /** @class */ (function () {
                function AuthService(afsAuth, afs) {
                    this.afsAuth = afsAuth;
                    this.afs = afs;
                }
                AuthService.prototype.registerUser = function (email, pass) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.afsAuth.auth.createUserWithEmailAndPassword(email, pass)
                            .then(function (userData) {
                            resolve(userData),
                                _this.updateUserData(userData.user);
                        }).catch(function (err) { return console.log(reject(err)); });
                    });
                };
                AuthService.prototype.loginEmailUser = function (email, pass) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        _this.afsAuth.auth.signInWithEmailAndPassword(email, pass)
                            .then(function (userData) { return resolve(userData); }, function (err) { return reject(err); });
                    });
                };
                AuthService.prototype.loginFacebookUser = function () {
                    var _this = this;
                    return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].FacebookAuthProvider())
                        .then(function (credential) { return _this.updateUserData(credential.user); });
                };
                AuthService.prototype.loginGoogleUser = function () {
                    var _this = this;
                    return this.afsAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider())
                        .then(function (credential) { return _this.updateUserData(credential.user); });
                };
                AuthService.prototype.logoutUser = function () {
                    return this.afsAuth.auth.signOut();
                };
                AuthService.prototype.isAuth = function () {
                    return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (auth) { return auth; }));
                };
                AuthService.prototype.updateUserData = function (user) {
                    var userRef = this.afs.doc("users/" + user.uid);
                    var data = {
                        id: user.uid,
                        email: user.email,
                        roles: {
                            editor: true
                        }
                    };
                    return userRef.set(data, { merge: true });
                };
                AuthService.prototype.isUserAdmin = function (userUid) {
                    return this.afs.doc("users/" + userUid).valueChanges();
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/data-api.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/data-api.service.ts ***!
          \**********************************************/
        /*! exports provided: DataApiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function () { return DataApiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var DataApiService = /** @class */ (function () {
                function DataApiService(afs) {
                    this.afs = afs;
                    this.selectedBook = {
                        id: null
                    };
                }
                DataApiService.prototype.getAllBooks = function () {
                    this.booksCollection = this.afs.collection('books');
                    return this.books = this.booksCollection.snapshotChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
                        return changes.map(function (action) {
                            var data = action.payload.doc.data();
                            data.id = action.payload.doc.id;
                            return data;
                        });
                    }));
                };
                DataApiService.prototype.getAllBooksOffers = function () {
                    this.booksCollection = this.afs.collection('books', function (ref) { return ref.where('oferta', '==', '1'); });
                    return this.books = this.booksCollection.snapshotChanges()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (changes) {
                        return changes.map(function (action) {
                            var data = action.payload.doc.data();
                            data.id = action.payload.doc.id;
                            return data;
                        });
                    }));
                };
                DataApiService.prototype.getOneBook = function (idBook) {
                    this.bookDoc = this.afs.doc("books/" + idBook);
                    return this.book = this.bookDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) {
                        if (action.payload.exists === false) {
                            return null;
                        }
                        else {
                            var data = action.payload.data();
                            data.id = action.payload.id;
                            return data;
                        }
                    }));
                };
                DataApiService.prototype.addBook = function (book) {
                    this.booksCollection.add(book);
                };
                DataApiService.prototype.updateBook = function (book) {
                    var idBook = book.id;
                    this.bookDoc = this.afs.doc("books/" + idBook);
                    this.bookDoc.update(book);
                };
                DataApiService.prototype.deleteBook = function (idBook) {
                    this.bookDoc = this.afs.doc("books/" + idBook);
                    this.bookDoc.delete();
                };
                return DataApiService;
            }());
            DataApiService.ctorParameters = function () { return [
                { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
            ]; };
            DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataApiService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                firebaseConfig: {
                    apiKey: "AIzaSyAJUJtI7Hh-g_DpQsbv0NUpGHLQJm9zpts",
                    authDomain: "bookstore-e6b6e.firebaseapp.com",
                    databaseURL: "https://bookstore-e6b6e.firebaseio.com",
                    projectId: "bookstore-e6b6e",
                    storageBucket: "bookstore-e6b6e.appspot.com",
                    messagingSenderId: "967398814306",
                    appId: "1:967398814306:web:6ee7866a4d42854bf7573b",
                    measurementId: "G-RLEST3DWCC"
                }
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\joseb\Desktop\ApiRest Firebase\bookStore\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map