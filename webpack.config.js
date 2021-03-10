const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mf1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "mf1",
        filename: "remoteEntry.js",
        exposes: {
          './Module': './src/app/federation-one/federation-one.module.ts',
        },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: false }, 
          "@angular/common": { singleton: true, strictVersion: false }, 
          "@angular/router": { singleton: true, strictVersion: false },
         
          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};
