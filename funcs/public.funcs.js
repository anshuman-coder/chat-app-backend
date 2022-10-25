require("dotenv").config();
const Users = require("../Models/Users");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
  const { userName, email, password } = userData;

  const encryptedPassword = crypto.createHash("md5").update(password).digest("hex");

  const user = new Users({
    userName: userName,
    email: email,
    password: encryptedPassword
  });

  await user.save();

  const result = await Users.findOne({ userName: userName, email: email });

  let signedUpUser = new Object({
    id: result._id,
    userName: result.userName,
    email: result.email
  });
  
  const token = jwt.sign(signedUpUser, process.env.JWT_SECRET_KEY, { expiresIn: "48h" });

  signedUpUser.token = token;
  return signedUpUser;
};

module.exports = {
  registerUser
}