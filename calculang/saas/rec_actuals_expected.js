(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(this, function () {
  return /******/ (function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports;
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {},
        /******/
      });
      /******/
      /******/ // Execute the module function
      /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ // Flag the module as loaded
      /******/ module.l = true;
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports;
      /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {enumerable: true, get: getter});
        /******/
      }
      /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', {value: true});
      /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
      /******/ if (mode & 1) value = __webpack_require__(value);
      /******/ if (mode & 8) return value;
      /******/ if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
      /******/ var ns = Object.create(null);
      /******/ __webpack_require__.r(ns);
      /******/ Object.defineProperty(ns, 'default', {enumerable: true, value: value});
      /******/ if (mode & 2 && typeof value != 'string')
        for (var key in value)
          __webpack_require__.d(
            ns,
            key,
            function (key) {
              return value[key];
            }.bind(null, key)
          );
      /******/ return ns;
      /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function getDefault() {
              return module['default'];
            }
          : /******/ function getModuleExports() {
              return module;
            };
      /******/ __webpack_require__.d(getter, 'a', getter);
      /******/ return getter;
      /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = '';
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__((__webpack_require__.s = 0));
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_0', function () {
          return subs_0;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_new_actual', function () {
          return subs_new_actual;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_churned_actual', function () {
          return subs_churned_actual;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_new_actual_to', function () {
          return subs_new_actual_to;
        });
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          'subs_churned_actual_to',
          function () {
            return subs_churned_actual_to;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_new', function () {
          return subs_new;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_churned', function () {
          return subs_churned;
        });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'subs_new_experience', function () {
          return subs_new_experience;
        });
        /* harmony import */ var _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(1);
        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'subs', function () {
          return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__['a'];
        });

        /* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, 'year', function () {
          return _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__['d'];
        });

        // actuals

        const subs_0 = ({}) => 100; // start at 100 subs

        const subs_new_actual = ({year_in}) =>
          [30, 30, 20][
            Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ 'd'])({
              year_in,
            })
          ];
        const subs_churned_actual = ({year_in}) =>
          [10, 30, 50][
            Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ 'd'])({
              year_in,
            })
          ]; // year up to which actual data should be used, -1=use only expecteds

        const subs_new_actual_to = ({subs_new_actual_to_in}) => subs_new_actual_to_in;
        const subs_churned_actual_to = ({subs_churned_actual_to_in}) => subs_churned_actual_to_in; // interleave actuals into projections: this rebases expd using actuals?

        const subs_new = ({year_in, subs_new_actual_to_in}) => {
          if (
            Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ 'd'])({
              year_in,
            }) <=
            subs_new_actual_to({
              subs_new_actual_to_in,
            })
          )
            return subs_new_actual({
              year_in,
            });
          else
            return Object(
              _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__['subs_new']
            )({
              year_in,
              subs_new_actual_to_in,
            });
        };
        const subs_churned = ({year_in, subs_churned_actual_to_in}) => {
          if (
            Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ 'd'])({
              year_in,
            }) <=
            subs_churned_actual_to({
              subs_churned_actual_to_in,
            })
          )
            return subs_churned_actual({
              year_in,
            });
          else
            return Object(
              _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__['subs_churned']
            )({
              year_in,
              subs_churned_actual_to_in,
            });
        }; // reconcile actual to expected, experience=A-E
        // in year

        const subs_new_experience = (
          {year_in, subs_new_actual_to_in} // now a fn on year
        ) =>
          subs_new_actual({
            year_in,
          }) -
          Object(_expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__['subs_new'])({
            year_in,
            subs_new_actual_to_in,
            subs_new_actual_co_in:
              Object(
                _expected_cul_js_cul_scope_id_1_cul_parent_scope_id_0__WEBPACK_IMPORTED_MODULE_0__[/* year */ 'd']
              )({
                year_in,
              }) - 1,
          }); // only valid sometimes? if year < actual_co
        // bake in co constraints in terms of year : actually irrelevant - expected projection not rebased using actuals, this should be done for year-by-year reporting - or is rebased? subs_new_expected
        //console.log(subs_new_experience({year_in: 0, subs_new_actual_to_in: -1, subs_churned_actual_to_in: -1}));
        // => can project subs using actual data up to subs_new/churned_actual_co dates and using variable projection, growth rates (starting from subs_0=100)
        // actual bake-in projection
        //export const subs_

        /***/
      },
      /* 1 */
      /***/ function (module, __webpack_exports__, __webpack_require__) {
        'use strict';
        /* unused harmony export subs_growth_pc */
        /* unused harmony export subs_churn_pc */
        /* unused harmony export subs_0_ */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'd', function () {
          return year;
        });
        /* unused harmony export subs_new_ */
        /* unused harmony export subs_churned_ */
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'a', function () {
          return subs;
        });
        /* harmony import */ var _rec_actuals_expected_cul_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);

        const subs_growth_pc = ({subs_growth_pc_in}) => subs_growth_pc_in;
        const subs_churn_pc = ({subs_churn_pc_in}) => subs_churn_pc_in;
        const subs_0_ = ({subs_0_in}) => subs_0_in; // subs at year 0

        const year = ({year_in}) => year_in;
        const subs_new_ = ({
          // gets _ but isn't being used
          year_in,
          subs_new_actual_to_in,
          subs_churned_actual_to_in,
          subs_growth_pc_in,
        }) =>
          subs({
            subs_new_actual_to_in,
            subs_churned_actual_to_in,
            year_in:
              year({
                year_in,
              }) - 1,
          }) *
          (subs_growth_pc({
            subs_growth_pc_in,
          }) /
            100);
        const subs_churned_ = ({year_in, subs_new_actual_to_in, subs_churned_actual_to_in, subs_churn_pc_in}) =>
          ((subs({
            subs_new_actual_to_in,
            subs_churned_actual_to_in,
            year_in:
              year({
                year_in,
              }) - 1,
          }) +
            Object(_rec_actuals_expected_cul_js__WEBPACK_IMPORTED_MODULE_0__['subs_new'])({
              year_in,
              subs_new_actual_to_in,
            })) *
            subs_churn_pc({
              subs_churn_pc_in,
            })) /
          100; // churn also applies to new subs
        // prev subs + new subs@yr - churned subs@yr

        const subs = ({year_in, subs_new_actual_to_in, subs_churned_actual_to_in}) => {
          if (
            year({
              year_in,
            }) == 0
          )
            return Object(_rec_actuals_expected_cul_js__WEBPACK_IMPORTED_MODULE_0__['subs_0'])({});
          else
            return (
              subs({
                subs_new_actual_to_in,
                subs_churned_actual_to_in,
                year_in:
                  year({
                    year_in,
                  }) - 1,
              }) +
              Object(_rec_actuals_expected_cul_js__WEBPACK_IMPORTED_MODULE_0__['subs_new'])({
                year_in,
                subs_new_actual_to_in,
              }) -
              Object(_rec_actuals_expected_cul_js__WEBPACK_IMPORTED_MODULE_0__['subs_churned'])({
                year_in,
                subs_churned_actual_to_in,
              })
            );
        }; // => can project subs given subs_0, growth and churn rates

        /***/
      },
      /******/
    ]
  );
});
//# sourceMappingURL=rec_actuals_expected.js.map
