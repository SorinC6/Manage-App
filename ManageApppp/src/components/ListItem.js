import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback,View } from 'react-native';
import { Actions} from 'react-native-router-flux';
import CardSections from './common/CardSection.js';

class ListItem extends Component {

    onRowPress(){
        Actions.employeeEdit( {employee: this.props.employee} );
    };


    render() {
        const { name } = this.props.employee;

        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSections>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSections>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;
