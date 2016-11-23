;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-xingbienv" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M600.827071 44.178175c-176.119183 0-319.471079 143.17384-319.471079 319.071989 0 78.745459 28.670993 150.331867 75.771731 206.578915l-101.370759 102.267175L147.21897 563.693336c-10.239202-10.226922-26.622334-10.226922-35.83823 0-10.239202 10.226922-10.239202 26.589588 0 35.793204l107.514689 109.425202L110.357434 818.336944c-10.239202 10.226922-10.239202 26.589588 0 35.793204 10.239202 10.226922 26.622334 10.226922 35.83823 0l108.537995-109.425202 109.562325 110.448508c10.239202 10.226922 26.622334 10.226922 35.83823 0 10.239202-10.226922 10.239202-26.589588 0-35.793204L291.595194 708.911742l101.370759-102.267175c56.316633 48.065715 129.017422 76.699869 207.861118 76.699869 177.142489 0 320.495408-143.17384 320.495408-320.094272C921.322479 187.352015 777.969561 44.178175 600.827071 44.178175L600.827071 44.178175zM600.827071 632.211872c-148.47252 0-269.297352-120.674407-269.297352-268.961708 0-148.286278 120.825856-267.938402 269.297352-267.938402s269.297352 119.652124 269.297352 267.938402C870.125447 512.559748 749.299591 632.211872 600.827071 632.211872L600.827071 632.211872z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
