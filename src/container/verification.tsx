import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Alert, Clipboard, ActivityIndicator } from 'react-native';
import Button from '../component/button';
import TextButton from '../component/textButton';
import Hand from '../assets/Hand.svg';
import OTPTextView from 'react-native-otp-textinput';
import { useNavigation } from '@react-navigation/native';

const Verification: React.FC = () => {
  const navigation = useNavigation();
  const [otpInput, setOtpInput] = useState<string>('');
  const inputRef = useRef<OTPTextView>(null);
  const [load,setLoading]=useState<boolean>(false)

  const handleCellTextChange = async (text: string, index: number) => {
    if (index === 0) {
      const clipboardText = await Clipboard.getString();
      if (clipboardText.slice(0, 1) === text) {
        inputRef.current?.setValue(clipboardText, true);
      }
    }
  };

  if(load){
    return(
      <View style={styles.container2}>
        <ActivityIndicator
        size={'large'}
        />
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Hand />
      </View>

      <Text style={styles.headerText}>OTP Verification</Text>
      <Text style={styles.subText}>
        OTP Verification
        <Text style={styles.subText2}> +234-7087139241</Text>
      </Text>

      <OTPTextView
        ref={inputRef}
        containerStyle={styles.textInputContainer}
        handleTextChange={setOtpInput}
        handleCellTextChange={handleCellTextChange}
        inputCount={4}
        keyboardType="numeric"
        tintColor="#DADADA"
      />

      <View style={styles.textContainer}>
        <TextButton
          label={'Didn’t receive an OTP?'}
          highlightLabel={'Resend OTP'}
          onPress={() => {
            Alert.alert('Coming Soon...');
          }}
          signIn={styles.signIn}
        />
      </View>

      <View style={styles.footer}>
        <Button
          label={'Verify & Proceed'}
          onPress={() => {
            setLoading(true)
            setTimeout(()=>{
              setLoading(false)
              navigation.navigate('welcome');
            },1000)
            
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  imageContainer: {
    marginTop: 65,
  },
  headerText: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 52,
  },
  subText: {
    color: '#87898E',
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
  subText2: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    paddingHorizontal: 24,
    marginTop: 72,
  },
  textInputContainer: {
    marginTop: 32,
  },
  signIn: {
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    color: '#FF6565',
    fontWeight: '400',
  },
  textContainer: {
    marginTop: 32,
  },
});

export default Verification;
