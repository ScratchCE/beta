var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"credits": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #E5F0FF */ /* #E9F1FC */ /* #D9E3F2 */ /* 90% transparent version of motion-primary */ /* #FFFFFF */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 25% transparent version of ui-white */ /* 15% transparent version of black */ /* #575E75 */ /* 35% transparent version of motion-primary */ /* 15% transparent version of motion-primary */ /* opt-in theme overrides */ /* #FF661A */ /* #E64D00 */ /* #CF63CF */ /* #BD42BD */ /* #FFAB19 */ /* #FF8C1A */ /* #0FBD8C */ /* #0FBD8C */ /* #FF8C1A */ /* #FFB366 */ /* #FF8C1A */ /* 35% transparent version of extensions-primary */ /* opaque version of extensions-transparent, on white bg */ /* lighter than motion-primary */ * {\n    box-sizing: border-box;\n} body {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: white;\n} body[theme=\"dark\"] {\n    background-color: #111;\n    color: #eee;\n} a {\n    color: blue;\n} [theme=\"dark\"] a {\n    color: #4af;\n} .credits_main_3LZ_8 section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n} .credits_header-container_Vx3wA {\n    color: white;\n    background-color: hsla(124, 42%, 30%, 1);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n} .credits_header-text_1KkFs {\n\n} .credits_users_3H8Bg {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n} .credits_user-image_3BJ_h {\n    margin-right: 12px;\n} .credits_user_Hnnpd {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background .2s;\n} .credits_user_Hnnpd:link:hover {\n    background: #eee;\n} [theme=\"dark\"] .credits_user_Hnnpd:link:hover {\n    background: #222;\n}\n", ""]);

