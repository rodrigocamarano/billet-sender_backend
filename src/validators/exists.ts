import fs from 'fs';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';

const checkFile = (domain: string) => fs.existsSync(`./attachments/${domain}.pdf`);

const domainsRequest = (billets: any) =>
  billets.reduce((array: any, { domain }: { domain: string }) => {
    array.push(domain);
    return array;
  }, []);

const exists = (req: Request, res: Response, next: NextFunction) => {
  const domains = domainsRequest(req.body.billets);
  const notFound = [];
  for (const domain of domains) {
    if (!checkFile(domain)) {
      notFound.push(domain);
    }
  }
  if (notFound.length > 0) {
    const { statusCode, message } = new CustomError(JSON.stringify(domains));
    return res.status(statusCode).json({ error: { message: 'One or more missing files.', missing: JSON.parse(message) } });
  }
  return next();
};

export default exists;
