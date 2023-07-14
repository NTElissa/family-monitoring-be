import db from "../../database/models";
const Budget = db.Budgets;

const getTotalBudget = async (req, res) => {
  try {
    // Retrieve all budgets from the database
    const budgets = await Budget.findAll();

    // Calculate the total amount from all budgets
    let totalAmount = 0;
    budgets.forEach((budget) => {
      totalAmount += budget.TotalBudget;
    });

    return res.status(200).json({
      totalAmount,
      budgets,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default getTotalBudget;
