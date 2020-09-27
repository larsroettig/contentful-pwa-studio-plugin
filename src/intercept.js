module.exports = targets => {
  targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
    /**
     *  Wee need to actived esModules and cssModules to allow build pack to load our extension
     * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
     */
    flags[targets.name] = { esModules: true, cssModules: true };
  });

  const veniaTargets = targets.of('@magento/venia-ui');
  const routes = veniaTargets.routes;
  routes.tap(routesArray => {
    routesArray.push({
      name: 'Blog Detail',
      pattern: '/blog/:slug?',
      path: '@larsroettig/contentful/src/RootComponents/Blog'
    });

    return routesArray;
  });
};
