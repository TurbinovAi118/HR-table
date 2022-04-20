import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Field, formInputData, formValidation } from 'reactjs-input-validator'

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // id_empl: this.props.match.params.id_empl,
            // emplName: '',
            // id_sex: '',
            // id_staff_type: '',
            // id_empl_type: '',
            // current_salary: '',
            // birth_date: '',
            // hire_date: '',
            // fire_date: '',
            // id_loc: '',
            // id_course: '',
            // id_grade: '',
            // id_post: '',
            data: {}
        }


        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeSexHandler = this.changeSexHandler.bind(this);
        this.changeStaffTypeHandler = this.changeStaffTypeHandler.bind(this);
        this.changeEmplTypeHandler = this.changeEmplTypeHandler.bind(this);
        this.changeSalaryHandler = this.changeSalaryHandler.bind(this);
        this.changeBirthHandler = this.changeBirthHandler.bind(this);
        this.changeHireHandler = this.changeHireHandler.bind(this);
        this.changeFireHandler = this.changeFireHandler.bind(this);
        this.changeLocHandler = this.changeLocHandler.bind(this);
        this.changeCourseHandler = this.changeCourseHandler.bind(this);
        this.changeGradeHandler = this.changeGradeHandler.bind(this);
        this.changePostHandler = this.changePostHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id_empl === '_add'){
            return
        }else{
            EmployeeService.getEmployee(this.state.id_empl).then( (res) =>{
                let employee = res.data;
                this.setState({
                    emplName: employee.emplName,
                    id_sex: employee.id_sex,
                    id_staff_type: employee.id_staff_type,
                    id_empl_type: employee.id_empl_type,
                    current_salary: employee.current_salary,
                    birth_date: employee.birth_date,
                    hire_date: employee.hire_date,
                    fire_date: employee.fire_date,
                    id_loc: employee.id_loc,
                    id_course: employee.id_course,
                    id_grade: employee.id_grade,
                    id_post: employee.id_post
                });
            });
        }        
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {emplName: this.state.emplName, id_sex: this.state.id_sex, id_staff_type: this.state.id_staff_type, 
            id_empl_type: this.state.id_empl_type, current_salary: this.state.current_salary, birth_date: this.state.birth_date, hire_date: this.state.hire_date,
            fire_date: this.state.fire_date, id_loc: this.state.id_loc, id_course: this.state.id_course, id_grade: this.state.id_grade, id_post: this.state.id_post,};

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.addNewEmployee(employee, this.state.id_empl).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id_empl).then( res => {
                this.props.history.push('/employees');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({emplName: event.target.value});
    }

    changeSexHandler= (event) => {
        this.setState({id_sex: event.target.value});
    }

    changeStaffTypeHandler= (event) => {
        this.setState({id_staff_type: event.target.value});
    }

    changeEmplTypeHandler= (event) => {
        this.setState({id_empl_type: event.target.value});
    }

    changeSalaryHandler= (event) => {
        this.setState({current_salary: event.target.value});
    }

    changeBirthHandler= (event) => {
        this.setState({birth_date: event.target.value});
    }
    
    changeHireHandler= (event) => {
        this.setState({hire_date: event.target.value});
    }

    changeFireHandler= (event) => {
        this.setState({fire_date: event.target.value});
    }

    changeLocHandler= (event) => {
        this.setState({id_loc: event.target.value});
    }

    changeCourseHandler= (event) => {
        this.setState({id_course: event.target.value});
    }

    changeGradeHandler= (event) => {
        this.setState({id_grade: event.target.value});
    }

    changePostHandler= (event) => {
        this.setState({id_post: event.target.value});
    } 

    cancel(){
        this.props.history.push('/employees');
    }


    handleChange= (event, inputValue, inputName, validationState, isRequired) => {
        const value = (event && event.target.value) || inputValue;
        const { data } = this.state;
        data[inputName] = { value, validation: validationState, isRequired };
        this.setState({
          data,
        });
        // if you want access to your form data
        const formData = formInputData(this.state.data); // eslint-disable-line no-unused-vars
        // tells you if the entire form validation is true or false
        const isFormValid = formValidation(this.state.data); // eslint-disable-line no-unused-vars 
    }

    handleSubmit(event) {
        event.preventDefault();
        const isFormValid = formValidation(this.state.data);

        if (isFormValid) {

          this.setState({ callAPI: true });
        } else {
          this.setState({ callAPI: true, shouldValidateInputs: !isFormValid });
        }
      }

      
    


    render() {
        
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <Field
                                                required
                                                label="Name" name="emplName" placeholder="Name"
                                                onChange={this.handleChange}
                                                value={this.state.data.emplName}
                                                shouldValidateInputs={this.state.shouldValidateInputs}
                                                validator="matches" pattern={"^[A-zА-я ]+$"}
                                                //validatorErrMsg = 'ошибка'
                                            />
                                        </div>

                                        <div className = "form-group">
                                            <Field
                                                required type="number" min="1" max="2"
                                                label="Sex" name="id_sex" placeholder="Sex"
                                                onChange={this.handleChange}
                                                value={this.state.data.id_sex}
                                                shouldValidateInputs={this.state.shouldValidateInputs}
                                                validator="isDecimal"
                                                //validatorErrMsg = 'ошибка'
                                            />
                                        </div>

                                        <div className = "form-group">
                                            <label> Staff type: </label>
                                            <input placeholder="Staff type" name="staffTypeId" className="form-control" 
                                                value={this.state.id_staff_type} onChange={this.changeStaffTypeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Employee type: </label>
                                            <input placeholder="Employee type" name="emplTypeId" className="form-control" 
                                                value={this.state.id_empl_type} onChange={this.changeEmplTypeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Salary: </label>
                                            <input placeholder="Salary" name="salary" className="form-control" 
                                                value={this.state.current_salary} onChange={this.changeSalaryHandler} //style={{borderColor:salaryColor}}
                                                />
                                        </div>

                                        <div className = "form-group">
                                            <label> Birth date: </label>
                                            <input placeholder="YYYY:MM:DD" name="birth" className="form-control" 
                                                value={this.state.birth_date} onChange={this.changeBirthHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Hire date: </label>
                                            <input placeholder="YYYY:MM:DD" name="hire" className="form-control" 
                                                value={this.state.hire_date} onChange={this.changeHireHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Fire date: </label>
                                            <input placeholder="YYYY:MM:DD" name="fire" className="form-control" 
                                                value={this.state.fire_date} onChange={this.changeFireHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Locations: </label>
                                            <input placeholder="Locations" name="loc" className="form-control" 
                                                value={this.state.id_loc} onChange={this.changeLocHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Course: </label>
                                            <input placeholder="Course" name="course" className="form-control" 
                                                value={this.state.id_course} onChange={this.changeCourseHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Grade: </label>
                                            <input placeholder="Grade" name="grade" className="form-control" 
                                                value={this.state.id_grade} onChange={this.changeGradeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Post: </label>
                                            <input placeholder="Post" name="post" className="form-control" 
                                                value={this.state.id_post} onChange={this.changePostHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent