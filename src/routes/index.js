import { Router } from "express";
import userRouter from "./user.routes";
import ExpenseRouter from "./expense.routes";
import UserRouter from "./login.routes.js";
import IncomeRouter from "./income.routes.js";

const router = Router();

router.use("/user", userRouter);
router.use("/expense", ExpenseRouter);
router.use("/login", UserRouter);
router.use("/income", IncomeRouter);

export default router;
