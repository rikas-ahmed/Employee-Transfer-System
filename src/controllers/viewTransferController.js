const TransferRequest = require('../models/viewTransferModel');

// Fetch all transfer requests
exports.getAllTransferRequests = async (req, res) => {
  try {
    const transferRequests = await TransferRequest.findAll();
    res.status(200).json(transferRequests);
  } catch (error) {
    console.error('Error fetching transfer requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Fetch transfer request by employee ID
exports.getTransferRequestByEmpNo = async (req, res) => {
  const { empNo } = req.params;
  try {
    const transferRequest = await TransferRequest.findOne({ where: { empNo } });
    if (transferRequest) {
      res.status(200).json(transferRequest);
    } else {
      res.status(404).json({ error: 'Transfer request not found' });
    }
  } catch (error) {
    console.error(`Error fetching transfer request for empNo ${empNo}:`, error);
    res.status(500).json({ error: `Error fetching transfer request for empNo ${empNo}` });
  }
};

// Reject transfer request
exports.rejectTransferRequest = async (req, res) => {
  const { empNo } = req.params;
  const { hrDecision, hrComment } = req.body;
  try {
    const [updated] = await TransferRequest.update(
      { hrDecision, hrComment, status: 'Rejected' },
      { where: { empNo } }
    );
    if (updated) {
      const updatedTransfer = await TransferRequest.findOne({ where: { empNo } });
      res.status(200).json(updatedTransfer);
    } else {
      throw new Error('Transfer request not found');
    }
  } catch (error) {
    console.error('Error rejecting transfer request:', error);
    res.status(500).json({ error: error.message });
  }
};
