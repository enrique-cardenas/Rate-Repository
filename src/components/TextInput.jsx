import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 5

  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style, styles.container];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
