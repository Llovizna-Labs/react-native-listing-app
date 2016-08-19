/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SearchPage from './components/searchPage'

class todoApp extends Component {
  render() {
    return (
      <React.NavigatorIOS
        style= {styles.container}
        initialRoute={{
          title: 'Search',
          component: SearchPage
        }}/>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 100,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('todoApp', () => todoApp);
