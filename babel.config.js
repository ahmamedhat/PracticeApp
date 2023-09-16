module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        envName: "APP_ENV",
        moduleName: "@env",
        path: ".env",
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    "nativewind/babel",
    [
      "module-resolver",
      {
        root: ["/"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@screens": "./src/screens/index",
          "@components": "./src/components/index",
          "@navigation": "./src/navigation/index",
          "@redux": "./src/redux",
          "@utils": "./src/utils",
          "@icons": "./src/assets/icons/index",
          "@images": "./src/assets/images/index",
        },
      },
    ],
    "react-native-reanimated/plugin",
  ],
};
