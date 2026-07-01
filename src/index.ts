import express from "express";
import userRoutes from "./route/user.routes";
const app = express();
app.use("/users", userRoutes);

app.use(express.json());

app.use("/users", userRoutes);

app.get("/", (req, res) => { res.send("API running 🚀"); });

app.listen(3000, () => { console.log("Server running on port 3000") });