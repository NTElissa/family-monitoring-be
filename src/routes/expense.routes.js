import express from 'express';
import { AddExpenses } from "../controllers/expanse/expance.controller";

const ExpenseRouter =express.Router();

ExpenseRouter.post ('/add/expense',AddExpenses)


export default ExpenseRouter