import User from "../../models/User";
import connectDB from "../../middleware/mongo";

const handler = async (req, res) => {
  if (req.method == "POST") {
    // console.log(req.body);
    let u = await new User(req.body);
    u.save();

    res.status(200).json({ output: "Signed Up successfully", type: "success" });
  } else {
    res
      .status(400)
      .json({ output: "Failed to signup. Try again", type: "error" });
  }
};

export default connectDB(handler);
