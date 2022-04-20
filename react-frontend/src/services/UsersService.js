import axios from 'axios';

const RESIGNREASONS_API_BASE_URL = "http://localhost:8011/api/users";

class UsersService {

    findAllUsers(){
        return axios.get(RESIGNREASONS_API_BASE_URL);
    }

    getUsers(id_reason){
        return axios.get(RESIGNREASONS_API_BASE_URL + '/' + id_reason);
    }

    
}



export default new UsersService()