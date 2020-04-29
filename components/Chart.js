import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const linedata = {
    labels: ['20.04', '21.04', '22.04', '23.04', '24.04', '25.04', '26.04'],
    datasets: [
      {
        data: [14, 13, 15, 18, 20, 21, 24],
        strokeWidth: 2, // optional
      },
    ],
};

export default class Chart extends React.Component {
    render() {
        return (
            <View>
                <Text>Bezier Line Chart</Text>
                <LineChart
                    data={linedata}
                    width={Dimensions.get('window').width} // from react-native
                    height={220}
                    yAxisLabel={'°C'}
                    fromZero = {true}
                    chartConfig={{
                    backgroundColor: '#e26a00',
                    backgroundGradientFrom: '#fb8c00',
                    backgroundGradientTo: '#ffa726',
                    decimalPlaces: 1, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
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
