import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Text from './Text';

import { Formik } from 'formik';
import theme from '../theme';


import FormikTextInput from './FormikTextInput';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 2
  },
  signIn: {
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 2
  },
  signInText: {
    color: 'white',
    padding: 5,
  }
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleSubmit}) => 
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username"/>
          <FormikTextInput name="password" placeholder="Password" secureTextEntry/>
          <TouchableWithoutFeedback onPress={handleSubmit}>
            <View style={styles.signIn}>
              <Text style={styles.signInText} fontWeight='bold'>Sign in</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      }
    </Formik>
  );
};

export default SignIn;