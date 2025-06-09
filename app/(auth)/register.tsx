import { MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const logoImage = require('../../assets/images/logo/logo.png');
const bgImage = require('../../assets/images/bg/bg.png');
const ellipse1 = require('../../assets/images/bg/Ellipse1.png');
const ellipse2 = require('../../assets/images/bg/Ellipse2.png');
const line1 = require('../../assets/images/bg/Line1.png');
const polygon4 = require('../../assets/images/bg/Polygon4.png');
const polygon5 = require('../../assets/images/bg/Polygon5.png');
const polygon6 = require('../../assets/images/bg/Polygon6.png');
const polygon7 = require('../../assets/images/bg/Polygon7.png');

// =================================================================

const theme = {
  primaryBlue: '#007BFF',
  lightBlueBackground: '#F0F7FF',
  white: '#FFFFFF',
  textColor: '#1A202C',
  grey: '#A0AEC0',
  borderColor: '#c5dcf6',
};

export default function HomeScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
  };

  const handleForgotPassword = () => {
    router.push('/forgotpassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={theme.white} />
      <View style={styles.backgroundContainer}>
        <Image source={bgImage} style={styles.backgroundImage} />
        <View style={styles.bottomArtContainer}>
          <Image source={ellipse1} style={styles.ellipse} />
          <Image source={ellipse2} style={[styles.ellipse, { transform: [{ rotate: '15deg' }] }]} />
          <Image source={polygon5} style={styles.polygon5} />
          <Image source={polygon6} style={styles.polygon6} />
          <Image source={polygon4} style={styles.polygon4} />
          <Image source={line1} style={styles.line1} />
        </View>
      </View>

      <View style={styles.content}>
        <Image source={polygon7} style={styles.polygon7} />
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />

        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <MaterialIcons name="person" size={22} color={theme.primaryBlue} style={styles.icon} />
          <TextInput placeholder="User Name" placeholderTextColor={theme.grey} style={styles.input} />
        </View>

        <TouchableOpacity style={styles.inputContainer} activeOpacity={0.7}>
          <MaterialIcons name="location-on" size={22} color={theme.primaryBlue} style={styles.icon} />
          <Text style={styles.dropdownText}>Select Company</Text>
          <MaterialIcons name="arrow-drop-down" size={24} color={theme.primaryBlue} />
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={22} color={theme.primaryBlue} style={styles.icon} />
          <TextInput
            placeholder="Password"
            placeholderTextColor={theme.grey}
            style={styles.input}
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialIcons
              name={passwordVisible ? 'visibility' : 'visibility-off'}
              size={22}
              color={theme.primaryBlue}
              style={[styles.icon, { marginRight: 5 }]}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.optionsRow}>
          <TouchableOpacity style={styles.rememberMeContainer} onPress={() => setRememberMe(!rememberMe)}>
            <MaterialIcons
              name={rememberMe ? "check-box" : "check-box-outline-blank"}
              size={22}
              color={theme.primaryBlue}
              style={styles.checkboxIcon}
            />
            <Text style={styles.rememberMeText}>Remember me</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// =================================================================

const styles = StyleSheet.create({
  container: {
    flex: 0.9,
    backgroundColor: theme.white,
  },
  backgroundContainer: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  content: {
    
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 35,
    zIndex: 1,
  },
  logo: {
    position: 'absolute',
    top: height * 0.07,
    right: 35,
    width: 120,
    height: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.textColor,
    textAlign: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.lightBlueBackground,
    borderWidth: 1,
    borderColor: theme.borderColor,
    borderRadius: 100,
    paddingHorizontal: 20,
    marginBottom: 20,
    height: 55, 
  },
  icon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: theme.textColor,
  },
  
  dropdownText: {
    flex: 1,
    fontSize: 15,
    color: theme.grey
  },
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  checkboxIcon: {
    marginRight: 8,
  },
  rememberMeText: {
    fontSize: 14,
    color: theme.primaryBlue,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: theme.primaryBlue,
    fontWeight: '600',
  },
  signInButton: {
    backgroundColor: theme.primaryBlue,
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: 'center',
    shadowColor: theme.primaryBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
    alignSelf: 'center',
    width: 180, 
  },
  signInButtonText: {
    color: theme.white,
    fontSize: 16,
    fontWeight: '700',
  },

  
  backgroundImage: {
    position: 'absolute',
    bottom: -height * 0.1,
    left: -width * 0.3,
    width: width * 1.3,
    height: height * 0.7,
    resizeMode: 'contain',
    opacity: 0.3,
  },
  bottomArtContainer: {
    position: 'absolute',
    bottom: height * 0.05,
    width: '100%',
    height: height * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipse: {
    position: 'absolute',
    width: '85%',
    height: '100%',
    resizeMode: 'contain',
    opacity: 1,
  },
  polygon4: {
    position: 'absolute',
    bottom: -20,
    right: '15%',
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  polygon5: {
    position: 'absolute',
    top: '60%',
    left: '3%',
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  polygon6: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  line1: {
    position: 'absolute',
    bottom: 0,
    width: 100,
    height: 20,
    resizeMode: 'contain',
  },
  polygon7: {
    position: 'absolute',
    top: height * 0.1,
    left: 35,
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});