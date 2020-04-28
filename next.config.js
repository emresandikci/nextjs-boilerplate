module.exports = {
  webpack(config, options) {
    config.resolve.modules.push(__dirname);

    return config;
  },
};
