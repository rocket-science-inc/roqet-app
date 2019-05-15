interface ILoadEventsParams {

}

declare namespace rct.language {
    
    interface IState {
        locale: string
    }

    interface IReducer {
    }

    interface IOterations {
    }

    type IProps = IOterations & IReducer;

}