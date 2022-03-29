import axios from 'axios';

const RESIGNREASONS_API_BASE_URL = "http://localhost:8080/api/resign_reasons";

class ResignReasonService {

    findAllReasons(){
        return axios.get(RESIGNREASONS_API_BASE_URL);
    }

    addNewReason(resignReasons){
        return axios.post(RESIGNREASONS_API_BASE_URL, resignReasons);
    }

    findCurReason(id_reason){
        return axios.get(RESIGNREASONS_API_BASE_URL + '/' + id_reason);
    }

    updateReason(resignReasons){
        return axios.put(RESIGNREASONS_API_BASE_URL, resignReasons);
    }

    deleteResignReason(id_reason){
        return axios.delete(RESIGNREASONS_API_BASE_URL + '/' + id_reason);
    }
}



export default new ResignReasonService()