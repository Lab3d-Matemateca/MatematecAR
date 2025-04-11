const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  config.resolver.assetExts.push("glb");
  config.resolver.assetExts.push("obj");
  config.resolver.assetExts.push("mtl");

  return withNativeWind(config, { input: "./global.css" });
})();
