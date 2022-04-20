import axios from 'axios';

const SEX_API_BASE_URL = "http://localhost:8011/api/sex";

class SexService {

    findAllSex(){
        return axios.get(SEX_API_BASE_URL);
    }
}



export default new SexService()