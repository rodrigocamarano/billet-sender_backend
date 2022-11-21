import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

const server = express();
server.use(helmet());
server.use(compression());
server.use(cors());
server.use(express.json());

export default server;
