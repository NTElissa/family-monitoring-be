import express from 'express';
import { AddExpenses } from "../controllers/expanse/expance.controller";

const ExpenseRouter =express.Router();

ExpenseRouter.post ('/add/expense/:id',AddExpenses)


export default ExpenseRouter