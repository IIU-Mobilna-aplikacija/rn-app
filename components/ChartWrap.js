import React from 'react';
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';
import renderIf from './renderIf';
import ListElement from './ListElement';

export default class ChartWrap extends React.Component {
    constructor() {
        super();
        this.state = {
            status: false
        }
    }

    toggleStatus() {
        this.setState({
            status: !this.state.status
        });
    }
    
    render() {
        return(
            <View style={styles.content}>
                <TouchableHighlight onPress={()=>this.toggleStatus()}>
                    <ListElement name="Kiseonik"/>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> this.toggleStatus()}>
                    <ListElement name="Ugljen-dioksid"/>
                </TouchableHighlight>
                <ListElement name="Vlažnost vazduha" />
                <ListElement name="UV Index"/>
                <ListElement name="Temperatura"/>
                {renderIf(this.state.status)(
                <Text>
                    I am dynamic text View
                </Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        width: '90%'
    }
});