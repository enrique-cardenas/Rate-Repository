import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    padding: 20
  }
  
  
});

const AppBarTab = ({ text }) => {
  return (
    <TouchableWithoutFeedback>
      <Text style={styles.text}>{text}</Text>
    </TouchableWithoutFeedback>
  );
};

export default AppBarTab;