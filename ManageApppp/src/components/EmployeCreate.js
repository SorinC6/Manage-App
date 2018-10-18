import React, { Component } from 'react';
import { connect } from 'react-redux';
import { EmployeeUpdate, employeeCreate } from '../actions';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Button from './common/Button';
import EmployeeForm from './EmployeeForm';

class EmployeCreate extends Component {


   

    onButtonPress() {
        const{name, phone , shift} = this.props;

        this.props.employeeCreate({name, phone, shift : shift || 'Monday'})
    }

    render() {
        //console.log(this.props.employee);
        return (
            <Card>
                <EmployeeForm { ...this.props} />

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    //destructurare
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift }

};





export default connect(mapStateToProps, { EmployeeUpdate, employeeCreate })(EmployeCreate);