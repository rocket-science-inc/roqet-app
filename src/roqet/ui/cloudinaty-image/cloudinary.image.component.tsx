import React from "react";
import { Component } from "react";
import { Image, Dimensions } from "react-native";

import { CloudinaryService } from "./../cloudinary.service";

interface IProps extends rct.ICloudinaryImage {
    width: number,
    height: number,
    crop?: string
};

export class CloudinaryImage extends Component<IProps> {

    private get uri():string {
        return ((scale:number) => {
            return CloudinaryService.url(this.props.public_id, {
                format: this.props.format,
                width: Math.floor(this.props.width * scale),
                height: Math.floor(this.props.height * scale),
                crop: this.props.crop || "thumb"
            })
        })(Dimensions.get("screen").scale)
    };

    private get style():any {
        return {
            width: this.props.width,
            height: this.props.height
        };
    };

    public render():JSX.Element {
        return <Image source={{uri: this.uri}} style={this.style} />
    };

}