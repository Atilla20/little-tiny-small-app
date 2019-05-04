import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Application extends Component {
    render() {
        return(
            <View style={styles.application}>
                <Text> This is the secret App</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    application: {
        backgroundColor: "#F5C7F7"
    }
})

export default Application; 