const UserLogin = require('../models/loginModel');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await UserLogin.findOne({ where: { username } });

    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login successful', user: { username: user.username, empNo: user.empNo, privilege: user.Privilege } });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
