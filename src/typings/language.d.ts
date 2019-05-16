interface ILoadEventsParams {

}

declare namespace rct.language {
    
    interface IState {
        locale: string
    }

    interface IReducer {
    }

    interface IOterations {
        applyLocale(locale:string):void;
    }

    interface IProps extends IOterations {
        locale: string
    }

}