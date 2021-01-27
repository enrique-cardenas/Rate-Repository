import React from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import Text from './Text';
import { Formik } from 'formik';
import * as yup from 'yup';
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
    marginTop: 10,
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

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be greater or equal to 5 characters')
    .max(16, 'Username must be less than or equal to 16 characters')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be greater or equal to 8')
    .max(16, 'Password must be less than or equal to to 16')
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return(
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
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