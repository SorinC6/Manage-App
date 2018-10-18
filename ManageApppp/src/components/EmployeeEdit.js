import React, { Component } from 'react';
import _ from 'lodash';
import { View } from 'react-native';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { EmployeeUpdate, employeeSave, employeeDelete } from '../actions';
import Card from './common/Card.js';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';
import Confirm from './common/Confirm.js';


class EmployeeEdit extends Component {

    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.EmployeeUpdate({ prop, value })
        })

    };

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    };

    onTextPress() {
        const { name, phone, shift } = this.props;
        //console.log(phone)
        Communications.text(phone, `Hey ${name} your upcoming shift is on ${shift}`);
    };

    onAccept() {
        const { uid } = this.props.employee;

        this.props.employeeDelete({ uid });
    };

    onDecline() {
        this.setState({ showModal: false });
    };

    render() {
        return (
            <View>
                <Card>
                    <EmployeeForm />

                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Save Changes
                    </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={this.onTextPress.bind(this)}>
                            Text Schedule
                    </Button>
                    </CardSection>

                    <CardSection>
                        <Button onPress={() => this.setState({ showModal: true })}>
                            Delete Person
                    </Button>
                    </CardSection>

                    <Confirm
                        visible={this.state.showModal}
                        onAccept={this.onAccept.bind(this)}
                        onDecline={this.onDecline.bind(this)}
                    >
                        Are you Sure you whant to delete this?
                 </Confirm>
                </Card>
            </View>
        )

    }
}

const mapsStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
}

export default connect(mapsStateToProps, {
    EmployeeUpdate,
    employeeSave,
    employeeDelete
})(EmployeeEdit);