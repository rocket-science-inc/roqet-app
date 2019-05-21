import { GraphRequest, GraphRequestManager, LoginManager, AccessToken } from 'react-native-fbsdk';
import { Dimensions } from "react-native";

class GraphRequests {

    public static get dim():number {
        return Math.floor(200 * Dimensions.get("window").scale)
    };

    public static me(resolve, reject):GraphRequest {
        return new GraphRequest('/me', {
            parameters: {
                fields: {
                    string: "id, name, email, gender, first_name, last_name, link, picture.height(300).width(300)"
                }
            }
        }, (error:any, result:any) => {
            if (error) reject({
                errors: [error.errorMessage]
            })
            else resolve({
                email: result.email,
                firstName: result.first_name,
                id: result.id,
                lastName: result.last_name,
                fullName: result.name
            })
        })
    };

    public static picture(resolve:Function, reject:Function):GraphRequest {
        return new GraphRequest(`/me/picture`, {
            parameters: {
                width: {
                    string: this.dim.toString(),
                },
                height: {
                    string: this.dim.toString()
                },
                redirect: {
                    string: "false"
                }
            }
        }, (error, {data}:any) => {
            if (error) reject(error)
            else resolve(data.url)
        });
    };

}

export class FacebookResource {

    private _picture():Promise<string> {
        return new Promise((resolve, reject) => {
            new GraphRequestManager()
                .addRequest(GraphRequests.picture(resolve, reject))
                .start();
        })
    };

    private _me():Promise<rct.profile.IMe> {
        return new Promise((resolve, reject) => {
            new GraphRequestManager()
                .addRequest(GraphRequests.me(resolve, reject))
                .start();
        })
    };

    public isAuthorized():Promise<boolean> {
        return AccessToken.getCurrentAccessToken().then((data) => {
            return !!data
        }).catch(() => {
            return Promise.resolve(false);
        });
    };

    public me():Promise<rct.profile.IMe> {
        return Promise.all([
            this._me(),
            this._picture()
        ]).then(([me, picture]) => {
            return {...me, picture}
        })
    };

    public login():Promise<any> {
        return LoginManager.logInWithReadPermissions([
            "public_profile", "email", "user_gender", "user_link"
        ])
    };

};