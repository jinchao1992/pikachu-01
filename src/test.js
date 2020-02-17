import string from './css.js'

const demo = document.querySelector('#demo')
const demo2 = document.querySelector('#demo2')

const player = {
  n: 0,
  time: 100,
  timer: null,
  init() {
    demo.innerText = string.substr(0, player.n)
    demo2.innerHTML = string.substr(0, player.n)
    player.play()
    player.bindEvents()
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents() {
    for (let key in player.events) {
      const value = player.events[key]
      document.querySelector(key).onclick = player[value]
    }
  },
  run() {
    player.n += 1
    if (player.n > string.length) {
      clearInterval(player.timer)
      return
    }
    demo.innerText = string.substr(0, player.n)
    demo2.innerHTML = string.substr(0, player.n)
    demo.scrollTop = demo.scrollHeight
  },
  play() {
    player.timer = setInterval(player.run, player.time)
  },
  pause() {
    clearInterval(player.timer)
  },
  slow() {
    // 先清空定时器，再调用新的定时器
    player.pause()
    player.time = 300
    player.play()
  },
  normal() {
    // 先清空定时器，再调用新的定时器
    player.pause()
    player.time = 100
    player.play()
  },
  fast() {
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()
