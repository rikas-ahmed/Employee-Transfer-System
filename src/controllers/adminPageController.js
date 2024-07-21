const AdminPage = require('../models/adminPageModel');

exports.getAdminPage = async (req, res) => {
  try {
    const adminPageData = await AdminPage.findAll();
    res.status(200).json(adminPageData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

