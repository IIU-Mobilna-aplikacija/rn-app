import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Icon = <Feather name="chevron-down" size={35} color="white" />;

export default class ListElement extends React.Component {
    render() {
        return(
            <View style={styles.listEl}>
                <Text style={styles.title}>{this.props.name}</Text>
                <Text>{Icon}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listEl: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#404146',
        marginTop: 10,
        height: 60,
        borderRadius: 10,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
        justifyContent: "space-between"
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    icon: {
        alignSelf: "flex-end"
    }
})