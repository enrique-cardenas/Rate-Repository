import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center'
  }
});

const NumberAndText = (props) =>
  <View style={styles.container}>
    <Text fontWeight='bold'>
      {props.number > 1000 ? 
        `${(props.number / 1000).toFixed(1)}k` 
        :
        props.number
      }
    </Text>
    <Text>{props.text}</Text>
  </View>;
export default NumberAndText;