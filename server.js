import "dotenv/config";
import express from "express";
import { connectingDb } from "./src/database/config.js";
import { carRouter } from "./src/routes/carRouter.js";
import cors from "cors";
// dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
//using cors to establish communication with frontend

app.use(
  cors({
    origin: "https://kodinga-frontend-1.onrender.com"
  })
);

connectingDb();
// createCar();

//to allow for use of routes to make our api calls

app.get("/", (req, res) => {
  res.json({
    success: true,
    data: "This is the basic home route for checking status of our application",
  });
});

app.use("/api", carRouter);

app.listen(PORT, '0.0.0.0', ()=> {
  console.log(`Server is listening on http://0.0.0.0:${PORT}`);
});
