const Inventory = require("./model");

// get all Inventory
const getInventories = async (req, res) => {
  try {
    const inventory = await Inventory.find({});
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add one Inventory
const addInventory = async (req, res) => {
  try {
    const { name, description, quantity, price } = req.body;
    const newInventory = new Inventory({ name, description, quantity, price });
    await newInventory.save();
    res.status(201).json(newInventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Inventory by ID
const getInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findById(id);
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Inventory by ID
const deleteInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const inventory = await Inventory.findByIdAndDelete({ _id: id });
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json({ message: "Inventory deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete all Inventories
const deleteAllInventories = async (req, res) => {
  try {
    const result = await Inventory.deleteMany({});
    res
      .status(200)
      .json({ message: `Deleted ${result.deletedCount} Inventories successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Inventory by ID
const updateInventory = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedInventory = req.body;
    const inventory = await Inventory.findOneAndUpdate({ _id: id }, updatedInventory);
    if (!inventory) {
      return res.status(404).json({ message: "Inventory not found" });
    }
    res.status(200).json(inventory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getInventories,
  addInventory,
  getInventory,
  deleteInventory,
  deleteAllInventories,
  updateInventory,
};