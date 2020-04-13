const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');
const accountMiddle = require('../middleware/accountMiddle');

router.get('/', accountController.getAccounts);
router.post('/', accountMiddle.validateAccount, accountController.addAccount);
router.put('/:id', accountMiddle.validateId, accountMiddle.validateChanges, accountController.updateAccount);
router.delete('/:id', accountMiddle.validateId, accountController.deleteAccount);
module.exports = router;