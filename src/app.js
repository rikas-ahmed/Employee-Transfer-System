const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.APP_PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

const adminPageRoutes = require('./routes/adminPageRoutes');
const areaManagerRoutes = require('./routes/areaManagerRoutes');
const branchRoutes = require('./routes/branchRoutes');
const deleteTransferRoutes = require('./routes/deleteTransferRoutes');
const dependentsRoutes = require('./routes/dependentsRoutes');
const employeeDetailsRoutes = require('./routes/employeeDetailsRoutes');
const employeeSearchRoutes = require('./routes/employeeSearchRoutes');
const employeeTransferCycleRoutes = require('./routes/employeeTransferCycleRoutes');
const enterEmployeeBranchRoutes = require('./routes/enterEmployeeBranchRoutes');
const finalDecisionRoutes = require('./routes/finalDecisionRoutes');
const findEmployeeTransferRoutes = require('./routes/findEmployeeTransferRoutes');
const hrmPageRoutes = require('./routes/hrmPageRoutes');
const insertTransferRoutes = require('./routes/insertTransferRoutes');
const loginRoutes = require('./routes/loginRoutes');
const makeTenativeTransferRoutes = require('./routes/makeTenativeTransferRoutes');
const rejectTransferRoutes = require('./routes/rejectTransferRoutes');
const viewBranchRoutes = require('./routes/viewBranchRoutes');
const viewFinalizeTentativeRoutes = require('./routes/viewFinalizeTentativeRoutes');
const viewTransferRoutes = require('./routes/viewTransferRoutes');

app.use('/api/adminPage', adminPageRoutes);
app.use('/api/areaManager', areaManagerRoutes);
app.use('/api/branch', branchRoutes);
app.use('/api/deleteTransfer', deleteTransferRoutes);
app.use('/api/dependents', dependentsRoutes);
app.use('/api/employeeDetails', employeeDetailsRoutes);
app.use('/api/employeeSearch', employeeSearchRoutes);
app.use('/api/employeeTransferCycle', employeeTransferCycleRoutes);
app.use('/api/enterEmployeeBranch', enterEmployeeBranchRoutes);
app.use('/api/finalDecision', finalDecisionRoutes);
app.use('/api/findEmployeeTransfer', findEmployeeTransferRoutes);
app.use('/api/hrmPage', hrmPageRoutes);
app.use('/api/insertTransfer', insertTransferRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/makeTenativeTransfer', makeTenativeTransferRoutes);
app.use('/api/rejectTransfer', rejectTransferRoutes);
app.use('/api/viewBranch', viewBranchRoutes);
app.use('/api/viewFinalizeTentative', viewFinalizeTentativeRoutes);
app.use('/api/viewTransfer', viewTransferRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
