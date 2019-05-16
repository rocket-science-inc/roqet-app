declare namespace rct.settings {
    
    interface IState {
    }

    interface IReducer {
        locale: string
    }

    interface IOterations {
    }

    interface IProps extends IOterations, IReducer {

    }

}