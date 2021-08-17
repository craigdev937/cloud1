import express from "express";
import { indexHome } from "../controllers/cloudCon.js";

export const cloudRt = express.Router();
    cloudRt.get("/", indexHome);




