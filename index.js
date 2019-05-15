import { AppRegistry } from 'react-native';
import { Roqet } from "./src/provider.tsx";
import { name as AppName } from './app.json';

// setTimeout(() => {
    AppRegistry.registerComponent(AppName, () => Roqet);
// }, 3000)
