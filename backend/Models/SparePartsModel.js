const mongoose = require('mongoose');

const SparePartSchema = new mongoose.Schema({
  itemNo: { type: String, required: true },
  itemCode: { type: String, required: true },
  modelNo: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  prices: { type: String, required: true },
  brand: { type: String, required: true },
  bikeModel: { type: String, required: true },
  file: { type: String,  }
}, { timestamps: true });

module.exports = mongoose.model('SparePart', SparePartSchema);
