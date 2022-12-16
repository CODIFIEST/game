const config = require("../config/config")
const Weapon = require("./weapon")
const thunderfury = new Weapon(config.weapoNames.thunderfury, 6)
module.exports = thunderfury;