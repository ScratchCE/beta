(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-new-variables"],{

/***/ "./src/addons/addons/hide-new-variables/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/hide-new-variables/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-new-variables/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/hide-new-variables/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/hide-new-variables/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  msg,
  global,
  console
}) {
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const originalCreateVariable = ScratchBlocks.Variables.createVariable; // https://github.com/LLK/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/variables.js#L277

  ScratchBlocks.Variables.createVariable = function (workspace, opt_callback, opt_type) {
    if (!addon.self.disabled) {
      const originalCallback = opt_callback;

      opt_callback = variableBlockId => {
        if (variableBlockId) {
          const flyout = workspace.isFlyout ? workspace : workspace.getFlyout();

          if (flyout.setCheckboxState) {
            flyout.setCheckboxState(variableBlockId, false);
          }
        }

        if (originalCallback) {
          originalCallback(variableBlockId);
        }
      };
    }

    return originalCreateVariable.call(this, workspace, opt_callback, opt_type);
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-hide-new-variables.js.map