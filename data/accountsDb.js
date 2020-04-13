const db = require('./dbConfig.js');

module.exports = {
    get,
    insert,
    update,
    remove,
    getByID
}

function get() {
    return db('accounts');
}

function getByID(id) {
    return db('accounts').where({id}).first();
}

function insert(acc) {
    return db('accounts').insert(acc).then(ids => {
        return getByID(ids[0]);
    });
}

function update(id, acc) {
    return db('accounts').where({id})
    .update(acc);
}

function remove(id) {
    return db('accounts').where('id', id).del();
}

