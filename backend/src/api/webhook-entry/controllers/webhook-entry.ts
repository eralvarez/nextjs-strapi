/**
 * A set of functions called "actions" for `webhook-entry`
 */

import type { Context } from 'koa';

import supabase from "../../../clients/supabase";

const X_STRAPI_CRUD = process.env.X_STRAPI_CRUD;

export default {
  handleWebhookEntry: async (ctx: Context, next: () => Promise<void>) => {
    try {
      const requestXStrapiCrud = ctx.request.headers['x-strapi-crud'];

      if (requestXStrapiCrud !== X_STRAPI_CRUD) {
        strapi.log.error('Invalid X-Strapi-Crud header');
        return ctx.badRequest({
          message: 'Invalid X-Strapi-Crud header',
        });
      }

      const challengeChannel = supabase.channel("challenge-channel");
      await challengeChannel.send({
        type: "broadcast",
        event: "challenge",
        payload: ctx.request.body,
      });

      console.log("Message sent!");
      console.log(ctx.request.body);

      ctx.created({
        message: 'Webhook received',
        data: ctx.request.body,
      });
    } catch (err) {
      ctx.body = err;
    }
  }
};
