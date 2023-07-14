// Corrected code
import db from "../../database/models";
const Amount = db.amounts; 
const AllgetExpense = async (req, res) => {
  try {
    const expenses = await Amount.findAll();
    return res.status(200).json({
      message: "All expense amount",
      data: expenses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
}

export { AllgetExpense };
