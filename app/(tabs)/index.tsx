import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// =================================================================

const theme = {
  primaryBlue: '#0078FD',
  black: '#000000',
  white: '#FFFFFF',
  lightBlue: '#eef5ff',
};

// =================================================================

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.outerContainer}>
      <Image
        source={require('../../assets/images/bg/bg.png')}
        style={styles.bottomBackgroundImage}
      />
      <SafeAreaView style={styles.contentArea}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/images/logo/logo.png')}
              style={styles.logo}
            />
          </View>

          <View style={styles.mainContent}>
            <Text style={styles.headlineBlue}>PRM360 offers</Text>
            <Text style={styles.headlineBlue}>a complete</Text>
            <Text style={styles.headlineBlue}>suite of</Text>
            <Text style={styles.headlineBlack}>Procurement &</Text>
            <Text style={styles.headlineBlack}>Strategic</Text>
            <Text style={styles.headlineBlack}>Sourcing</Text>
            <Text style={styles.headlineBlack}>Solutions.</Text>
          </View>

          <View style={styles.footer}>
            <LinearGradient
              colors={['rgba(0,120,253,0.5)', 'transparent']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={styles.loginSlider}
            >
              <TouchableOpacity
                style={styles.loginButton}
                activeOpacity={0.8}
                onPress={() => router.push('/loginscreen')}
              >
                <Text style={styles.loginButtonText}>Login</Text>
              </TouchableOpacity>
              <Feather
                name="chevrons-right"
                size={24}
                color={theme.primaryBlue}
                style={styles.arrowIcon}
              />
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

// =================================================================

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  bottomBackgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '70%',
    height: '45%',
  },
  contentArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  header: {
    alignItems: 'flex-end',
    marginTop: 55,
  },
  logo: {
    width: 100,
    height: 45,
    resizeMode: 'contain',
  },
  mainContent: {
    marginTop: '20%',
  },
  headlineBlue: {
    fontSize: 32,
    fontWeight: '900',
    color: theme.primaryBlue,
    lineHeight: 40,
  },
  headlineBlack: {
    fontSize: 32,
    fontWeight: '900',
    color: theme.black,
    lineHeight: 42,
  },
  footer: {
    position: 'absolute',
    bottom: 60,
    right: 25,
  },
  loginSlider: {
    width: 180,
    borderRadius: 100,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2,
  },
  loginButton: {
    backgroundColor: theme.primaryBlue,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 35,
    shadowColor: theme.primaryBlue,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  loginButtonText: {
    color: theme.white,
    fontSize: 16,
    fontWeight: '600',
  },
  arrowIcon: {
    marginRight: 20,
  },
});
