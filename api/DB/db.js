import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected", () => console.log("DB connected"));
export default connect;
