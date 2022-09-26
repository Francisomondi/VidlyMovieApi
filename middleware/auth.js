const jwt = require("jsonwebtoken")

module.exports = function (req, res, next) {
    const token = req.header("x-auth-token")
    if (!token) return res.status(401).send("access denied, token not provided")

    try {
        const payload = jwt.verify(token, ("jwtPrivateKey"))
        req.user = payload
        next()

    } catch (error) {
        res.status(400).send("invalid token")
    }

}