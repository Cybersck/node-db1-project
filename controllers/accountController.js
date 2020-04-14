const db = require('../data/accountsDb');

exports.getAccounts = (req, res) => {
    db.get()
    .then(accounts => res.status(200).send(accounts))
    .catch(err => console.log(err));
}

exports.addAccount = (req, res) => {
    db.insert(req.account)
    .then(account => res.status(201).send({message: 'Success', account: account}))
    .catch(err => console.log(err));
}

exports.updateAccount = (req, res) => {
    let changes;
    db.getByID(req.params.id)
    .then(acc => changes = acc)
    .catch(err => console.log(err))

    if (req.body.name !== undefined && req.body.name.length > 0) {changes = {...changes, name: req.body.name}};
    if (req.body.budget !== undefined && req.body.budget.toString().length > 0) {changes = {...changes, budget: req.body.budget}}

    db.update(req.params.id, changes)
    .then(res.status(200).send('Success'))
    .catch(err => console.log(err));
}

exports.deleteAccount = (req, res) => {
    db.remove(req.params.id)
    .then(res.status(200).send('Success'))
    .catch(err => console.log(err));
}