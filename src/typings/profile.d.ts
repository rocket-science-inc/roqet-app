declare namespace rct.profile {

    interface IMe {
        email: string
        firstName: string
        gender: string
        id: string
        lastName: string
        link?: string,
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