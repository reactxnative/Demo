import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType, Alert } from 'react-native';
import Button from '../component/button';

const Welcome: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/tick.png') as ImageSourcePropType} style={styles.imageStyle} />
      <Text style={styles.headerText}>Congratulations</Text>
      <Text style={styles.subText}>You have successfully created your account</Text>
      <View style={styles.footer}>
        <Button label="Logout" onPress={() => {
          Alert.alert('Coming Soon...')
        }} buttonStyle={styles.buttonStyle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#407AFF',
    fontSize: 24,
    fontWeight: '600',
  },
  subText: {
    color: '#87898E',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 65,
    width: '100%',
    paddingHorizontal: 24,
  },
  buttonStyle: {
    height: 61,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF6565',
    borderRadius: 32,
    paddingVertical: 16,
    width: '100%',
    marginTop: 18,
  },
  imageStyle: {
    height: 120,
    width: 120,
    marginBottom: 80,
  },
});

export default Welcome;
