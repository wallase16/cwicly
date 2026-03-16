/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

"use strict";
module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ },

/***/ "./node_modules/classnames/index.js"
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ },

/***/ "./src/blocks/button/edit.js"
/*!***********************************!*\
  !*** ./src/blocks/button/edit.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var _components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/framework/DynamicAttributeWrapper.js */ "./src/components/framework/DynamicAttributeWrapper.js");
/* harmony import */ var _hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-dynamic-data.js */ "./src/hooks/use-dynamic-data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");











function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    content,
    linkWrapperUrl,
    linkWrapperNewTab,
    classes,
    linkWrapperActive
  } = attributes;
  const resolvedContent = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_9__.useDynamicData)(content);
  const resolvedLinkURL = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_9__.useDynamicData)(linkWrapperUrl);
  const displayContent = resolvedContent || content;
  const displayLinkURL = resolvedLinkURL || linkWrapperUrl;
  const [isEditingURL, setIsEditingURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getCombinedClassName)(attributes, `cc-btn ${classes || ''}`)
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "wp-block-button__inline-link",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
          className: "button wp-block-button__link",
          onClick: () => setIsEditingURL(!isEditingURL),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'cwicly')
        }), isEditingURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
          position: "bottom center",
          onClose: () => setIsEditingURL(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalLinkControl, {
            value: {
              url: linkWrapperUrl,
              opensInNewTab: linkWrapperNewTab
            },
            onChange: nextValue => {
              setAttributes({
                linkWrapperUrl: nextValue.url,
                linkWrapperNewTab: nextValue.opensInNewTab,
                linkWrapperActive: !!nextValue.url
              });
            }
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "cwicly-primary-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Settings', 'cwicly'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link active', 'cwicly'),
            checked: linkWrapperActive,
            onChange: val => setAttributes({
              linkWrapperActive: val
            })
          }), linkWrapperActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              attribute: "linkWrapperUrl",
              attributes: attributes,
              setAttributes: setAttributes,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'cwicly'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                value: linkWrapperUrl,
                onChange: newUrl => setAttributes({
                  linkWrapperUrl: newUrl
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open in new tab', 'cwicly'),
              checked: linkWrapperNewTab,
              onChange: isChecked => setAttributes({
                linkWrapperNewTab: isChecked
              })
            })]
          })]
        })
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.BackgroundHelper, {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: "span",
        value: displayContent || '',
        onChange: newContent => setAttributes({
          content: newContent
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Button text...', 'cwicly')
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/button/index.js"
/*!************************************!*\
  !*** ./src/blocks/button/index.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/button/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/button/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/button', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Button', 'cwicly'),
  icon: 'button',
  category: 'cwicly',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: '.cc-btn',
      default: ''
    },
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    // Link attributes (standard across blocks)
    linkWrapperActive: {
      type: 'boolean',
      default: true
    },
    // Button is a link by default in Cwicly
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    linkWrapperType: {
      type: 'string',
      default: 'url'
    },
    linkWrapperSourceType: {
      type: 'string',
      default: 'static'
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/button/save.js"
/*!***********************************!*\
  !*** ./src/blocks/button/save.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'button');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'button');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const Tag = !attributes.containerLayoutTag || attributes.containerLayoutTag !== 'a' && attributes.containerLayoutTag !== 'button' ? 'a' : attributes.containerLayoutTag;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...linkAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      value: attributes.content
    })
  });
}

/***/ },

/***/ "./src/blocks/column/edit.js"
/*!***********************************!*\
  !*** ./src/blocks/column/edit.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");








function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    containerLayoutTag,
    classes
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getCombinedClassName)(attributes, `cc-column ${classes || ''}`)
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  const Tag = containerLayoutTag || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-primary-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Column Settings', 'cwicly'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML Tag', 'cwicly'),
            value: containerLayoutTag,
            options: [{
              label: 'DIV',
              value: 'div'
            }, {
              label: 'SECTION',
              value: 'section'
            }, {
              label: 'ARTICLE',
              value: 'article'
            }, {
              label: 'ASIDE',
              value: 'aside'
            }],
            onChange: val => setAttributes({
              containerLayoutTag: val
            })
          })
        })
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Tag, {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundHelper, {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {})]
    })]
  });
}

/***/ },

/***/ "./src/blocks/column/index.js"
/*!************************************!*\
  !*** ./src/blocks/column/index.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/column/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/column/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/column', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Column', 'cwicly'),
  parent: ['cwicly/columns'],
  icon: 'column',
  category: 'cwicly',
  attributes: {
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    containerLayoutTag: {
      type: 'string',
      default: 'div'
    },
    // Link attributes
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/column/save.js"
/*!***********************************!*\
  !*** ./src/blocks/column/save.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'column');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'column');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const Tag = attributes.linkWrapperActive || linkAttrs?.href ? attributes.containerLayoutTag || 'a' : attributes.containerLayoutTag || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...linkAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/blocks/columns/edit.js"
/*!************************************!*\
  !*** ./src/blocks/columns/edit.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");








function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    columnsCount,
    containerLayoutTag,
    classes
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getCombinedClassName)(attributes, `cc-columns ${classes || ''}`)
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  const Tag = containerLayoutTag || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-primary-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Columns Settings', 'cwicly'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Columns', 'cwicly'),
            value: columnsCount,
            onChange: val => setAttributes({
              columnsCount: val
            }),
            min: 1,
            max: 12
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML Tag', 'cwicly'),
            value: containerLayoutTag,
            options: [{
              label: 'DIV',
              value: 'div'
            }, {
              label: 'SECTION',
              value: 'section'
            }, {
              label: 'HEADER',
              value: 'header'
            }, {
              label: 'FOOTER',
              value: 'footer'
            }],
            onChange: val => setAttributes({
              containerLayoutTag: val
            })
          })]
        })
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Tag, {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundHelper, {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {
        allowedBlocks: ['cwicly/column'],
        orientation: "horizontal"
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/columns/index.js"
/*!*************************************!*\
  !*** ./src/blocks/columns/index.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/columns/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/columns/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/columns', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Columns', 'cwicly'),
  icon: 'columns',
  category: 'cwicly',
  attributes: {
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    containerLayoutTag: {
      type: 'string',
      default: 'div'
    },
    columnsCount: {
      type: 'number',
      default: 2
    },
    // Link attributes
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/columns/save.js"
/*!************************************!*\
  !*** ./src/blocks/columns/save.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'columns');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'columns');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const Tag = attributes.linkWrapperActive || linkAttrs?.href ? attributes.containerLayoutTag || 'a' : attributes.containerLayoutTag || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...linkAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/blocks/container/edit.js"
/*!**************************************!*\
  !*** ./src/blocks/container/edit.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");








function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    containerLayoutTag,
    classes
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getCombinedClassName)(attributes, classes || '')
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  const Tag = containerLayoutTag || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-primary-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Container Settings', 'cwicly'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML Tag', 'cwicly'),
            value: containerLayoutTag,
            options: [{
              label: 'DIV',
              value: 'div'
            }, {
              label: 'SECTION',
              value: 'section'
            }, {
              label: 'HEADER',
              value: 'header'
            }, {
              label: 'FOOTER',
              value: 'footer'
            }, {
              label: 'MAIN',
              value: 'main'
            }, {
              label: 'ARTICLE',
              value: 'article'
            }, {
              label: 'ASIDE',
              value: 'aside'
            }],
            onChange: val => setAttributes({
              containerLayoutTag: val
            })
          })
        })
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Tag, {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundHelper, {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {})]
    })]
  });
}

/***/ },

/***/ "./src/blocks/container/index.js"
/*!***************************************!*\
  !*** ./src/blocks/container/index.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/container/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/container/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/container', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Container', 'cwicly'),
  icon: 'editor-table',
  category: 'cwicly',
  attributes: {
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    containerLayoutTag: {
      type: 'string',
      default: 'div'
    },
    // Link attributes
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/container/save.js"
/*!**************************************!*\
  !*** ./src/blocks/container/save.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'container');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'container');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const Tag = attributes.linkWrapperActive || linkAttrs?.href ? attributes.containerLayoutTag || 'a' : attributes.containerLayoutTag || 'div';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...linkAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/blocks/heading/edit.js"
/*!************************************!*\
  !*** ./src/blocks/heading/edit.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var _components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/framework/DynamicAttributeWrapper.js */ "./src/components/framework/DynamicAttributeWrapper.js");
/* harmony import */ var _hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks/use-dynamic-data.js */ "./src/hooks/use-dynamic-data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// src/blocks/heading/edit.js











function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    content,
    headingTag,
    classes,
    linkWrapperActive,
    linkWrapperUrl,
    linkWrapperNewTab
  } = attributes;
  const resolvedContent = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_9__.useDynamicData)(content);
  const resolvedLinkURL = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_9__.useDynamicData)(linkWrapperUrl);
  const displayContent = resolvedContent || content;
  const displayLinkURL = resolvedLinkURL || linkWrapperUrl;
  const [isEditingURL, setIsEditingURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getCombinedClassName)(attributes, classes || '')
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  const setHeadingTag = tag => {
    setAttributes({
      headingTag: tag
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
        children: [1, 2, 3, 4, 5, 6].map(level => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
          icon: `heading`,
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)(`Heading ${level}`, 'cwicly'),
          isActive: headingTag === `h${level}`,
          onClick: () => setHeadingTag(`h${level}`),
          children: level
        }, level))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
          icon: "admin-links",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'cwicly'),
          onClick: () => setIsEditingURL(!isEditingURL),
          isActive: linkWrapperActive
        })
      })]
    }), isEditingURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      position: "bottom center",
      onClose: () => setIsEditingURL(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalLinkControl, {
        value: {
          url: linkWrapperUrl,
          opensInNewTab: linkWrapperNewTab
        },
        onChange: nextValue => {
          setAttributes({
            linkWrapperUrl: nextValue.url,
            linkWrapperNewTab: nextValue.opensInNewTab,
            linkWrapperActive: !!nextValue.url
          });
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "cwicly-primary-tab",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading Settings', 'cwicly'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tag', 'cwicly'),
            value: headingTag,
            options: [{
              label: 'H1',
              value: 'h1'
            }, {
              label: 'H2',
              value: 'h2'
            }, {
              label: 'H3',
              value: 'h3'
            }, {
              label: 'H4',
              value: 'h4'
            }, {
              label: 'H5',
              value: 'h5'
            }, {
              label: 'H6',
              value: 'h6'
            }],
            onChange: setHeadingTag
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Settings', 'cwicly'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link active', 'cwicly'),
            checked: linkWrapperActive,
            onChange: val => setAttributes({
              linkWrapperActive: val
            })
          }), linkWrapperActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"], {
              attribute: "linkWrapperUrl",
              attributes: attributes,
              setAttributes: setAttributes,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'cwicly'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                value: linkWrapperUrl,
                onChange: val => setAttributes({
                  linkWrapperUrl: val
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open in new tab', 'cwicly'),
              checked: linkWrapperNewTab,
              onChange: val => setAttributes({
                linkWrapperNewTab: val
              })
            })]
          })]
        })]
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.BackgroundHelper, {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
        tagName: headingTag || 'h1',
        value: displayContent,
        onChange: newContent => setAttributes({
          content: newContent
        }),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Heading content...', 'cwicly'),
        allowedFormats: ['core/bold', 'core/italic', 'core/link']
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/heading/index.js"
/*!*************************************!*\
  !*** ./src/blocks/heading/index.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/heading/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/heading/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/heading', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Heading', 'cwicly'),
  icon: 'heading',
  category: 'cwicly',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'h1,h2,h3,h4,h5,h6',
      default: ''
    },
    headingTag: {
      type: 'string',
      default: 'h1'
    },
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    // Link attributes
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    },
    globalClasses: {
      type: 'array',
      default: []
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/heading/save.js"
/*!************************************!*\
  !*** ./src/blocks/heading/save.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const Tag = attributes.headingTag || 'h1';
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'heading');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'heading');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const linkWrapperActive = attributes.linkWrapperActive || linkAttrs?.href;
  const LinkTag = !attributes.containerLayoutTag || attributes.containerLayoutTag !== 'a' && attributes.containerLayoutTag !== 'button' ? 'a' : attributes.containerLayoutTag;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: linkWrapperActive ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(LinkTag, {
      ...linkAttrs,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
        value: attributes.content
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      value: attributes.content
    })
  });
}

/***/ },

