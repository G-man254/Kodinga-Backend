import dotenv from 'dotenv';
dotenv.config(); // ✅ This is the right way to initialize
import mongoose from "mongoose";
import "dotenv/config";
import { Car } from "../src/database/models/cars.js";

const carsData = [
  {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
    license_plate: "TOY123",
    mileage: 15000,
    location: "New York",
    photo_urls: [
      "https://example.com/toyota-corolla-1.jpg",
      "https://example.com/toyota-corolla-2.jpg",
    ],
    price_per_day: 45,
    status: "available",
    owner: {
      firstName: "Alice",
      lastName: "K"
    }
  },
  {
    make: "Honda",
    model: "Civic",
    year: 2021,
    license_plate: "HON456",
    mileage: 20000,
    location: "Los Angeles",
    photo_urls: ["https://example.com/honda-civic-1.jpg"],
    price_per_day: 50,
    status: "available",
    owner: {
      firstName: "Patrick",
      lastName: "Kiarie"
    }
  },
  {
    make: "Ford",
    model: "Mustang",
    year: 2023,
    license_plate: "FOR789",
    mileage: 5000,
    location: "Miami",
    photo_urls: [
      "https://example.com/ford-mustang-1.jpg",
      "https://example.com/ford-mustang-2.jpg",
    ],
    price_per_day: 80,
    status: "booked",
    owner: {
      firstName: "Alvin",
      lastName: "G"
    }
  },
  {
    make: "Tesla",
    model: "Model 3",
    year: 2023,
    license_plate: "TES012",
    mileage: 10000,
    location: "San Francisco",
    photo_urls: ["https://example.com/tesla-model3-1.jpg"],
    price_per_day: 90,
    status: "available",
    owner: {
      firstName: "Pinky",
      lastName: "Kiarie"
    }
  },
  {
    make: "BMW",
    model: "X5",
    year: 2022,
    license_plate: "BMW345",
    mileage: 12000,
    location: "Chicago",
    photo_urls: [
      "https://example.com/bmw-x5-1.jpg",
      "https://example.com/bmw-x5-2.jpg",
    ],
    price_per_day: 75,
    status: "maintenance",
    owner: {
      firstName: "Jack",
      lastName: "Ma"
    }
  },
];

const seedDatabase = async () => {
  try {
    console.log("Connecting to the database....");

    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    // console.log(process.env.MONGO_CONNECTION_STRING);

    console.log("Database was connected");
    console.log("Collection name :", Car.collection.name);

    const insertResult = await Car.insertMany(carsData);
    console.log(`${insertResult.length} cars inserted successfully`);
  } catch (error) {
    console.log("An error occured with adding the cars");
    console.error(error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
};

seedDatabase();
