import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import { Icon } from 'native-base'

class MainScreen extends Component {

  static navigationOptions = {

    headerLeft: <Icon name="ios-camera-outline" />,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" />
  }

    render() {
        return (
            <View style= {styles.container}>
              <Text>MainScreen</Text>
            </View>
        );
    }
}
export default MainScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

// At 3:26 in https://www.youtube.com/watch?v=cgg1HidN4mQ&index=1&list=PLy9JCsy2u97lNUL3e3R-uoMQv5GDvf22T
