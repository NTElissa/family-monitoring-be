// import db from "../../database/models";

// const Amount = db.amounts; 
// const Budget = db.Budgets; 
// const Expense = db.expenses; 

// const calculateRemainingAmount = async (req, res) => {
//   try {
//     const { budgetId } = req.params;

//     // Find the budget by ID
//     const budget = await Budget.findByPk(budgetId);

//     if (!budget) {
//       return res.status(404).json({
//         message: "Budget not found",
//       });
//     }

//     const expenses = await Expense.findAll({ where: { budgetId } });

//     // Calculate the total expense from all the expenses
//     const totalExpense = expenses.reduce((sum, expense) => sum + expense.amount, 0);

//     // Calculate the remaining budget
//     const remainingBudget = budget.totalAmount - totalExpense;

//     // Update the Amount model with the calculated values
//     const amountRecord = await Amount.findOne({ where: { budgetId } });
//     if (!amountRecord) {
//       return res.status(404).json({
//         message: "Amount record not found for the budget",
//       });
//     }

//     // Update the Amount model with the calculated values
//     amountRecord.IncomeAmount = remainingBudget >= 0 ? remainingBudget : 0;
//     amountRecord.ExpenseAmount = remainingBudget < 0 ? -remainingBudget : 0;
//     amountRecord.TotalAmount = budget.totalAmount;
//     await amountRecord.save();

//     return res.status(200).json({
//       message: "Remaining amount calculated and Amount record updated successfully",
//       remainingBudget,
//     });
//   } catch (error) {
//     console.error("Error calculating remaining amount:", error.message);
//     return res.status(500).json({
//       message: "Internal server error",
//     });
//   }
// };

// export { calculateRemainingAmount };
