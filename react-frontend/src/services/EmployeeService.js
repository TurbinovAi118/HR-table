import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8011/api/employees";

class EmployeesService {

    findAllEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    addNewEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployee(id_empl){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id_empl);
    }

    updateEmployee(employee, id_empl){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + id_empl, employee);
    }

    deleteEmployee(id_empl){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + id_empl);
    }
}

export default new EmployeesService()