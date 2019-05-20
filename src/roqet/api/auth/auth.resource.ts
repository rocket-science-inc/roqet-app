import { GoogleSignin } from "react-native-google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { FacebookResource } from "./auth.facebook";

export class AuthResource {

    private fb: FacebookResource;

    constructor(){
        GoogleSignin.configure();
        // LoginManager.logOut();
        // GoogleSignin.signOut();
        this.fb = new FacebookResource();
    };

    private isGoogleAuthorized():Promise<any> {
        return GoogleSignin.isSignedIn()
    };

    // private meGoogle():Promise<rct.profile.IMe> {
    //     return Promise.resolve({})
    // };

    public google():Promise<any> {
        return GoogleSignin.signIn();
    };

    public facebook():Promise<any> {
        return this.fb.login();
    };

    public isAuthorized():Promise<any> {
        return Promise.all([
            this.isGoogleAuthorized(),
            this.fb.isAuthorized()
        ]).then(([google, facebook]) => {
            return {google, facebook}
        });
    };

    public me({google, facebook}:any):Promise<rct.profile.IMe | null> {
        // if (google) return this.meGoogle()
        if (facebook) return this.fb.me();
        return Promise.resolve(null);
    };

};