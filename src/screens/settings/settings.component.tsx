import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, List,
    ListItem, Text
} from "native-base";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";
import { Icon } from "@roqet/ui";

export class SettingsScreen extends React.Component<rct.settings.IProps, rct.settings.IState> {

    private get language():string {
        return i18n.locales().find(({ key }) => {
            return key == i18n.locale
        }).label
    };

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
                        <Title>{i18n.t("settings")}</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <List>
                        <ListItem icon onPress={() => Actions.push("language")}>
                            <Left>
                                <Button transparent>
                                    <Icon name="globe" size={20} />
                                </Button>
                            </Left>
                            <Body>
                                <Text>Language</Text>
                            </Body>
                            <Right>
                                <Text>{this.language}</Text>
                                <Icon active name="chevron-right" size={20} />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        )
    }

};