import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Chart from './Chart';


export default class ChartWrap extends React.Component {    
    render() {
        return(
            <View style={{marginTop: 20, height: 250}}>
                <Text style={{
                    fontSize: 18, 
                    fontWeight: "bold", 
                    paddingLeft: 30, 
                    color: "white"}}>
                        {this.props.name}
                </Text>
                <ScrollView 
                    horizontal={true} 
                    decelerationRate={0} 
                    snapToInterval={Dimensions.get('window').width} 
                    snapToAlignment={"center"}
                    indicatorStyle="white"
                    >
                    <Chart linedata={this.props.linedata} units={this.props.units}/>
                    <Chart linedata={this.props.linedata} units={this.props.units}/>
                    <Chart linedata={this.props.linedata} units={this.props.units}/>
                </ScrollView>
            </View>
        );
    }
}
