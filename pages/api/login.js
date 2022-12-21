import User from "../../models/User";
import connectDB from "../../middleware/mongo";

const handler = async (req, res) => {
  if (req.method == "POST") {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      if (req.body.email == user.email && req.body.password == user.password) {
        res.status(200).json({
          output: "login successfully",
          email: user.email,
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
