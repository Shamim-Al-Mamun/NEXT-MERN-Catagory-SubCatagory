
const Catagory = require("../models/catagories.model");

exports.catagories = async (req, res) => {
  try {
    console.log(req.body);
    const catagory = await new Catagory(req.body).save();
    const catagories = await Catagory.find();
    res.status(200).json({
      Message: "catagory was inserted successfully!",
      catagory,
      catagories,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};

exports.getCatagory = async (req, res) => {
  try {
    const catagories = await Catagory.find();
    res.status(200).json({
      Message: "catagories were fetched successfully!",
      catagories,
    });
  } catch (err) {
    res.status(500).json({
      Message: "There was a server side error!",
      Error: err,
    });
  }
};