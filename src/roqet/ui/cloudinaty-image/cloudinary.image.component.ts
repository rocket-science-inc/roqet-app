import React from "react";
import { Component } from "react";
import { Image } from "native-base";

import { CloudinaryService } from "./../cloudinary.service";

export class CloudinaryImage extends Component<rct.ICloudinaryImage> {

    private get url():string {
        return CloudinaryService.url(this.props.id)
    };

    // public render():JSX.Element {
    //     return (
    //         <Image ></Image>
    //     )
    // };

}