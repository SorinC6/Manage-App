import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeList from './components/EmployeList.js';
import EmployeCreate from './components/EmployeCreate.js';
import {Actions} from 'react-native-router-flux';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router style={styles.container}>
            <Scene key="root" hideNavBar>
                <Scene key='auth'>
                    <Scene key="login" component={LoginForm} title="Please Login" initial/>   
                </Scene>   

                <Scene key='main'>
                    <Scene 
                    key="employeList" 
                    component={EmployeList} 
                    title='Employees'
                    rightTitle="Add"
                    onRight={() => {Actions.employeCreate()}}
                    initial
                    /> 

                    <Scene
                    key="employeCreate"
                    component={EmployeCreate}
                    title="Create Employee"
                    
                    />  

                    <Scene key="employeeEdit" component ={EmployeeEdit} title="Edit Employee"/>
                </Scene>      
            </Scene>
        </Router>

    );
}

const styles={
    container:{
        backgroundColor: '#9c88ff'
    }
}

export default RouterComponent;