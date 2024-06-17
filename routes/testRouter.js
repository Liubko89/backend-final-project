import express from "express";
import { createTest, getAllTests } from "../controllers/test.js";

const testRouter = express.Router();
testRouter.get("/", getAllTests);
testRouter.post("/", createTest);

export default testRouter;
