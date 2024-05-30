// import upload from '../multer/Multer';
const express = require('express');
const {
    createSparePart,
    getAllSpareParts,
    getSparePartById,
    updateSparePart,
    deleteSparePart
} = require('../controller/SparePartsController');


const router = express.Router();

router.post('/', createSparePart);
router.get('/', getAllSpareParts);
router.get('/:id', getSparePartById);
router.put('/:id', updateSparePart);
router.delete('/:id', deleteSparePart);

module.exports = router;
