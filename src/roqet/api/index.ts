import { GoogleResource } from "./google/google.resource";
import { UserResource } from "./user/user.resource";
import { EventResource } from "./event/event.resource";
import { FacebookResource } from "./facebook/facebook.resource";


class Api {

    public google: GoogleResource;
    public user: UserResource;
    public event: EventResource;
    public facebook: FacebookResource;

    constructor(){
        this.google = new GoogleResource();
        this.user = new UserResource();
        this.event = new EventResource();
        this.facebook = new FacebookResource();
    };

};

export const RctApi = new Api()