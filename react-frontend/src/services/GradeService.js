import axios from 'axios';

const GRADES_API_BASE_URL = "http://localhost:8011/api/grades";

class GradeService {

    findAllGrades(){
        return axios.get(GRADES_API_BASE_URL);
    }

    addNewGrades(grad){
        return axios.post(GRADES_API_BASE_URL, grad);
    }grade

    getGrades(id_grade){
        return axios.get(GRADES_API_BASE_URL + '/' + id_grade);
    }

    updateGrades(grad, id_grade){
        return axios.put(GRADES_API_BASE_URL+ '/' + id_grade, grad);
    }

    deleteGrades(id_grade){
        return axios.delete(GRADES_API_BASE_URL + '/' + id_grade);
    }
}



export default new GradeService()