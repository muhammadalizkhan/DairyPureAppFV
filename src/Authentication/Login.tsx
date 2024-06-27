import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Switch,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {
  auth,
  signInWithEmailAndPassword,
  signInWithCredential,
  GoogleAuthProvider,
} from './firebaseConfig';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

GoogleSignin.configure({
  webClientId: '1:49534814437:android:5d5c919dfbb6173b9f6c0c',
});

const Login = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (password.length < 8) {
      Alert.alert('Validation Error', 'Password must be at least 8 characters long.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate('Home');
    } catch (error: any) {
      console.error('Login Error:', error);

      if (error.code === 'auth/network-request-failed') {
        Alert.alert('Network Error', 'Network request failed. Please check your internet connection and try again.');
      } else if (error.code === 'auth/user-not-found') {
        Alert.alert('Login Error', 'No user found with this email.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Login Error', 'Incorrect password. Please try again.');
      } else {
        Alert.alert('Login Error', error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = GoogleAuthProvider.credential(idToken);
      await signInWithCredential(auth, googleCredential);
      await AsyncStorage.setItem('userToken', 'some-token');
      navigation.replace('Home');
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Google Sign-In', 'Sign in process was cancelled');
      } else {
        Alert.alert('Google Sign-In Error', error.message);
      }
    }
  };

  const handleGitHubLogin = () => {
    Alert.alert('GitHub Login', 'GitHub login functionality coming soon!');
  };

  const handleFacebookLogin = () => {
    Alert.alert('Facebook Login', 'Facebook login functionality coming soon!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to</Text>
            <Text style={styles.SUbtitle}>Dairy Pure</Text>
            <Text style={styles.Logintitle}>Login to your Account & Unleash the Power of DairyPure</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor="#000000"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#000000"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.passwordOptionsContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.rememberMeContainer}>
              <Text style={styles.rememberMeText}>Remember me</Text>
              <Switch
                value={rememberMe}
                onValueChange={setRememberMe}
                trackColor={{ false: '#ddd', true: '#007BFF' }}
                thumbColor={rememberMe ? '#fff' : '#fff'}
                ios_backgroundColor="#ddd"
              />
            </View>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
              <FontAwesomeIcon icon={faGoogle} size={40} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleGitHubLogin}>
              <FontAwesomeIcon icon={faGithub} size={40} style={styles.socialIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={handleFacebookLogin}>
              <FontAwesomeIcon icon={faFacebook} size={40} style={styles.socialIcon} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signupText}>Don't have an account? Sign up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.termsText}>
            By creating or logging into your account, you agree to our{' '}
            <Text style={styles.linkText}>Terms and Conditions</Text> and{' '}
            <Text style={styles.linkText}>Privacy Statement</Text>.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    marginTop: 50,
  },
  title: {
    fontSize: 25,
    color: '#49243E',
    fontWeight: 'bold',
    alignSelf: 'flex-start',

  },
  SUbtitle:{
    fontSize: 35,
    color: '#49243E',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  Logintitle:{
    fontSize: 13,
    color: '#49243E',
    textAlign: 'left',

  },
  input: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#49243E', // User-typed text color
  },
  passwordOptionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#007BFF',
    fontSize: 14,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberMeText: {
    marginRight: 10,
    fontSize: 14,
    color: '#49243E',
  },
  loginButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#aaa',
    marginVertical: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20,
  },
  socialButton: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'transparent',
  },
  socialIcon: {
    color: '#aaa',
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
    color: '#007BFF',
  },
  footer: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  linkText: {
    textDecorationLine: 'underline',
  },
});

export default Login;
