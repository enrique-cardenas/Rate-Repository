import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
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
      <ScrollView horizontal>
        <Link to='/' component={AppBarTab} text='Repositories' />
        <Link to='/SignIn' component={AppBarTab} text='Sign In' />
      </ScrollView>
    </View>
  );
};

export default AppBar;
