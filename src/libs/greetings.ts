import { getLoggerInstance } from './logger';

const logger = getLoggerInstance();

export const greetings = (name, customerId) => {
  logger.info(`name is ${name}`, { customerId });
  return `Hello ${name}, welcome to the exciting Serverless world!`;
};
