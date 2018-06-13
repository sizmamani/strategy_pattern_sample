import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import { renderWithProps } from '../helpers'

export default class HomePage extends Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>
            Home Page
          </Text>
          {renderWithProps('signUpComp', {...this.props, olo:"OLOLO"})}
          <Button
            title="Sign Up From Home Page"
            onPress={() => this.props.navigation.navigate('SignUp')}
          />
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      padding: 100
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 40
    }
  });
  