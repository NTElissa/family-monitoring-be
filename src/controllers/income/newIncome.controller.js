import db from "../../database/models";

const User = db.users;
const Income = db.incomes;
const Amount = db.amounts;

const newIncome = async (req, res) => {
  const { id } = req.params;

  try {
    const { description, amount } = req.body;

    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const incomes = await Income.findAll();
    let totalIncome = 0;
    for (const income of incomes) {
      totalIncome += income.amount;
    }
    totalIncome += parseInt(amount);

    const income = await Income.create({
      description,
      amount,
      UserId: user.id,
      TotalIncome: totalIncome,
      creatorName: user.first_name,//  + " " + user.last_name, // Assign creatorName
      category: "Income", // Assign category
    });

    // Save TotalIncome into the Amount table
    const existingAmount = await Amount.findOne();
    if (existingAmount) {
      // Update IncomeAmount
      await existingAmount.update({
        IncomeAmount: totalIncome,
      });
    } else {
      await Amount.create({
        IncomeAmount: totalIncome,
      });
    }

    return res.status(201).json({
      message: "New income added",
      income: {
        description: income.description,
        amount: income.amount,
        UserId: income.UserId,
        TotalIncome: income.TotalIncome,
        creatorName: income.creatorName, // Confirm that creatorName is being saved
        category: income.category, // Confirm that category is being saved
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const getAllIncomes = async (req, res) => {
  try {
    const incomes = await Income.findAll();
    return res.status(200).json({
      incomes,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Income by ID
const deleteIncomeById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find income
    const income = await Income.findByPk(id);
    if (!income) {
      return res.status(404).json({ message: "Income not found" });
    }

    // Get total income before deleting
    const totalIncome = income.TotalIncome;

    // Delete income
    await income.destroy();

    // Update total income 
    const amount = await Amount.findOne();
    await amount.update({
      IncomeAmount: totalIncome - income.amount
    });

    res.status(200).json({ message: "Income deleted successfully" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete All Incomes
const deleteAllIncomes = async (req, res) => {
  try {
    // Delete all incomes
    await Income.destroy({ truncate: false });
    
    // Reset total income to 0
    const amount = await Amount.findOne();
    await amount.update({ IncomeAmount: 0 });

    res.status(200).json({ message: "All incomes deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export { newIncome, getAllIncomes, deleteIncomeById, deleteAllIncomes };
