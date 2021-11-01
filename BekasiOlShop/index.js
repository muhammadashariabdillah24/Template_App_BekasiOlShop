/**
 * @format
 */

import {AppRegistry} from 'react-native';
// Import Gesture  Handler Component
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
