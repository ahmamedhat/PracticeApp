import {useEffect, useState} from 'react';
import {SplashScreen, HomeScreen, ProfileScreen} from '@screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function App(): JSX.Element {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
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
      return <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>;
    }
  };

  const Tab = createBottomTabNavigator();

  return <NavigationContainer>{checkSplash()}</NavigationContainer>;
}

export default App;
