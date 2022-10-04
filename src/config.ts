import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    title: process.env.TITLE,
    mongoHost: process.env.MONGO_HOST,
  };
});
