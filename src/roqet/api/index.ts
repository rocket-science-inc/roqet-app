import { GoogleResource } from "./google/google.resource";
import { UserResource } from "./user/user.resource";
import { EventResource } from "./event/event.resource";
import { FacebookResource } from "./facebook/facebook.resource";
import { AuthResource } from "./auth/auth.resource";


class Api {

    public google: GoogleResource;
    public user: UserResource;
    public event: EventResource;
    public facebook: FacebookResource;
    public auth: AuthResource;

    constructor(){
        this.google = new GoogleResource();
        this.user = new UserResource();
        this.event = new EventResource();
        this.facebook = new FacebookResource();
        this.auth = new AuthResource();
    };

};

export const RctApi = new Api()