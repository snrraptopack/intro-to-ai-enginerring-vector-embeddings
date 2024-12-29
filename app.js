import express from "express"
import {indexRoute} from "./routes/index.js";

export const app = express()

app.use(express.json())

app.use(indexRoute)
