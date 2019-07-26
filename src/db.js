import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl =
  process.env.DEV_ENV === "development"
    ? process.env.MONGO_URL
    : process.env.MONGO_URL_PROD;

mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useFindAndModify: false
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = error => console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);
