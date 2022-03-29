import React, { Component } from 'react'
import EmployeesService from '../services/EmployeeService'

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                employees: [
                    {
                    FullName: ' Петров Василий Александрович' ,
                    sex: 'Мужской',
                    person: 'Сотрудник',
                    Type_of_employment: 'front',
                    Current_salary: '10000',
                    Date_of_Birth: '01.01.2000',
                    date_of_receipt: '01.01.2000',
                    date_of_dismissal: '01.01.2000',
                    Direction: 'Верное',
                    Grade: 'Грейд',
                    Position: 'Директор',
                    Date_of_past_PA: '01.01.2000',
                    Date_of_the_future_PA : '01.01.2000',
                    Commentary_on_PA: 'Лучший',
                    Projects: 'Хорошие',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Previous_projects: 'Хорошие тоже',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Reasons_for_dismissal:'01.01.2000',
                    editing: false

                },
                {
                    FullName: ' Петров Василий Александрович' ,
                    sex: 'Мужской',
                    person: 'Сотрудник',
                    Type_of_employment: 'front',
                    Current_salary: '10000',
                    Date_of_Birth: '01.01.2000',
                    date_of_receipt: '01.01.2000',
                    date_of_dismissal: '01.01.2000',
                    Direction: 'Верное',
                    Grade: 'Грейд',
                    Position: 'Директор',
                    Date_of_past_PA: '01.01.2000',
                    Date_of_the_future_PA : '01.01.2000',
                    Commentary_on_PA: 'Лучший',
                    Projects: 'Хорошие',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Previous_projects: 'Хорошие тоже',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Reasons_for_dismissal:'01.01.2000',
                    editing: false

                },
                {
                    FullName: ' Петров Василий Александрович' ,
                    sex: 'Мужской',
                    person: 'Сотрудник',
                    Type_of_employment: 'front',
                    Current_salary: '10000',
                    Date_of_Birth: '01.01.2000',
                    date_of_receipt: '01.01.2000',
                    date_of_dismissal: '01.01.2000',
                    Direction: 'Верное',
                    Grade: 'Грейд',
                    Position: 'Директор',
                    Date_of_past_PA: '01.01.2000',
                    Date_of_the_future_PA : '01.01.2000',
                    Commentary_on_PA: 'Лучший',
                    Projects: 'Хорошие',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Previous_projects: 'Хорошие тоже',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Reasons_for_dismissal:'01.01.2000',
                    editing: false

                },
                {
                    FullName: ' Петров Василий Александрович' ,
                    sex: 'Мужской',
                    person: 'Сотрудник',
                    Type_of_employment: 'front',
                    Current_salary: '10000',
                    Date_of_Birth: '01.01.2000',
                    date_of_receipt: '01.01.2000',
                    date_of_dismissal: '01.01.2000',
                    Direction: 'Верное',
                    Grade: 'Грейд',
                    Position: 'Директор',
                    Date_of_past_PA: '01.01.2000',
                    Date_of_the_future_PA : '01.01.2000',
                    Commentary_on_PA: 'Лучший',
                    Projects: 'Хорошие',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Previous_projects: 'Хорошие тоже',
                    Start_date: '01.01.2000',
                    Work_end_date_input: '01.01.2000',
                    Reasons_for_dismissal:'01.01.2000',
                    editing: false

                },
                ]
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.referenceEmployee = this.referenceEmployee.bind(this);
        // this.referenceReasons = this.referenceReasons.bind(this);
    }

    deleteEmployee(index){
        var arr = this.state.employees;
        arr.splice(index,1);
        this.setState({employees: arr}) ;
    }
    viewEmployee(index){
        this.props.history.push(`/view-employee/${index}`);
    }
    referenceEmployee(){
        this.props.history.push('/reference');
        console.log('11')
    }
    editEmployee(index){
        var a = this.state.employees;
        a[index].editing=!a[index].editing;
        this.setState({employees: a}) ;

    }

    handleChange(event,index) { 
        var a = this.state.employees;
        if (event.target.name == "FullName_input")
            a[index].FullName=event.target.value;
        else if (event.target.name == "sex_input")  
            a[index].sex=event.target.value;  
        else if (event.target.name == "person_input")  
            a[index].person=event.target.value;   
        else if (event.target.name == "Type_of_employment_input")  
            a[index].Type_of_employment=event.target.value;   
        else if (event.target.name == "Current_salary_input")  
            a[index].Current_salary=event.target.value;  
        else if (event.target.name == "date_of_receipt_input")  
            a[index].date_of_receipt=event.target.value;
        else if (event.target.name == "date_of_dismissal_input")  
            a[index].date_of_dismissal=event.target.value;
        else if (event.target.name == "Direction_input")  
            a[index].Direction=event.target.value;
        else if (event.target.name == "Grade_input")  
            a[index].Grade=event.target.value;
        else if (event.target.name == "Position_input")  
            a[index].Position=event.target.value;
        else if (event.target.name == "Date_of_past_PA_input")  
            a[index].Date_of_past_PA=event.target.value;
        else if (event.target.name == "Date_of_the_future_PA_input")  
            a[index].Date_of_the_future_PA=event.target.value;
        else if (event.target.name == "Commentary_on_PA_input")  
            a[index].Commentary_on_PA=event.target.value;
        else if (event.target.name == "Projects_input")  
            a[index].Projects=event.target.value;
        else if (event.target.name == "Start_date_input")  
            a[index].Start_date=event.target.value;
        else if (event.target.name == " Work_end_date_input_input")  
            a[index]. Work_end_date_input=event.target.value;
        else if (event.target.name == "Previous_projects_input")  
            a[index].Previous_projects=event.target.value;
        else if (event.target.name == "Start_date_input")  
            a[index].Start_date=event.target.value;
        else if (event.target.name == "Work_end_date_input")  
            a[index].Work_end_date_input=event.target.value; 
        else if (event.target.name == "Reasons_for_dismissal_input")  
            a[index].Reasons_for_dismissal=event.target.value;        
        this.setState({employees: a}) ;
        

    }

    componentDidMount(){
        EmployeesService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
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
                        <option value="id">Id</option>
                        <option value="id">Id</option>
                        <option value="id">Id</option>
                        <option value="id">Id</option>
                        <option value="id">Id</option>
                        <option value="id">Id</option>
                        <option value="id">Id</option>
                        <option value="id">Id</option>
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
                                    <th>ФИО</th>
                                    <th>Пол</th>
                                    <th>Тип персонала</th>
                                    <th>Тип трудоустройства</th>
                                    <th>Текущая ЗП</th>
                                    <th>Дата рождения</th>
                                    <th>Дата приема</th>
                                    <th>Дата увольнения</th>
                                    <th>Направление</th>
                                    <th>Грейд</th>
                                    <th>Должность</th>
                                    <th>Дата прошедшего PA</th>
                                    <th>Дата будущего PA</th>
                                    <th>Комментарий к PA</th>
                                    <th>Проекты</th>
                                    <th>Дата начала работы</th>
                                    <th>Дата окончания работы</th>
                                    <th>Предыдущие проекты</th>
                                    <th>Дата начала работы</th>
                                    <th>Дата окончания работы</th>
                                    <th>Причины увольнения</th>
                                    <th>Дейсвтие</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        (employee,index) => 
                                        <tr key = {employee.id}>
                                             <td>  <input disabled={!employee.editing} name='FullName_input' className='FullName_input' value={employee.FullName} onChange={(event) => this.handleChange(event,index) }/> </td> 
                                             <td><input disabled={!employee.editing} name='sex_input' className='sex_input' value={employee.sex} onChange={(event) => this.handleChange(event,index) }/></td>
                                             <td><input disabled={!employee.editing} name='personal_input' className='personal_input' value={employee.person} onChange={(event) => this.handleChange(event,index) }/></td>
                                             <td>  <input disabled={!employee.editing} name='Type_of_employment_input' className='Type_of_employment_input' value={employee.Type_of_employment} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Current_salary_input' className='Current_salary_input' value={employee.Current_salary} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Date_of_Birth_input' className='Date_of_Birth_input' value={employee.Date_of_Birth} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='date_of_receipt_input' className='date_of_receipt_input' value={employee.date_of_receipt} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='date_of_dismissal_input' className='date_of_dismissal_input' value={employee.date_of_dismissal} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Direction_input' className='Direction_input' value={employee.Direction} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Grade_input' className='Grade_input' value={employee.Grade} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Position_input' className='Position_input' value={employee.Position} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Date_of_past_PA_input' className='Date_of_past_PA_input' value={employee.Date_of_past_PA} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Date_of_the_future_PA_input' className='Date_of_the_future_PA_input' value={employee.Date_of_the_future_PA} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Commentary_on_PA_input' className='Commentary_on_PA_input' value={employee.Commentary_on_PA} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Projects_input' className='Projects_input' value={employee.Projects} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Start_date_input' className='Start_date_input' value={employee.Start_date} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Work_end_date_input' className='Work_end_date_input_input' value={employee.Work_end_date_input} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Previous_projects_input' className='Previous_projects_input' value={employee.Previous_projects} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Start_date_input' className='Start_date_input' value={employee.Start_date} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Work_end_date_input' className='Work_end_date_input_input' value={employee.Work_end_date_input} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>  <input disabled={!employee.editing} name='Reasons_for_dismissal_input' className='Reasons_for_dismissal_input' value={employee.Reasons_for_dismissal} onChange={(event) => this.handleChange(event,index) }/> </td>
                                             <td>
                                                 <button onClick={ () => this.editEmployee(index)} className="btn btn-info">{employee.editing?'Применить':'Редактировать'} </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(employee.id)} className="btn btn-danger">Удалить </button>
                                                 <button style={{marginLeft: "10px"}} onClick={  () => this.viewEmployee(employee.index)} className="btn btn-info">View </button>
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