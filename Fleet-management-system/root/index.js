import express from "express";
import dotenv from "dotenv";
import vehicleRoutes from "./routes/vehicleRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/vehicles", vehicleRoutes);
app.use("/trips", tripRoutesRoutes);
app.use("user", userRoutes);
app.use("analytics", analyticsRoutes);
app.get("/", (req, res) => {
    res.status(200).send("Fleet Management API is running");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on port $ {PORT}`);
});