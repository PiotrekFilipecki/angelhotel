'use strict';

/**
 * eat-and-drink service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::eat-and-drink.eat-and-drink');
