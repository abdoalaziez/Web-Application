import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "HOSPITAL",
    })
    .then(() => {
      console.log("Connected to database successful!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
