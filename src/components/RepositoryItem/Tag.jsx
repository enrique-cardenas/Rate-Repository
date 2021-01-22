import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 2
    
  },
  text: {
    color: 'white'
  }
});

const Tag = ({ text }) =>
  <View style={styles.container}>
    <Text style={styles.text}>
      {text}
    </Text>
  </View>;

export default Tag;