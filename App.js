import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from './src/screens/auth/Splash';
import SignIn from './src/screens/auth/SignIn'
import SignUp from './src/screens/auth/SignUp'
import { colors } from './src/utils/colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/app/Home'
import Profile from './src/screens/app/Profile'
import Favorites from './src/screens/app/Favorites'
import { Image } from 'react-native';
import ProductDetails from './src/screens/app/ProductDetails';
import Settings from './src/screens/app/Settings'
import CreateListing from './src/screens/app/CreateListing'
import MyListings from './src/screens/app/MyListings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ProfileStack = () => {
  return (
        <Stack.Navigator> 
              <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
              <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
              <Stack.Screen name="CreateListing" component={CreateListing} options={{ headerShown: false }} />
              <Stack.Screen name="MyListings" component={MyListings} options={{ headerShown: false }} />
        </Stack.Navigator>
  )
}

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused
            ? require('./src/assets/tabs/home_active.png')
            : require('./src/assets/tabs/home.png');
        } else if (route.name === 'ProfileStack') {
          icon = focused
            ? require('./src/assets/tabs/profile_active.png')
            : require('./src/assets/tabs/profile.png');
        } else if (route.name === 'Favorites') {
          icon = focused
            ? require('./src/assets/tabs/heart_blue.png')
            : require('./src/assets/tabs/heart.png');
        }

        // You can return any component that you like here!
        return <Image style={{ width: 35, height: 35 }} source={icon} />
      },
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: { borderTopColor: colors.lightGrey },
    })}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorites" component={Favorites} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
)

const App = () => {
  const isSignedIn = true;


    const theme = {
      colors: {
        background: colors.white,
      }
    }

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
              <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />
            </>
          ) : (
            <>
              <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }}/>
              <Stack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }}/>
              <Stack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }}/>
            </>
          )}
              
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})