import React, { Component } from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, List,
    ListItem, Text
} from "native-base";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";
import { Icon, Radio } from "@roqet/ui";

export class LanguageModal extends Component<rct.language.IProps, rct.language.IState> {

    constructor(props){
        super(props);
        this.state = { locale: "" };
    };

    public componentDidMount():void {
        this.setState((s, { locale }) => ({ locale }))
    };

    private get languages():any[] {
        return i18n.locales().map(locale => {
            return {...locale, selected: locale.key == this.state.locale}
        })
    };

    private get hasChanges():boolean {
        return this.state.locale != this.props.locale
    };

    private get list():JSX.Element[] {
        return this.languages.map(({key, label, selected}) => {
            return (
                <ListItem icon key={key} selected={selected}
                    onPress={() => this.select(key)}
                >
                    <Body>
                        <Text>{label}</Text>
                    </Body>
                    <Right>
                        <Radio selected={selected} />
                    </Right>
                </ListItem>
            )
        })
    };

    private select(locale:string):void {
        this.setState((state) => ({ locale }));
    };

    private apply():void {
        this.props.applyLocale(this.state.locale);
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => Actions.pop()}>
                            <Text>{i18n.t("buttons.close")}</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>{i18n.t("language")}</Title>
                    </Body>
                    <Right>
                        <Button disabled={!this.hasChanges} transparent
                            onPress={this.apply.bind(this)}
                        >
                            <Text>{i18n.t("buttons.done")}</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <List>{this.list}</List>
                </Content>
            </Container>
        )
    }

};