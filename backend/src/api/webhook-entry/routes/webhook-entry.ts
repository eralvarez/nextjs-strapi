export default {
  routes: [
    {
     method: 'POST',
     path: '/webhook-entry',
     handler: 'webhook-entry.handleWebhookEntry',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
