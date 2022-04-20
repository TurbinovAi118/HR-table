import axios from 'axios';

const LOCATION_API_BASE_URL = "http://localhost:8011/api/locations";

class LocationService {

    findAllLocations(){
        return axios.get(LOCATION_API_BASE_URL);
    }

    addNewLocations(location){
        return axios.post(LOCATION_API_BASE_URL, location);
    }

    getLocations(id_loc){
        return axios.get(LOCATION_API_BASE_URL + '/' + id_loc);
    }

    updateLocations(location, id_loc){
        return axios.put(LOCATION_API_BASE_URL+ '/' + id_loc, location);
    }

    deleteLocations(id_loc){
        return axios.delete(LOCATION_API_BASE_URL + '/' + id_loc);
    }
}



export default new LocationService()