/***/ "./src/blocks/image/edit.js"
/*!**********************************!*\
  !*** ./src/blocks/image/edit.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var _components_framework_DynamicDataControl_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/framework/DynamicDataControl.js */ "./src/components/framework/DynamicDataControl.js");
/* harmony import */ var _components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/framework/DynamicAttributeWrapper.js */ "./src/components/framework/DynamicAttributeWrapper.js");
/* harmony import */ var _hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks/use-dynamic-data.js */ "./src/hooks/use-dynamic-data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");












function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    imageURL,
    imageID,
    imageAlt,
    classes,
    imageLightbox,
    linkWrapperActive,
    linkWrapperUrl,
    linkWrapperNewTab,
    imageThumbnailSize
  } = attributes;
  const resolvedImageURL = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_10__.useDynamicData)(imageURL);
  const resolvedImageAlt = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_10__.useDynamicData)(imageAlt);

  // Use resolved values if they exist, otherwise fallback to static attributes
  const displayImageURL = resolvedImageURL || imageURL;
  const displayImageAlt = resolvedImageAlt || imageAlt;
  const [isEditingURL, setIsEditingURL] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.getCombinedClassName)(attributes, classes || '')
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  const onSelectImage = media => {
    setAttributes({
      imageURL: media.url,
      imageID: media.id,
      imageAlt: media.alt
    });
  };
  const removeImage = () => {
    setAttributes({
      imageURL: undefined,
      imageID: undefined,
      imageAlt: ''
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: [imageURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
            onSelect: onSelectImage,
            allowedTypes: ['image'],
            value: imageID,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
              onClick: open,
              icon: "edit",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Replace Image', 'cwicly')
            })
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarButton, {
          icon: "admin-links",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link', 'cwicly'),
          onClick: () => setIsEditingURL(!isEditingURL),
          isActive: linkWrapperActive
        })
      })]
    }), isEditingURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      position: "bottom center",
      onClose: () => setIsEditingURL(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.__experimentalLinkControl, {
        value: {
          url: linkWrapperUrl,
          opensInNewTab: linkWrapperNewTab
        },
        onChange: nextValue => {
          setAttributes({
            linkWrapperUrl: nextValue.url,
            linkWrapperNewTab: nextValue.opensInNewTab,
            linkWrapperActive: !!nextValue.url
          });
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: "cwicly-primary-tab",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image Settings', 'cwicly'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
            attribute: "imageThumbnailSize",
            attributes: attributes,
            setAttributes: setAttributes,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Size', 'cwicly'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
              value: imageThumbnailSize,
              options: [{
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Full', 'cwicly'),
                value: 'full'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Large', 'cwicly'),
                value: 'large'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Medium', 'cwicly'),
                value: 'medium'
              }, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Thumbnail', 'cwicly'),
                value: 'thumbnail'
              }],
              onChange: val => setAttributes({
                imageThumbnailSize: val
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
            attribute: "imageAlt",
            attributes: attributes,
            setAttributes: setAttributes,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Alternative Text', 'cwicly'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextareaControl, {
              value: imageAlt,
              onChange: newAlt => setAttributes({
                imageAlt: newAlt
              }),
              help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Describe the purpose of the image for accessibility.', 'cwicly')
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Lightbox', 'cwicly'),
            checked: imageLightbox,
            onChange: val => setAttributes({
              imageLightbox: val
            })
          }), imageURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isDestructive: true,
            onClick: removeImage,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Remove Image', 'cwicly')
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Settings', 'cwicly'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link active', 'cwicly'),
            checked: linkWrapperActive,
            onChange: val => setAttributes({
              linkWrapperActive: val
            })
          }), linkWrapperActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
              attribute: "linkWrapperUrl",
              attributes: attributes,
              setAttributes: setAttributes,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'cwicly'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                value: linkWrapperUrl,
                onChange: val => setAttributes({
                  linkWrapperUrl: val
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open in new tab', 'cwicly'),
              checked: linkWrapperNewTab,
              onChange: val => setAttributes({
                linkWrapperNewTab: val
              })
            })]
          })]
        })]
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_5__.BackgroundHelper, {
        attributes: attributes
      }), displayImageURL ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
        src: displayImageURL,
        alt: displayImageAlt
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaPlaceholder, {
        onSelect: onSelectImage,
        allowedTypes: ['image'],
        multiple: false,
        labels: {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Cwicly Image', 'cwicly')
        }
      })]
    })]
  });
}

/***/ },

/***/ "./src/blocks/image/index.js"
/*!***********************************!*\
  !*** ./src/blocks/image/index.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/image/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/image/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/image', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Image', 'cwicly'),
  icon: 'format-image',
  category: 'cwicly',
  attributes: {
    imageURL: {
      type: 'string'
    },
    imageID: {
      type: 'number'
    },
    imageAlt: {
      type: 'string',
      default: ''
    },
    imageType: {
      type: 'string',
      default: 'static'
    },
    imageThumbnailSize: {
      type: 'string',
      default: 'full'
    },
    imageLightbox: {
      type: 'boolean',
      default: false
    },
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    // Link attributes (standard across blocks)
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    linkWrapperActionLighboxRef: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/image/save.js"
/*!**********************************!*\
  !*** ./src/blocks/image/save.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'image');
  const imageAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getImageAttributes)(attributes);
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const imgElement = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
    id: blockID,
    ...imageAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className)
  });
  if (attributes.imageLightbox) {
    const lightboxAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getImageAttributes)({
      ...attributes,
      lightbox: true
    });
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
      className: "cc-lightbox",
      href: lightboxAttrs.src,
      "data-gallery": attributes.linkWrapperActionLighboxRef || null,
      children: imgElement
    });
  }
  return imgElement;
}

/***/ },

/***/ "./src/blocks/paragraph/edit.js"
/*!**************************************!*\
  !*** ./src/blocks/paragraph/edit.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var _components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/framework/DynamicAttributeWrapper.js */ "./src/components/framework/DynamicAttributeWrapper.js");
/* harmony import */ var _hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks/use-dynamic-data.js */ "./src/hooks/use-dynamic-data.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
// src/blocks/paragraph/edit.js











function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    content,
    classes,
    linkWrapperActive,
    linkWrapperUrl,
    linkWrapperNewTab
  } = attributes;
  const resolvedContent = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_8__.useDynamicData)(content);
  const resolvedLinkURL = (0,_hooks_use_dynamic_data_js__WEBPACK_IMPORTED_MODULE_8__.useDynamicData)(linkWrapperUrl);
  const displayContent = resolvedContent || content;
  const displayLinkURL = resolvedLinkURL || linkWrapperUrl;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getCombinedClassName)(attributes, classes || '')
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToolbarGroup, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        className: "cwicly-primary-tab",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Paragraph Settings', 'cwicly'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
            attribute: "content",
            attributes: attributes,
            setAttributes: setAttributes,
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Content', 'cwicly'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
              style: {
                fontSize: '11px',
                color: '#666',
                margin: '0'
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Use the icon above to bind the entire paragraph to a dynamic source.', 'cwicly')
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link Settings', 'cwicly'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Link active', 'cwicly'),
            checked: linkWrapperActive,
            onChange: val => setAttributes({
              linkWrapperActive: val
            })
          }), linkWrapperActive && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_framework_DynamicAttributeWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
              attribute: "linkWrapperUrl",
              attributes: attributes,
              setAttributes: setAttributes,
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('URL', 'cwicly'),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
                value: linkWrapperUrl,
                onChange: val => setAttributes({
                  linkWrapperUrl: val
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Open in new tab', 'cwicly'),
              checked: linkWrapperNewTab,
              onChange: val => setAttributes({
                linkWrapperNewTab: val
              })
            })]
          })]
        })]
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("p", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText, {
      ...blockProps,
      tagName: "p",
      value: displayContent || '',
      onChange: content => setAttributes({
        content
      }),
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Write your paragraph here…'),
      allowedFormats: ['core/bold', 'core/italic', 'core/link']
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundHelper, {
      attributes: attributes
    })]
  });
}

/***/ },

/***/ "./src/blocks/paragraph/index.js"
/*!***************************************!*\
  !*** ./src/blocks/paragraph/index.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/paragraph/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/paragraph/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/paragraph', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Paragraph', 'cwicly'),
  icon: 'editor-paragraph',
  category: 'cwicly',
  attributes: {
    content: {
      type: 'string',
      source: 'html',
      selector: 'p',
      default: ''
    },
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    // Link attributes
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/paragraph/save.js"
/*!**************************************!*\
  !*** ./src/blocks/paragraph/save.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'paragraph');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'paragraph');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const linkWrapperActive = attributes.linkWrapperActive || linkAttrs?.href;
  const Tag = linkWrapperActive ? attributes.containerLayoutTag || 'a' : attributes.containerLayoutTag || 'p';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...linkAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.RichText.Content, {
      value: attributes.content
    })
  });
}

/***/ },

/***/ "./src/blocks/section/edit.js"
/*!************************************!*\
  !*** ./src/blocks/section/edit.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var _components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/framework/CwiclyInspector.js */ "./src/components/framework/CwiclyInspector.js");
/* harmony import */ var _components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/framework/DesignPanel.js */ "./src/components/framework/DesignPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");








function Edit({
  attributes,
  setAttributes,
  clientId,
  name
}) {
  const {
    containerLayoutTag,
    classes
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    id: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getBlockID)(attributes, clientId),
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.getCombinedClassName)(attributes, classes || '')
  });
  const {
    inspectortab,
    pseudoClass
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition(),
    pseudoClass: select('cwicly/base').getPseudoClass()
  }), []);
  const Tag = containerLayoutTag || 'section';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_CwiclyInspector_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        name: name
      }), inspectortab.tab === 'primary' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-primary-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
          title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Section Settings', 'cwicly'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('HTML Tag', 'cwicly'),
            value: containerLayoutTag,
            options: [{
              label: 'SECTION',
              value: 'section'
            }, {
              label: 'DIV',
              value: 'div'
            }, {
              label: 'HEADER',
              value: 'header'
            }, {
              label: 'FOOTER',
              value: 'footer'
            }, {
              label: 'MAIN',
              value: 'main'
            }, {
              label: 'ARTICLE',
              value: 'article'
            }, {
              label: 'ASIDE',
              value: 'aside'
            }],
            onChange: val => setAttributes({
              containerLayoutTag: val
            })
          })
        })
      }), inspectortab.tab === 'design' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_framework_DesignPanel_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), inspectortab.tab === 'advanced' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        className: "cwicly-advanced-tab",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: {
            padding: '0 16px',
            fontSize: '12px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Advanced Cwicly settings (Classes, Custom CSS).', 'cwicly')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Tag, {
      ...blockProps,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_utils_index_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundHelper, {
        attributes: attributes
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks, {})]
    })]
  });
}

