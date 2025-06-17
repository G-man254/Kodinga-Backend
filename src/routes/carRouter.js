//here we set up the routes to make the api calls from

import { Router } from "express";
import { createCar, getCar, getCars } from "../controllers/carController.js";

const carRouter = Router();

carRouter.post("/create", createCar);
carRouter.get("/cars", getCars);
carRouter.get("/cars/:id", getCar);

export { carRouter };
