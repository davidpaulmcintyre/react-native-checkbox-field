/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import CheckboxForm from './CheckboxForm';

class example extends Component {

    render() {
        return (
            <View style={styles.container}>
                <CheckboxForm />
                <CheckboxForm />
                <CheckboxForm />
                <CheckboxForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});

AppRegistry.registerComponent('example', () => example);