/***/ },

/***/ "./src/blocks/section/index.js"
/*!*************************************!*\
  !*** ./src/blocks/section/index.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _edit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit.js */ "./src/blocks/section/edit.js");
/* harmony import */ var _save_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save.js */ "./src/blocks/section/save.js");




(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('cwicly/section', {
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Section', 'cwicly'),
  icon: 'layout',
  category: 'cwicly',
  attributes: {
    uniqueID: {
      type: 'string'
    },
    classID: {
      type: 'string'
    },
    classes: {
      type: 'string',
      default: ''
    },
    containerLayoutTag: {
      type: 'string',
      default: 'section'
    },
    // Link attributes
    linkWrapperActive: {
      type: 'boolean',
      default: false
    },
    linkWrapperUrl: {
      type: 'string',
      default: ''
    },
    linkWrapperNewTab: {
      type: 'boolean',
      default: false
    },
    linkWrapperRel: {
      type: 'string',
      default: ''
    },
    linkWrapperTitle: {
      type: 'string',
      default: ''
    },
    // Cwicly standard attributes
    isStyling: {
      type: 'boolean',
      default: true
    },
    skeletonActive: {
      type: 'boolean',
      default: true
    },
    htmlAttributes: {
      type: 'array',
      default: []
    },
    relativeStyles: {
      type: 'array',
      default: []
    },
    customCSS: {
      type: 'string',
      default: ''
    },
    globalClasses: {
      type: 'array',
      default: []
    },
    interactions: {
      type: 'object',
      default: {
        click: [],
        dbclick: [],
        scrollinview: []
      }
    }
  },
  supports: {
    anchor: true,
    html: false
  },
  edit: _edit_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/blocks/section/save.js"
/*!************************************!*\
  !*** ./src/blocks/section/save.js ***!
  \************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



function save({
  attributes
}) {
  const blockID = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getBlockID)(attributes, 'section');
  const linkAttrs = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getLinkAttributes)(attributes, 'section');
  const interactions = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getInteractions)(attributes);
  const Tag = attributes.linkWrapperActive || linkAttrs?.href ? attributes.containerLayoutTag || 'a' : attributes.containerLayoutTag || 'section';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Tag, {
    id: blockID,
    ...linkAttrs,
    ...interactions,
    className: (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getCombinedClassName)(attributes, attributes.className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
  });
}

/***/ },

/***/ "./src/components/framework/CwiclyInspector.js"
/*!*****************************************************!*\
  !*** ./src/components/framework/CwiclyInspector.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CwiclyInspector)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var _GlobalStylesPanel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GlobalStylesPanel.js */ "./src/components/framework/GlobalStylesPanel.js");
/* harmony import */ var _GlobalClassPicker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GlobalClassPicker.js */ "./src/components/framework/GlobalClassPicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");







/**
 * CwiclyInspector
 * Handles the tabbed interface in the sidebar (Primary, Design, Advanced).
 */

function CwiclyInspector({
  attributes,
  setAttributes,
  name,
  isComponent,
  isEditingComponent,
  noDesign,
  noAdvanced
}) {
  const {
    writeInspectorPosition
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('cwicly/base');
  const {
    inspectortab
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    inspectortab: select('cwicly/base').getInspectorPosition()
  }), []);

  // List of blocks that use the Cwicly tabbed interface
  const cwiclyBlocks = ['cwicly/heading', 'cwicly/column', 'cwicly/styler', 'cwicly/paragraph', 'cwicly/section', 'cwicly/container', 'cwicly/accordionheader', 'cwicly/accordioncontent', 'cwicly/tab', 'cwicly/tabcontents', 'cwicly/tabcontent', 'cwicly/navitems'];
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    // We no longer force 'design' tab for core blocks, 
    // as they now have dynamic settings in 'primary'.
  }, []);
  const setTab = tab => {
    writeInspectorPosition({
      tab,
      panel: ''
    });
  };
  if (name === 'cwicly/innerblocks') return null;
  if (isComponent && !isEditingComponent) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "cwicly-inspector-header",
      style: {
        padding: '10px',
        borderBottom: '1px solid #ddd'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GlobalClassPicker_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        selectedClasses: attributes.globalClasses,
        onChange: classes => setAttributes({
          globalClasses: classes
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "cwicly-inspector-tabs-container",
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 15,
        background: '#fff',
        borderBottom: '1px solid #ddd',
        marginBottom: '10px'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        style: {
          display: 'flex',
          padding: '4px',
          gap: '8px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3__('cwicly-tab-button', {
            active: inspectortab.tab === 'primary'
          }),
          onClick: () => setTab('primary'),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Primary', 'cwicly')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3__('cwicly-tab-button', {
            active: inspectortab.tab === 'global'
          }),
          onClick: () => setTab('global'),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Global', 'cwicly')
        }), !noDesign && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3__('cwicly-tab-button', {
            active: inspectortab.tab === 'design'
          }),
          onClick: () => setTab('design'),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Design', 'cwicly')
        }), name !== 'cwicly/styler' && !noAdvanced && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          type: "button",
          className: classnames__WEBPACK_IMPORTED_MODULE_3__('cwicly-tab-button', {
            active: inspectortab.tab === 'advanced'
          }),
          onClick: () => setTab('advanced'),
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Advanced', 'cwicly')
        })]
      })
    }), inspectortab.tab === 'global' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GlobalStylesPanel_js__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
}

/***/ },

/***/ "./src/components/framework/DesignPanel.js"
/*!*************************************************!*\
  !*** ./src/components/framework/DesignPanel.js ***!
  \*************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DesignPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _SpacingControl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SpacingControl.js */ "./src/components/framework/SpacingControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");




/**
 * DesignPanel
 * The main container for Cwicly's "Design" tab controls.
 */

function DesignPanel({
  attributes,
  setAttributes,
  pseudoClass
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "cwicly-design-panel",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Spacing', 'cwicly'),
      initialOpen: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SpacingControl_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Padding', 'cwicly'),
        type: "padding",
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("hr", {
        style: {
          margin: '15px 0',
          border: 'none',
          borderTop: '1px solid #eee'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_SpacingControl_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Margin', 'cwicly'),
        type: "margin",
        attributes: attributes,
        setAttributes: setAttributes,
        pseudoClass: pseudoClass
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography', 'cwicly'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        style: {
          fontSize: '12px',
          color: '#666'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Typography controls will be extracted next...', 'cwicly')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background', 'cwicly'),
      initialOpen: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
        style: {
          fontSize: '12px',
          color: '#666'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background controls will be extracted next...', 'cwicly')
      })
    })]
  });
}

/***/ },

/***/ "./src/components/framework/DynamicAttributeWrapper.js"
/*!*************************************************************!*\
  !*** ./src/components/framework/DynamicAttributeWrapper.js ***!
  \*************************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicAttributeWrapper: () => (/* binding */ DynamicAttributeWrapper),
/* harmony export */   "default": () => (/* binding */ DynamicAttributeWrapper)
/* harmony export */ });
/* harmony import */ var _DynamicDataControl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DynamicDataControl.js */ "./src/components/framework/DynamicDataControl.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");



/**
 * DynamicAttributeWrapper
 * Wraps a control with a DynamicData icon.
 */

function DynamicAttributeWrapper({
  attribute,
  attributes,
  setAttributes,
  children,
  label
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "cwicly-dynamic-attribute-wrapper",
    style: {
      position: 'relative',
      marginBottom: '15px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '5px'
      },
      children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label", {
        style: {
          fontSize: '11px',
          fontWeight: '500',
          textTransform: 'uppercase',
          color: '#757575'
        },
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_DynamicDataControl_js__WEBPACK_IMPORTED_MODULE_0__["default"], {
        attribute: attribute,
        attributes: attributes,
        setAttributes: setAttributes
      })]
    }), children]
  });
}


/***/ },

/***/ "./src/components/framework/DynamicDataControl.js"
/*!********************************************************!*\
  !*** ./src/components/framework/DynamicDataControl.js ***!
  \********************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DatabaseIcon: () => (/* binding */ DatabaseIcon),
/* harmony export */   "default": () => (/* binding */ DynamicDataControl)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");





/**
 * Database Icon Component (Exported for reuse)
 */

const DatabaseIcon = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  width: "16",
  height: "16",
  "aria-hidden": "true",
  focusable: "false",
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
    d: "M12 2C6.48 2 2 4.02 2 6.5s4.48 4.5 10 4.5 10-2.02 10-4.5S17.52 2 12 2zm0 18c-5.52 0-10-2.02-10-4.5v-3.48c1.7.98 4.67 1.48 8 1.48s6.3-.5 8-1.48v3.48c0 2.48-4.48 4.5-10 4.5zM2 9.52v2.48c0 2.48 4.48 4.5 10 4.5s10-2.02 10-4.5V9.52c-1.7.98-4.67 1.48-8 1.48s-6.3-.5-8-1.48z"
  })
});

/**
 * DynamicDataControl
 * Handles selecting dynamic data sources for block attributes.
 */
function DynamicDataControl({
  attribute,
  attributes,
  setAttributes,
  label
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [source, setSource] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [field, setField] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const togglePopover = () => setIsOpen(!isOpen);
  const applyBinding = () => {
    if (!source || !field) return;
    const tag = `{${source}=${field}}`;
    setAttributes({
      [attribute]: tag
    });
    setIsOpen(false);
  };
  const clearBinding = () => {
    setAttributes({
      [attribute]: ''
    });
    setIsOpen(false);
  };
  const currentValue = attributes[attribute] || '';
  const isDynamic = currentValue.startsWith('{') && currentValue.endsWith('}');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "cwicly-dynamic-data-control",
    style: {
      display: 'inline-block',
      marginLeft: '5px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isSmall: true,
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DatabaseIcon, {}),
      onClick: togglePopover,
      className: isDynamic ? 'is-active' : '',
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dynamic Data', 'cwicly'),
      style: {
        color: isDynamic ? '#2271b1' : 'inherit',
        padding: '0',
        minWidth: '20px'
      }
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Popover, {
      position: "bottom left",
      onClose: () => setIsOpen(false),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        style: {
          padding: '15px',
          width: '250px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
          style: {
            margin: '0 0 10px 0',
            fontSize: '13px'
          },
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Dynamic Data Source', 'cwicly')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Source', 'cwicly'),
          value: source,
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select Source', 'cwicly'),
            value: ''
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Post Meta', 'cwicly'),
            value: 'meta'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('ACF Field', 'cwicly'),
            value: 'acf'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Site Info', 'cwicly'),
            value: 'site'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Author Info', 'cwicly'),
            value: 'author'
          }],
          onChange: setSource
        }), source && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Field Key', 'cwicly'),
          value: field,
          onChange: setField,
          placeholder: source === 'acf' ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('e.g. hero_image', 'cwicly') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('e.g. my_meta_key', 'cwicly')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '10px',
            marginTop: '15px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isPrimary: true,
            onClick: applyBinding,
            disabled: !source || !field,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Apply', 'cwicly')
          }), isDynamic && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            isDestructive: true,
            onClick: clearBinding,
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Clear', 'cwicly')
          })]
        }), isDynamic && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            marginTop: '10px',
            fontSize: '11px',
            color: '#666'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Current:', 'cwicly')
          }), " ", currentValue]
        })]
      })
    })]
  });
}

/***/ },

