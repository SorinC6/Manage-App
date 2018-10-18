import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {connect} from 'react-redux';
import { emailChanged, passwordChange,loginUser } from '../actions';
import Card from './common/Card.js';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Button from './common/Button';
import Spinner from './common/Spinner';
import firebase from 'firebase'

class LoginForm extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyCSaegj-Z0rYkz-VbaiJnRpuh7b-dkAy4Y",
            authDomain: "managerapp-4e7a7.firebaseapp.com",
            databaseURL: "https://managerapp-4e7a7.firebaseio.com",
            projectId: "managerapp-4e7a7",
            storageBucket: "managerapp-4e7a7.appspot.com",
            messagingSenderId: "483542698120"
        };
    
        firebase.initializeApp(config);
      }

    onEmailChange(text) {
        this.props.emailChanged(text);

    }

    onPasswordChange(text){
        this.props.passwordChange(text);
    }

    onButtonPress(){
        //destrucurare this.props.email si this.props.password

        const {email,password} = this.props;

        this.props.loginUser({email,password})
    }

    renderError() {
        if(this.props.error){
            return(
                <View style={{ backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        };
    };

    renderButton(){
        if(this.props.loading){
            return <Spinner size='large'/>
        } else{
            return(
                <Button onPress={this.onButtonPress.bind(this)}>
                        Login
                </Button>
            )
        }
    }


    render() {
        return (
            <Card >
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='enter your email here'
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label='Password'
                        placeholder='enter your password here'
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password  }
                    />
                </CardSection>

                {this.renderError()}

                <CardSection>
                       {this.renderButton()}
                </CardSection>

            </Card>
        )
    }

}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    };
};

const styles= {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};


export default connect(mapStateToProps, {emailChanged, passwordChange, loginUser})(LoginForm);