import { Schema, model } from "mongoose";

//lets creation of the project schema

const schema = new Schema(
  {
    // owner_id : {}
    make: { type: String }, //eg toyota
    model: { type: String }, //eg .Toyota Corolla
    year: { type: Number }, //eg .year of manufacture
    license_plate: { type: String },
    mileage: { type: Number },
    location: { type: String, required: true },
    photo_urls: { type: Array, required: true },
    price_per_day: { type: Number, required: true },
    status: { type: String, required: true }, // this is the place you say if its available or booked
    owner: { type: Object, required: true },
  },
  {
    timestamps: true,
  }
);

const Car = model("Kodinga", schema);

export { Car };
