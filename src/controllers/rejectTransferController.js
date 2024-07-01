
const transferModel = require('../models/rejectTransferModel');

const rejectTransfer = (req, res) => {
  const { id } = req.params;
  transferModel.rejectTransfer(id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

module.exports = {
  rejectTransfer,
};
