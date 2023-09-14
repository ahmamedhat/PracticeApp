module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		"nativewind/babel", [
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
				},
			},
		], "react-native-reanimated/plugin"],
};

