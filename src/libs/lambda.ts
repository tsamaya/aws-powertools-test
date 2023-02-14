import { injectLambdaContext } from '@aws-lambda-powertools/logger';

import middy from '@middy/core';
import middyJsonBodyParser from '@middy/http-json-body-parser';

import { getLoggerInstance } from './logger';
// create Powertools Logger instance with custom service name
const logger = getLoggerInstance();

export const middyfy = (handler) => {
  return middy(handler)
    .use(injectLambdaContext(logger, { logEvent: true }))
    .use(middyJsonBodyParser());
};
