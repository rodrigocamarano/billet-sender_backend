import { Router } from 'express';

import validate from '../validators/validator';
import exists from '../validators/exists';
import shipping from '../controllers/shipping.controller';

const router = Router();

router.route('/').post(validate, exists, shipping);

export default router;
