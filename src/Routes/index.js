const router = require("express").Router()

router.use("/auth", require('./authRoute'));
router.use("/plan", require('./tableRoutes'))


module.exports = router;