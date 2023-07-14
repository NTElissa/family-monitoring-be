import express from 'express';
import { AddExpenses, getAllExpenses, deleteExpenseById, deleteAllExpenses } from "../controllers/expanse/expance.controller";
import {getExpance} from "../controllers/expanse/getuser.expanse";
import { AllgetExpense } from '../controllers/amount/get.amount.expense';
import{ getAllThings }  from '../controllers/expanse/get.expense.income.controller'
const ExpenseRouter =express.Router();

ExpenseRouter.post ('/add/expense/:id',AddExpenses)
ExpenseRouter.get('/getAllExpenses' ,getAllExpenses)
ExpenseRouter.get('/get/expense/:id' ,getExpance)
ExpenseRouter.get('/allexpense',AllgetExpense)
ExpenseRouter.get('/getAllThings' , getAllThings)
ExpenseRouter.delete('/deleteExpanse/:id' ,deleteExpenseById)
ExpenseRouter.delete('/deleteAllExpanse' , deleteAllExpenses)


export default ExpenseRouter