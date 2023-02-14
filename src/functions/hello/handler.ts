import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { greetings } from '@libs/greetings';
import { middyfy } from '@libs/lambda';
import { getLoggerInstance } from '@libs/logger';

import schema from './schema';

const logger = getLoggerInstance();

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  logger.info('inside handler', { customerId: event.body.customerId });
  return formatJSONResponse({
    message: greetings(event.body.name, event.body.customerId),
    event,
  });
};

export const main = middyfy(hello);
