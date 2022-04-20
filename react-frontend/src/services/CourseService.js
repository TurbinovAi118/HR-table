import axios from 'axios';

const COURSES_API_BASE_URL = "http://localhost:8011/api/courses";

class CourseService {

    findAllCourses(){
        return axios.get(COURSES_API_BASE_URL);
    }

    addNewCourses(cours){
        return axios.post(COURSES_API_BASE_URL, cours);
    }

    getCourses(id_course){
        return axios.get(COURSES_API_BASE_URL + '/' + id_course);
    }

    updateCourse(cours, id_course){
        return axios.put(COURSES_API_BASE_URL + '/' + id_course, cours);
    }

    deleteCourse(id_course){
        return axios.delete(COURSES_API_BASE_URL + '/' + id_course);
    }
}



export default new CourseService()