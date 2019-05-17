import * as React from "react";
import SplashScreen from "react-native-splash-screen";
import { Actions } from "react-native-router-flux";
import { i18n } from "@roqet/i18n";

export class InitialScreen extends React.Component<rct.initial.IProps, rct.initial.IState> {

    public componentWillMount():void {
        Promise.resolve().then(() => {
            return i18n.init()
        }).then(() => {
            this.props.init()
        })
	};

    public componentWillUnmount():void {
        SplashScreen.hide();
    };

    public render():null { return null };

};