/***/ "./src/components/framework/GlobalClassPicker.js"
/*!*******************************************************!*\
  !*** ./src/components/framework/GlobalClassPicker.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobalClassPicker)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");




/**
 * GlobalClassPicker
 * Allows selecting and applying global classes to a block.
 */

function GlobalClassPicker({
  selectedClasses = [],
  onChange
}) {
  const {
    globalClasses
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    globalClasses: select('cwicly/base').getGlobalClasses()
  }), []);
  const classNames = Object.keys(globalClasses);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "cwicly-global-class-picker",
    style: {
      marginBottom: '20px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Global Classes', 'cwicly'),
      help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Apply reusable global classes to this block.', 'cwicly'),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FormTokenField, {
        value: selectedClasses,
        suggestions: classNames,
        onChange: onChange,
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Search or select classes...', 'cwicly')
      })
    })
  });
}

/***/ },

/***/ "./src/components/framework/GlobalStylesPanel.js"
/*!*******************************************************!*\
  !*** ./src/components/framework/GlobalStylesPanel.js ***!
  \*******************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GlobalStylesPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");






/**
 * GlobalStylesPanel
 * Provides UI for managing global classes, variables, and pseudo-states.
 */

function GlobalStylesPanel() {
  const {
    globalClasses,
    globalVariables,
    activePseudoState,
    pseudoStates
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    globalClasses: select('cwicly/base').getGlobalClasses(),
    globalVariables: select('cwicly/base').getGlobalVariables(),
    activePseudoState: select('cwicly/base').getActivePseudoState(),
    pseudoStates: select('cwicly/base').getPseudoStates()
  }), []);
  const {
    addGlobalClass,
    updateGlobalVariable,
    setActivePseudoState,
    removeGlobalClass,
    saveGlobalStyles
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useDispatch)('cwicly/base');
  const [activeTab, setActiveTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('classes');
  const [newClassName, setNewClassName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [newVarName, setNewVarName] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [newVarValue, setNewVarValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const handleAddClass = () => {
    if (!newClassName) return;
    const formattedName = newClassName.startsWith('.') ? newClassName : `.${newClassName}`;
    addGlobalClass(formattedName, {});
    setNewClassName('');
    saveGlobalStyles();
  };
  const handleAddVariable = () => {
    if (!newVarName || !newVarValue) return;
    const formattedName = newVarName.startsWith('--') ? newVarName : `--${newVarName}`;
    updateGlobalVariable(formattedName, newVarValue);
    setNewVarName('');
    setNewVarValue('');
    saveGlobalStyles();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "cwicly-global-styles-panel",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "panel-header",
      style: {
        padding: '10px',
        background: '#f0f0f0',
        borderBottom: '1px solid #ccc'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        style: {
          margin: 0,
          fontSize: '13px'
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Global Styles', 'cwicly')
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "panel-tabs",
      style: {
        display: 'flex',
        borderBottom: '1px solid #ccc'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isTertiary: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_4__({
          'is-active': activeTab === 'classes'
        }),
        onClick: () => setActiveTab('classes'),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Classes', 'cwicly')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isTertiary: true,
        className: classnames__WEBPACK_IMPORTED_MODULE_4__({
          'is-active': activeTab === 'variables'
        }),
        onClick: () => setActiveTab('variables'),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Variables', 'cwicly')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "panel-content",
      style: {
        padding: '10px'
      },
      children: [activeTab === 'classes' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "classes-tab",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '5px',
            marginBottom: '15px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            value: newClassName,
            onChange: setNewClassName,
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Enter class name...', 'cwicly'),
            hideLabelFromVision: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            onClick: handleAddClass,
            children: "+"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "global-classes-list",
          children: Object.keys(globalClasses).map(name => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px',
              borderBottom: '1px solid #eee'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                fontSize: '12px',
                fontFamily: 'monospace'
              },
              children: name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isDestructive: true,
              isSmall: true,
              icon: "no-alt",
              onClick: () => removeGlobalClass(name)
            })]
          }, name))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "pseudo-state-manager",
          style: {
            marginTop: '20px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Active Pseudo-State', 'cwicly'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("select", {
              value: activePseudoState,
              onChange: e => setActivePseudoState(e.target.value),
              style: {
                width: '100%',
                padding: '5px'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: "",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('None', 'cwicly')
              }), pseudoStates.map(state => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
                value: state.id,
                children: state.label
              }, state.id))]
            })
          })
        })]
      }), activeTab === 'variables' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "variables-tab",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr auto',
            gap: '5px',
            marginBottom: '15px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            value: newVarName,
            onChange: setNewVarName,
            placeholder: "--name",
            hideLabelFromVision: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
            value: newVarValue,
            onChange: setNewVarValue,
            placeholder: "#000",
            hideLabelFromVision: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
            isPrimary: true,
            onClick: handleAddVariable,
            children: "+"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "global-variables-list",
          children: Object.entries(globalVariables).map(([name, value]) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            style: {
              display: 'grid',
              gridTemplateColumns: '1fr 1fr auto',
              alignItems: 'center',
              padding: '5px',
              borderBottom: '1px solid #eee'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                fontSize: '11px',
                fontFamily: 'monospace'
              },
              children: name
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              style: {
                fontSize: '11px'
              },
              children: value
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
              isSmall: true,
              icon: "no-alt",
              onClick: () => updateGlobalVariable(name, null)
            })]
          }, name))
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/components/framework/SpacingControl.js"
/*!****************************************************!*\
  !*** ./src/components/framework/SpacingControl.js ***!
  \****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SpacingControl)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");






/**
 * SpacingControl
 * Reconstructs Cwicly's responsive margin/padding control.
 */

function SpacingControl({
  label,
  type,
  attributes,
  setAttributes,
  pseudoClass
}) {
  const {
    previewDeviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => ({
    previewDeviceType: select('cwicly/base').getPreviewDeviceType()
  }), []);
  const [isLinked, setIsLinked] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const values = attributes[type] || {};
  const currentValues = values[previewDeviceType] || values.Desktop || {
    top: '',
    right: '',
    bottom: '',
    left: ''
  };
  const updateValue = (side, value) => {
    const newValues = {
      ...values
    };
    if (!newValues[previewDeviceType]) newValues[previewDeviceType] = {
      ...currentValues
    };
    if (isLinked) {
      newValues[previewDeviceType] = {
        top: value,
        right: value,
        bottom: value,
        left: value
      };
    } else {
      newValues[previewDeviceType][side] = value;
    }
    setAttributes({
      [type]: newValues
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "cwicly-spacing-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        style: {
          fontSize: '11px',
          textTransform: 'uppercase',
          fontWeight: '600'
        },
        children: label
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
        isSmall: true,
        icon: isLinked ? 'admin-links' : 'editor-unlink',
        onClick: () => setIsLinked(!isLinked),
        label: isLinked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Unlink Sides', 'cwicly') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Link Sides', 'cwicly')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '8px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "spacing-input-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          children: "T"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "text",
          value: currentValues.top,
          onChange: e => updateValue('top', e.target.value),
          placeholder: "-"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "spacing-input-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          children: "R"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "text",
          value: currentValues.right,
          onChange: e => updateValue('right', e.target.value),
          placeholder: "-"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "spacing-input-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          children: "B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "text",
          value: currentValues.bottom,
          onChange: e => updateValue('bottom', e.target.value),
          placeholder: "-"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "spacing-input-wrap",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("label", {
          children: "L"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
          type: "text",
          value: currentValues.left,
          onChange: e => updateValue('left', e.target.value),
          placeholder: "-"
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/hooks/use-dynamic-data.js"
/*!***************************************!*\
  !*** ./src/hooks/use-dynamic-data.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDynamicData: () => (/* binding */ useDynamicData)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");



const cache = new Map();

/**
 * Hook to resolve dynamic data tags in the editor.
 * @param {string} tag The dynamic tag (e.g., {acffield=hero_image})
 * @returns {any} The resolved value.
 */
function useDynamicData(tag) {
  const [resolvedValue, setResolvedValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const postId = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.useSelect)(select => select('core/editor').getCurrentPostId(), []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!tag || !tag.startsWith('{') || !tag.endsWith('}')) {
      setResolvedValue(null);
      return;
    }
    const cacheKey = `${tag}-${postId}`;
    if (cache.has(cacheKey)) {
      setResolvedValue(cache.get(cacheKey));
      return;
    }

    // Parse tag for batch-style dynamics endpoint
    // Format: {source=field}
    const match = tag.match(/^\{([\w-]+)=([\w-]+)\}$/);
    if (!match) return;
    const [, source, field] = match;

    // Construct request body matching Backend_API::dynamics expectations
    const body = {
      backend_info: [{
        [Date.now()]: {
          [source === 'acf' ? 'acffield' : source]: {
            [source === 'acf' ? 'acffield' : 'field']: field,
            postid: postId
          }
        }
      }]
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_1__({
      path: 'cwicly/v1/dynamics',
      method: 'POST',
      data: body
    }).then(response => {
      // response structure: { acffield: { time: { ... } } }
      // This is a bit complex due to the nested loops in PHP.
      // We'll try to find the value in the response.
      let value = null;
      const sourceKey = source === 'acf' ? 'acffield' : source;
      if (response[sourceKey]) {
        const times = Object.values(response[sourceKey]);
        if (times.length > 0) {
          value = times[0];
        }
      }

      // Handle special cases (e.g., ACF Image object)
      if (value && typeof value === 'object' && value.url) {
        value = value.url;
      }
      cache.set(cacheKey, value);
      setResolvedValue(value);
    }).catch(err => {
      console.error('Cwicly Dynamic Data Error:', err);
      setResolvedValue(null);
    });
  }, [tag, postId]);
  return resolvedValue;
}

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _store_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/index.js */ "./src/store/index.js");
/* harmony import */ var _blocks_columns_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/columns/index.js */ "./src/blocks/columns/index.js");
/* harmony import */ var _blocks_column_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/column/index.js */ "./src/blocks/column/index.js");
/* harmony import */ var _blocks_section_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/section/index.js */ "./src/blocks/section/index.js");
/* harmony import */ var _blocks_container_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/container/index.js */ "./src/blocks/container/index.js");
/* harmony import */ var _blocks_heading_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/heading/index.js */ "./src/blocks/heading/index.js");
/* harmony import */ var _blocks_paragraph_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/paragraph/index.js */ "./src/blocks/paragraph/index.js");
/* harmony import */ var _blocks_image_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/image/index.js */ "./src/blocks/image/index.js");
/* harmony import */ var _blocks_button_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/button/index.js */ "./src/blocks/button/index.js");
/**
 * Cwicly Rebuilt Entry Point
 */










// Add more blocks here as they are rebuilt

/***/ },

/***/ "./src/store/additional-stores.js"
/*!****************************************!*\
  !*** ./src/store/additional-stores.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/**
 * Cwicly Additional Stores
 */

const ab = e => e;

// Navigator Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/navigator', {
  reducer: (state = false, action) => {
    return action.type === 'CC_NAVIGATOR' ? action.ccNavigator : state;
  },
  selectors: {
    getNavigatorState: state => state
  },
  actions: {
    ccNavigator: value => ({
      type: 'CC_NAVIGATOR',
      ccNavigator: value
    })
  }
});

// License Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/license', {
  reducer: (state = '', action) => {
    return action.type === 'CC_LICENSE' ? action.ccLicense : state;
  },
  selectors: {
    getLicenseState: state => state
  },
  actions: {
    ccLicense: value => ({
      type: 'CC_LICENSE',
      ccLicense: value
    })
  }
});

