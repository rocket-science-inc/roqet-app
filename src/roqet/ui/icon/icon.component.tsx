import React, { Component } from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { connectStyle } from "native-base-shoutem-theme";
import RctIcon from "./icon.template";

import mapPropsToStyleNames from "native-base/src/utils/mapPropsToStyleNames";

const ic = require("native-base/src/basic/Icon/NBIcons.json");

interface IProps {
    type: string,
    name: string,
    active: boolean,
    ios: string,
    android: string,
    style: any,
    size: number
};

class Icon extends Component<IProps> {

    public _root: any;
  
    public static contextTypes = {
        theme: PropTypes.object,
    };

    public static propTypes = {
        ...RctIcon.propTypes,
        style: PropTypes.oneOfType([PropTypes.object, PropTypes.number, PropTypes.array]),
        name: PropTypes.string,
        ios: PropTypes.string,
        android: PropTypes.string,
        active: PropTypes.bool,
        type: PropTypes.string,
        size: PropTypes.number
    };

    private getIconName():string {
        if (Platform.OS === "ios") {
            if (this.props.ios) {
                return this.props.ios;
            } else {
                return this.props.active ? ic[this.props.name].ios.active : ic[this.props.name].ios.default;
            }
        } else if (this.props.android) {
            return this.props.android;
        } else {
            return this.props.active ? ic[this.props.name].android.active : ic[this.props.name].android.default;
        }
    };

    public render():JSX.Element {
        if (this.props.ios && this.props.android) {
            return <RctIcon ref={c => (this._root = c)} {...this.props} name={Platform.OS === "ios" ? this.props.ios : this.props.android} />;
        } else if (this.props.name && (this.props.android || this.props.ios)) {
            return <RctIcon ref={c => (this._root = c)} {...this.props} name={this.getIconName()} />;
        } else {
            return <RctIcon ref={c => (this._root = c)} {...this.props} />;
        }
    }
}

const StyledIcon = connectStyle("NativeBase.Icon", {}, mapPropsToStyleNames)(Icon);

export { StyledIcon as Icon };
