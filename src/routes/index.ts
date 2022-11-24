import { Router } from 'express';
import shipping from './shipping.route';

const router = Router();

router.use('/shipping', shipping);
export default router;
