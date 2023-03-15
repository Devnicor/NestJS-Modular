/* eslint-disable prettier/prettier */

import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_CONNECT,
      port: process.env.DATABASE_PORT,
    },
    apikey: process.env.API_KEY,
  };
});
