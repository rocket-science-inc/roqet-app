declare namespace rct.profile {

    interface IMe {

    }
    
    interface IState {
    }

    interface IReducer {
        me: IMe | null
    }

    interface IOterations {
    }

    type IProps = IOterations & IReducer;

}