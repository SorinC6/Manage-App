import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
             {props.children}
        </View>
    )
};

const styles = {
    containerStyle: {
        borderBottomWidth: 0.1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
    }
};

export default CardSection;