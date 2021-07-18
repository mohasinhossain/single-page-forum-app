import User from './user'

class Exception{
    handle(error){
        this.isExipred(error.response.data.error)
    }

    isExipred(error){
        if(error == 'Token is expired'){
            User.logOut()
        }
    }
}

export default Exception = new Exception()
