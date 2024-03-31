const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getInventories,
  addInventory,
  getInventory,
  deleteInventory,
  deleteAllInventories,
  updateInventory,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Inventory
app.get("/inventory", getInventories);

// POST a new Inventory
app.post("/inventory", addInventory);

// GET a single Inventory
app.get("/inventory/:id", getInventory);

// Update Inventory using PUT
app.put("/inventory/:id", updateInventory);

// DELETE a Inventory
app.delete("/inventory/:id", deleteInventory);

// DELETE all Inventory
app.delete("/inventory", deleteAllInventories);

const PORT = 4000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});