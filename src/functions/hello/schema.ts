export default {
  type: 'object',
  properties: {
    name: { type: 'string' },
    customerId: { type: 'string' },
  },
  required: ['name', 'customerId'],
} as const;