// Breakpoints Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/breakpoints', {
  reducer: (state = {}, action) => {
    return action.type === 'CC_BREAKPOINTS' ? action.breakpointer : state;
  },
  selectors: {
    getValue: ab
  },
  actions: {
    breakpointer: value => ({
      type: 'CC_BREAKPOINTS',
      breakpointer: value
    })
  }
});

// Block IDs Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/blockids', {
  reducer: (state = [], action) => {
    return action.type === 'BLOCK_IDS' ? action.blockIds : state;
  },
  selectors: {
    getBlockIds: state => state
  },
  actions: {
    blockIds: value => ({
      type: 'BLOCK_IDS',
      blockIds: value
    })
  }
});

// Dynamic Preview Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/dynamicpreview', {
  reducer: (state = void 0, action) => {
    return action.type === 'DYNAMICPREVIEW' ? action.dynamicpreview : state;
  },
  selectors: {
    getDynamicPreview: state => state
  },
  actions: {
    dynamicpreview: value => ({
      type: 'DYNAMICPREVIEW',
      dynamicpreview: value
    })
  }
});

// Backend Back Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/backendback', {
  reducer: (state = false, action) => {
    return action.type === 'BACKENDBACK' ? action.backendBack : state;
  },
  selectors: {
    getValue: ab
  },
  actions: {
    backendBack: value => ({
      type: 'BACKENDBACK',
      backendBack: value
    })
  }
});

// Hide Modals Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/hidemodals', {
  reducer: (state = false, action) => {
    return action.type === 'HIDE_MODALS' ? action.hideModals : state;
  },
  selectors: {
    getHideModals: state => state
  },
  actions: {
    hideModals: value => ({
      type: 'HIDE_MODALS',
      hideModals: value
    })
  }
});

// My Collection Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/mycollection', {
  reducer: (state = [], action) => {
    return action.type === 'MY_COLLECTION' ? action.myCollection : state;
  },
  selectors: {
    getMyCollection: state => state
  },
  actions: {
    myCollection: value => ({
      type: 'MY_COLLECTION',
      myCollection: value
    })
  }
});

// Slider IDs Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/sliderids', {
  reducer: (state = [], action) => {
    return action.type === 'SLIDER_IDS' ? action.sliderIds : state;
  },
  selectors: {
    getSliderIds: state => state
  },
  actions: {
    sliderIds: value => ({
      type: 'SLIDER_IDS',
      sliderIds: value
    })
  }
});

// Classes Store
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/classes', {
  reducer: (state = {}, action) => {
    if (action.type === 'CC_CLASSES') {
      const newState = {
        ...state
      };
      const [key, value] = action.ccClasses;
      newState[key] = value;
      return newState;
    }
    if (action.type === 'CC_SET_CLASSES') {
      return {
        ...state,
        ...action.setClasses
      };
    }
    return action.type === 'CC_NO_CLASSES' ? action.noClasses : state;
  },
  selectors: {
    getClasses: state => state
  },
  actions: {
    ccClasses: value => ({
      type: 'CC_CLASSES',
      ccClasses: value
    }),
    setClasses: value => ({
      type: 'CC_SET_CLASSES',
      setClasses: value
    }),
    noClasses: value => ({
      type: 'CC_NO_CLASSES',
      noClasses: value
    })
  }
});

/***/ },

/***/ "./src/store/base/actions.js"
/*!***********************************!*\
  !*** ./src/store/base/actions.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   writeClasses: () => (/* binding */ writeClasses),
/* harmony export */   writeDarkMode: () => (/* binding */ writeDarkMode),
/* harmony export */   writeGlobalClasses: () => (/* binding */ writeGlobalClasses),
/* harmony export */   writeGlobalDarkMode: () => (/* binding */ writeGlobalDarkMode),
/* harmony export */   writeInspectorPosition: () => (/* binding */ writeInspectorPosition),
/* harmony export */   writeInspectorWindowPosition: () => (/* binding */ writeInspectorWindowPosition),
/* harmony export */   writeInstances: () => (/* binding */ writeInstances),
/* harmony export */   writeNavigatorHeight: () => (/* binding */ writeNavigatorHeight),
/* harmony export */   writePreviewDeviceType: () => (/* binding */ writePreviewDeviceType),
/* harmony export */   writePseudoClass: () => (/* binding */ writePseudoClass),
/* harmony export */   writeSelectedGlobalClass: () => (/* binding */ writeSelectedGlobalClass),
/* harmony export */   writeTabsState: () => (/* binding */ writeTabsState)
/* harmony export */ });
/**
 * Cwicly Base Store Actions
 */

const writeInspectorPosition = position => ({
  type: 'CC_INSPECTOR_POSITION',
  writeInspectorPosition: position
});
const writePreviewDeviceType = deviceType => ({
  type: 'CC_PREVIEW_DEVICE_TYPE',
  writePreviewDeviceType: deviceType
});
const writePseudoClass = pseudoClass => ({
  type: 'CC_PSEUDOCLASS',
  writePseudoClass: pseudoClass
});
const writeDarkMode = darkMode => ({
  type: 'CC_DARKMODE',
  writeDarkMode: darkMode
});
const writeGlobalDarkMode = enabled => ({
  type: 'CC_GLOBAL_DARK_MODE',
  writeGlobalDarkMode: enabled
});
const writeNavigatorHeight = height => ({
  type: 'CC_NAVIGATOR_HEIGHT',
  writeNavigatorHeight: height
});
const writeInspectorWindowPosition = position => {
  localStorage.setItem('cwicly-window-inspector-position', position);
  return {
    type: 'CC_WINDOW_INSPECTOR_POSITION',
    writeInspectorWindowPosition: position
  };
};
const writeInstances = instances => ({
  type: 'CC_INSTANCES',
  writeInstances: instances
});
const writeTabsState = tabsState => ({
  type: 'CC_TABS_STATE',
  writeTabsState: tabsState
});
const writeClasses = (classes, merge = true) => {
  let finalClasses = classes;
  if (merge) {
    // This would typically involve a select() which is better handled in a resolver or middle-ware like logic
    // For simplicity in this standalone action:
    const currentClasses = wp.data.select('cwicly/base').getClasses() || {};
    finalClasses = {
      ...currentClasses,
      ...classes
    };
  }
  return {
    type: 'CC_CLASSES',
    writeClasses: finalClasses
  };
};
const writeGlobalClasses = globalClasses => ({
  type: 'CC_GLOBAL_CLASSES',
  writeGlobalClasses: globalClasses
});
const writeSelectedGlobalClass = selectedClass => ({
  type: 'CC_SELECTED_GLOBAL_CLASS',
  writeSelectedGlobalClass: selectedClass
});

/***/ },

/***/ "./src/store/base/index.js"
/*!*********************************!*\
  !*** ./src/store/base/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer.js */ "./src/store/base/reducer.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions.js */ "./src/store/base/actions.js");
/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors.js */ "./src/store/base/selectors.js");
/* harmony import */ var _global_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/index.js */ "./src/store/global/index.js");
/**
 * Cwicly Base Store
 */






// Combine reducers – keeping base at top level for compatibility
// but adding global as a dedicated slice might be safer.
// However, existing blocks might expect flat state.
// Let's use a custom root reducer to merge them.

const rootReducer = (state, action) => {
  // If we want to keep it flat:
  const nextBaseState = (0,_reducer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(state, action);
  const nextGlobalState = (0,_global_index_js__WEBPACK_IMPORTED_MODULE_4__.reducer)(state, action);

  // We should probably partition the state if we want true modularity, 
  // but the user said "Merge global slice".
  // For now, let's keep it simple and just run both across the same state.
  // This allows the global reducer to manage its specific keys.

  // Actually, a better way for @wordpress/data is separate slices if we use combineReducers,
  // but that changes state structure (state.global.classes).
  // The user's selectors expect state.classes (based on base selectors).

  return {
    ...nextBaseState,
    ...nextGlobalState
  };
};
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.registerStore)('cwicly/base', {
  reducer: rootReducer,
  actions: {
    ..._actions_js__WEBPACK_IMPORTED_MODULE_2__,
    ..._global_index_js__WEBPACK_IMPORTED_MODULE_4__.actions
  },
  selectors: {
    ..._selectors_js__WEBPACK_IMPORTED_MODULE_3__,
    ..._global_index_js__WEBPACK_IMPORTED_MODULE_4__.selectors
  },
  resolvers: {
    ..._global_index_js__WEBPACK_IMPORTED_MODULE_4__.resolvers
  }
});

/***/ },

/***/ "./src/store/base/reducer.js"
/*!***********************************!*\
  !*** ./src/store/base/reducer.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/**
 * Cwicly Base Store Reducer
 */

const lb = {}; // Default inserter state placeholder

const initialState = {
  instances: {},
  designLibraryOpen: false,
  saveDesignLibrary: '',
  globalActiveStyle: '',
  globalFonts: '',
  classes: {},
  newBlocks: [],
  prevDevice: {},
  prevGlobalCount: {},
  globalClassesBlockEdit: {},
  shellEdit: {},
  externalClasses: [],
  roleEditor: {},
  navigatorHeight: 0,
  postTemplateSize: false,
  tabsState: {},
  inserterState: lb,
  primaryTabPosition: {},
  inspectorWindowPosition: localStorage.getItem('cwicly-window-inspector-position') || 'right',
  allImageSizes: {},
  globalParts: {},
  postsPerPage: '',
  copyLinked: 'false',
  saveGlobalStylesheet: false,
  sectionDefaults: {},
  additionalClassesBool: false,
  isResolving: [],
  wooProductTypes: {},
  wooAttributes: [],
  wooAttributesTerms: {},
  wooShippingClasses: [],
  wooTaxClasses: [],
  googleFonts: {},
  wooProducts: {},
  userCapabilities: {},
  userRoles: {},
  hideHooks: localStorage.getItem('cwicly-hook-behaviour') || 'false',
  globalInteractions: {},
  altKey: false,
  hideModals: localStorage.getItem('cwicly-modal-behaviour') || 'false',
  pseudoClass: '',
  darkMode: localStorage.getItem('cwicly-darkmode') || 'inherit',
  globalClasses: {},
  globalClassesRendered: {},
  selectedGlobalClass: '',
  globalStylesheets: [],
  inspectorPosition: {
    tab: 'primary',
    panel: ''
  },
  popoverRefs: {
    empty: {}
  },
  popoverRefsPrep: [],
  inspectorHeight: false,
  inspectorWidth: false,
  localFonts: {},
  localActiveFonts: [],
  localFontProcessing: false,
  isDownloadingGoogleFont: false,
  heartbeat: {},
  navigation: {},
  navRelativeStyles: {},
  classPreview: {},
  components: {},
  singleComponents: {},
  tailwindClasses: [],
  componentLibraryOpen: false,
  componentVariants: {},
  hoveredBlock: '',
  componentsFolders: [],
  globalDarkMode: false,
  darkModeSelectors: '.dark',
  // Fallback if cwicly_info is not available (e.g. during testing)
  previewDeviceType: typeof cwicly_info !== 'undefined' && cwicly_info.clientView ? cwicly_info.clientView : typeof cwicly_info !== 'undefined' ? cwicly_info.mainBreakpoint : 'Desktop',
  designSearch: ''
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CC_INSPECTOR_POSITION':
      return {
        ...state,
        inspectorPosition: action.writeInspectorPosition
      };
    case 'CC_PREVIEW_DEVICE_TYPE':
      return {
        ...state,
        previewDeviceType: action.writePreviewDeviceType
      };
    case 'CC_PSEUDOCLASS':
      return {
        ...state,
        pseudoClass: action.writePseudoClass
      };
    case 'CC_DARKMODE':
      return {
        ...state,
        darkMode: action.writeDarkMode
      };
    case 'CC_GLOBAL_DARK_MODE':
      return {
        ...state,
        globalDarkMode: action.writeGlobalDarkMode
      };
    case 'CC_CLASSES':
      return {
        ...state,
        classes: action.writeClasses
      };
    case 'CC_GLOBAL_CLASSES':
      return {
        ...state,
        globalClasses: action.writeGlobalClasses
      };
    case 'CC_SELECTED_GLOBAL_CLASS':
      return {
        ...state,
        selectedGlobalClass: action.writeSelectedGlobalClass
      };
    case 'CC_WINDOW_INSPECTOR_POSITION':
      return {
        ...state,
        inspectorWindowPosition: action.writeInspectorWindowPosition
      };
    case 'CC_NAVIGATOR_HEIGHT':
      return {
        ...state,
        navigatorHeight: action.writeNavigatorHeight
      };
    case 'CC_INSTANCES':
      return {
        ...state,
        instances: action.writeInstances
      };
    case 'CC_TABS_STATE':
      return {
        ...state,
        tabsState: action.writeTabsState
      };
    // Add more cases as needed for full framework support
    default:
      return state;
  }
}

