const HRMPage = require('../models/hrmPageModel');

exports.getHRMPage = async (req, res) => {
  try {
    const hrmPageData = await HRMPage.findAll();
    res.status(200).json(hrmPageData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

