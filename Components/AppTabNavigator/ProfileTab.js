import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import { Icon, Container, Content, Header, Left, Body, Right, Segment, Button } from 'native-base'

import EntypoIcon from 'react-native-vector-icons/Entypo'

class ProfileTab extends Component {

    static navigationOptions = {

        tabBarIcon: ({ tintColor }) => (
            <Icon
                name="person"
                style={{ color: tintColor }}
            />
        )
    }

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: 'white' }}>
                <Header style={{ backgroundColor: 'white', paddingTop: 32, height: 64 }}>
                    <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }} /></Left>
                    <Body><Text style={{ fontSize: 20, paddingLeft: 32, width: 300 }}>Ricky's Profile</Text></Body>
                    <Right><EntypoIcon name="back-in-time" style={{ fontSize: 32 }} /></Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: 10 }}>
                        {/** This part is for User Photo Stats**/}
                        <View style={{ flexDirection: 'row' }}>
                            {/**User photo takes 1/3rd of the view horizontally **/}
                            <View
                                style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <Image source={require('../../assets/me.jpg')}
                                    style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                            </View>
                            {/**User Stats take 2/3rd of the view horizontally **/}
                            <View style={{ flex: 3 }}>
                                {/** Stats **/}
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'flex-end'
                                    }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>30</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Posts</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>159,244</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Followers</Text>
                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text>381</Text>
                                        <Text style={{ fontSize: 10, color: 'grey' }}>Following</Text>
                                    </View>
                                </View>
                                {/**Edit Profile and Settings Buttons **/}
                                <View style={{ flexDirection: 'row', alignItems: 'flex-start', paddingTop: 10 }}>
                                    <View
                                        style={{ flexDirection: 'row' }}>
                                        {/** Edit Profile takes up 3/4ths of the width **/}
                                        <Button bordered dark
                                            style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}><Text>Edit Profile</Text></Button>
                                        {/** Settings takes up 1/4th of the width **/}
                                        <Button bordered dark style={{
                                            flex: 1,
                                            height: 30,
                                            marginRight: 10, marginLeft: 5,
                                            justifyContent: 'center'
                                        }}>
                                            <Icon name="settings" style={{ color: 'black' }}></Icon></Button>
                                    </View>
                                </View>{/**End Edit Profile**/}
                            </View>
                        </View>

                        <View style={{ paddingBottom: 10 }}>
                            <View style={{ paddingHorizontal: 10 }}>
                                <Text style={{ fontWeight: 'bold' }}>Ricky Willems</Text>
                                <Text>Programmer | Photographer | Gamer</Text>
                                <Text>https://github.com/RicardoGWill</Text>
                                <Text></Text>
                                <Text>This app based on the tutorial by Varun Nath, The Unsure Programmer: https://www.youtube.com/watch?v=cgg1HidN4mQ&index=1&list=PLy9JCsy2u97lNUL3e3R-uoMQv5GDvf22T</Text>
                            </View>
                        </View>
                        
                    </View>
                </Content>
            </Container>
        );
    }
}
export default ProfileTab;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});