/***/ },

/***/ "./src/store/base/selectors.js"
/*!*************************************!*\
  !*** ./src/store/base/selectors.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBase: () => (/* binding */ getBase),
/* harmony export */   getClasses: () => (/* binding */ getClasses),
/* harmony export */   getDarkMode: () => (/* binding */ getDarkMode),
/* harmony export */   getGlobalClasses: () => (/* binding */ getGlobalClasses),
/* harmony export */   getGlobalClassesRendered: () => (/* binding */ getGlobalClassesRendered),
/* harmony export */   getGlobalDarkMode: () => (/* binding */ getGlobalDarkMode),
/* harmony export */   getInspectorPosition: () => (/* binding */ getInspectorPosition),
/* harmony export */   getInspectorWindowPosition: () => (/* binding */ getInspectorWindowPosition),
/* harmony export */   getInstances: () => (/* binding */ getInstances),
/* harmony export */   getNavigatorHeight: () => (/* binding */ getNavigatorHeight),
/* harmony export */   getPreviewDeviceType: () => (/* binding */ getPreviewDeviceType),
/* harmony export */   getPseudoClass: () => (/* binding */ getPseudoClass),
/* harmony export */   getSelectedGlobalClass: () => (/* binding */ getSelectedGlobalClass),
/* harmony export */   getTabsState: () => (/* binding */ getTabsState)
/* harmony export */ });
/**
 * Cwicly Base Store Selectors
 */

const getBase = state => state;
const getInspectorPosition = state => state.inspectorPosition;
const getPreviewDeviceType = state => state.previewDeviceType;
const getPseudoClass = state => state.pseudoClass;
const getDarkMode = state => state.darkMode;
const getGlobalDarkMode = state => state.globalDarkMode;
const getClasses = state => state.classes;
const getGlobalClasses = state => state.globalClasses;
const getSelectedGlobalClass = state => state.selectedGlobalClass;
const getNavigatorHeight = state => state.navigatorHeight;
const getInspectorWindowPosition = state => state.inspectorWindowPosition;
const getInstances = state => state.instances;
const getTabsState = state => state.tabsState;
const getGlobalClassesRendered = state => state.globalClassesRendered;

/***/ },

/***/ "./src/store/global/actions.js"
/*!*************************************!*\
  !*** ./src/store/global/actions.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addGlobalClass: () => (/* binding */ addGlobalClass),
/* harmony export */   removeGlobalClass: () => (/* binding */ removeGlobalClass),
/* harmony export */   saveGlobalStyles: () => (/* binding */ saveGlobalStyles),
/* harmony export */   setActivePseudoState: () => (/* binding */ setActivePseudoState),
/* harmony export */   updateGlobalClass: () => (/* binding */ updateGlobalClass),
/* harmony export */   updateGlobalVariable: () => (/* binding */ updateGlobalVariable)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");

const addGlobalClass = (className, styles = {}) => ({
  type: 'CC_GLOBAL_ADD_CLASS',
  className,
  styles
});
const updateGlobalClass = (className, styles) => ({
  type: 'CC_GLOBAL_UPDATE_CLASS',
  className,
  styles
});
const removeGlobalClass = className => ({
  type: 'CC_GLOBAL_REMOVE_CLASS',
  className
});
const updateGlobalVariable = (name, value) => ({
  type: 'CC_GLOBAL_UPDATE_VARIABLE',
  name,
  value
});
const setActivePseudoState = pseudoState => ({
  type: 'CC_GLOBAL_ACTIVE_PSEUDO_STATE',
  pseudoState
});

/**
 * Persistence action
 */
const saveGlobalStyles = () => async (dispatch, getState) => {
  const state = getState();
  const globalStyles = {
    classes: state.classes || [],
    variables: state.variables || [],
    pseudoStates: state.pseudoStates || {}
  };
  try {
    await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__({
      path: '/cwicly/v1/options',
      method: 'POST',
      data: {
        option: 'cwicly_global_styles',
        value: JSON.stringify(globalStyles)
      }
    });
  } catch (error) {
    console.error('Failed to save global styles:', error);
  }
};

/***/ },

/***/ "./src/store/global/index.js"
/*!***********************************!*\
  !*** ./src/store/global/index.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actions: () => (/* reexport module object */ _actions_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   reducer: () => (/* reexport safe */ _reducer_js__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   resolvers: () => (/* reexport module object */ _resolvers_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   selectors: () => (/* reexport module object */ _selectors_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _reducer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer.js */ "./src/store/global/reducer.js");
/* harmony import */ var _actions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.js */ "./src/store/global/actions.js");
/* harmony import */ var _selectors_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors.js */ "./src/store/global/selectors.js");
/* harmony import */ var _resolvers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers.js */ "./src/store/global/resolvers.js");
/**
 * Global Store Exports
 */






/***/ },

/***/ "./src/store/global/reducer.js"
/*!*************************************!*\
  !*** ./src/store/global/reducer.js ***!
  \*************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reducer)
/* harmony export */ });
/**
 * Cwicly Global Store Reducer
 */

const initialState = {
  classes: {},
  variables: {},
  activePseudoState: '',
  // Reusable pseudo-states configuration
  pseudoStates: [{
    id: 'hover',
    label: 'Hover'
  }, {
    id: 'focus',
    label: 'Focus'
  }, {
    id: 'active',
    label: 'Active'
  }, {
    id: 'before',
    label: 'Before'
  }, {
    id: 'after',
    label: 'After'
  }]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case 'CC_GLOBAL_SET_DATA':
      return {
        ...state,
        ...action.data
      };
    case 'CC_GLOBAL_ADD_CLASS':
      return {
        ...state,
        classes: {
          ...state.classes,
          [action.className]: {
            styles: action.styles || {},
            id: action.id || action.className
          }
        }
      };
    case 'CC_GLOBAL_UPDATE_CLASS':
      return {
        ...state,
        classes: {
          ...state.classes,
          [action.className]: {
            ...(state.classes[action.className] || {}),
            styles: action.styles
          }
        }
      };
    case 'CC_GLOBAL_REMOVE_CLASS':
      const newClasses = {
        ...state.classes
      };
      delete newClasses[action.className];
      return {
        ...state,
        classes: newClasses
      };
    case 'CC_GLOBAL_UPDATE_VARIABLE':
      return {
        ...state,
        variables: {
          ...state.variables,
          [action.name]: action.value
        }
      };
    case 'CC_GLOBAL_ACTIVE_PSEUDO_STATE':
      return {
        ...state,
        activePseudoState: action.pseudoState
      };
    default:
      return state;
  }
}

/***/ },

/***/ "./src/store/global/resolvers.js"
/*!***************************************!*\
  !*** ./src/store/global/resolvers.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGlobalStyles: () => (/* binding */ getGlobalStyles)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/store/global/index.js");


const getGlobalStyles = () => async ({
  dispatch
}) => {
  try {
    const response = await _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__({
      path: '/cwicly/v1/options?option=cwicly_global_styles'
    });
    if (response && response.success && response.settings) {
      const data = typeof response.settings === 'string' ? JSON.parse(response.settings) : response.settings;
      dispatch({
        type: 'CC_GLOBAL_SET_DATA',
        data
      });
    }
  } catch (error) {
    console.error('Failed to fetch global styles:', error);
  }
};

/***/ },

/***/ "./src/store/global/selectors.js"
/*!***************************************!*\
  !*** ./src/store/global/selectors.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getActivePseudoState: () => (/* binding */ getActivePseudoState),
/* harmony export */   getClassByName: () => (/* binding */ getClassByName),
/* harmony export */   getGlobalClasses: () => (/* binding */ getGlobalClasses),
/* harmony export */   getGlobalVariables: () => (/* binding */ getGlobalVariables),
/* harmony export */   getPseudoStates: () => (/* binding */ getPseudoStates)
/* harmony export */ });
/**
 * Cwicly Global Store Selectors
 */

const getGlobalClasses = state => state.classes || {};
const getClassByName = (state, className) => (state.classes || {})[className];
const getGlobalVariables = state => state.variables || {};
const getActivePseudoState = state => state.activePseudoState;
const getPseudoStates = state => state.pseudoStates;

/***/ },

/***/ "./src/store/index.js"
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _base_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base/index.js */ "./src/store/base/index.js");
/* harmony import */ var _additional_stores_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./additional-stores.js */ "./src/store/additional-stores.js");
/**
 * Cwicly Stores
 */


// Add more stores here as they are extracted (classes, etc.)

/***/ },

/***/ "./src/utils/background-helper.js"
/*!****************************************!*\
  !*** ./src/utils/background-helper.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundHelper: () => (/* binding */ BackgroundHelper)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");


/**
 * Semantic replacement for the Background helper component.
 */

function BackgroundHelper({
  attributes
}) {
  const {
    backgroundYoutubeURL,
    backgroundClipPathContent,
    backgroundClipPathBlob,
    backgroundVideoURL,
    backgroundType,
    backgroundVideoSource,
    backgroundVideoLoop,
    id,
    classID,
    separatorTypeTop,
    separatorTypeBottom
  } = attributes;

  // Assuming a helper for device pseudo-class (like (0, i.u)() in the original)
  // This would typically come from a store or a custom hook.
  const currentDevice = 'desktop'; // Placeholder logic

  const youtubeID = backgroundYoutubeURL?.split("v=")[1]?.substring(0, 11);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [backgroundClipPathContent && backgroundClipPathBlob && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
      height: "0",
      width: "0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("defs", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("clipPath", {
          id: `${classID}-path`,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
            d: backgroundClipPathContent
          })
        })
      })
    }), backgroundVideoURL && backgroundType?.[currentDevice] === 'video' && backgroundVideoSource === 'mp4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      id: `${id}-player-wrapper`,
      className: "cc-background-video",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("video", {
        id: `${id}-player`,
        loop: backgroundVideoLoop ? null : true,
        muted: true,
        autoPlay: true,
        playsInline: true,
        src: backgroundVideoURL
      })
    }), backgroundType?.[currentDevice] === 'video' && backgroundVideoSource === 'youtube' && backgroundYoutubeURL && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        id: `${id}-player-wrapper`,
        className: "cc-background-video"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "video-background-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "video-background",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("iframe", {
            src: `https://www.youtube-nocookie.com/embed/${youtubeID}?controls=0&modestbranding=1&showinfo=0&rel=0&autoplay=1&loop=${backgroundVideoLoop ? 0 : 1}&mute=1&playlist=${youtubeID}`,
            frameBorder: "0",
            allowFullScreen: true
          })
        })
      })]
    }), (backgroundVideoURL || backgroundYoutubeURL) && backgroundType?.[currentDevice] === 'video' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "cc-overlay-video-background"
    })]
  });
}

