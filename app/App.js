import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';
import { Router, Route, Switch } from 'react-router-native';
import createHistory from 'history/createMemoryHistory';
import Login from './src/container/Login';
import Application from './src/container/Application';

const history = createHistory();


//Authentication stuff
const optionalConfigObject = {
  title: "Authentication Required", // for Android
  color: "#e00606", // for Android
  fallbackLabel: "Show Passcode" // this is for iOS (if empty, then label is hidden)
};

class App extends Component {
  constructor() {
    super()

    this.state = {
        biometryType: null
    };
}

componentDidMount() {
  TouchID.isSupported()
  .then(biometryType => {
      this.setState({ biometryType });
      this.popUp();
  })
}


popUp() {
  TouchID.isSupported()
      .then(this.authenticate())
      .catch(error =>  {
          Alert.alert('Biometric authentication not supported');
      });
}

authenticate() {
  return TouchID.authenticate('Authenticate with biometric authentication', optionalConfigObject)
      .then(success => {
          Alert.alert('Authenticated Successfully');
          this.pass();
      })
      .catch(error => {
          console.log(error)
          Alert.alert(error.message);
      });
}

pass() {
  history.push("/application");
}

  render() {
    return(
      <Router history={history}>
        <View style={styles.app}>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/application" component={Application} />
          </Switch>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: 200,
    height: 200,
  }

});

export default App;
