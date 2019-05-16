import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, Spinner
} from "native-base";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";
import { Icon } from "@roqet/ui";

export class ProfileScreen extends React.Component<rct.profile.IProps, rct.profile.IState> {

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="chevron-left" size={20} />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{i18n.t("profile")}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => Actions.push("settings")}>
                            <Icon name="settings" size={20} />
                        </Button>
                    </Right>
                </Header>
                <Content style={{flex: 1}} contentContainerStyle={{flex: 1}}>
                </Content>
            </Container>
        )
    }

};