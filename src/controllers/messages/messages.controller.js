import db from "../../database/models";

const User = db.users;
const message = db.messages;

const sendMessage = async (req, res) => {
  const { id } = req.params;
  try {
    const { messageText } = req.body;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const createdMessage = await message.create({
      message: messageText,
      UserId: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
    });

    return res.status(201).json({
      message: "Message sent",
      data: {
        id: createdMessage.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        message: createdMessage.message,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await message.findAll();
    return res.status(200).json({
      message: "All messages",
      data: messages,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteAllMessages = async (req, res) => {
  try {
    await message.destroy({
      where: {},
      truncate: true,
    });

    return res.status(200).json({
      message: "All messages deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const deleteOneMessage = async (req, res) => {
  const { messageId } = req.params;
  try {
    const messageToDelete = await message.findByPk(messageId);

    if (!messageToDelete) {
      return res.status(404).json({
        message: "Message not found",
      });
    }

    await messageToDelete.destroy();

    return res.status(200).json({
      message: "Message deleted",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export { sendMessage, getMessages, deleteAllMessages, deleteOneMessage };
