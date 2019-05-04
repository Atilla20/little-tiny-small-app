import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';
import PinView from 'react-native-pin-view';


class Login extends Component {
    render() {
        return(
            <View style={styles.container}>
               <PinView
                    password={[1,2,5,7,9]}
                    onSuccess={() => {alert("SUCCESS")} }
                    onFailure={() => {alert("FAILURE")}}
                    pinLength={4}
                    onComplete = {() => {alert("COMPLETE")}}
                    buttonBgColor = '#C54FA7'
                    buttonTextColor = 'white'
                    deleteText = 'delete'
                    inputBgColor = '#C54FA7'
                    inputBgOpacity = {0.3}
                    inputActiveBgColor = '#C54FA7'
                />
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 200,
        padding: 20,
        backgroundColor: '#fff',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
})

export default Login;