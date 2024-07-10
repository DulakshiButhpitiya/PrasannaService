const express = require('express');
const {
  createSparePart,
  getAllSpareParts,
  getSparePartById,
  updateSparePart,
  deleteSparePart
} = require('../controller/SparePartsController');
const upload = require('../config/Multerconfig'); // Import the multer configuration

const router = express.Router();


router.post('/spareparts', upload.single('image'), createSparePart);
router.get('/spareparts', getAllSpareParts);
router.get('/spareparts/:id', getSparePartById);
router.put('/spareparts/:id', updateSparePart);
router.delete('/spareparts/:id', deleteSparePart);


module.exports = router;
