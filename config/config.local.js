'use strict';

module.exports = appInfo => {
  const config = {};

  config.middleware = ['liveReload'];
  config.liveReload = {
    init: true, files: ["app/**/*"], logConnections: false
  };

  config.nunjucks = {
    autoescape: true,
    throwOnUndefined: true,
    trimBlocks: false,
    lstripBlocks: false,
    cache: false,
  };

  config.loader ={
    assetsMap: require('../assets.json'),
    cdnHost: '',

  };

  return config;
};
