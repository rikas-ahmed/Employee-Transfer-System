const Branch = require('../models/viewBranchModel');

exports.getAllBranches = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.status(200).json(branches);
  } catch (error) {
    console.error('Error fetching branch data:', error);
    res.status(500).json({ error: error.message });
  }
};
