const bycrpt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../Model/Schema");


const signup = async (req, res) => {
  const { Name, Email, Password } = req.body;

  const salt = await bycrpt.genSalt(10);
  const hash = await bycrpt.hash(Password, parseInt(salt));
  console.log(hash);

  const exist = await User.findOne({ Name });
  if (exist) {
    res.json("USER ALREADY EXISTED");
  } else {
    const userdetails = await User.create({
      Name,
      Email,
      Password: hash,
    });

    res.json({
      Name: userdetails.Name,
      Email: userdetails.Email,
      Password: userdetails.Password,
      Token: generate(userdetails._id),
    });
  }
};
const generate = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = signup;
