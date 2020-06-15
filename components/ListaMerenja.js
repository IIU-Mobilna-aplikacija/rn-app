import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'react-native-elements';
import Merenje from './Merenje';
import Modal from 'react-native-modal';
import Feather from 'react-native-vector-icons/Feather';

//funkcije za dobijanje procentualnih vrednosti od sirovih podataka; sluzi za progress bar merenja
const progressCarbon = (data) => data/5000;
const progressHumidity = (data) => data/100;
const progressUV = (data) => data/10;
const progressTemp = (data) => 0.5+data/100;

export default class ListaMerenja extends React.Component {  
    //pocetni state; na samom ucitavanju komponente inicijalno stanje modala za upozorenje je "nevidljiv"
    state = { 
        isModalVisible: false,
    };
     
    //funkcija za promenu state-a
    toggleModal = () => { 
        this.setState({isModalVisible: !this.state.isModalVisible});
    };
    
    //funkcija koja se izvrsava nakon apdejtovanja komponente; ukljucuje modal za upozorenje ukoliko je uslov ispunjen
    componentDidUpdate() {
        if (this.props.data > 500) {
            this.setState({isModalVisible: true})
        }
    }
    
    render() {
        const data = this.props.data; //podatke dobijamo preko props
        return (
            <View style={styles.container}> { /* Container za celu listu*/}
                <Modal 
                    isVisible={this.state.isModalVisible} 
                    onBackdropPress={this.toggleModal}  
                    onBackButtonPress={this.toggleModal}
                >{ /* Komponenta modala sa svojim atributima */}
                    <View style={styles.modal}> {/* Container koji zapravo definise izgled modala */}
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
                            CO > 500ppm    
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
                { /* Komponente merenja sa svojim props */}
                <Merenje name="Ugljen-monoksid" data={data.co} progress={progressCarbon(data.co)} unit="ppm"/>
                <Merenje name="Vlažnost vazduha" data={data.vlaznost} progress={progressHumidity(data.vlaznost)} unit="%"/>
                <Merenje name="UV Index" data={data.uv} progress={progressUV(data.uv)} unit=""/>
                <Merenje name="Temperatura" data={data.temperatura} progress={progressTemp(data.temperatura)} unit="C"/>                
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