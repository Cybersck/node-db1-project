db = require('../data/accountsDb');

exports.validateId = (req, res, next) => {
    db.getByID(req.params.id)
    .then(acc => {
        if (acc === undefined) {
            res.status(404).send('Invalid ID');
        } else {
            next();
        }
    });
}

exports.validateAccount = (req, res, next) => {
    if (req.body.name === undefined ||
        req.body.budget === undefined ||
        typeof(req.body.name) !== typeof('') ||
        typeof(req.body.budget) !== typeof(0)) {
            console.log(typeof(req.body.name), typeof(req.body.budget));
            res.status(400).send('Invalid Account Data');
            return;
        } else {
            newAcc = {
                name: req.body.name,
                budget: req.body.budget
            }
            req.account = newAcc;
            next();
        }
}

exports.validateChanges = (req, res, next) => {
    if (req.body.name === undefined &&
        req.body.budget === undefined) {
            res.status(400).send('Invalid Account Data');
            return;
        } else {
            next();
        }
}