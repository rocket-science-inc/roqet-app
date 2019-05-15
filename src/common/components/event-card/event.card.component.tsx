import React from "react";
import { Component } from "react";
import { Text, Card, CardItem, Left, Body } from "native-base";

import { CloudinaryImage } from "@roqet/ui";

interface IProps extends rct.IEvent {
    width: number,
    height: number
};

export class EventCard extends Component<IProps> {

    private get dimentions():any {
        return {
            width: this.props.width,
            height: this.props.height
        }
    };

    public render():JSX.Element {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Body>
                            <Text>{this.props.title}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <CloudinaryImage
                        {...this.props.image}
                        width={this.props.width}
                        height={this.props.height}
                    />
                </CardItem>
            </Card>
        )
    };

};