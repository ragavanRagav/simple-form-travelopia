const { getDetail, saveDetail } = require("../services/detailsService");

const getDetails = async (req, res) => {
  const { email } = req.params;
  const details = await getDetail(email);
  res.send(details);
};
const saveDetails = async (req, res) => {
  const data = req.body;
  const details = await saveDetail(data);
  res.send(details);
};

module.exports = { getDetails, saveDetails };
