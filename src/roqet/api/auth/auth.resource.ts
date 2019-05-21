import { GoogleSignin } from "react-native-google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { FacebookResource } from "./auth.facebook";
import { GoogleResource } from "./auth.google";

export class AuthResource {

    private fb: FacebookResource;
    private ggl: GoogleResource;

    constructor(){
        GoogleSignin.configure({
            // scopes: ["https://www.googleapis.com/oauth2/userinfo"]
        });
        LoginManager.logOut();
        GoogleSignin.signOut();
        this.fb = new FacebookResource();
        this.ggl = new GoogleResource();
    };

    public google():Promise<any> {
        return this.ggl.login()
    };

    public facebook():Promise<any> {
        return this.fb.login();
    };

    public isAuthorized():Promise<any> {
        return Promise.all([
            this.ggl.isAuthorized(),
            this.fb.isAuthorized()
        ]).then(([google, facebook]) => {
            return { google, facebook }
        });
    };

    public me({google, facebook}:any):Promise<rct.profile.IMe | null> {
        if (google) return this.ggl.me();
        if (facebook) return this.fb.me();
        return Promise.resolve(null);
    };

};