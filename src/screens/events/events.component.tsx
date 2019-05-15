import * as React from "react";
import {
	Container, Content, Body,
    Header, Title, Left, Right, Spinner
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

    private get hasMoreRecords():boolean {
        return this.props.page < this.props.pages && !this.props.loading
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
        this.load();
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