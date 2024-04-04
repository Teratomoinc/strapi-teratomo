'use strict';

/**
 * fintech-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fintech-dev.fintech-dev');
