const config = require("../config/config")
const Weapon = require("./weapon")
const bastardsword = new Weapon(config.weapoNames.bastardsword, 10)
module.exports = bastardsword;