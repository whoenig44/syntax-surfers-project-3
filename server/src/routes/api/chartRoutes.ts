import { Router } from 'express';
import { fetchChartData, addDataPoint } from '../../controllers/chartController.js';


const router = Router();

router.get('/', fetchChartData);
router.post('/data-point', addDataPoint);

export { router as chartRouter };
