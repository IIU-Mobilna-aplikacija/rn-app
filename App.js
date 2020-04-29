import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import ListaMerenja from './components/ListaMerenja';
import ChartWrap from './components/ChartWrap';

const data = {
  oxygen: 21,
  carbon: 350,
  humidity: 50,
  uv: 3,
  temp: 18
}

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <View style={styles.content}>
        <ListaMerenja data={data}/>
      </View>
    </View>
  );
}

function IstorijaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Istorija</Text>
      <View style={styles.content}>
        <ChartWrap />  
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.content}>

      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Istorija') {
              iconName = focused ? 'bar-chart-2' : 'bar-chart-2';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'sliders' : 'sliders';
            }

            // You can return any component that you like here!
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Istorija" component={IstorijaScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#323337',
    alignItems: 'center',
    justifyContent: "flex-start",
  },
  title: {
    flex: 1,
    fontSize: 28,
    color: 'white',
    alignSelf: "flex-start",
    alignItems: "center",
    marginLeft: 30,
    paddingBottom: 10,
    textAlignVertical: "bottom",
    fontWeight: "bold"
  },
  content: {
    flex: 7,
    width: '100%',
    alignItems: 'center'
  },
  tabs: {
    flex: 1,
    width: '90%'
  }
});

