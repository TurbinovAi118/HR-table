import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [
                    
                ]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.referenceEmployee = this.referenceEmployee.bind(this);
    }

    deleteEmployee(id_empl){
        EmployeeService.deleteEmployee(id_empl).then((res) => {
            this.setState({ employees: res.data});
        });
        window.location.reload(); 
    }
   
    referenceEmployee(){
        this.props.history.push('/reference');
        console.log('11')
    }

    editEmployee(id_empl){
        this.props.history.push(`/update-employee/${id_empl}`);
    }


    componentDidMount(){
        EmployeeService.findAllEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }

    handleChange(event,id_empl) { 
        var a = this.state.employees;
        if (event.target.name === "FullName_input")  //// warning
            a[id_empl].FullName=event.target.value;
            this.setState({employees: a}) ;
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Сотрудники</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addEmployee}> Добавить  Сотрудника</button>
                    <button className="btn btn-primary" onClick={this.referenceEmployee}> Справочники</button> 
                 </div>
                 <div className='row search'>
                            <form onSubmit={this.handleSubmit}>
                    <label>
                    <p>Сортировка по полю:</p>
                        <select value={this.state.value} onChange={this.handleChange}>
                        <option value="id">Id</option>
                        <option value="firstName">Имя</option>
                        <option value="lastName">Фамимлия</option>
                        <option value="action">Email</option>
                        <option value="id">Id</option>
                        </select>
                    </label>
                    <input type="submit" value="Найти" />
                    </form>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>ФИО</th>
                                    <th>Пол</th>
                                    <th>Тип персонала</th>
                                    <th>Тип трудоустройства</th>
                                    <th>Текущая ЗП</th>
                                    <th>Дата рождения</th>
                                    <th>Дата приема</th>
                                    <th>Дата увольнения</th>
                                    <th>Локация</th>
                                    <th>Направление</th>
                                    <th>Грейд</th>
                                    <th>Должность</th>
                                    <th>Дейсвтие</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id_empl}>
                                            <td> { employee.id_empl} </td>   
                                            <td> { employee.emplName} </td>
                                            <td> { employee.id_sex} </td>   
                                            <td> { employee.id_staff_type} </td>   
                                            <td> { employee.id_empl_type} </td>   
                                            <td> { employee.current_salary} </td>   
                                            <td> { employee.birth_date} </td>   
                                            <td> { employee.hire_date} </td>   
                                            <td> { employee.fire_date} </td>   
                                            <td> { employee.id_loc} </td>   
                                            <td> { employee.id_course} </td>   
                                            <td> { employee.id_grade} </td>
                                            <td> { employee.id_post} </td>


                                            
                                             
                                             <td>
                                                 <button onClick={ () => this.editEmployee(employee.id_empl)} className="btn btn-info">Редактировать </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id_empl) }  className="btn btn-danger">Удалить  </button>
                                                 
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListEmployeeComponent