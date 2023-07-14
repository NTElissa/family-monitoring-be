"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBudget = exports.getBudgetById = exports.getAllBudgets = exports.deleteBudget = exports.createBudget = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Budget = _models.default.Budgets;
const createBudget = async (req, res) => {
  try {
    const {
      description,
      TotalBudget
    } = req.body;
    const existingBudget = await Budget.findOne({
      where: {
        TotalBudget: parseInt(TotalBudget)
      }
    });
    if (existingBudget) {
      return res.status(409).json({
        message: "Budget already exists"
      });
    }
    let newBudgetAmount;
    const previousBudget = await Budget.findOne({
      order: [["createdAt", "DESC"]]
    });
    if (previousBudget) {
      newBudgetAmount = parseInt(previousBudget.TotalBudget) + parseInt(TotalBudget);
    } else {
      newBudgetAmount = parseInt(TotalBudget);
    }

    // Create the new budget with the calculated TotalBudget
    const budget = await Budget.create({
      description,
      TotalBudget: newBudgetAmount
    });
    return res.status(201).json({
      message: "Budget created",
      budget
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.createBudget = createBudget;
const deleteBudget = async (req, res) => {
  try {
    const budgetId = req.params.id;

    // Check if the budget with the given ID exists in the database
    const budget = await Budget.findOne({
      where: {
        id: budgetId
      }
    });
    if (!budget) {
      return res.status(404).json({
        message: "Budget not found"
      });
    }

    // Delete the budget from the database
    await budget.destroy();
    return res.status(200).json({
      message: "Budget deleted"
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.deleteBudget = deleteBudget;
const getBudgetById = async (req, res) => {
  try {
    const budgetId = req.params.id;

    // Find the budget with the given ID in the database
    const budget = await Budget.findOne({
      where: {
        id: budgetId
      }
    });
    if (!budget) {
      return res.status(404).json({
        message: "Budget not found"
      });
    }
    return res.status(200).json({
      budget
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.getBudgetById = getBudgetById;
const getAllBudgets = async (req, res) => {
  try {
    // Retrieve all budgets from the database
    const budgets = await Budget.findAll();
    return res.status(200).json({
      budgets
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.getAllBudgets = getAllBudgets;
const updateBudget = async (req, res) => {
  try {
    const budgetId = req.params.id;
    const {
      description,
      TotalBudget
    } = req.body;
    const budget = await Budget.findOne({
      where: {
        id: budgetId
      }
    });
    if (!budget) {
      return res.status(404).json({
        message: "Budget not found"
      });
    }

    // Update the budget with the new data
    const [updatedRows] = await Budget.update({
      description,
      TotalBudget
    }, {
      where: {
        id: budgetId
      }
    });
    if (updatedRows === 0) {
      return res.status(404).json({
        message: "Budget not found"
      });
    }
    return res.status(200).json({
      message: "Budget updated",
      updatedRows
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.updateBudget = updateBudget;