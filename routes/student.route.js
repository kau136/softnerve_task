import express from "express"

import { 
  addDetailsController,
  readDetailsController,
  updateDetailsController,
  deleteDetailsController
        } from '../controllers/student.controller.js'

const router = express.Router();

router.post('/addDetails', addDetailsController);
router.get('/readDetails/:id', readDetailsController);
router.put('/updateDetails/:id', updateDetailsController);
router.delete('/deleteDetails/:id', deleteDetailsController);

export default router;


