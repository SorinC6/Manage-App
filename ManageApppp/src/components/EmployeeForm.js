import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { EmployeeUpdate } from '../actions';
import CardSection from './common/CardSection.js';
import Input from './common/Input'

class EmployeeForm extends Component {

    // onNameChange(text) {
    //     this.props.EmployeeUpdate({ prop: 'name', value: text })
    // }

    render() {

        return (
            <View>
                <CardSection>
                    <Input
                        label="name"
                        placeholder="enter employee name"
                        value={this.props.name}
                       // onChangeText={this.onNameChange.bind(this)}
                       onChangeText={value => this.props.EmployeeUpdate({ prop: 'name', value })}

                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="phone"
                        placeholder="enter employee phone"
                        value={this.props.phone}
                        onChangeText={value => this.props.EmployeeUpdate({ prop: 'phone', value })}
                        //onChangeText={value => this.props.EmployeeUpdate({ prop: 'phone', value })}
                    />
                </CardSection>

                <CardSection >
                    <Text style={styles.pickerLabelStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1 }}
                        selectedValue={this.props.shift}
                        onValueChange={day => this.props.EmployeeUpdate({ prop: 'shift', value: day })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday " />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>

            </View>

        )

    }
}

const styles = {
    pickerLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        paddingRight: 100
    }
};

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { EmployeeUpdate })(EmployeeForm);