/***/ },

/***/ "./src/utils/block-id.js"
/*!*******************************!*\
  !*** ./src/utils/block-id.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBlockID: () => (/* binding */ getBlockID)
/* harmony export */ });
/**
 * Semantic replacement for the block ID helper.
 */
function getBlockID(attributes, blockName = "") {
  if (attributes.linkWrapperSourceDynamic === 'commentcancelreply') {
    return 'cancel-comment-reply-link{idadd}';
  }

  // Check if we should remove IDs and classes based on global info
  const removeIDsClasses = window.cwicly_info?.removeIDsClasses === 'true';
  const shouldGenerateID = !removeIDsClasses || ['nav', 'popover', 'querypagination', 'video', 'tabcontents', 'tabcontent', 'tablist', 'accordionheader', 'accordions', 'accordion', 'modal', 'slider', 'query', 'queryTemplate', 'tab', 'filter', 'querypaginationnumbers'].includes(blockName) || attributes.forceShowID || attributes.repeaterMasonry || attributes.interactions && attributes.interactions.length || attributes.dynamicContext === 'woocart';
  if (shouldGenerateID) {
    if (attributes?.componentConnectors?.id?.ref) {
      return `{component=parameter=${attributes.componentConnectors.id.ref}}{idadd}`;
    }
    return `${attributes.id}{idadd}`;
  }
  return null;
}

/***/ },

/***/ "./src/utils/global-classes-helper.js"
/*!********************************************!*\
  !*** ./src/utils/global-classes-helper.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCombinedClassName: () => (/* binding */ getCombinedClassName)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");


/**
 * Merges block attributes into a single className string.
 * @param {Object} attributes - Block attributes.
 * @param {string} localClassName - Gutenberg's default className.
 * @returns {string} - Combined className.
 */
const getCombinedClassName = (attributes, localClassName = '') => {
  const {
    classes,
    globalClasses = []
  } = attributes;

  // Convert global classes (which might be ".class-name") to "class-name"
  const parsedGlobalClasses = globalClasses.map(cls => cls.startsWith('.') ? cls.slice(1) : cls);
  return classnames__WEBPACK_IMPORTED_MODULE_0__(localClassName, classes, ...parsedGlobalClasses);
};

/***/ },

/***/ "./src/utils/image-attributes.js"
/*!***************************************!*\
  !*** ./src/utils/image-attributes.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getImageAttributes: () => (/* binding */ getImageAttributes)
/* harmony export */ });
/**
 * Semantic replacement for image attributes helper.
 */
function getImageAttributes(attributes) {
  const imageAttrs = {};
  let fallbackValue = "false";
  if (attributes.dynamicStaticFallbackID) {
    fallbackValue = attributes.dynamicStaticFallbackID;
  } else if (attributes.dynamicStaticFallbackURL) {
    fallbackValue = attributes.dynamicStaticFallbackURL;
  }
  let size = false;
  if (attributes.imageThumbnailSize) {
    size = attributes.imageThumbnailSize;
  }
  if (attributes.lightbox) {
    size = "full";
  }
  const disableSrcSet = !!attributes.imageDisableSrcSet;
  const config = [size || "0", attributes.imageAlt ? "0" : "1", disableSrcSet ? "0" : "1", "image"];
  if (attributes.imageType === "static") {
    if (attributes.imageID && attributes.imageURL) {
      imageAttrs.src = size ? `{imagesrc=${attributes.imageID}=${size}}` : attributes.imageURL;
      if (!disableSrcSet) {
        imageAttrs.srcset = `{imageset=${attributes.imageID}}`;
        imageAttrs.sizes = `{imagesizes=${attributes.imageID}=${size}}`;
      }
      imageAttrs.width = size ? `{imagewidth=${attributes.imageID}=${size}}` : `{imagewidth=${attributes.imageID}}`;
      imageAttrs.height = size ? `{imageheight=${attributes.imageID}=${size}}` : `{imageheight=${attributes.imageID}}`;
    } else if (attributes.imageURL) {
      imageAttrs.src = attributes.imageURL;
    }
  } else if (attributes.imageType === "dynamic" && attributes.dynamic) {
    if (attributes.dynamic === "wordpress" && attributes.dynamicWordpressType) {
      switch (attributes.dynamicWordpressType) {
        case "featuredimage":
          imageAttrs.src = `{featuredimage=true=${size}=${disableSrcSet}=${attributes.imageAlt ? "false" : "true"}=${fallbackValue}}`;
          break;
        case "authorpicture":
          imageAttrs.src = "{authorpicture}";
          break;
        case "userpicture":
          imageAttrs.src = "{userpicture}";
          break;
        case "attachmenturl":
          imageAttrs.src = size ? `{imagesrc=attachment=${size}}` : "{imagesrc=attachment}";
          if (!disableSrcSet) {
            imageAttrs.srcset = "{imageset=attachment}";
            imageAttrs.sizes = `{imagesizes=attachment=${size}}`;
          }
          imageAttrs.width = "{imagewidth=attachment}";
          imageAttrs.height = "{imageheight=attachment}";
          break;
      }
    } else if (attributes.dynamic === "woocommerce" && attributes.dynamicWordpressType) {
      switch (attributes.dynamicWordpressType) {
        case "categorythumbnail":
          imageAttrs.src = `{woocategorythumbnail=${size}}`;
          imageAttrs.srcset = "{woocategorythumbnailsrcset}";
          imageAttrs.sizes = `{woocategorythumbnailsizes=${size}}`;
          break;
        case "cartthumbnail":
          imageAttrs.src = "{cartthumbnail}";
          imageAttrs.srcset = "{cartthumbnailsrcset}";
          break;
        case "wooimage":
          imageAttrs.src = "{wooimage}";
          break;
        case "woogallery":
          imageAttrs.src = size ? `{imagesrc=woogallery=${size}}` : "{imagesrc=woogallery}";
          if (!disableSrcSet) {
            imageAttrs.srcset = "{imageset=woogallery}";
            imageAttrs.sizes = `{imagesizes=woogallery=${size}}`;
          }
          imageAttrs.width = "{imagewidth=woogallery}";
          imageAttrs.height = "{imageheight=woogallery}";
          break;
      }
    } else if (attributes.dynamic === "acf" && attributes.dynamicACFGroup && attributes.dynamicACFField) {
      let locationId = "false";
      if (attributes.dynamicACFFieldLocation) {
        const loc = attributes.dynamicACFFieldLocation;
        if (loc === "postid" && attributes.dynamicACFFieldLocationID) {
          locationId = attributes.dynamicACFFieldLocationID;
        } else if (loc === "currentuser") {
          locationId = "currentuser";
        } else if (loc === "currentauthor") {
          locationId = "currentauthor";
        } else if (loc === "userid" && attributes.dynamicACFFieldLocationID) {
          locationId = `user_${attributes.dynamicACFFieldLocationID}`;
        } else if (loc === "option") {
          locationId = "option";
        } else if (loc === "termid") {
          locationId = "taxterm";
        } else if (loc === "termquery") {
          locationId = "termquery";
        } else if (loc === "userquery") {
          locationId = "userquery";
        } else if (loc === "currenttaxonomytermarchive") {
          locationId = "currenttaxonomytermarchive";
        } else if (loc === "taxonomyterm" && attributes.dynamicACFFieldLocationIDObject?.value) {
          locationId = `term_${attributes.dynamicACFFieldLocationIDObject.value}`;
        }
      }
      imageAttrs.src = `{acffield=${attributes.dynamicACFField}=${locationId}=${attributes.dynamicACFFieldPlus || "false"}=${fallbackValue}=${config.join("-")}}`;
    } else if (attributes.dynamic === "repeater" && attributes.dynamicACFField) {
      imageAttrs.src = `{acfrepeater=${attributes.dynamicACFField}=${fallbackValue}=${attributes.dynamicACFFieldPlus || "false"}=${config.join("-")}}`;
    } else if (attributes.dynamic === "commentquery" && attributes.dynamicWordpressType) {
      imageAttrs.src = `{commentquery=${attributes.dynamicWordpressType}=${fallbackValue}}`;
    }
  }
  if (!imageAttrs.src) {
    imageAttrs.src = `${window.cwicly_info?.plugin || ''}assets/images/placeholder.jpg`;
  }

  // Handle Alt Text
  if (attributes.imageAlt) {
    if (attributes.imageAlt.includes("!ref=")) {
      imageAttrs.alt = `{component=parameter=${attributes.imageAlt.replace(/!ref=([\w-]+)!/, "$1")}}`;
    } else {
      imageAttrs.alt = attributes.imageAlt;
    }
  } else if (attributes.imageID) {
    imageAttrs.alt = `{imagealt=${attributes.imageID}}`;
  } else if (attributes.dynamicWordpressType === "woogallery") {
    imageAttrs.alt = "{imagealt=woogallery}";
  } else if (attributes.dynamicWordpressType === "attachmenturl") {
    imageAttrs.alt = "{imagealt=attachment}";
  } else {
    imageAttrs.alt = "";
  }

  // Handle Lazy Loading
  if (attributes.lazyLoadComp) {
    imageAttrs.loading = `{component=parameter=${attributes.lazyLoadComp.replace(/!ref=([\w-]+)!/, "$1")}}`;
  } else if (attributes.lazyLoad !== undefined && attributes.lazyLoad !== null && attributes.lazyLoad !== "") {
    imageAttrs.loading = attributes.lazyLoad ? "lazy" : "eager";
  }

  // Handle Component Connectors
  if (!imageAttrs.src && attributes.componentConnectors?.image?.ref) {
    imageAttrs.src = `{component=image=${attributes.componentConnectors.image.ref}}`;
    if (attributes.lazyLoadComp) {
      imageAttrs.loading = `{component=parameter=${attributes.lazyLoadComp.replace(/!ref=([\w-]+)!/, "$1")}}`;
    }
    if (attributes.imageAlt) {
      imageAttrs.alt = attributes.imageAlt.includes("!ref=") ? `{component=parameter=${attributes.imageAlt.replace(/!ref=([\w-]+)!/, "$1")}}` : attributes.imageAlt;
    }
  }
  return imageAttrs;
}

/***/ },

/***/ "./src/utils/index.js"
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundHelper: () => (/* reexport safe */ _background_helper_js__WEBPACK_IMPORTED_MODULE_4__.BackgroundHelper),
/* harmony export */   getBlockID: () => (/* reexport safe */ _block_id_js__WEBPACK_IMPORTED_MODULE_0__.getBlockID),
/* harmony export */   getCombinedClassName: () => (/* reexport safe */ _global_classes_helper_js__WEBPACK_IMPORTED_MODULE_5__.getCombinedClassName),
/* harmony export */   getImageAttributes: () => (/* reexport safe */ _image_attributes_js__WEBPACK_IMPORTED_MODULE_1__.getImageAttributes),
/* harmony export */   getInteractions: () => (/* reexport safe */ _interactions_helper_js__WEBPACK_IMPORTED_MODULE_3__.getInteractions),
/* harmony export */   getLinkAttributes: () => (/* reexport safe */ _link_helper_js__WEBPACK_IMPORTED_MODULE_2__.getLinkAttributes)
/* harmony export */ });
/* harmony import */ var _block_id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-id.js */ "./src/utils/block-id.js");
/* harmony import */ var _image_attributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-attributes.js */ "./src/utils/image-attributes.js");
/* harmony import */ var _link_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./link-helper.js */ "./src/utils/link-helper.js");
/* harmony import */ var _interactions_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interactions-helper.js */ "./src/utils/interactions-helper.js");
/* harmony import */ var _background_helper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./background-helper.js */ "./src/utils/background-helper.js");
/* harmony import */ var _global_classes_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./global-classes-helper.js */ "./src/utils/global-classes-helper.js");







