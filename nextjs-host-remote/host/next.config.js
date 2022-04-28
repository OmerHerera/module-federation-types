// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
// next.config.js
// const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports =
  // withFederatedSidecar({
  // name: "next2",
  // filename: "static/chunks/remoteEntry.js",
  // exposes: {
  //   "./sampleComponent": "./components/sampleComponent.js",
  // },
  // shared: {
  //   react: {
  //     // Notice shared are NOT eager here.
  //     requiredVersion: false,
  //     singleton: true,
  //   },
  // },
  // })
  ({
    webpack5: true,
    webpack(config, options) {
      const { webpack, isServer } = options;
      config.experiments = { topLevelAwait: true };

      config.module.rules.push({
        test: /_app.js/,
        loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
      });

      config.plugins.push(
        new webpack.container.ModuleFederationPlugin({
          remotes: {
            remote: 'remote@http://localhost:8081/_next/static/chunks/remoteEntry.js'
          },
          shared: {
            react: {
              singleton: true,
              eager: true,
              requiredVersion: false,
            },
          },
          // we have to share something to ensure share scope is initialized
          // "@module-federation/nextjs-mf/lib/noop": {
          //   eager: false,
          // },
        }),
      );
      return config;
    }
  });