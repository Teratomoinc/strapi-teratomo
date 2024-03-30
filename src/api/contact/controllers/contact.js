// @ts-nocheck
"use strict";

const request = require("request");

/**
 * contact controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::contact.contact", ({ strapi }) => ({
  async create(ctx) {
    const hubSpotUrl = process.env.HUBSPOT_URL;
    const apiKey = process.env.KEY_HUBSPOT;
    try {
        console.log(ctx.request.body, ctx.request.body.data)
      const { email, fullname, message } = ctx.request.body.data;
      const url = `${hubSpotUrl}/crm/v3/objects/contacts`;
      const requestOptions = {
        url: url,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          properties: {
            email: email,
            firstname: fullname,
            message: message,
            hs_lead_status: "NEW",
          },
        }),
      };

      // Se envuelve la solicitud de request en una promesa
      await new Promise((resolve, reject) => {
        request(requestOptions, (error, response, body) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
    return super.create(ctx);
  },
}));
