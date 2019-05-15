import React from "react";
import { Component } from "react";
import { Text } from "native-base";

export class EventCard extends Component<rct.IEvent> {

    public render():JSX.Element {
        console.log(this.props)
        return (
            <Text>{this.props.title}</Text>
        )
    };

};