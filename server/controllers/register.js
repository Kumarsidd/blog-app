const User = require("../models/user.js");
const bcrypt = require("bcrypt");
exports.postUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log(newUser);
    res.status(201).json({
      message: "Data saved successfully",
    });
  } catch (error) {
    console.log("error while registering " + error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) res.status(401).json({ message: "Invalid email or password" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      res.status(401).json({ message: "Invalid email or password" });

    res.status(201).json({ message: "login in succcessfully" });
  } catch (error) {
    console.log("error while logging in " + error);
  }
};
