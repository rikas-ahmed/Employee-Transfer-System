const Branch = require('../models/branchModel');

// Insert new branch details
exports.insertBranchDetails = async (req, res) => {
  try {
    const branch = await Branch.create(req.body);
    res.status(201).json(branch);
  } catch (error) {
    console.error('Error inserting branch details:', error);
    res.status(500).json({ error: error.message });
  }
};

// Update branch details
exports.updateBranchDetails = async (req, res) => {
  const { branchNo } = req.params;
  try {
    const [updated] = await Branch.update(req.body, {
      where: { branchNo: branchNo }
    });
    if (updated) {
      const updatedBranch = await Branch.findOne({ where: { branchNo: branchNo } });
      res.status(200).json(updatedBranch);
    } else {
      throw new Error('Branch not found');
    }
  } catch (error) {
    console.error('Error updating branch details:', error);
    res.status(500).json({ error: error.message });
  }
};

// View branch details
exports.viewBranchDetails = async (req, res) => {
  const { branchNo } = req.params;
  try {
    const branch = await Branch.findOne({ where: { branchNo: branchNo } });
    if (branch) {
      res.status(200).json(branch);
    } else {
      res.status(404).json({ error: 'Branch not found' });
    }
  } catch (error) {
    console.error('Error fetching branch details:', error);
    res.status(500).json({ error: error.message });
  }
};

// View all branches
exports.viewAllBranches = async (req, res) => {
  try {
    const branches = await Branch.findAll();
    res.status(200).json(branches);
  } catch (error) {
    console.error('Error fetching branch data:', error);
    res.status(500).json({ error: error.message });
  }
};
