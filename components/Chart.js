import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default class Chart extends React.Component {
    render() {
        return (
            <View style={{paddingHorizontal:20}}>
                <LineChart
                    data={this.props.linedata}
                    width={Dimensions.get('window').width*0.9} // from react-native
                    height={190}
                    yAxisLabel={this.props.units}
                    fromZero = {true}
                    chartConfig={{
                    fillShadowGradient: 'black',
                    backgroundColor: 'grey',
                    backgroundGradientFrom: '#f5f5f5',
                    backgroundGradientTo: 'grey',
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                        borderRadius: 16
                    }
                    }}
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                    }}
                />
            </View>
        )
    }
}
