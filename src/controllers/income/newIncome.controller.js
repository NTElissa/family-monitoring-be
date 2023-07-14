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
    totalIncome += amount;

    const income = await Income.create({
      description,
      amount,
      UserId: user.id,
      TotalIncome: totalIncome,
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
      income,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export default newIncome ;
