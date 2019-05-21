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

    private get errors():JSX.Element | null {
        if (this.props.errors.length) {
            return (
                <View style={Styles.errors}>
                    {this.props.errors.map((error, index) => {
                        return <Text style={Styles.errorText} key={index}>{error}</Text>
                    })}
                </View>
            )
        }; return null;
    };

    private login(provider:string):void {
        this.props.login(provider).then((status) => {
            if (status) {
                Actions.pop();
                Actions.push(this.props.redirectTo);
            }
        })
    };

    public componentWillUnmount():void {
        this.props.reset();
    };

    public render():any {
        return (
            <Container style={Styles.modal}>
                {this.header}
                {this.spinner}
                <Content padder contentContainerStyle={Styles.container}>
                    {this.errors}
                    <View style={Styles.login}>
                        <View style={Styles.wrapper}>
                            <Button
                                iconLeft primary style={Styles.button}
                                onPress={() => this.login("facebook")}
                            >
                                <Icon name="facebook" />
                                <Text style={Styles.label}>
                                    {i18n.t("buttons.loginWithFacebook")}
                                </Text>
                            </Button>
                            <Button
                                iconLeft danger style={Styles.button}
                                onPress={() => this.login("google")}
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