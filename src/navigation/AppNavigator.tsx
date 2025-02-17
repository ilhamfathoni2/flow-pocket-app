import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';

function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default AppNavigator;
