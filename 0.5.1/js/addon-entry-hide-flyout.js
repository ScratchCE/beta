(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-flyout"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-flyout/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyFlyout,\n.blocklyFlyoutScrollbar,\n.sa-lock-image {\n  transition-property: transform;\n}\n\n.blocklyFlyout.sa-flyoutClose {\n  transform: translateX(-200px) !important;\n}\n\n.blocklyFlyoutScrollbar.sa-flyoutClose {\n  transform: translateX(35px) !important;\n}\n\n.sa-lock-image.sa-flyoutClose {\n  transform: translateX(-260px);\n}\n\n.sa-flyout-placeHolder {\n  position: absolute;\n  left: 61px;\n  top: 44px;\n  height: 100%;\n  width: 251px;\n}\n\n.sa-lock-image {\n  position: absolute;\n  z-index: 20;\n  width: 20px;\n  cursor: pointer;\n  top: 46px;\n  left: 280px;\n}\n\n.injectionDiv {\n  overflow: hidden !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg":
/*!**************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExIDEgMCAwIDAtMSAxdjNhMSAxIDAgMCAwIDIgMHYtM2ExIDEgMCAwIDAtMS0xem01LTRWN0E1IDUgMCAwIDAgNyA3djJhMyAzIDAgMCAwLTMgM3Y3YTMgMyAwIDAgMCAzIDNoMTBhMyAzIDAgMCAwIDMtM3YtN2EzIDMgMCAwIDAtMy0zek05IDdhMyAzIDAgMCAxIDYgMHYySDl6bTkgMTJhMSAxIDAgMCAxLTEgMUg3YTEgMSAwIDAgMS0xLTF2LTdhMSAxIDAgMCAxIDEtMWgxMGExIDEgMCAwIDEgMSAxeiIgZmlsbD0iIzYyNjI2MiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGFyaWEtaGlkZGVuPSJ0cnVlIiB3aWR0aD0iMWVtIiBoZWlnaHQ9IjFlbSIgc3R5bGU9Ii1tcy10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGQ9Ik0xMiAxM2ExLjQ5IDEuNDkgMCAwIDAtMSAyLjYxVjE3YTEgMSAwIDAgMCAyIDB2LTEuMzlBMS40OSAxLjQ5IDAgMCAwIDEyIDEzem01LTRIOVY3YTMgMyAwIDAgMSA1LjEyLTIuMTMgMy4wOCAzLjA4IDAgMCAxIC43OCAxLjM4IDEgMSAwIDEgMCAxLjk0LS41IDUuMDkgNS4wOSAwIDAgMC0xLjMxLTIuMjlBNSA1IDAgMCAwIDcgN3YyYTMgMyAwIDAgMC0zIDN2N2EzIDMgMCAwIDAgMyAzaDEwYTMgMyAwIDAgMCAzLTN2LTdhMyAzIDAgMCAwLTMtM3ptMSAxMGExIDEgMCAwIDEtMSAxSDdhMSAxIDAgMCAxLTEtMXYtN2ExIDEgMCAwIDEgMS0xaDEwYTEgMSAwIDAgMSAxIDF6IiBmaWxsPSIjNjI2MjYyIi8+PC9zdmc+");

/***/ }),

/***/ "./src/addons/addons/hide-flyout/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/hide-flyout/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-flyout/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-flyout/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/hide-flyout/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/hide-flyout/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./lock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/lock.svg");
/* harmony import */ var _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./unlock.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-flyout/unlock.svg");
/* inserted by pull.js */



const _twGetAsset = path => {
  if (path === "/lock.svg") return _url_loader_lock_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  if (path === "/unlock.svg") return _url_loader_unlock_svg__WEBPACK_IMPORTED_MODULE_1__["default"];
  throw new Error("Unknown asset: ".concat(path));
};

