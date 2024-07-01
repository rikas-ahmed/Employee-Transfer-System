// src/models/rejectTransferModel.js

const db = require('./db');

const rejectTransfer = (transferId, callback) => {
  const query = 'UPDATE transfers SET status = ? WHERE id = ?';
  db.query(query, ['rejected', transferId], (err, results) => {
    if (err) return callback(err);
    callback(null, results);
  });
};

module.exports = {
  rejectTransfer,
};
