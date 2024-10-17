import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Input from '../component/input';
import User from '../assets/User.svg';
import down from '../assets/down.svg';
import email from '../assets/email.svg';
import lock from '../assets/lock.svg';
import eye from '../assets/eye.svg';
import phone from '../assets/phone.svg';
import global from '../assets/global.svg';
import Button from '../component/button';
import TextButton from '../component/textButton';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../service/registerationApi';
import Picker from '../component/picker';
import CountryPicker, { Country, CountryCode } from 'react-native-country-picker-modal';

// Validation schema using Yup
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'FirstName must be at least 3 characters')
    .required('Username is required'),
  lastname: Yup.string()
    .min(3, 'LastName must be at least 3 characters')
    .required('Username is required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

interface FormValues {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
}

const Registration: React.FC = () => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState<CountryCode>('US');
  const [country, setCountry] = useState<Country | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onSelect = (selectedCountry: Country) => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    setIsVisible(false); // Close the modal after selecting a country
  };

  // Function to handle form submission
  const handleRegister = async (values: FormValues, actions: FormikHelpers<FormValues>) => {
    try {
      const response = await registerUser(values);
      console.log('response =>', response);
      navigation.navigate('verification');
    } catch (error) {
      Alert.alert('Server error...');
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <Text style={styles.headingText}>Create an account</Text>
            <Text style={styles.subText}>
              Great to have you on board. Please start by providing us with the following info
            </Text>
            <View style={styles.innerContainer}>
              <Input
                placeholder="First Name"
                onChangeText={handleChange('firstname')}
                onBlur={handleBlur('firstname')}
                value={values.firstname}
                touched={touched?.firstname}
                errors={errors.firstname}
                LeftIcon={User}
              />
              <Input
                placeholder="Last Name"
                onChangeText={handleChange('lastname')}
                onBlur={handleBlur('lastname')}
                value={values.lastname}
                touched={touched?.lastname}
                errors={errors.lastname}
                LeftIcon={User}
              />
              <Input
                placeholder="Phone Number"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                touched={touched?.phone}
                errors={errors.phone}
                LeftIcon={phone}
              />
              <Input
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                touched={touched?.email}
                errors={errors.email}
                LeftIcon={email}
              />
              <Input
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                touched={touched?.password}
                errors={errors.password}
                secureTextEntry
                LeftIcon={lock}
                RightIcon={eye}
              />

              <CountryPicker
                countryCode={countryCode}
                withFilter
                withFlag
                withEmoji
                withCountryNameButton
                onSelect={onSelect}
                visible={isVisible} // Control modal visibility
                onClose={() => setIsVisible(false)}
                renderFlagButton={() => (
                  <Picker
                    value={country?.name ?? ''}
                    placeholder={'Country'}
                    keyboardType={undefined}
                    onPress={() => setIsVisible(true)}
                    LeftIcon={global}
                    RightIcon={down}
                  />
                )}
              />
              <Button onPress={handleSubmit} label="Sign Up" />
            </View>
            <View style={styles.footer}>
              <TextButton
                onPress={() => {}}
                label={'Already have an account?'}
                highlightLabel={'Sign in'}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headingText: {
    fontSize: 24,
    color: '#000',
    fontWeight: '600',
    marginTop: 94,
    textAlign: 'center',
  },
  subText: {
    fontSize: 13,
    lineHeight: 16,
    color: '#87898E',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 14,
    marginHorizontal: 44,
  },
  innerContainer: {
    marginTop: 60,
    marginHorizontal: 24,
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
});

export default Registration;
