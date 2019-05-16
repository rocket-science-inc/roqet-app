interface ILoadEventsParams {

}

declare namespace rct.settings {
    
    interface IState {
    }

    interface IReducer {
        locale: string
    }

    interface IOterations {
    }

    type IProps = IOterations & IReducer;

}