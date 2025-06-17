import { Car } from "../database/models/cars.js";

//lets start by creating a new model or db
export const createCar = async (req, res) => {
  try {
    const {
      make,
      model,
      year,
      license_plate,
      mileage,
      location,
      photo_urls,
      price_per_day,
      status,
      owner,
    } = req.body;

    const newModel = await Car.create({
      make,
      model,
      year,
      license_plate,
      mileage,
      location,
      photo_urls,
      price_per_day,
      status,
      owner,
    });
    res.status(201).json({
      success: true,
      message: "New collection was created ",
      data: newModel,
    });
  } catch (error) {
    console.log("An error occured", error);
    res.status(500).json({
      success: false,
      message: "Could not create new model of the name Car",
    });
  }
};

//function for getting all the cars avvailable in  the db
export const getCars = async (req, res) => {
  try {
    const { make } = req.query;
    //adding to make the endpoint useable for same page
    if (make) {
      const car = await Car.findOne({ make: { $regex: make, $options: "i" } });
      return res.json({ success: true, data: car });
    }
    //if there is nothing padssed into the search query then this logic is done instead
    const cars = await Car.find();
    res.status(200).json({
      success: true,
      message: "here are all the cars",
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      successs: false,
      message: "Could not get all the cars data from the database",
    });
  }
};

//function for getting the cars by the names / addition of the search functionality

// export const getSearchedCars = async (req, res) => {
//   const { name } = req.query;
//   const car = await Car.findOne({ $regex: name, $options: "i" });
// };

//function for getting one using the id
export const getCar = async (req, res) => {
  try {
    const { id } = req.params;
    const oneCar = await Car.findById(id);

    res.status(200).json({
      success: true,
      data: oneCar,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Could not get the selected school",
    });
    console.log("An error occured", error);
  }
};
