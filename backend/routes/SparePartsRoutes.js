const express = require('express');
const {
  createSparePart,
  getAllSpareParts,
  getSparePartById,
  updateSparePart,
  deleteSparePart
} = require('../controller/SparePartsController');
const upload = require('../multer/Multer'); // Import the multer configuration

const router = express.Router();

router.post('/', upload.single("file"), createSparePart);
router.get('/', getAllSpareParts);
router.get('/:id', getSparePartById);
router.put('/:id', updateSparePart);
router.delete('/:id', deleteSparePart);

module.exports = router;
