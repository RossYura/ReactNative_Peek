/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/Localization/index';

AppRegistry.registerComponent(appName, () => App);
