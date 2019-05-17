declare namespace rct.initial {
    
    interface IState {
    }

    interface IReducer {
    }

    interface IOterations {
        init: () => void
    }

    interface IProps extends IReducer, IOterations { 
    }

}