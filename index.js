'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')
require('./assets/scripts/api.js')
require('./assets/scripts/events.js')
require('./assets/scripts/ui.js')

// styles
require('./assets/styles/index.scss')
require('./assets/styles/SignUp.css')
// require('./assets/styles/SignUp.scss')

let x = 'x';
let o = 'o';
let player1 = 'null';
let player2 = 'null';
let computer = 'null';