import * as React from "react";
import {
	Container, Content, Button, Body,
    View, Text, Header, Left, Right,
    Spinner
} from "native-base";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";
import { Icon } from "@roqet/ui";
import { Styles } from "./login.styles";

export class LoginModal extends React.Component<rct.login.IProps, rct.login.IState> {

    private get header():JSX.Element | null {
        if (this.props.showClose) {
            return (
                <Header transparent>
                    <Left></Left>
                    <Body></Body>
                    <Right>
                        <Button
                            transparent disabled={this.props.loading}
                            onPress={() => Actions.pop()}
                        >
                            <Icon name="x" style={{fontSize: 26, color: "#000000"}} />
                        </Button>
                    </Right>
                </Header>
            )
        }; return null;
    };

    private get spinner():JSX.Element | null {
        if (this.props.loading) {
            return (
                <View style={Styles.spinnerContainer}>
                    <Spinner  />
                </View>
            )
        }; return null;
    };

    private redirect():void {
        Actions.pop();
        Actions.push(this.props.redirectTo);
    };

    public render():any {
        return (
            <Container style={Styles.modal}>
                {this.header}
                {this.spinner}
                <Content padder contentContainerStyle={Styles.container}>
                    <View style={Styles.login}>
                        <View style={Styles.wrapper}>
                            <Button
                                iconLeft primary style={Styles.button}
                                onPress={() => this.props.loginWithFacebook().then(this.redirect.bind(this))}
                            >
                                <Icon name="facebook" />
                                <Text style={Styles.label}>
                                    {i18n.t("buttons.loginWithFacebook")}
                                </Text>
                            </Button>
                            <Button
                                iconLeft danger style={Styles.button}
                                onPress={() => this.props.loginWithGoogle()}
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
    };

};