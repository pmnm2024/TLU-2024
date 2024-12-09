/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
module.exports = {
  version: '1.0.0',

  init: function (pluginContext) {

    pluginContext.registerPolicy(require('./policies/log-policy'));

    pluginContext.eventBus.on('hot-reload', function ({ type, newConfig }) {
      console.log('hot-reload', type, newConfig);
    });
    pluginContext.eventBus.on('http-ready', function ({ httpServer }) {
      console.log('http ready');
    });
    pluginContext.eventBus.on('https-ready', function ({ httpsServer }) {
      console.log('https ready');
    });
    pluginContext.eventBus.on('admin-ready', function ({ adminServer }) {
      console.log('admin ready');
    });
   
  },

  policies: ['log-policy'],

  options: {
    logLevel: 'info', 
    logFile: 'logs/requests.log',  
  },

  schema: {
    $id: 'express-gateway-plugin-logging',
    type: 'object',
    properties: {
      logLevel: {
        type: 'string',
        enum: ['info', 'warn', 'error', 'debug'],
        default: 'info',
      },
      logFile: {
        type: 'string',
        default: 'logs/requests.log',
      },
    },
    required: ['logLevel'],  
  },
};