// exports
exports.locals = {
	"main": "credits_main_3LZ_8",
	"header-container": "credits_header-container_Vx3wA",
	"headerContainer": "credits_header-container_Vx3wA",
	"header-text": "credits_header-text_1KkFs",
	"headerText": "credits_header-text_1KkFs",
	"users": "credits_users_3H8Bg",
	"user-image": "credits_user-image_3BJ_h",
	"userImage": "credits_user-image_3BJ_h",
	"user": "credits_user_Hnnpd"
};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #111;\n    color: #eee;\n    /* see colors.csss */\n    --ui-primary: rgb(17, 17, 17);\n    --ui-secondary: rgb(30, 30, 30);\n    --ui-tertiary: rgb(46, 46, 46);\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: #666 !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./src/addons/generated/translators.json":
/*!***********************************************!*\
  !*** ./src/addons/generated/translators.json ***!
  \***********************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"login\":\"WorldLanguages\",\"name\":\"World_Languages\",\"avatar_url\":\"https://avatars1.githubusercontent.com/u/17484114?v=4\",\"profile\":\"https://github.com/WorldLanguages\",\"contributions\":[\"projectManagement\",\"maintenance\",\"ideas\",\"business\",\"translation\"]},{\"login\":\"apple502j\",\"name\":\"apple502j\",\"avatar_url\":\"https://avatars1.githubusercontent.com/u/33279053?v=4\",\"profile\":\"https://github.com/apple502j\",\"contributions\":[\"maintenance\",\"security\",\"bug\",\"translation\"]},{\"login\":\"mxmou\",\"name\":\"Maximouse\",\"avatar_url\":\"https://avatars1.githubusercontent.com/u/51849865?v=4\",\"profile\":\"https://scratch.mit.edu/users/Maximouse\",\"contributions\":[\"code\",\"example\",\"translation\"]},{\"login\":\"scratchusernamemrtbts\",\"name\":\"meepooh\",\"avatar_url\":\"https://avatars0.githubusercontent.com/u/66320961?v=4\",\"profile\":\"https://scratch.mit.edu/users/mrtbts/\",\"contributions\":[\"ideas\",\"bug\",\"translation\",\"code\"]},{\"login\":\"RustingRobot\",\"name\":\"RustingRobot\",\"avatar_url\":\"https://avatars3.githubusercontent.com/u/50629201?v=4\",\"profile\":\"https://github.com/RustingRobot\",\"contributions\":[\"translation\",\"code\"]},{\"login\":\"ahmetlii\",\"name\":\"Ahmet\",\"avatar_url\":\"https://avatars3.githubusercontent.com/u/63475369?v=4\",\"profile\":\"http://ahmetlii.github.io\",\"contributions\":[\"translation\"]},{\"login\":\"locness3\",\"name\":\"locness3\",\"avatar_url\":\"https://avatars1.githubusercontent.com/u/37651007?v=4\",\"profile\":\"https://locness.duckdns.org\",\"contributions\":[\"translation\"]},{\"login\":\"superscratch444tre\",\"name\":\"superscratch444tre\",\"avatar_url\":\"https://avatars1.githubusercontent.com/u/69812464?v=4\",\"profile\":\"https://github.com/superscratch444tre\",\"contributions\":[\"translation\",\"bug\",\"ideas\"]},{\"login\":\"Thomas282-coder\",\"name\":\"Thomas282\",\"avatar_url\":\"https://avatars2.githubusercontent.com/u/75969759?v=4\",\"profile\":\"https://scratch.mit.edu/users/Thomas282/\",\"contributions\":[\"translation\"]},{\"login\":\"iqnite\",\"name\":\"IQNite\",\"avatar_url\":\"https://avatars2.githubusercontent.com/u/50552317?v=4\",\"profile\":\"https://x.ggigabyte.repl.co\",\"contributions\":[\"translation\",\"ideas\",\"bug\"]},{\"login\":\"gohoski\",\"name\":\"Gleb\",\"avatar_url\":\"https://avatars3.githubusercontent.com/u/72347897?v=4\",\"profile\":\"https://github.com/gohoski\",\"contributions\":[\"translation\"]},{\"login\":\"calvinmoment\",\"name\":\"ItsCalvin\",\"avatar_url\":\"https://avatars3.githubusercontent.com/u/51460403?v=4\",\"profile\":\"https://github.com/calvinmoment\",\"contributions\":[\"translation\"]},{\"login\":\"z-anonymouz\",\"name\":\"anonymouz-z\",\"avatar_url\":\"https://avatars2.githubusercontent.com/u/71985679?v=4\",\"profile\":\"https://github.com/anonymouz-z\",\"contributions\":[\"bug\",\"translation\"]},{\"login\":\"Secret-chest\",\"name\":\"Secret-chest\",\"avatar_url\":\"https://avatars1.githubusercontent.com/u/74449186?v=4\",\"profile\":\"http://www.gugalcrom.net\",\"contributions\":[\"ideas\",\"translation\",\"code\"]},{\"login\":\"maDU59\",\"name\":\"maDU59_\",\"avatar_url\":\"https://avatars0.githubusercontent.com/u/76407125?v=4\",\"profile\":\"https://scratch.mit.edu/users/maDU59_/\",\"contributions\":[\"ideas\",\"translation\"]},{\"login\":\"robloaks\",\"name\":\"robloaks\",\"avatar_url\":\"https://avatars2.githubusercontent.com/u/61124367?v=4\",\"profile\":\"https://github.com/robloaks\",\"contributions\":[\"translation\"]},{\"login\":\"Wilamaxin\",\"name\":\"Wilamaxin\",\"avatar_url\":\"https://avatars2.githubusercontent.com/u/63302372?v=4\",\"profile\":\"https://github.com/Wilamaxin\",\"contributions\":[\"translation\"]},{\"login\":\"CyberNat2000\",\"name\":\"CyberNat2000\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/77163754?v=4\",\"profile\":\"https://github.com/CyberNat2000\",\"contributions\":[\"translation\"]},{\"login\":\"thegAmechanger80\",\"name\":\"thegAmechanger80\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/75179701?v=4\",\"profile\":\"https://github.com/thegAmechanger80\",\"contributions\":[\"translation\"]},{\"login\":\"Minemaster552\",\"name\":\"Minemaster552\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/52428014?v=4\",\"profile\":\"https://github.com/Minemaster552\",\"contributions\":[\"translation\"]},{\"login\":\"sfederici\",\"name\":\"sfederici\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/2651868?v=4\",\"profile\":\"https://github.com/sfederici\",\"contributions\":[\"translation\",\"ideas\"]},{\"login\":\"zafersafa007\",\"name\":\"zafersafa007\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/71785037?v=4\",\"profile\":\"https://github.com/zafersafa007\",\"contributions\":[\"translation\"]},{\"login\":\"Rendangbike\",\"name\":\"RB\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/76770572?v=4\",\"profile\":\"https://github.com/Rendangbike\",\"contributions\":[\"translation\"]},{\"login\":\"Jamnik-Klembus\",\"name\":\"Jamnik-Klembus\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/76878372?v=4\",\"profile\":\"https://github.com/Jamnik-Klembus\",\"contributions\":[\"translation\"]},{\"login\":\"GGORG0\",\"name\":\"GGORG\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/51029895?v=4\",\"profile\":\"https://github.com/GGORG0\",\"contributions\":[\"translation\"]},{\"login\":\"rens2\",\"name\":\"rens2\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/67419424?v=4\",\"profile\":\"https://github.com/rens2\",\"contributions\":[\"translation\"]},{\"login\":\"m0nss\",\"name\":\"m0nss\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/63720689?v=4\",\"profile\":\"https://github.com/m0nss\",\"contributions\":[\"translation\"]},{\"login\":\"VFDan\",\"name\":\"VFDan\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/44413950?v=4\",\"profile\":\"https://github.com/VFDan\",\"contributions\":[\"translation\",\"ideas\"]},{\"login\":\"remixsuper\",\"name\":\"remixsuper\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/74250922?v=4\",\"profile\":\"https://github.com/remixsuper\",\"contributions\":[\"translation\"]},{\"login\":\"Arqwa\",\"name\":\"Arqwa\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/75946817?v=4\",\"profile\":\"https://scratch.mit.edu/users/Arqwa/\",\"contributions\":[\"translation\"]},{\"login\":\"GignacKasztanski\",\"name\":\"GignacPL\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/78898180?v=4\",\"profile\":\"https://scratch.mit.edu/users/ignacyiwokarnecki\",\"contributions\":[\"translation\"]},{\"login\":\"hatrexpro\",\"name\":\"hatrexpro\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/79562332?v=4\",\"profile\":\"https://github.com/hatrexpro\",\"contributions\":[\"translation\"]},{\"login\":\"Barthdry\",\"name\":\"Barthdry\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/67647112?v=4\",\"profile\":\"https://sites.google.com/view/barthdry/home\",\"contributions\":[\"translation\"]},{\"login\":\"Tofix26\",\"name\":\"Tofix26\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/73693639?v=4\",\"profile\":\"https://github.com/Tofix26\",\"contributions\":[\"translation\"]},{\"login\":\"iltersinavv\",\"name\":\"İlter Kayra Güler\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/80217178?v=4\",\"profile\":\"https://github.com/iltersinavv\",\"contributions\":[\"translation\"]},{\"login\":\"hello34090\",\"name\":\"hello34090\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/83602831?v=4\",\"profile\":\"https://github.com/hello34090\",\"contributions\":[\"translation\"]},{\"login\":\"piw-piw\",\"name\":\"piw-piw\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/76477070?v=4\",\"profile\":\"https://github.com/piw-piw\",\"contributions\":[\"translation\",\"ideas\"]},{\"login\":\"Sly-Little-Fox\",\"name\":\"Sly-Little-Fox\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/69681150?v=4\",\"profile\":\"https://server-backuper.cloud\",\"contributions\":[\"code\",\"translation\"]},{\"login\":\"DevCascade\",\"name\":\"DevCascade\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/80895875?v=4\",\"profile\":\"https://github.com/DevCascade\",\"contributions\":[\"translation\"]},{\"login\":\"ShermanYeung\",\"name\":\"ShermanY\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/69072386?v=4\",\"profile\":\"https://github.com/ShermanYeung\",\"contributions\":[\"translation\"]},{\"login\":\"TheBugCoder\",\"name\":\"buggy\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/67200019?v=4\",\"profile\":\"https://github.com/TheBugCoder\",\"contributions\":[\"translation\"]},{\"login\":\"Medericoder\",\"name\":\"Médéric Niot\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/80577386?v=4\",\"profile\":\"https://scratch.mit.edu/users/Medericoder/\",\"contributions\":[\"bug\",\"ideas\",\"translation\"]},{\"login\":\"Nik0lyaZ\",\"name\":\"Nikolyas\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/77118530?v=4\",\"profile\":\"https://github.com/Nik0lyaZ\",\"contributions\":[\"translation\"]},{\"login\":\"Supernatnat11\",\"name\":\"Supernatnat11\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/80457483?v=4\",\"profile\":\"https://github.com/Supernatnat11\",\"contributions\":[\"translation\"]},{\"login\":\"ilbailba\",\"name\":\"ilyas zan\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/71350431?v=4\",\"profile\":\"https://github.com/ilbailba\",\"contributions\":[\"translation\"]},{\"login\":\"Fupicat\",\"name\":\"Fupi\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/36973337?v=4\",\"profile\":\"http://fupicat.github.io\",\"contributions\":[\"bug\",\"translation\"]},{\"login\":\"lercdsgn\",\"name\":\"lercdsgn\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/75680333?v=4\",\"profile\":\"https://github.com/LercDsgn\",\"contributions\":[\"translation\"]},{\"login\":\"newcat07\",\"name\":\"newcat07\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/97903646?v=4\",\"profile\":\"https://github.com/newcat07\",\"contributions\":[\"translation\"]},{\"login\":\"kebabo13\",\"name\":\"kebabo\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/96626459?v=4\",\"profile\":\"https://github.com/kebabo13\",\"contributions\":[\"translation\"]},{\"login\":\"Evrick14\",\"name\":\"Evrick_14\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/99140357?v=4\",\"profile\":\"https://scratch.mit.edu/users/Evrick_14/\",\"contributions\":[\"translation\"]},{\"login\":\"Norbiros\",\"name\":\"Norbiros\",\"avatar_url\":\"https://avatars.githubusercontent.com/u/89837724?v=4\",\"profile\":\"http://bestopia.pl\",\"contributions\":[\"translation\"]}]");

/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const getInitialDarkMode = () => {
  try {
    const item = localStorage.getItem(THEME_KEY);

    if (item !== null) {
      return item === 'dark';
    }
  } catch (e) {// ignore
  }

  return darkMediaQuery.matches;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;

const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }

    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }

      this.updateDark();
    }

    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {// ignore
      }

      this.updateDark();
    }

    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }

    updateDark() {
      const dark = this.state.dark;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');

      if (dark && !darkModeStylesheet.parentNode) {
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
      }
    }

    handleQueryChange() {
      this.setState({
        dark: darkMediaQuery.matches
      });
    }

    handleClickTheme() {
      this.setState(state => ({
        dark: !state.dark
      }));
    }

    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme,
        isDark: this.state.dark
      }, this.props));
    }

  }

  return ThemeComponent;
};



/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appTarget = document.getElementById('app'); // Remove everything from the target to fix macOS Safari "Save Page As",

while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}

document.body.classList.add('tw-loaded');
/* harmony default export */ __webpack_exports__["default"] = (appTarget);

