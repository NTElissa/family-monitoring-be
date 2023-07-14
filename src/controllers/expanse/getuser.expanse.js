import db from "../../database/models";

const User = db.users;
const Expense = db.expenses;

const getExpance = async (req, res) => {
  const { id } = req.params;

  try {
    // First, we find the user based on the provided id
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Then, we find all expenses associated with the user
    const expenses = await Expense.findAll({ where: { id: id } });

    if (expenses.length === 0) {
      return res.status(404).json({
        message: "No expenses found for this user",
      });
    }

    // Next, we map the expenses to extract the required data
    const expenseAmounts = expenses.map((expense) => ({
      expenseId: expense.id,
      amount: expense.amount ? expense.amount : 0,
    }));

    return res.status(200).json({
      message: "Expense amounts retrieved successfully",
      userId: user.id,
      expenses: expenseAmounts,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { getExpance };
