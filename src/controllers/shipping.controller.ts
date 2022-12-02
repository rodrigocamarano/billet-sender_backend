import { Request, Response } from 'express';
import NodeMailer from '../services/shipping/NodeMailer';

const shipping = async (req: Request, res: Response) => {
  const nodeMailer = new NodeMailer(req.body);
  await nodeMailer.sendAll().then((result) => {
    const fulfilled = [];
    const rejected = [];
    for (const item of result) {
      item.status === 'fulfilled' ? fulfilled.push(item.value) : rejected.push(item.reason);
    }
    return res.status(200).json({ fulfilled: fulfilled.length > 0 ? fulfilled : undefined, rejected: rejected.length > 0 ? rejected : undefined });
  });
};

export default shipping;
