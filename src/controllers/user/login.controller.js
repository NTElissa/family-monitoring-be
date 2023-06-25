import db from "../../database/models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const User = db.users;

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find the user based on the email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Compare the provided password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }

    // Generate a token
    const token = jwt.sign({ userId: user.id }, "your-secret-key", {
      expiresIn: "1h",
    });

    return res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};
 const Logout = (req, res) => {
  try {
    res.clearCookie('jwt');
    // Send success response
    res.status(200).json({ message: 'Logout successful' });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    // Send error response
    res.status(500).json({ message: 'Internal server error' });
  }
};


export { Login ,Logout };
