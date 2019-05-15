interface ILoadEventsParams {

}

declare namespace rct.events {
    
    interface IState {

    }

    interface IReducer {
        loading: boolean,
        total: number,
        page: number,
        pages: number,
        records: any[]
    }

    interface IOterations {
        loadEvents: (params:rct.api.IEventQueryParams) => void
    }

    type IProps = IOterations & IReducer;

}