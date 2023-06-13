const bcrypt = require("bcrypt");
const User = require("../Model/Schema");

const login = async (req, res) => {
  const { Email, Password } = req.body;
  const user = await User.findOne({ Email });

  if (user) {
    if (
      user.Email === Email &&
      (await bcrypt.compare(Password, user.Password))
    ) {
      console.log("LOGIN SUCCESS");

      res.json({
        Email: user.Email,
        Password: user.Password,
        Message: "LOGIN SUCCESS",
      });
    } else {
      console.log("LOGIN FAILED");
      res.json("LOGIN FAILED");
    }
  }
};

module.exports = login;
