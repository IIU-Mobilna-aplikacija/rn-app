import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Merenje from './Merenje';

const progressOxygen = (data) => data*0.0475;
const progressCarbon = (data) => data/5000;
const progressHumidity = (data) => data/100;
const progressUV = (data) => data/10;
const progressTemp = (data) => 0.5+data/100;

export default class ListaMerenja extends React.Component {
    render() {
        const data = this.props.data;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Merenja</Text>
                <Merenje name="Kiseonik" data={data.oxygen} progress={progressOxygen(data.oxygen)} unit="%"/>
                <Merenje name="Ugljen-dioksid" data={data.carbon} progress={progressCarbon(data.carbon)} unit="ppm"/>
                <Merenje name="Vlažnost vazduha" data={data.humidity} progress={progressHumidity(data.humidity)} unit="%"/>
                <Merenje name="UV Index" data={data.uv} progress={progressUV(data.uv)} unit=""/>
                <Merenje name="Temperatura" data={data.temp} progress={progressTemp(data.temp)} unit="°C"/>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%'
    },
    title: {
        color: 'white',
        marginLeft: 10,
        fontSize: 20
    }
})