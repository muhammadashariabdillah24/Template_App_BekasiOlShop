/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Import Component
import React, {Component} from 'react';
// 

// Import NavigationContainer
import { NavigationContainer } from '@react-navigation/native';
// 

// Import AccomodateComponate
import { AccomodateComponent } from './src/router/AccomodateComponent';
// 

class App extends Component {

  render() {
    return (
      <NavigationContainer>
        <AccomodateComponent />
      </NavigationContainer>
    )
  }
}

export default App;


