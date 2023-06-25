import db from "../../database/models";
import bcrypt from "bcrypt";

const User = db.users;

const updateUserProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const {
      first_name,
      last_name,
      nickname,
      location,
      phone_number,
      job,
      otherFields,
      position,
      password,
      confirm_password,
    } = req.body;

    // Check if the password and confirm_password match
    if (password !== confirm_password) {
      return res.status(400).json({
        message: "Password and confirm password do not match",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user record
    const [updatedRows] = await User.update(
      {
        first_name,
        last_name,
        nickname,
        location,
        phone_number,
        job,
        otherFields,
        position,
        password: hashedPassword, // Store the hashed password
      },
      {
        where: { id },
      }
    );

    if (updatedRows === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      // Check if the password and confirm_password match
      message: "User profile updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { updateUserProfile };
