import express from "express";
import newIncome from "../controllers/income/newIncome.controller";

const IncomeRouter = express.Router();

IncomeRouter.post("/income/:id", newIncome);

export default IncomeRouter;
