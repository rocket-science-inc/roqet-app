import React, { Component } from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, List,
    ListItem, Text
} from "native-base";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";
import { Icon } from "@roqet/ui";

export class LanguageModal extends Component {

    private get languages():any[] {
        return i18n.locales().map(locale => {
            return {...locale, selected: false}
        })
    };

    private checkbox(selected: boolean):JSX.Element | null {
        if (selected) {
            return <Icon active name="check" size={17} />
        };
        return null;
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Text>Close</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>{i18n.t("language")}</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Text>Done</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>
                        {this.languages.map(({key, label, selected}) => {
                            return (
                                <ListItem icon onPress={() => {}} key={key} selected={selected}>
                                    <Body>
                                        <Text>{label}</Text>
                                    </Body>
                                    <Right>{this.checkbox(selected)}</Right>
                                </ListItem>
                            )
                        })}
                    </List>
                </Content>
            </Container>
        )
    }

}