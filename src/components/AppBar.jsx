import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Link } from "react-router-native";

import Constants from 'expo-constants';
import AppBarTab from "./AppBarTab";
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.appBar.backgroundColor
  }  
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link to='/' component={AppBarTab} text='Repositories' />
      <Link to='/SignIn' component={AppBarTab} text='Sign In' />
    </View>
  );
};

export default AppBar;
