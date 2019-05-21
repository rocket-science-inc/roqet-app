declare namespace rct.profile {

    interface IMe {
        email: string
        firstName: string
        id: string
        lastName: string
        fullName: string,
        picture: string
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