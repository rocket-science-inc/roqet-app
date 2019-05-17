import { GoogleSignin } from "react-native-google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";

export class AuthResource {

    constructor(){
        GoogleSignin.configure();
        // LoginManager.logOut();
        // GoogleSignin.signOut();
    };

    private isGoogleAuthorized():Promise<any> {
        return GoogleSignin.isSignedIn()
    };

    private isFacebookAuthorized():Promise<any> {
        return AccessToken.getCurrentAccessToken().then((data) => {
            return !!data
        }).catch(() => {
            return Promise.resolve(false);
        });
    };

    private meFacebook():Promise<rct.profile.IMe> {
        return Promise.resolve({})
    };

    private meGoogle():Promise<rct.profile.IMe> {
        return Promise.resolve({})
    };

    public google():Promise<any> {
        return GoogleSignin.signIn();
    };

    public facebook():Promise<any> {
        return LoginManager.logInWithReadPermissions([
            "public_profile",
            "email",
            "user_gender",
            "user_link"
        ])
    };

    public isAuthorized():Promise<any> {
        return Promise.all([
            this.isGoogleAuthorized(),
            this.isFacebookAuthorized()
        ]).then(([google, facebook]) => {
            return {google, facebook}
        });
    };

    public me({google, facebook}:any):Promise<rct.profile.IMe | null> {
        if (google) return this.meGoogle()
        if (facebook) return this.meFacebook();
        return Promise.resolve(null);
    };

};