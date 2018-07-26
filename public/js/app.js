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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

$(document).ready(function () {
	$(".sidebar__form").on('submit', function (e) {
		var text = $(".sidebar__form--cajadetexto").val();
		var usuario = $(".usuario").text();
		var contador = $("#contador--like").text();

		event.preventDefault();
		$(".main__central").append('<div class="main__tweet row col-md 12">' + '<div class="main__tweet--pin">' + '<i class="fas fa-times"></i>' + '</div>' + usuario + "<br/>" + text + '<div class="main__tweet--features">' + '<a class="main__like href= # ">' + '<i class="fas fa-heart"></i>' + '</a>' + '<div class="main__contador">' + '<label id="contador--like"> 0 </label>' + '</div>' + '</div>' + '</div>' + '</div>');
		$(".sidebar__form--cajadetexto").var('');
		$(".sidebar__form--cajadetexto").focus();
		e.preventDefault();
	});

	// Borrar Tweet
	$(".main__central").on('click', '.main__tweet--pin', function (e) {
		event.stopPropagation();
		$(this).parent().fadeOut(900);
	});

	// Like corazón
	$(".main__central").on('click', '.main__like', function (e) {
		e.stopPropagation();
		$(this).toggleClass('main__like--red');
	});

	// Contador (HACER DELEGACION)

	var contador = 0;
	$('.main__like').click(function () {

		if (contador < 1) {
			/*Cambiar el >= 0 por < 10 si quieres limitar el incremento*/
			contador++;
		} else if (contador = contador++) {
			contador = 0;
		}
		document.getElementById("contador--like").innerHTML = contador;
	});

	// Cargar imágen

	$(function () {
		$('#file-input').change(function (e) {
			addImage(e);
		});

		function addImage(e) {
			var file = e.target.files[0],
			    imageType = /image.*/;

			if (!file.type.match(imageType)) return;

			var reader = new FileReader();
			reader.onload = fileOnload;
			reader.readAsDataURL(file);
		}

		function fileOnload(e) {
			var result = e.target.result;
			$('#imgSalida').attr("src", result);
		}
	});
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);