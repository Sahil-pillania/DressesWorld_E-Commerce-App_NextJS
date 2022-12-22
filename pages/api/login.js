import User from "../../models/User";
import connectDB from "../../middleware/mongo";
var CryptoJS = require("crypto-js");
var jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      // decrypting the password
      var bytes = CryptoJS.AES.decrypt(user.password, "sahilpillania");
      var userPassword = bytes.toString(CryptoJS.enc.Utf8);

      if (req.body.email == user.email && req.body.password == userPassword) {
        var token = jwt.sign(
          { success: true, email: user.email, name: user.name },
          "jwtsecretcode",
          { expiresIn: "1d" }
        );
        res.status(200).json({
          token,
          type: "success",
        });
      } else {
        res.status(400).json({ output: "Invalid credentials", type: "error" });
      }
    } else {
      res.status(400).json({ output: "No user found", type: "error" });
    }
  } else {
    res
      .status(400)
      .json({ output: "Failed to Login. Try again", type: "error" });
  }
};

export default connectDB(handler);
