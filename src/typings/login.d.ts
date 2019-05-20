declare namespace rct.login {
    
    interface IState {
    }

    interface IReducer {
        loading: boolean
    }

    interface IOterations {
        loginWithFacebook: () => Promise<any>,
        loginWithGoogle: () => Promise<any>
    }

    interface IProps extends IReducer, IOterations {
        showClose: boolean,
        redirectTo: string
    }

}