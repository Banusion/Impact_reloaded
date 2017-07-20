const router           = require("express-promise-router")(),
      claimsController = require("../controllers/claims");

router.route('/claims')
    .get(claimsController.Claims);

router.route('/claims/details')
  .get(claimsController.ClaimsDetails);

module.exports = router;