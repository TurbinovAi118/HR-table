import axios from 'axios';

const EMPL_TYPE_API_BASE_URL = "http://localhost:8011/api/empl_type";

class EmploymentTypeService {

    findAllEmplType(){
        return axios.get(EMPL_TYPE_API_BASE_URL);
    }

    addNewEmplTypes(employmenttype){
        return axios.post(EMPL_TYPE_API_BASE_URL, employmenttype);
    }

    getEmplTypes(id_type){
        return axios.get(EMPL_TYPE_API_BASE_URL + '/' + id_type);
    }

    updateEmplTypes(employmenttype, id_type){
        return axios.put(EMPL_TYPE_API_BASE_URL+ '/' + id_type, employmenttype);
    }

    deleteEmplTypes(id_type){
        return axios.delete(EMPL_TYPE_API_BASE_URL + '/' + id_type);
    }
}



export default new EmploymentTypeService()