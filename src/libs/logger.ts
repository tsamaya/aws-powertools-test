import { Logger } from '@aws-lambda-powertools/logger';

let logger = null;

export const getLoggerInstance = () => {
  if (!logger) {
    logger = new Logger();
  }
  return logger;
};
