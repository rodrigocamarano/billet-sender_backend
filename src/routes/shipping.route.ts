import { Router } from 'express';

import validate from '../validators/validator';
import shipping from '../controllers/shipping.controller';

const router = Router();

router.route('/').post(validate, shipping);

export default router;
