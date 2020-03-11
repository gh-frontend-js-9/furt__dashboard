import axios from "axios";

export class UserService {
     get usersUrl  () {
        return 'api/users/login'
    }
     login(email: any, password: any){
        axios.post(axios.defaults.baseURL + this.usersUrl, {email, password})
            .then( )
    }
}
