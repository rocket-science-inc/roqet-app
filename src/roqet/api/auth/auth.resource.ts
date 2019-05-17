import { GoogleSignin } from "react-native-google-signin";

export class AuthResource {

    constructor(){
        GoogleSignin.configure();
    };

    public google():Promise<any> {
        return GoogleSignin.signIn();
    };

};