/**
 * @format
 */
import './shim.js';
import i18n from './src/i18n'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
