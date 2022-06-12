const { Detail } = require("../db/models/Detail");

const getDetail = async (email) => {
  try {
    const details = await Detail.findAll({
      where: {
        email: email,
      },
    });
    return {
      status: details.length > 0 ? true : false,
      details: details.length > 0 ? details : "Invalid emil address",
    };
  } catch (err) {
    console.log(err);
    return {
      status: false,
      message: "Unexpected error",
    };
  }
};

const saveDetail = async (detail) => {
  try {
    const resp = await Detail.create(detail);
    return {
      status: true,
      message: "successfully saved your details...",
    };
  } catch (err) {
    console.log(err);
    return {
      status: false,
      message: "Unexpected error occured",
    };
  }
};

module.exports = { getDetail, saveDetail };
