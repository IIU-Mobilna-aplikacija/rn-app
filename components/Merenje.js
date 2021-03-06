import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

export default class Merenje extends React.Component {
    render() {
        return (
            <View style={styles.container}> 
                <View style={styles.logo}></View> {/*Container za logo */}
                <View style={styles.data}> {/*Container za podatke */}
                    <View style={styles.titleField}>{ /* Container za ime merenja */}
                        <Text style={styles.title}>{this.props.name}</Text> {/*Ime merenja */}
                        <Text style={styles.dataMeasured}>{this.props.data}{this.props.unit}</Text> {/*Izmereni podaci i jedinica mere */}
                    </View>
                    <View style={styles.progressBarField}> {/*Container za progress bar */}
                        <ProgressBar 
                            progress={this.props.progress} 
                            width={null} animated={false} borderColor={'#323337'} height={8} unfilledColor={'#323337'}/>{/*Progress bar komponenta */}
                    </View>
                </View>
                <View style={styles.arrowField}> {/*Container za strelicu */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: '100%',
        height: 100,
        marginTop: 10,
        backgroundColor: '#404146',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    data: {
        flex: 10,
        flexDirection: "column",        
    },
    titleField: {
        flex: 1,
        flexDirection: "row",
        color: 'white',
        alignSelf: 'flex-start',
        justifyContent: "flex-end",
        width: '95%',
        textAlignVertical: "bottom",
    },
    title: {
        flex:3,
        alignSelf: "flex-end",
        color: 'white',
        marginLeft: 15,
        marginBottom: 1
    },
    progressBarField: {
        flex: 1,
        alignSelf: 'flex-start',
        height: 10,
        width: '95%',
        borderRadius: 5,
        paddingLeft: '5%'
    },
    dataMeasured: {
        flex: 1,
        color: '#757b81',
        textAlignVertical: "bottom",
        marginBottom: 1,
        alignSelf: "flex-end",
        textAlign: "right"
    },
    logo: {
        flex: 2,
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#323337',
        alignSelf: "center",
        marginLeft: 10
    },
    arrowField: {
        flex: 2,
        alignItems: "center",
        justifyContent: "center",
        height: '100%'
    }
});