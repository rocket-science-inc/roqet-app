import * as React from "react";
import {
	Container, Content, Button,
    View, Text
} from "native-base";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";
import { Icon } from "@roqet/ui";
import { Styles } from "./login.styles";
import { RctApi } from "@roqet/api";

export class LoginScreen extends React.Component<rct.login.IProps, rct.login.IState> {

    private facebook():void {
        LoginManager.logInWithReadPermissions(["public_profile", "email", "user_gender", "user_link"])
            .then((result) => {
                return AccessToken.getCurrentAccessToken()
            })
            .then((data) => {
                console.log(data)
            })
            .catch((err) => {
                console.error(err)
            })
    };

    private google():void {
        RctApi.auth.google().then((data) => {
            console.log(data)
        })
    };

    public componentDidMount():void {
        // RctApi.facebook.me().then(data => {
        //     console.log(data)
        // })
    };

    public render():any {
        return (
            <Container>
                <Content padder contentContainerStyle={Styles.container}>
                    <View style={Styles.login}>
                        <View style={Styles.wrapper}>
                            <Button
                                iconLeft primary style={Styles.button}
                                onPress={this.facebook.bind(this)}
                            >
                                <Icon name="facebook" />
                                <Text style={Styles.label}>
                                    {i18n.t("buttons.loginWithFacebook")}
                                </Text>
                            </Button>
                            <Button
                                iconLeft danger style={Styles.button}
                                onPress={this.google.bind(this)}
                            >
                                <Icon name="mail" />
                                <Text style={Styles.label}>
                                    {i18n.t("buttons.loginWithGoogle")}
                                </Text>
                            </Button>
                        </View> 
                    </View>
                </Content>
            </Container>
        )
    }

};