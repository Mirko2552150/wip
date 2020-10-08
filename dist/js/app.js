/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById('button').addEventListener("click", function () {
  var dataSku = document.querySelector('.content').getAttribute('data-sku'); // console.log(dataSku);

  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSku).then(function (response) {
    return response.json();
  }).then(function (response) {
    // console.log(response);
    var title = response.title;
    var body = response.body;
    var id = response.id;
    var faqToggle = document.getElementById('card-uno');
    var faqToggleDue = document.getElementById('card-due');
    var faqToggleTre = document.getElementById('card-tre');

    if (faqToggle.classList.contains('active')) {
      // se card si vede
      faqToggle.classList.remove('active'); // al click nascondilo

      faqToggle.innerHTML = ""; // cancella in contenuto stampato
    } else {
      if (faqToggleDue.classList.contains('active') || faqToggleTre.classList.contains('active')) {
        faqToggleDue.classList.remove('active');
        faqToggleTre.classList.remove('active');
        faqToggleDue.innerHTML = ""; // cancella in contenuto stampato

        faqToggleTre.innerHTML = ""; // cancella in contenuto stampato
      }

      faqToggle.classList.remove('active'); // altrimenti, se non si vede

      faqToggle.classList.add('active'); // rendilo visibile e stampa il testo

      setTimeout(function () {
        faqToggle.innerHTML = '<h1>' + 'POST' + " " + id + '</h1>' + '<br>' + '<h2>' + title + '</h2>' + '<br>' + '<p>' + body + '</p>';
      }, 300);
    }
  });
});
document.getElementById('button-due').addEventListener("click", function () {
  var dataSkuDue = document.querySelector('.content-due').getAttribute('data-sku'); // console.log(dataSkuDue);

  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuDue).then(function (response) {
    return response.json();
  }).then(function (response) {
    // console.log(response);
    // console.log(this);
    var title = response.title;
    var body = response.body;
    var id = response.id;
    var faqToggle = document.getElementById('card-uno');
    var faqToggleDue = document.getElementById('card-due');
    var faqToggleTre = document.getElementById('card-tre');

    if (faqToggleDue.classList.contains('active')) {
      faqToggleDue.classList.remove('active');
      faqToggleDue.innerHTML = "";
    } else {
      if (faqToggle.classList.contains('active') || faqToggleTre.classList.contains('active')) {
        faqToggle.classList.remove('active');
        faqToggleTre.classList.remove('active');
        faqToggle.innerHTML = ""; // cancella in contenuto stampato

        faqToggleTre.innerHTML = ""; // cancella in contenuto stampato
      }

      faqToggleDue.classList.add('active');
      setTimeout(function () {
        faqToggleDue.innerHTML = '<h1>' + 'POST' + " " + id + '</h1>' + '<br>' + '<h2>' + title + '</h2>' + '<br>' + '<p>' + body + '</p>';
      }, 300);
    }
  });
});
document.getElementById('button-tre').addEventListener("click", function () {
  var dataSkuTre = document.querySelector('.content-tre').getAttribute('data-sku'); // console.log(dataSkuTre);

  fetch('https://jsonplaceholder.typicode.com/posts/' + dataSkuTre).then(function (response) {
    return response.json();
  }).then(function (response) {
    // console.log(response);
    var title = response.title;
    var body = response.body;
    var id = response.id;
    var faqToggle = document.getElementById('card-uno');
    var faqToggleDue = document.getElementById('card-due');
    var faqToggleTre = document.getElementById('card-tre');

    if (faqToggleTre.classList.contains('active')) {
      faqToggleTre.classList.remove('active');
      faqToggleTre.innerHTML = "";
    } else {
      if (faqToggle.classList.contains('active') || faqToggleDue.classList.contains('active')) {
        faqToggle.classList.remove('active');
        faqToggleDue.classList.remove('active');
        faqToggle.innerHTML = ""; // cancella in contenuto stampato

        faqToggleDue.innerHTML = ""; // cancella in contenuto stampato
      }

      faqToggleTre.classList.add('active');
      setTimeout(function () {
        faqToggleTre.innerHTML = '<h1>' + 'POST' + " " + id + '</h1>' + '<br>' + '<h2>' + title + '</h2>' + '<br>' + '<p>' + body + '</p>';
      }, 300);
    }
  });
});

/***/ }),

/***/ "./src/js/app2.js":
/*!************************!*\
  !*** ./src/js/app2.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.getElementById('bars').addEventListener("click", function () {
  var iconBars = document.getElementById('bars');
  var nav = document.getElementById('card-trigger');
  var faqToggle = document.getElementById('card-uno');
  var faqToggleDue = document.getElementById('card-due');
  var faqToggleTre = document.getElementById('card-tre');

  if (iconBars.classList.contains('rotate')) {
    iconBars.classList.remove('rotate');
    nav.classList.remove('visible');
    faqToggle.classList.remove('active');
    faqToggleDue.classList.remove('active');
    faqToggleTre.classList.remove('active');
    faqToggle.innerHTML = ""; // cancella in contenuto stampato

    faqToggleDue.innerHTML = ""; // cancella in contenuto stampato

    faqToggleTre.innerHTML = ""; // cancella in contenuto stampato
  } else {
    iconBars.classList.add('rotate');
    nav.classList.add('visible');
  }
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!******************************************************************!*\
  !*** multi ./src/js/app.js ./src/js/app2.js ./src/scss/app.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\vavy_\OneDrive\Desktop\wip\wip\src\js\app.js */"./src/js/app.js");
__webpack_require__(/*! C:\Users\vavy_\OneDrive\Desktop\wip\wip\src\js\app2.js */"./src/js/app2.js");
module.exports = __webpack_require__(/*! C:\Users\vavy_\OneDrive\Desktop\wip\wip\src\scss\app.scss */"./src/scss/app.scss");


/***/ })

/******/ });