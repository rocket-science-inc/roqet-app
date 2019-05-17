import React, { Component } from "react"
import { Provider, connect } from "react-redux";
import { Router } from "react-native-router-flux"
import StyleSheet from "react-native-extended-stylesheet";
import { PersistGate } from "redux-persist/integration/react";

import { Scenes } from "./scenes";
import { Store, Persistor } from "./store";

const ReduxRouter = connect()(Router);

StyleSheet.build();

export class Roqet extends Component<any, rct.provider.IState> {

	public render():JSX.Element | null {
		return (
			<Provider store={Store}>
				<PersistGate /*loading={<Loader />}*/ persistor={Persistor}>
					<ReduxRouter scenes={Scenes} />
				</PersistGate>
			</Provider>
		)
	};

};