'use strict';

/* eslint-env node */
/* eslint-disable no-var, object-shorthand */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dummy',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

 firebase: {
    apiKey: "AIzaSyBMGt-rw9l1YQ87aEDkbQ590nHllT0uOAg",
    authDomain: "artadysgouvfr.firebaseapp.com",
    databaseURL: "https://artadysgouvfr.firebaseio.com",
    projectId: "artadysgouvfr",
    storageBucket: "artadysgouvfr.appspot.com",
    messagingSenderId: "716658089584"
    },

    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },

    torii: {
      sessionServiceName: 'session'
    },




    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

  

    browserify: {
      tests: true
    },

    apiHost: 'https://artadysgouv.fr',

    googleClientID: '716658089584-gmvkotob7s3i50l74i0t5hdgovgu06cc.apps.googleusercontent.com',

    fastboot: {
      hostWhitelist: [/^localhost:\d+$/]
    },

    esaVersion: require('../../../package.json').version,
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // put production settings here
  }

  return ENV;
};
