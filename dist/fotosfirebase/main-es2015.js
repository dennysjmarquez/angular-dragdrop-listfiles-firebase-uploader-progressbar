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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n<!--      <li class=\"nav-item\" routerLinkActive=\"active\">-->\n<!--        <a class=\"nav-link\" routerLink=\"fotos\">Fotos</a>-->\n<!--      </li>-->\n      <li class=\"nav-item\" routerLinkActive=\"active\">\n        <a class=\"nav-link\" routerLink=\"carga\">Cargar fotos</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<div class=\"container-fluid pt-4 pb-3\">\n  <h1>App Upload Images to Firebase and Show</h1>\n  <hr/>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/carga/carga.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/carga/carga.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-4\">\n    \n    <h3>Seleccione archivos</h3>\n    <div appNgDropFiles [archivos]=\"archivos\" (mouseSobre)=\"estaSobreElemento = $event\" class=\"card card-body drop-zone-border\" [ngClass]=\"{'file-over': estaSobreElemento}\">\n      <h4>Deje caer aquí los archivos</h4>\n      <div class=\"drop-zone\">\n\n      </div>\n\n    </div>\n    \n  </div>\n\n  <div class=\"col-md-8\">\n\n    <h4>Cargar archivos</h4>\n\n    <button (click)=\"cargarImagenes()\" [disabled]=\"archivos.length === 0\" class=\"btn btn-success\">Cargar a Firebase</button>&nbsp;\n    <button (click)=\"limpiarArchivos()\" class=\"btn btn-danger\" [disabled]=\"archivos.length === 0\">Limpiar</button>\n\n    <table class=\"table\">\n      <thead class=\"thead-dark\">\n        <tr>\n          <th>Nombre Archivo</th>\n          <th>Tamaño</th>\n          <th>Progreso</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let item of archivos;\" [ngClass]=\"{'text-success': item.progreso >= 100}\">\n\n          <td>{{ item.nombreArchivo }}</td>\n          <td>{{ item.archivo.size / 1024 / 1024 | number:'.2-2' }} MB</td>\n          <td>\n\n            <div class=\"progress\" *ngIf=\"!item.url\">\n              <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{'width': item.progreso + '%'}\">{{ item.progreso }}%</div>\n            </div>\n\n          </td>\n\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/fotos/fotos.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/fotos/fotos.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  fotos works!\n</p>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/fotos/fotos.component */ "./src/app/components/fotos/fotos.component.ts");
/* harmony import */ var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/carga/carga.component */ "./src/app/components/carga/carga.component.ts");





const routes = [
    { path: 'fotos', component: _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_3__["FotosComponent"] },
    { path: 'carga', component: _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_4__["CargaComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'carga' },
    { path: '', pathMatch: 'full', redirectTo: 'carga' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'fotosfirebase';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/fotos/fotos.component */ "./src/app/components/fotos/fotos.component.ts");
/* harmony import */ var _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/carga/carga.component */ "./src/app/components/carga/carga.component.ts");
/* harmony import */ var _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/ng-drop-files.directive */ "./src/app/directives/ng-drop-files.directive.ts");





// Firebase


// Componentes




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components_fotos_fotos_component__WEBPACK_IMPORTED_MODULE_8__["FotosComponent"],
            _components_carga_carga_component__WEBPACK_IMPORTED_MODULE_9__["CargaComponent"],
            _directives_ng_drop_files_directive__WEBPACK_IMPORTED_MODULE_10__["NgDropFilesDirective"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestoreModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/carga/carga.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/carga/carga.component.ts ***!
  \*****************************************************/
/*! exports provided: CargaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaComponent", function() { return CargaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_carga_fotos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/carga-fotos.service */ "./src/app/services/carga-fotos.service.ts");



let CargaComponent = class CargaComponent {
    constructor(cargaFotosService) {
        this.cargaFotosService = cargaFotosService;
        this.estaSobreElemento = false;
        this.archivos = [];
    }
    ngOnInit() {
    }
    cargarImagenes() {
        this.cargaFotosService.cargarImagenesFirebase(this.archivos);
    }
    limpiarArchivos() {
        this.archivos = [];
    }
};
CargaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-carga',
        template: __webpack_require__(/*! raw-loader!./carga.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/carga/carga.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_carga_fotos_service__WEBPACK_IMPORTED_MODULE_2__["CargaFotosService"]])
], CargaComponent);



/***/ }),

/***/ "./src/app/components/fotos/fotos.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/fotos/fotos.component.ts ***!
  \*****************************************************/
/*! exports provided: FotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosComponent", function() { return FotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FotosComponent = class FotosComponent {
    constructor() { }
    ngOnInit() {
    }
};
FotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-fotos',
        template: __webpack_require__(/*! raw-loader!./fotos.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/fotos/fotos.component.html")
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FotosComponent);



/***/ }),

