import React from "react"
import { Provider, connect } from "react-redux";
import { Router } from "react-native-router-flux"
import { PersistGate } from "redux-persist/integration/react";

import { Scenes } from "./scenes";
import { Store, Persistor } from "./store";

const ReduxRouter = connect()(Router);

export const Roqet = () => (
	<Provider store={Store}>
		<PersistGate /*loading={<Loader />}*/ persistor={Persistor}>
			<ReduxRouter scenes={Scenes} />
		</PersistGate>
	</Provider>
);