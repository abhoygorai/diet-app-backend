const { registerModel } = require("../Database/models");

exports.register = async (req, res) => {
  console.log(req.body);
    const user = new registerModel({
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      weight: req.body.weight,
      gender: req.body.gender,
      password: req.body.password,
    });

  try {
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.login = (req, res) => {};
