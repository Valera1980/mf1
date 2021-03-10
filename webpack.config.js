const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")


const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mf1"
  },
  node: {
    global: true
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new NodePolyfillPlugin(),
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "mf1",
        filename: "remoteEntry.js",
        exposes: {
          './Module': '/home/valera/test/mf1/src/app/federation-one/federation-one.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: false }, 
          "@angular/common": { singleton: true, strictVersion: false }, 
          "@angular/router": { singleton: true, strictVersion: false },
          "@angular/platform-browser/animations": { singleton: true, strictVersion: false },
          "@angular/platform-browser": { singleton: true, strictVersion: false },
          "@angular/common/http": { singleton: true, strictVersion: false },
          "@angular/cdk": { singleton: true, strictVersion: false },
          "@angular/cdk/scrolling": { singleton: true, strictVersion: false },
          "@angular/forms": { singleton: true, strictVersion: false },
          "@ngx-translate/core": { singleton: true, strictVersion: false },
          "ngx-clipboard": { singleton: true, strictVersion: false },
          "ng2-dragula": { singleton: true, strictVersion: false },
          "ngx-mask": { singleton: true, strictVersion: false },
          "@fortawesome/angular-fontawesome": { singleton: true, strictVersion: false },
          "ngx-ip": { singleton: true, strictVersion: false },
          "angularx-social-login": { singleton: true, strictVersion: false },
          "@angular/fire": { singleton: true, strictVersion: false },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
