'use strict';

/**
 * blockchain-dev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blockchain-dev.blockchain-dev');
