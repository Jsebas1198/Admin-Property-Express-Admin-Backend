import User from "../mongodb/models/user.js";

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).limit(req.query._end);
    res.status(200).json(users);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Fetching users failed, please try again later" });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, avatar } = req.body;
    const userExist = await User.findOne({ email });
    if (userExist) return res.status(200).json(userExist);

    const newUser = await User.create({ name, email, avatar });

    res.status(200).json(newUser);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
const getUserInfoById = async (req, res) => {
  try {
    const { id } = req.params;
    const userProperties = await User.findOne({ _id: id }).populate(
      "allProperties"
    );

    if (userProperties) res.status(200).json(userProperties);
    else res.status(404).send("User not found");
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Failed to get user properties, please try again later",
      });
  }
};

export { getAllUsers, createUser, getUserInfoById };
