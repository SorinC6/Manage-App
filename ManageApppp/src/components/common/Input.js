import React from 'react';
import {View, TextInput,Text} from 'react-native';


const Input = ( {label, value, onChangeText, placeholder, secureTextEntry} ) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={styles.inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    )
};

const styles={
    inputStyle:{
        marginTop:20,
        height: 40,
        backgroundColor:'rgba(255,255,255,0.2)',
        color: 'blue',
        paddingHorizontal:10,
        fontSize: 20,
        flex: 2
    },
    labelStyle:{
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle:{
        height: 40,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export default Input;