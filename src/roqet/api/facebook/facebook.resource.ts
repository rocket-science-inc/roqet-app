import { GraphRequest, GraphRequestManager } from 'react-native-fbsdk';

class GraphRequests {

    public static me(resolve, reject):GraphRequest {
        return new GraphRequest('/me', {
            parameters: {
                fields: {
                    string: "id, name, email, gender, first_name, last_name, link"
                }
            }
        }, (error, result) => {
            if (error) reject(error)
            else resolve(result)
        })
    };

}

export class FacebookResource {

    public me():Promise<any> {
        return new Promise((resolve, reject) => {
            new GraphRequestManager()
                .addRequest(GraphRequests.me(resolve, reject))
                .start();
        })
    };

};