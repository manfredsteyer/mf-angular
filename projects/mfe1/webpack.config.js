const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  ['auth-lib', 'other-lib']  
);

module.exports = {
  output: {
    uniqueName: "mfe1",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },  
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        name: "mfe1",
        filename: "remoteEntry.js",  // 2-3K w/ Meta Data
        exposes: {
            './Module': './projects/mfe1/src/app/app.module.ts',
        },        
        shared: share({
          "@angular/core": { requiredVersion:'auto' },
          "@angular/common": { requiredVersion:'auto' },
          "@angular/router": { requiredVersion:'auto' },
          "@angular/common/http": { requiredVersion:'auto' }, 
          "@angular/material/snack-bar": { singleton: true, strictVersion: true, requiredVersion:'auto' }, 
  
          // Uncomment for sharing lib of an Angular CLI or Nx workspace
          ...sharedMappings.getDescriptors()
        })
        
    }),
    // Uncomment for sharing lib of an Angular CLI or Nx workspace
    sharedMappings.getPlugin(),
  ],
};
