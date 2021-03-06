'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.getDocumentScroll = getDocumentScroll
exports.default = getBoundsForNode
function getDocumentScroll() {
  var documentScrollTop = Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  )

  var documentScrollLeft = Math.max(
    window.pageXOffset,
    document.documentElement.scrollLeft,
    document.body.scrollLeft
  )

  return { documentScrollTop: documentScrollTop, documentScrollLeft: documentScrollLeft }
}

/**
 * Given a node, get everything needed to calculate its boundaries
 * @param  {HTMLElement} node
 * @return {Object}
 */
function getBoundsForNode(node) {
  var containerScroll =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : { scrollTop: 0, scrollLeft: 0 }
  var scrollTop = containerScroll.scrollTop,
    scrollLeft = containerScroll.scrollLeft

  var _getDocumentScroll = getDocumentScroll(),
    documentScrollTop = _getDocumentScroll.documentScrollTop,
    documentScrollLeft = _getDocumentScroll.documentScrollLeft

  var rect = node.getBoundingClientRect()

  return {
    top: rect.top + documentScrollTop + scrollTop,
    left: rect.left + documentScrollLeft + scrollLeft,
    offsetWidth: node.offsetWidth,
    offsetHeight: node.offsetHeight,
    computedWidth: rect.width,
    computedHeight: rect.height
  }
}
