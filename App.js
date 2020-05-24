import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import ListaMerenja from './components/ListaMerenja';
import ChartWrap from './components/ChartWrap';
import { ScrollView } from 'react-native-gesture-handler';


const data = {
  oxygen: 21,
  carbon: 600,
  humidity: 50,
  uv: 3,
  temp: 18
}

const linedata = {
  labels: ['20.04', '21.04', '22.04', '23.04', '24.04', '25.04', '26.04'],
  datasets: [
    {
      data: [14, 13, 15, 18, 20, 21, 24],
      strokeWidth: 2, // optional
    },
  ],
};

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
      <View style={styles.graphs}>
        <ScrollView>
          <ChartWrap name="Kiseonik" units="% " linedata = {linedata}/>
          <ChartWrap name="Ugljen-dioksid" units="ppm " linedata = {linedata}/>  
          <ChartWrap name="Vlažnost vazduha" units="% " linedata = {linedata}/>  
          <ChartWrap name="UV Indeks" units=" " linedata = {linedata}/>  
          <ChartWrap name="Temperatura" units="C " linedata = {linedata}/> 
        </ScrollView>
      </View>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.content}>
        <View style={{height: 70,
                      width: '90%',
                      flexDirection:'row', 
                      backgroundColor: '#404146', 
                      borderRadius: 10,
                      justifyContent: 'space-between',}}>
          <Text style={{color: 'white', 
                        fontWeight: 'bold',
                        textAlignVertical: 'center',
                        paddingHorizontal: 15,
                        fontSize: 20}}>Temperature unit</Text>
        </View>
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
  },
  graphs: {
    flex: 7
  }
});

