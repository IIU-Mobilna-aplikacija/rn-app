import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements';
import Merenje from './Merenje';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';


const progressOxygen = (data) => data*0.0475;
const progressCarbon = (data) => data/5000;
const progressHumidity = (data) => data/100;
const progressUV = (data) => data/10;
const progressTemp = (data) => 0.5+data/100;

export default class ListaMerenja extends React.Component {  
    state = {
        isModalVisible: false,
    };
     
    toggleModal = () => {
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
    
    componentDidMount() {
        if (this.props.data.carbon > 500) {
            this.setState({isModalVisible: true})
        }
    }
    
    
    render() {
        const data = this.props.data;
        return (
            <View style={styles.container}>
                <Modal
                    isVisible={this.state.isModalVisible}
                    onBackdropPress={this.toggleModal} 
                    onBackButtonPress={this.toggleModal}
                    
                >
                    <View style={styles.modal}>
                        <Feather 
                            name="alert-triangle" 
                            size={60} 
                            color="black"
                            style={{
                                alignSelf:"center",
                                marginTop: 30
                            }}
                        />
                        <Text 
                            style={{
                                alignSelf:"center",
                                marginBottom: 15
                            }}
                        >
                            CO2 > 500ppm    
                        </Text>   
                        <Button 
                            title="OK" 
                            onPress={this.toggleModal} 
                            type="clear"
                            buttonStyle={styles.button}
                            titleStyle={{color: 'black'}}
                        />
                    </View>                   
                </Modal>
                <Text style={styles.title}>Merenja</Text>
                <Merenje name="Kiseonik" data={data.oxygen} progress={progressOxygen(data.oxygen)} unit="%"/>
                <Merenje name="Ugljen-dioksid" data={data.carbon} progress={progressCarbon(data.carbon)} unit="ppm"/>
                <Merenje name="Vlažnost vazduha" data={data.humidity} progress={progressHumidity(data.humidity)} unit="%"/>
                <Merenje name="UV Index" data={data.uv} progress={progressUV(data.uv)} unit=""/>
                <Merenje name="Temperatura" data={data.temp} progress={progressTemp(data.temp)} unit="C"/>                
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
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 15,
        maxHeight: 200,
        width: 200,
        padding: 20,
        alignSelf: "center"
    },
    button: {
        borderRadius: 10,
    }
})