/***/ },

/***/ "./src/utils/interactions-helper.js"
/*!******************************************!*\
  !*** ./src/utils/interactions-helper.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInteractions: () => (/* binding */ getInteractions)
/* harmony export */ });
/**
 * Semantic replacement for interactions helper.
 */
function getInteractions(attributes) {
  if (attributes.interactions) {
    const interactionsJson = JSON.stringify(attributes.interactions);
    const emptyInteractions = ['{"click":[],"dbclick":[],"scrollinview":[]}', '{"dbclick":[],"scrollinview":[]}'];
    if (!emptyInteractions.includes(interactionsJson)) {
      return {
        "data-interaction": interactionsJson
      };
    }
  }
  return null;
}

/***/ },

/***/ "./src/utils/link-helper.js"
/*!**********************************!*\
  !*** ./src/utils/link-helper.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLinkAttributes: () => (/* binding */ getLinkAttributes)
/* harmony export */ });
/**
 * Semantic replacement for link attributes helper.
 */
function getLinkAttributes(attributes, blockType = "") {
  const linkAttrs = {};
  if (!attributes?.linkWrapperActive) {
    if (attributes?.componentConnectors?.link?.ref) {
      return {
        href: `{component=link=${attributes.componentConnectors.link.ref}}`
      };
    }
    return null;
  }
  let rel = attributes.linkWrapperRel || "";
  let title = attributes.linkWrapperTitle || "";
  let ariaLabel = attributes.linkWrapperAriaLabel || "";
  let target = "";
  if (attributes.linkWrapperNewTab) {
    target = "_blank";
    if (rel) {
      if (!rel.includes("noopener")) {
        rel = `${rel} noopener`;
      }
    } else {
      rel = "noopener";
    }
  }
  if (attributes.linkWrapperType === "action") {
    const action = attributes.linkWrapperAction;

    // Popover Actions
    if (attributes.linkWrapperActionPopoverID) {
      switch (action) {
        case "showPopover":
          linkAttrs["data-show-popover"] = attributes.linkWrapperActionPopoverID;
          break;
        case "hidePopover":
          linkAttrs["data-hide-popover"] = attributes.linkWrapperActionPopoverID;
          break;
        case "showHidePopover":
          linkAttrs["data-showhide-popover"] = attributes.linkWrapperActionPopoverID;
          if (attributes.linkWrapperActionExtra?.in) {
            linkAttrs["data-popover-delay"] = parseFloat(attributes.linkWrapperActionExtra.in);
            linkAttrs["data-popover-delayOut"] = parseFloat(attributes.linkWrapperActionExtra.out);
          }
          break;
        case "togglePopover":
          linkAttrs["data-toggle-popover"] = attributes.linkWrapperActionPopoverID;
          break;
      }
      linkAttrs["data-ccp-state"] = "closed";
    }

    // Nav Actions
    if (attributes.linkWrapperActionNavID) {
      switch (action) {
        case "showNav":
          linkAttrs["data-show-nav"] = attributes.linkWrapperActionNavID;
          linkAttrs["is-open"] = "false";
          break;
        case "hideNav":
          linkAttrs["data-close-nav"] = attributes.linkWrapperActionNavID;
          linkAttrs["is-open"] = "false";
          break;
        case "toggleNav":
          linkAttrs["data-toggle-nav"] = attributes.linkWrapperActionNavID;
          linkAttrs["is-open"] = "false";
          break;
      }
    }

    // Scroll Actions
    if (action === "scrolltotop") {
      linkAttrs["data-scrolltotop"] = "";
      if (attributes.linkWrapperActionExtra?.offset) linkAttrs["data-offset"] = attributes.linkWrapperActionExtra.offset;
      if (attributes.linkWrapperActionExtra?.outoffset) linkAttrs["data-offset-out"] = attributes.linkWrapperActionExtra.outoffset;
      if (attributes.linkWrapperActionExtra?.intarget) linkAttrs["data-target-in"] = attributes.linkWrapperActionExtra.intarget;
      if (attributes.linkWrapperActionExtra?.outtarget) linkAttrs["data-target-out"] = attributes.linkWrapperActionExtra.outtarget;
    } else if (action === "toggleDarkMode") {
      linkAttrs["data-action"] = "dark-mode";
      linkAttrs["aria-label"] = "Toggle Dark Mode";
    } else if (action === "wooaddtocart") {
      linkAttrs["data-cc-add-to-cart"] = "";
    } else if (action === "wooresetselection") {
      linkAttrs["data-cc-woo-reset"] = "";
    } else if (action === "share") {
      const shareDesc = attributes.linkWrapperShareDescription || "";
      const shareType = attributes.linkWrapperShare;
      switch (shareType) {
        case "twitter":
          linkAttrs.href = `https://twitter.com/intent/tweet?url={pageurl}&text=${shareDesc}`;
          break;
        case "facebook":
          linkAttrs.href = "https://www.facebook.com/sharer.php?u={pageurl}";
          break;
        case "linkedin":
          linkAttrs.href = `https://www.linkedin.com/shareArticle?url={pageurl}&title=${shareDesc}`;
          break;
        case "email":
          const email = attributes.linkWrapperActionContactEmailAddress || "";
          linkAttrs.href = `mailto:${email}?subject=${shareDesc}&body={pageurl=false=encoded}`;
          break;
        case "pinterest":
          linkAttrs.href = `https://www.pinterest.com/pin/create/button?url={pageurl}&media=&description=${shareDesc}`;
          break;
        case "reddit":
          linkAttrs.href = `https://reddit.com/submit?url={pageurl}&title=${shareDesc}`;
          break;
        case "whatsapp":
          linkAttrs.href = "https://wa.me/?text={pageurl}";
          break;
        case "sms":
          linkAttrs.href = "sms:%7Bphone_number%7D?body={pageurl}";
          break;
        case "stumbleupon":
          linkAttrs.href = `https://www.stumbleupon.com/submit?url={pageurl}&title=${shareDesc}`;
          break;
      }
    } else if (action === "nextQuery") {
      linkAttrs.href = "{nextquery}";
    } else if (action === "prevQuery") {
      linkAttrs.href = "{prevquery}";
    } else if (action === "contact") {
      const contactType = attributes.linkWrapperActionContactType;
      const oneLine = attributes.linkWrapperActionContactOneLine || "";
      switch (contactType) {
        case "email":
          const emailAddr = attributes.linkWrapperActionContactEmailAddress || "";
          const subject = attributes.linkWrapperActionContactEmailSubject || "";
          const msg = attributes.linkWrapperActionContactEmailMessage || "";
          linkAttrs.href = `mailto:${emailAddr}?subject=${subject}&body=${msg}`;
          break;
        case "tel":
          linkAttrs.href = `tel:${oneLine}`;
          break;
        case "sms":
          linkAttrs.href = `sms:${oneLine}`;
          break;
        case "whatsapp":
          linkAttrs.href = `https://api.whatsapp.com/send?phone=${oneLine}`;
          break;
        case "messenger":
          linkAttrs.href = `https://m.me/${oneLine}`;
          break;
        case "viber":
          linkAttrs.href = `viber://${attributes.linkWrapperActionContactViber}?number=${oneLine}`;
          break;
        case "skype":
          linkAttrs.href = `skype:${oneLine}?${attributes.linkWrapperActionContactSkype}`;
          break;
        case "waze":
          linkAttrs.href = `https://www.waze.com/ul?ll=${oneLine}`;
          break;
        case "googlecalendar":
          let dates = "";
          if (attributes.linkWrapperActionContactCalendarStart && !attributes.linkWrapperActionContactCalendarEnd) {
            dates = `&dates=${attributes.linkWrapperActionContactCalendarStart.replace(/[^A-Za-z0-9]/, "")}`;
          } else if (attributes.linkWrapperActionContactCalendarStart && attributes.linkWrapperActionContactCalendarEnd) {
            dates = `&dates=${attributes.linkWrapperActionContactCalendarStart.replace(/[^A-Za-z0-9]/, "")}/${attributes.linkWrapperActionContactCalendarEnd.replace(/[^A-Za-z0-9]/, "")}`;
          }
          const loc = attributes.linkWrapperActionContactCalendarLocation ? `&location=${attributes.linkWrapperActionContactCalendarLocation}` : "";
          const details = attributes.linkWrapperActionContactCalendarDescription ? `&details=${attributes.linkWrapperActionContactCalendarDescription}` : "";
          const text = attributes.linkWrapperActionContactCalendarTitle ? `&text=${attributes.linkWrapperActionContactCalendarTitle}` : "";
          linkAttrs.href = `https://www.google.com/calendar/render?action=TEMPLATE${text}${details}${dates}${loc}`;
          break;
      }
    } else if (action === "slider" && attributes.linkWrapperActionSliderType && attributes.linkWrapperActionSliderID) {
      if (attributes.linkWrapperActionSliderType === "gotoindex" && attributes.linkWrapperActionSliderGoTo !== null) {
        linkAttrs["data-gotoindex"] = attributes.linkWrapperActionSliderGoTo;
      }
      linkAttrs["data-slidernav"] = "";
      linkAttrs["data-slidertype"] = attributes.linkWrapperActionSliderType;
      linkAttrs["data-sliderid"] = attributes.linkWrapperActionSliderID;
    } else if (action === "lightbox") {
      // Lightbox logic (simplified for extraction)
      linkAttrs["data-lightbox"] = "";
      if (attributes.linkWrapperActionLighboxRef) linkAttrs["data-gallery"] = attributes.linkWrapperActionLighboxRef;
      // ... more lightbox details can be added here
    } else if (action === "modal" && attributes.linkWrapperActionModalType) {
      const type = attributes.linkWrapperActionModalType;
      const blockId = attributes.linkWrapperActionModalBlockId;
      if (blockId) {
        linkAttrs[`data-modal${type === 'open' ? '' : type}`] = "";
        linkAttrs["data-modalid"] = blockId; // Vo function likely just returns the ID
      }
    }
  } else if (attributes.linkWrapperType === "url") {
    if (attributes.linkWrapperSourceType === "dynamic") {
      // Handle dynamic URL tags
      switch (attributes.linkWrapperSourceDynamic) {
        case "posturl":
          linkAttrs.href = "{pageurl}";
          break;
        case "attachmenturl":
          linkAttrs.href = "{attachment_url}";
          break;
        case "featuredimage":
          linkAttrs.href = "{featuredimage}";
          break;
        case "homeurl":
          linkAttrs.href = "{homeurl}";
          break;
        // ... more dynamic sources
      }
    } else if (attributes.linkWrapperSourceType === "static") {
      linkAttrs.href = attributes.linkWrapperUrl || "";
    }
  }
  if (linkAttrs.href || Object.keys(linkAttrs).length > 0) {
    if (rel) linkAttrs.rel = rel;
    if (target) linkAttrs.target = target;
    if (title) linkAttrs.title = title;
    if (ariaLabel) linkAttrs["aria-label"] = ariaLabel;
    return linkAttrs;
  }
  return null;
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"./style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcwicly"] = globalThis["webpackChunkcwicly"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-index"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map