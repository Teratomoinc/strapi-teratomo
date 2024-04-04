'use strict';

/**
 * home-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::home-about.home-about');
