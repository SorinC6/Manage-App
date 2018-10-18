import React from 'react';
import {Text, View, Modal} from 'react-native';
import CardSection from './CardSection';
import Card from './Card';
import Button from './Button'

const Confirm = ({children, visible, onAccept, onDecline}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            // onRequestClose={() => {}} //ca sa mearga pe Android
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
              }}


        >
            <View style={styles.containerStyle}>
                <CardSection style={styles.cardSectionStyle}>
                    <Text style={styles.textStyle}>{children}</Text>
                </CardSection>

                <CardSection style={styles.cardSectionStyle}>
                    <Button onPress={onAccept}>Yes</Button>
                    <Button onPress={onDecline}>No</Button>
                </CardSection>
            </View>
        </Modal>
    );
};

const styles={
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textStyle:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex:1,
        justifyContent: 'center'
    }
}

export default Confirm;