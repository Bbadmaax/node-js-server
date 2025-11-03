import User from "../models/User.js";


// get Users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// grtuseronly
// // getUserOnly
export const getUserOnly = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id); // akhri user by ID
    if (!user) {
      return res.status(404).json({ message: "User not found ❌" });
    }

    res.status(200).json(user); // 200 sababtoo ah waa read operation
  } catch (err) {
    res.status(500).json({ message: "Server error ⚠️" });
  }
};

// createUser
export const createUser = async (req, res) => {
  try {
    const user = new User(req.body);
    const saved = await user.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// update User
export const updateUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found ❌" });
    }
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// deleteuser
export const deleteUser = async (req, res) => {
  const { id } = req.params; // id ka user
  try {
    const deletedUser = await User.findByIdAndDelete(id); // or you can say   const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found ❌" });
    }
    res.status(200).json({ message: "User deleted ✅" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};



