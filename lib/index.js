'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.DeselectAll = exports.SelectAll = exports.createSelectable = exports.SelectableGroup = undefined

var _SelectableGroup = require('./SelectableGroup')

var _SelectableGroup2 = _interopRequireDefault(_SelectableGroup)

var _CreateSelectable = require('./CreateSelectable')

var _CreateSelectable2 = _interopRequireDefault(_CreateSelectable)

var _SelectAll = require('./SelectAll')

var _SelectAll2 = _interopRequireDefault(_SelectAll)

var _DeselectAll = require('./DeselectAll')

var _DeselectAll2 = _interopRequireDefault(_DeselectAll)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

// As early as possible, check for the existence of the JavaScript globals which
// Relay Runtime relies upon, and produce a clear message if they do not exist.
if (process.env.NODE_ENV === 'development') {
  if (
    typeof Map !== 'function' ||
    typeof Set !== 'function' ||
    typeof Array.from !== 'function' ||
    typeof Array.isArray !== 'function' ||
    typeof Object.assign !== 'function'
  ) {
    throw new Error(
      '\n      React-Selectable-Fast requires Map, Set, Array.from,\n      Array.isArray, and Object.assign to exist.\n      Use a polyfill to provide these for older browsers.\n    '
    )
  }
}

exports.SelectableGroup = _SelectableGroup2.default
exports.createSelectable = _CreateSelectable2.default
exports.SelectAll = _SelectAll2.default
exports.DeselectAll = _DeselectAll2.default
