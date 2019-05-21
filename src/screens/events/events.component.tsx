import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right, Spinner,
    Thumbnail
} from "native-base";
import { TouchableOpacity } from "react-native";
import { FlatList, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";
import { EventCard } from "@common/components";
import { i18n } from "@roqet/i18n";
import { Icon } from "@roqet/ui";

export class EventsScreen extends React.Component<rct.events.IProps, rct.events.IState> {

    private get width():number {
        return Dimensions.get("screen").width
    };

    private get height():number {
        return Dimensions.get("screen").width * 0.66
    };

    private get hasMoreRecords():boolean {
        return this.props.page < this.props.pages && !this.props.loading
    };

    private get userAvatar():JSX.Element {
        if (this.props.me) {
            return (
                <TouchableOpacity onPress={() => this.goTo("profile")}>
                    <Thumbnail small source={{uri: this.props.me.picture}} />
                </TouchableOpacity>
            )
        } else {
            return (
                <Button transparent onPress={() => this.goTo("profile")}>
                    <Icon name="user" style={{fontSize: 26}} />
                </Button>
            )
        }
    };

    private goTo(route:string):void {
        if (route == "profile" && this.props.me) {
            Actions.push("profile");
        } else if (route == "profile" && !this.props.me) {
            Actions.push("login", {
                showClose: true,
                redirectTo: "profile"
            });
        } else {
            Actions.push(route);
        }
    };

    private load():void {
        if (this.hasMoreRecords) {
            this.props.loadEvents({
                page: this.props.nextPage,
                count: 25
            })
        }
    };

    public componentDidMount(){
        console.log(this.props.me)
        // this.load();
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        {this.userAvatar}
                    </Left>
                    <Body>
                        <Title>{i18n.t("name")}</Title>
                    </Body>
                    <Right>
                        {/* <Button transparent onPress={() => Actions.push("eventsFilters")}>
                            <Icon name="filter" size={20} />
                        </Button> */}
                    </Right>
                </Header>
                <Content style={{flex: 1}} contentContainerStyle={{flex: 1}}>
                    <FlatList
                        data={this.props.records}
                        renderItem={({item}) => <EventCard {...item} width={this.width} height={this.height} />}
                        keyExtractor={(item) => item.id.toString()}
                        onEndReached={() => this.load()}
                        onEndReachedThreshold={3}
                        initialNumToRender={10}
                        ListFooterComponent={() => this.props.loading ? <Spinner /> : null}
                    />
                </Content>
            </Container>
        )
    }

};