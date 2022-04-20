import axios from 'axios';

const STAFFTYPES_API_BASE_URL = "http://localhost:8011/api/staff_types";

class StaffTypeService {

    findAllStaffTypes(){
        return axios.get(STAFFTYPES_API_BASE_URL);
    }

    addNewTypes(employeetype){
        return axios.post(STAFFTYPES_API_BASE_URL, employeetype);
    }

    getStaffTypes(id_type){
        return axios.get(STAFFTYPES_API_BASE_URL + '/' + id_type);
    }

    updateStaffTypes(employeetype, id_type){
        return axios.put(STAFFTYPES_API_BASE_URL + '/' + id_type, employeetype);
    }

    deleteStaffType(id_type){
        return axios.delete(STAFFTYPES_API_BASE_URL + '/' + id_type);
    }
}



export default new StaffTypeService()