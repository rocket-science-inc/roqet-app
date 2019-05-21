declare namespace rct.login {
    
    interface IState {
    }

    interface IReducer {
        loading: boolean,
        errors: string[]
    }

    interface IOterations {
        login: (provider: string) => Promise<any>
        reset: () => void
    }

    interface IProps extends IReducer, IOterations {
        showClose: boolean,
        redirectTo: string
    }

}