/***/ "./src/app/directives/ng-drop-files.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directives/ng-drop-files.directive.ts ***!
  \*******************************************************/
/*! exports provided: NgDropFilesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDropFilesDirective", function() { return NgDropFilesDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _models_file_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/file-item */ "./src/app/models/file-item.ts");



let NgDropFilesDirective = class NgDropFilesDirective {
    constructor() {
        this.archivos = [];
        this.mouseSobre = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onDragEnter(event) {
        this._prevedirDetener(event);
        this.mouseSobre.emit(true);
    }
    onDragEnd(event) {
        this.mouseSobre.emit(false);
    }
    onDrop(event) {
        this._prevedirDetener(event);
        const transfer = this._getDataTransfer(event);
        if (!transfer) {
            return;
        }
        this._extraerArchivos(transfer.files);
        this.mouseSobre.emit(false);
    }
    _getDataTransfer(event) {
        return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    }
    _extraerArchivos(archivosLista) {
        Object.getOwnPropertyNames(archivosLista).forEach((element) => {
            const currentElement = archivosLista[element];
            if (this._canLoaded(currentElement)) {
                this.archivos.push(new _models_file_item__WEBPACK_IMPORTED_MODULE_2__["FileItem"](currentElement));
            }
        });
    }
    // Validaciones
    _canLoaded(archivo) {
        return !this._isDrop(archivo.name) && this.isImage(archivo.type);
    }
    _isDrop(nombreArchivo) {
        for (const archivo of this.archivos) {
            if (archivo.nombreArchivo === nombreArchivo) {
                console.log('Ya esta en la lista', nombreArchivo);
                return true;
            }
        }
        return false;
    }
    isImage(tipoArchivo) {
        return (tipoArchivo === '' || 'undefined' === typeof tipoArchivo)
            ? false
            : tipoArchivo.startsWith('image');
    }
    _prevedirDetener(event) {
        event.preventDefault();
        event.stopPropagation();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], NgDropFilesDirective.prototype, "archivos", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], NgDropFilesDirective.prototype, "mouseSobre", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NgDropFilesDirective.prototype, "onDragEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NgDropFilesDirective.prototype, "onDragEnd", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], NgDropFilesDirective.prototype, "onDrop", null);
NgDropFilesDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appNgDropFiles]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NgDropFilesDirective);



/***/ }),

/***/ "./src/app/models/file-item.ts":
/*!*************************************!*\
  !*** ./src/app/models/file-item.ts ***!
  \*************************************/
/*! exports provided: FileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileItem", function() { return FileItem; });
class FileItem {
    constructor(archivo) {
        this.archivo = archivo;
        this.nombreArchivo = archivo.name;
        this.estaSubinedo = false;
        this.progreso = 0;
    }
}


/***/ }),

/***/ "./src/app/services/carga-fotos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/carga-fotos.service.ts ***!
  \*************************************************/
/*! exports provided: CargaFotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargaFotosService", function() { return CargaFotosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");





let CargaFotosService = class CargaFotosService {
    constructor(db) {
        this.db = db;
        this.CARPETA_IMAGENES = 'img';
    }
    cargarImagenesFirebase(imagenes) {
        const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
        for (const item of imagenes) {
            item.estaSubinedo = true;
            if (item.progreso >= 100) {
                continue;
            }
            const uploadTask = storageRef.child(`${this.CARPETA_IMAGENES}/${item.nombreArchivo}`).put(item.archivo);
            uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
                const snap = snapshot;
                item.progreso = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
            }, (error) => {
                console.log(error);
            }, () => {
                uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                    console.log('Imagen cargada correctamente', downloadURL);
                    item.url = downloadURL;
                    item.estaSubinedo = false;
                    this.guardarImagen({
                        nombre: item.nombreArchivo,
                        url: item.url
                    });
                });
            });
        }
    }
    guardarImagen(imagen) {
        this.db.collection(`/${this.CARPETA_IMAGENES}`).add(imagen);
    }
};
CargaFotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], CargaFotosService);



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
    firebase: {
        apiKey: 'AIzaSyAOeVXYz68lCews3A_qsNtt6Y8XP9woTfs',
        authDomain: 'fir-fotos-b151c.firebaseapp.com',
        databaseURL: 'https://fir-fotos-b151c.firebaseio.com',
        projectId: 'fir-fotos-b151c',
        storageBucket: 'fir-fotos-b151c.appspot.com',
        messagingSenderId: '1098475890435',
        appId: '1:1098475890435:web:216333093d82b9c0'
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Cursos_y_maestrias\Udemy\Angular_De_cero_a_experto_creando_aplicaciones_Angular_6\proyectos\19-fotosfirebase\fotosfirebase\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map