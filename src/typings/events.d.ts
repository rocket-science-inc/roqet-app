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
        nextPage: number,
        records: rct.IEvent[]
    }

    interface IOterations {
        loadEvents: (params:rct.api.IEventQueryParams) => void
    }

    interface IProps extends IOterations, IReducer {
        me: rct.profile.IMe
    }

}