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

const loginUser = async (credential) => { 
  const { email, password } = credential;

  const logUser = await Users.findOne({ email });
  if (!logUser) return "noUser"

  const encryptedPassword = crypto.createHash("md5").update(password).digest("hex");

  if (encryptedPassword !== logUser.password) { 
    return "unmatchedPassword"
  }

  let loggedInUser = new Object({
    id: logUser._id,
    userName: logUser.userName,
    email: logUser.email,
    profileImage: logUser.profileImage
  });

  const token = jwt.sign(loggedInUser, process.env.JWT_SECRET_KEY, { expiresIn: "48h" });

  loggedInUser.token = token;

  return loggedInUser;
}

module.exports = {
  registerUser,
  loginUser
}