//Modules: encapsulated code

const names = require('./names')
const sayHi = require('./utils')
const data = require('./alternative-flavor')
require("./mind-grenade")
console.log(data)
sayHi(names.lucy)
sayHi(names.peter)
sayHi(names.bob)

