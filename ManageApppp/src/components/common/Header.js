import React from 'react';
import { Text, View } from 'react-native';


//make a component

const Header = (props) => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>{props.headerText}</Text>
        </View>
    )

};


const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        shadowColor: '#2d9662',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.50,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};


export default Header;