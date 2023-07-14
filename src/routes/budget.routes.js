import express from 'express';
import {createBudget, deleteBudget, getBudgetById, getAllBudgets, updateBudget} from '../controllers/budget/createBudget.Controller';
// import {calculateRemainingAmount} from '../controllers/amount/Remaining.amount.js'
import {calculateRemainingBudget} from '../controllers/budget/calculateRemainingBudget.Controller'
import getTotalBudget from '../controllers/budget/getTotalBudget.Controller'
const BudgetRouter =express.Router();

BudgetRouter.post('/addBudget' ,createBudget)
// BudgetRouter.post('/remaining' ,calculateRemainingAmount)
BudgetRouter.delete('/deletebudget/:id' ,deleteBudget)
BudgetRouter.get('/getBudget/:id' ,getBudgetById)
BudgetRouter.get('/getallBudget' ,getAllBudgets)
BudgetRouter.put('/updatebudget/:id' ,updateBudget)
BudgetRouter.get('/getAllTotalBudget',getTotalBudget)
BudgetRouter.get('/calculateRemainingBudget' ,calculateRemainingBudget )

export default BudgetRouter;
