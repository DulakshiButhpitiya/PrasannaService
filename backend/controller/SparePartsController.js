const SparePart = require('../Models/SparePartsModel');

// Create a new spare part
exports.createSparePart = async (req, res) => {
    try {
        const newSparePart = new SparePart(req.body);
        await newSparePart.save();
        res.status(201).json(newSparePart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all spare parts
exports.getAllSpareParts = async (req, res) => {
    try {
        const spareParts = await SparePart.find();
        res.status(200).json(spareParts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a single spare part by ID
exports.getSparePartById = async (req, res) => {
    try {
        const sparePart = await SparePart.findById(req.params.id);
        if (!sparePart) {
            return res.status(404).json({ message: 'Spare part not found' });
        }
        res.status(200).json(sparePart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update a spare part by ID
exports.updateSparePart = async (req, res) => {
    try {
        const updatedSparePart = await SparePart.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedSparePart) {
            return res.status(404).json({ message: 'Spare part not found' });
        }
        res.status(200).json(updatedSparePart);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a spare part by ID
exports.deleteSparePart = async (req, res) => {
    try {
        const deletedSparePart = await SparePart.findByIdAndDelete(req.params.id);
        if (!deletedSparePart) {
            return res.status(404).json({ message: 'Spare part not found' });
        }
        res.status(200).json({ message: 'Spare part deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
