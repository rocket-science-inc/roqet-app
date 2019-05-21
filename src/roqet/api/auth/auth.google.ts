import { GoogleSignin, statusCodes } from "react-native-google-signin";

export class GoogleResource {

    public isAuthorized():Promise<any> {
        return GoogleSignin.isSignedIn()
    };

    public login():Promise<any> {
        return GoogleSignin.signIn().catch(({ code, message }) => {
            if (code == statusCodes.SIGN_IN_CANCELLED) {
                return Promise.reject({ errors: [message] })
            } else {
                return Promise.reject({ errors: [] })
            }
        });
    };

    public me():Promise<rct.profile.IMe> {
        return GoogleSignin.getCurrentUser().then(({ user}:any) => {
            return {
                email: user.email,
                firstName: user.givenName,
                id: user.id,
                lastName: user.familyName,
                fullName: user.name,
                picture: user.photo
            }
        })
    };

}