/***/ }),

/***/ "./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./credits.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credits_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _fosshost_light_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fosshost-light.png */ "./src/playground/credits/fosshost-light.png");
/* harmony import */ var _fosshost_light_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fosshost_light_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









/* eslint-disable react/jsx-no-literals */

const User = ({
  image,
  text,
  href
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: href,
  target: "_blank",
  rel: "noreferrer",
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.user
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.userImage,
  src: image,
  width: "60",
  height: "60"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo
}, text));

User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

const UserList = ({
  users
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.users
}, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, _extends({
  key: index
}, data))));

UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object)
};

const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerText
}, 'TurboWarp Credits')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Thank you to everyone that makes this project possible."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The TurboWarp project does not accept donations. Instead, donate to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://fosshost.org/donate"
}, "Fosshost"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Scratch"), " (or both!). Thank you.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, 'Fosshost'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://fosshost.org/"
}, "Fosshost"), " provides free high quality hosting services to open source projects, including TurboWarp.", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://fosshost.org/donate"
}, "Donate to them"), " to support their work."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://fosshost.org/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _fosshost_light_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  width: "250",
  height: "125"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, 'Scratch'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "TurboWarp is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), ". TurboWarp is not affiliated with Scratch.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, 'Addons'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].addonDevelopers
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, 'Translators'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].translators
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Individual contributors are listed in no particular order.")));

