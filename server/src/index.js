import "dotenv/config";
import express from "express";
import helmet from "helmet";
import logger from "morgan";
import cors from "cors";
import { cloudRt } from "./routes/cloudRt.js";

(async () => {
    const app = express();
    app.use(helmet());
    app.use(cors());

    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(logger("dev"));
    
    app.use("/api", cloudRt);
    const port = process.env.PORT;
    app.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})().catch((error) => console.log(error));
 





