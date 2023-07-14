import express from "express";
import { newIncome, getAllIncomes, deleteIncomeById, deleteAllIncomes } from "../controllers/income/newIncome.controller";
import {getIncome}  from "../controllers/income/getuser.income"

const IncomeRouter = express.Router();

IncomeRouter.post("/income/:id", newIncome);
IncomeRouter.get("/get/income/:id" ,getIncome);
IncomeRouter.get("/getAllIncomes" ,getAllIncomes)
IncomeRouter.delete("/deleteIncomeOne/:id",deleteIncomeById)
IncomeRouter.delete("/deleteAllIncome",deleteAllIncomes)

export default IncomeRouter;
