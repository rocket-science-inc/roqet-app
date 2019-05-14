import React from "react";
import { Actions, Scene, Modal } from "react-native-router-flux";
import { Icon } from "@roqet/ui";

import { EventsScreenContainer } from "@/screens/events/events.container";

export const Scenes = Actions.create(
	<Modal hideNavBar>
		<Scene key="root">
			<Scene key="main" hideNavBar tabs={true} showLabel={false} lazy={false}>
				<Scene hideNavBar 
					key="main.home"
					icon={() => <Icon name="home" size={22} />}
					component={EventsScreenContainer}
				/>
				{/* <Scene hideNavBar
					key="main.checkin"
					icon={() => <Icon name="map-pin" size={30} />}
					component={CheckinScreenContainer}
				/>
				<Scene hideNavBar
					key="main.profile"
					icon={() => <Icon name="user" size={22} />}
					component={ProfileScreenContainer}
				/> */}
			</Scene>
			{/* <Scene hideNavBar
				key="chats"
				component={ChatsScreenContainer}
			></Scene>
			<Scene hideNavBar
				key="notifications"
				component={NotificationsScreenContainer}
			></Scene>
			<Scene hideNavBar
				key="events"
				component={EventsScreenContainer}
			></Scene>
			<Scene hideNavBar
				key="event"
				component={EventScreenContainer}
			></Scene> */}
		</Scene>
		{/* <Scene hideNavBar
			key="eventsFilters"
			component={EventsFiltersModalContainer}
		></Scene>
		<Scene hideNavBar
			key="qrcode"
			component={QRCodeModalContainer}
		></Scene> */}
	</Modal>
)