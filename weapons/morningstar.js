const config = require("../config/config");
const Weapon = require("./weapon")
const morningstar = new Weapon(config.weapoNames.morningstar, 7)
module.exports = morningstar;