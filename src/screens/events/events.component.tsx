import * as React from "react";
import {
	Container, Content, Body, Button,
    Header, Title, Left, Right
} from "native-base";
import { FlatList, Dimensions } from "react-native";
// import { Actions } from "react-native-router-flux";
import { Icon } from "@roqet/ui";
import { EventCard } from "@common/components";

export class EventsScreen extends React.Component<rct.events.IProps, rct.events.IState> {

    private get width():number {
        return Dimensions.get("screen").width
    };

    private get height():number {
        return Dimensions.get("screen").width * 0.66
    };

    public componentDidMount(){
        this.props.loadEvents({
            page: this.props.page,
            count: 25
        })
    };

    public render():any {
        return (
            <Container>
                <Header>
                    <Left>
                        {/* <Button transparent onPress={() => Actions.pop()}>
                            <Icon name="arrow-left" size={20} />
                        </Button> */}
                    </Left>
                    <Body>
                        <Title>Roqet</Title>
                    </Body>
                    <Right>
                        {/* <Button transparent onPress={() => Actions.push("eventsFilters")}>
                            <Icon name="filter" size={20} />
                        </Button> */}
                    </Right>
                </Header>
                <Content>
                    <FlatList
                        data={this.props.records}
                        renderItem={({item}) => <EventCard {...item} width={this.width} height={this.height} />}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </Content>
            </Container>
        )
    }

};