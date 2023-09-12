import {useEffect, useState} from "react";
import {SplashScreen } from "@screens";
import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {RootNavigation} from "@navigation";

function App(): JSX.Element {
	const [isReady, setIsReady] = useState(false);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsReady(true);
		}, 5000);
		return () => {
			clearTimeout(timer);
		};
	});

	const checkSplash = () => {
		if (!isReady) {
			return <SplashScreen />;
		} else {
			return <RootNavigation />;
		}
	};

	return <NavigationContainer>{checkSplash()}</NavigationContainer>;
}

export default App;
