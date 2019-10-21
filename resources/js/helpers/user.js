import token from "./token"
import appStorage from "./appStorage"

class User{
    login(data){
        axios.post('/api/auth/login', data)
            .then(response => this.responseAfterLogin(response))
            .catch(error => console.log(error.response.data))
    }

    responseAfterLogin(response)
    {
        const accessToken = response.data.access_token
        const userName = response.data.user

        if(token.isValid(accessToken))
        {
            appStorage.store(userName, accessToken)
        }
    }

    hasToken()
    {
        const storedToken = appStorage.getToken();
        if(storedToken){
            return token.isValid(storedToken) ? true : false
        }
        return false
    }

    loggedIn()
    {
       return this.hasToken()
    }

    logOut()
    {
        appStorage.clear()
    }

    name(){
        if(this.loggedIn){
            return appStorage.getUser()
        }
    }

    id(){
        if(this.loggedIn()){
            const payload = token.payload(appStorage.getToken())
            return payload.sub
        }
    }
}

export default User = new User();
