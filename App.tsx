import { TamaguiProvider, createTamagui } from 'tamagui'
// import { defaultConfig } from '@tamagui/config/v4'
import AppNavigator from './src/navigation/AppNavigator';
import config from './tamagui.config';

// const config = createTamagui(defaultConfig)

// type Conf = typeof config
// declare module '@tamagui/core' {
//   interface TamaguiCustomConfig extends Conf { }
// }

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <AppNavigator />
    </TamaguiProvider>
  );
}