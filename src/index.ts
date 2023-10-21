require('dotenv').config();
import { Elysia, t } from "elysia";
import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import routes from './routes';

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3000;

const app = new Elysia()
  .use(cors())
  .use(swagger())
  .use(routes)
  .listen({ hostname: HOSTNAME, port: PORT }, () => {
    console.log(`🦊 Elysia is running at ${HOSTNAME}:${PORT}`);
  });

