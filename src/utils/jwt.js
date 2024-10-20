const jwt = require("jsonwebtoken")
const sign =  (payload) => {
    return jwt.sign(payload, "qwertyuiop")
}

const verify = (token) => {
    try {
        return jwt.verify(token, "qwertyuiop")
    } catch (error) {
      return {}
    }
}

module.exports = {
    sign,
    verify
}