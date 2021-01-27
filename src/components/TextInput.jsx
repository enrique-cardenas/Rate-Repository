import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5,
  },
  errorTextInput: {
    borderColor: theme.colors.error
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.container,
    error && styles.errorTextInput,
    style
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
