import User from "../../models/User";
import connectDB from "../../middleware/mongo";
// var AES = require("crypto-js/aes");
var CryptoJS = require("crypto-js");

const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.log(req.body);
    const { name, email } = req.body;
    let u = await new User({
      name,
      email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        "sahilpillania"
      ).toString(),
    });
    u.save();

    res.status(200).json({ output: "Signed Up successfully", type: "success" });
  } else {
    res
      .status(400)
      .json({ output: "Failed to signup. Try again", type: "error" });
  }
};

export default connectDB(handler);
