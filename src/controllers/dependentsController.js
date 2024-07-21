const Dependent = require('../models/dependentsModel');

// Insert new dependent details
exports.insertDependentDetails = async (req, res) => {
  console.log('Request Body:', req.body);  
  try {
    const dependent = await Dependent.create(req.body);
    res.status(201).json(dependent);
  } catch (error) {
    console.error('Error inserting dependent details:', error);
    res.status(500).json({ error: error.message });
  }
};


// Update dependent details
exports.updateDependentDetails = async (req, res) => {
  const { depNo } = req.params;
  try {
    const [updated] = await Dependent.update(req.body, {
      where: { depNo: depNo }
    });
    if (updated) {
      const updatedDependent = await Dependent.findOne({ where: { depNo: depNo } });
      res.status(200).json(updatedDependent);
    } else {
      throw new Error('Dependent not found');
    }
  } catch (error) {
    console.error('Error updating dependent details:', error);
    res.status(500).json({ error: error.message });
  }
};

// View dependent details
exports.viewDependentDetails = async (req, res) => {
  const { depNo } = req.params;
  try {
    const dependent = await Dependent.findOne({ where: { depNo: depNo } });
    if (dependent) {
      res.status(200).json(dependent);
    } else {
      res.status(404).json({ error: 'Dependent not found' });
    }
  } catch (error) {
    console.error('Error fetching dependent details:', error);
    res.status(500).json({ error: error.message });
  }
};
