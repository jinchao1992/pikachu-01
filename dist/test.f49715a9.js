// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  .skin * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  .skin *::after,\n  .skin *::before {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  .skin {\n    background-color: #FFE600;    \n    min-height: 50vh;\n    position: relative;\n  }\n\n  .nose {\n    width: 0;\n    height: 0;\n    border: 10px solid #000;\n    border-bottom: none;\n    border-color: #000 transparent transparent;\n    position: absolute;\n    top: 150px;\n    left: 50%;\n    margin-left: -10px;\n    z-index: 5;\n  }\n  .nose::before {\n    content: '';\n    display: block;\n    width: 20px;\n    height: 6px;\n    border-top-left-radius: 10px 6px;\n    border-top-right-radius: 10px 6px;\n    background: #000;\n    position: absolute;\n    top: -16px;\n    left: -10px;\n  }\n\n  @keyframes move {\n    0% {\n      transform: rotate(0);\n    }\n    33% {\n      transform: rotate(-5deg);\n    }\n    66% {\n      transform: rotate(5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    animation: move 200ms infinite linear;\n    transform-origin: center bottom;\n  }\n\n  .eye {\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    top: 100px;\n    left: 50%;\n    margin-left: -32px;\n    border: 2px solid #000;\n    background-color: #2e2e2e;\n    border-radius: 50%;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  .eye::after {\n    content: '';\n    display: block;\n    border: 3px solid #000;\n    width: 26px;\n    height: 26px;\n    background-color: #fff;\n    position: absolute;\n    left: 4px;\n    top: 2px;\n    border-radius: 50%;\n  }\n\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 170px;\n    left: 50%;\n    margin-left: -100px;\n  }\n\n\n  .mouth .up {\n    position: relative;\n    top: -20px;\n    z-index: 2;\n  }\n\n  .mouth .up .lip {\n    width: 100px;\n    height: 30px;\n    border: 3px solid #000;\n    position: absolute;\n    top: 0;\n    left: 50%;\n    margin-left: -50px;\n    background-color: #FFE600;\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-15deg) translateX(-53px);\n  }\n\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    border-top: none;\n    border-left: none;\n    transform: rotate(15deg) translateX(53px);\n  }\n\n  .mouth .up .line {\n    width: 100px;\n    height: 10px;\n    position: absolute;\n    top: 5px;\n    left: -2px;\n    background: #FFE600;\n    transform: rotate(-15deg);\n  }\n\n  .mouth .down {\n    width: 100%;\n    height: 180px;\n    position: absolute;\n    top: 5px;\n    left: 0;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 {\n    border: 3px solid #000;\n    width: 150px;\n    height: 1000px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    border-radius: 75px/300px;\n    background-color: #6e0013;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    width: 200px;\n    height: 300px;\n    position: absolute;\n    bottom: -150px;\n    left: 50%;\n    margin-left: -100px;\n    background-color: #fb3d56;\n    border-radius: 100px;\n  }\n\n  .face {\n    width: 88px;\n    height: 88px;\n    border: 3px solid #000;\n    background-color: red;\n    position: absolute;\n    top: 220px;\n    left: 50%;\n    margin-left: -44px;\n    border-radius: 50%;\n  }\n  .face > img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n  .face.left {\n    transform: translateX(-170px);\n    \n  }\n  .face.left > img {\n    transform-origin: 0 0;\n    transform: rotateY(180deg);\n  }\n  .face.right {\n    transform: translateX(170px);\n  }\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector('#demo');
var demo2 = document.querySelector('#demo2');
var player = {
  n: 0,
  time: 100,
  timer: null,
  init: function init() {
    demo.innerText = _css.default.substr(0, player.n);
    demo2.innerHTML = _css.default.substr(0, player.n);
    player.play();
    player.bindEvents();
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      var value = player.events[key];
      document.querySelector(key).onclick = player[value];
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      clearInterval(player.timer);
      return;
    }

    demo.innerText = _css.default.substr(0, player.n);
    demo2.innerHTML = _css.default.substr(0, player.n);
    demo.scrollTop = demo.scrollHeight;
  },
  play: function play() {
    player.timer = setInterval(player.run, player.time);
  },
  pause: function pause() {
    clearInterval(player.timer);
  },
  slow: function slow() {
    // 先清空定时器，再调用新的定时器
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    // 先清空定时器，再调用新的定时器
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.f49715a9.js.map