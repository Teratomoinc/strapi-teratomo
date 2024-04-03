'use strict';

/**
 * find-tech service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::find-tech.find-tech');