/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  global,
  console
}) {
  let placeHolderDiv = null;
  let lockDisplay = null;
  let flyOut = null;
  let scrollBar = null;
  let toggle = true;
  let selectedCategory = null;
  let toggleSetting = addon.settings.get("toggle");
  let flyoutLock = false;

  function getSpeedValue() {
    let data = {
      none: "0",
      short: "0.25",
      default: "0.5",
      long: "1"
    };
    return data[addon.settings.get("speed")];
  }

  function onmouseenter(e, speed = {}) {
    // If a mouse event was passed, only open flyout if the workspace isn't being dragged
    if (!e || e.buttons === 0 || document.querySelector(".blocklyToolboxDiv").className.includes("blocklyToolboxDelete")) {
      speed = typeof speed === "object" ? getSpeedValue() : speed;
      flyOut.classList.remove("sa-flyoutClose");
      flyOut.style.transitionDuration = "".concat(speed, "s");
      scrollBar.classList.remove("sa-flyoutClose");
      scrollBar.style.transitionDuration = "".concat(speed, "s");
      lockDisplay.classList.remove("sa-flyoutClose");
      lockDisplay.style.transitionDuration = "".concat(speed, "s");
      setTimeout(() => Blockly.getMainWorkspace().recordCachedAreas(), speed * 1000);
    }
  }

  function onmouseleave(e, speed = getSpeedValue()) {
    // If we go behind the flyout or the user has locked it, let's return
    if (toggleSetting !== "cathover" && e && e.clientX <= scrollBar.getBoundingClientRect().left || flyoutLock) return;
    flyOut.classList.add("sa-flyoutClose");
    flyOut.style.transitionDuration = "".concat(speed, "s");
    scrollBar.classList.add("sa-flyoutClose");
    scrollBar.style.transitionDuration = "".concat(speed, "s");
    lockDisplay.classList.add("sa-flyoutClose");
    lockDisplay.style.transitionDuration = "".concat(speed, "s");
    setTimeout(() => Blockly.getMainWorkspace().recordCachedAreas(), speed * 1000);
  }

  let didOneTimeSetup = false;

  function doOneTimeSetup() {
    if (didOneTimeSetup) {
      return;
    }

    didOneTimeSetup = true;
    addon.tab.redux.initialize();
    addon.tab.redux.addEventListener("statechanged", e => {
      switch (e.detail.action.type) {
        // Event casted when you switch between tabs
        case "scratch-gui/navigation/ACTIVATE_TAB":
          // always 0, 1, 2
          lockDisplay.style.display = e.detail.action.activeTabIndex === 0 ? "block" : "none";
          placeHolderDiv.style.display = e.detail.action.activeTabIndex === 0 ? "block" : "none";

          if (e.detail.action.activeTabIndex === 0) {
            onmouseenter(null, 0);
            toggle = true;
          }

          break;
        // Event casted when you switch between tabs

        case "scratch-gui/mode/SET_PLAYER":
          // always true or false
          lockDisplay.style.display = e.detail.action.isPlayerOnly ? "none" : "block";
          placeHolderDiv.style.display = e.detail.action.activeTabIndex === 0 ? "block" : "none";
          break;
      }
    });

    if (toggleSetting === "category" || toggleSetting === "cathover") {
      (async () => {
        while (true) {
          let category = await addon.tab.waitForElement(".scratchCategoryMenuItem", {
            markAsSeen: true,
            condition: () => !addon.tab.redux.state.scratchGui.mode.isPlayerOnly
          });

          category.onclick = () => {
            if (toggle && selectedCategory === category && toggleSetting === "category") {
              onmouseleave();
              selectedCategory = category;
            } else if (!toggle) {
              onmouseenter();
              selectedCategory = category;
            } else {
              selectedCategory = category;
              return;
            }

            if (toggleSetting === "category") toggle = !toggle;
          };
        }
      })();
    }
  }

  while (true) {
    flyOut = await addon.tab.waitForElement(".blocklyFlyout", {
      markAsSeen: true,
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    let blocklySvg = document.querySelector(".blocklySvg");
    scrollBar = document.querySelector(".blocklyFlyoutScrollbar");
    const tabs = document.querySelector('[class^="gui_tabs"]'); // Placeholder Div

    if (placeHolderDiv) placeHolderDiv.remove();
    placeHolderDiv = document.createElement("div");
    if (toggleSetting === "hover") tabs.appendChild(placeHolderDiv);
    placeHolderDiv.className = "sa-flyout-placeHolder"; // Lock Img

    if (lockDisplay) lockDisplay.remove();
    lockDisplay = document.createElement("img");
    lockDisplay.src = _twGetAsset("/".concat(flyoutLock ? "" : "un", "lock.svg"));
    lockDisplay.className = "sa-lock-image";

    lockDisplay.onclick = () => {
      flyoutLock = !flyoutLock;
      lockDisplay.src = _twGetAsset("/".concat(flyoutLock ? "" : "un", "lock.svg"));
    }; // Only append if we don't have "categoryclick" on


    if (toggleSetting === "hover") tabs.appendChild(lockDisplay);

    if (toggleSetting === "hover") {
      placeHolderDiv.onmouseenter = e => onmouseenter(e);

      placeHolderDiv.onmouseup = e => onmouseenter();

      document.querySelector(".blocklyToolboxDiv").onmouseenter = e => onmouseenter(e); // for columns


      blocklySvg.onmouseenter = e => onmouseleave(e);
    }

    if (toggleSetting === "cathover") {
      onmouseleave(null, 0);
      const toolbox = document.querySelector(".blocklyToolboxDiv");
      const addExtensionButton = document.querySelector("[class^=gui_extension-button-container_]");

      for (let e of [toolbox, addExtensionButton, flyOut, scrollBar]) {
        e.onmouseenter = onmouseenter;
        e.onmouseleave = onmouseleave;
      }
    }

    doOneTimeSetup();
  }
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-hide-flyout.js.map