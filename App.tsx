/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Linking,
  Switch,
} from 'react-native';
import {
  Transitioning,
  TransitioningView,
  Transition,
} from 'react-native-reanimated';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

Ionicons.loadFont();
Feather.loadFont();

declare var global: { HermesInternal: null | {} };

const App = () => {
  const ref = useRef<TransitioningView>(null);
  const [isDarkMode, setDarkMode] = useState(false);
  const transition = (
    <Transition.Together>
      <Transition.In type="scale" durationMs={300} />
      <Transition.Out type="scale" durationMs={300} />
    </Transition.Together>
  );
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Transitioning.View style={{ flex: 1 }} {...{ ref, transition }}>
        <SafeAreaView style={{ flex: 1 }}>
          {isDarkMode && (
            <View
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'black',
              }}
            />
          )}
          <View style={{ marginVertical: 40, marginHorizontal: 20 }}>
            <View style={styles.switchWrapper}>
              <Switch
                value={isDarkMode}
                onValueChange={() => {
                  if (ref.current) {
                    ref.current.animateNextTransition();
                  }
                  setDarkMode(!isDarkMode);
                }}
              />
              {isDarkMode ? (
                <Ionicons
                  name="ios-sunny"
                  size={25}
                  style={{ marginLeft: 20 }}
                  color={'#fff'}
                />
              ) : (
                <Ionicons
                  name="ios-moon"
                  size={25}
                  style={{ marginLeft: 20 }}
                  color={'teal'}
                />
              )}
            </View>
            <View style={styles.imageWrapper}>
              <Image
                source={{
                  uri: 'https://i.picsum.photos/id/1025/4951/3301.jpg',
                }}
                style={styles.image}
              />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                marginBottom: 25,
                color: isDarkMode ? '#fff' : 'black',
              }}>
              A cute warmed up little dog 🐶
            </Text>
            <View style={styles.iconsWrapper}>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://github.com/thejoaov')}
                style={isDarkMode ? styles.iconDark : styles.iconLight}>
                <Feather name="github" size={35} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL('https://twitter.com/thejoaov')}
                style={isDarkMode ? styles.iconDark : styles.iconLight}>
                <Feather name="twitter" size={35} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL('https://linkedin.com/in/thejoaov')
                }
                style={isDarkMode ? styles.iconDark : styles.iconLight}>
                <Feather name="linkedin" size={35} color="#fff" />
              </TouchableOpacity>
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 20,
                marginBottom: 25,
                color: isDarkMode ? '#fff' : 'black',
              }}>
              Know more about my projects 👨🏻‍💻
            </Text>
          </View>
        </SafeAreaView>
      </Transitioning.View>
    </>
  );
};
const styles = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
  },
  image: {
    height: 300,
    width: 300,
  },
  imageWrapper: {
    height: 300,
    width: 300,
    borderRadius: 300 / 2,
    overflow: 'hidden',
    marginVertical: 70,
    alignSelf: 'center',
  },
  iconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  iconLight: {
    backgroundColor: 'teal',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  iconDark: {
    backgroundColor: '#444',
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default App;
