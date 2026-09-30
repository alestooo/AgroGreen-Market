import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";

export const app = express();

app.use(helmet());

app.use(
  cors({
    origin: "http://localhost:4200",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (_req, res) => {
  res.status(200).json({
    name: "AgroGreen API",
    status: "running",
    health: "/api/health",
  });
});