document.body.setAttribute('theme', Object(_lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["getInitialDarkMode"])() ? 'dark' : 'light');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null), _app_target__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/playground/credits/fosshost-light.png":
/*!***************************************************!*\
  !*** ./src/playground/credits/fosshost-light.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/assets/caabb627d674254770f4108ff3e19520.png";

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _addons_generated_translators_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addons/generated/translators.json */ "./src/addons/generated/translators.json");
var _addons_generated_translators_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../addons/generated/translators.json */ "./src/addons/generated/translators.json", 1);


const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }

  return list;
};

const fromHardcoded = ({
  userId,
  username,
  name
}) => ({
  image: "https://cdn2.scratch.mit.edu/get_image/user/".concat(userId, "_60x60.png"),
  href: "https://scratch.mit.edu/users/".concat(username, "/"),
  text: name || username
});

const fromAddons = ({
  login,
  avatar_url: avatarUrl
}) => ({
  image: "".concat(avatarUrl, "&s=60"),
  text: login // No links to GitHub profiles for now :(

});

const coreContributors = [{
  userId: '17340565',
  username: 'GarboMuffin'
}].map(fromHardcoded);
const translators = [// {
//     userId: '4648559',
//     username: 'World_Languages',
//     name: 'World_Languages'
// },
{
  userId: '6103312',
  username: 'Fupicat'
}, {
  userId: '62181963',
  username: 'DieForrobux'
}, // {
//     userId: '61087321',
//     username: 'superscratch444tre',
//     name: 'superscratch444tre'
// },
{
  userId: '67422866',
  username: 'AArt1256',
  name: 'AnnoyedArt1256'
}, {
  userId: '61067753',
  username: 'diaowinner'
}, // {
//     userId: '62626',
//     username: 's_federici',
//     name: 's_federici'
// },
// {
//     userId: '34316478',
//     username: 'philipp2007',
//     name: 'iqnite'
// }
{
  userId: '3318598',
  username: 'plant2014'
}, {
  userId: '56013432',
  username: 'Developer_Diary'
}, {
  userId: '72794568',
  username: '52Tellur'
}, {
  userId: '33381624',
  username: 'Mikez333'
}, {
  userId: '60084940',
  username: 'ThisFeelsScratchy'
}, {
  userId: '71978380',
  username: 'TheBugCoder'
}, // {
//     userId: '16426047',
//     username: 'Maximouse'
// },
{
  userId: '55742784',
  username: 'RedGuy7'
}].map(fromHardcoded);
const addonDevelopers = [{
  userId: '34018398',
  username: 'Jeffalo'
}, {
  userId: '64184234',
  username: 'ErrorGamer2000'
}, {
  userId: '41616512',
  username: 'pufferfish101007'
}, {
  userId: '61409215',
  username: 'TheColaber'
}, {
  userId: '1882674',
  username: 'griffpatch'
}, {
  userId: '10817178',
  username: 'apple502j'
}, {
  userId: '16947341',
  username: '--Explosion--'
}, {
  userId: '14880401',
  username: 'Sheep_maker'
}, {
  userId: '9981676',
  username: 'NitroCipher'
}, {
  userId: '2561680',
  username: 'lisa_wolfgang'
}, {
  userId: '60000111',
  username: 'GDUcrash'
}, {
  userId: '4648559',
  username: 'World_Languages'
}, {
  userId: '17340565',
  username: 'GarboMuffin'
}, {
  userId: '5354974',
  username: 'Chrome_Cat'
} // TODO: summerscar if this is their Scratch account: https://scratch.mit.edu/users/summerscar/
].map(fromHardcoded);
const addonTranslators = _addons_generated_translators_json__WEBPACK_IMPORTED_MODULE_0__.map(fromAddons);
/* harmony default export */ __webpack_exports__["default"] = ({
  coreContributors,
  translators: shuffle([...translators, ...addonTranslators]),
  addonDevelopers: shuffle(addonDevelopers)
});

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map