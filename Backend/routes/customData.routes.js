// routes/customData.routes.js

import express from 'express';
import { addCustomData, getCustomData, updateCustomData, deleteCustomData } from '../controllers/customData.controller.js';


const router = express.Router();

// Route to add custom data
router.post('/add', addCustomData);

// Route to get custom data
router.get('/:userId',  getCustomData);

// Route to update custom data
router.put('/:dataId',  updateCustomData);

// Route to delete custom data
router.delete('/:dataId', deleteCustomData);

export default router;
