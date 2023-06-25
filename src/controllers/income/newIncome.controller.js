import db from "../../database/models";

const User = db.users;
const Income = db.incomes;
const Amount = db.amounts;
const newIncome = async (req, res) => {
    const { id } = req.params;
  
    try {
      const { discription, amount } = req.body;
  
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
        discription,
        amount,
        UserId: user.id, 
        TotalIncome: totalIncome

      });
      
     // Check if Amount record exists and // Save TotalIncome into the Amount table
    const existingAmount = await Amount.findOne();
    if (existingAmount) {
      // Update TotalAmount
      await existingAmount.update({
        TotalAmount: totalIncome,
      });
    } 
      else{
        await Amount.create({
        TotalAmount: totalIncome,
            
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
  
  export default  newIncome ;
  