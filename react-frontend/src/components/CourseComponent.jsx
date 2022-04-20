import React, { Component } from 'react'
import CourseService from '../services/CourseService'





class CourseComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courses: [

            ]
        
        }
        this.addCourse = this.addCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    addCourse(){
        this.props.history.push('/add-course/_add');
    }

    editCourse(id_course){
        this.props.history.push(`/update-course/${id_course}`);
    }

    deleteCourse(id_course){
        CourseService.deleteCourse(id_course).then((res) => {
            this.setState({ cours: res.data});
        });
        window.location.reload(); 
    }

    componentDidMount(){
        CourseService.findAllCourses().then((res) => {
            this.setState({ courses: res.data});
        });
    }



    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочник Направления</h2>
               <button className="btn btn-primary" onClick={this.addCourse}> Добавить  Направление</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Наименование</th>
                                    <th>Руководитель</th>
                                    <th>Комментарий</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.courses.map(
                                        resignCourses => 
                                        <tr key = { resignCourses.id_course }>
                                            <td> { resignCourses.id_course} </td>
                                            <td> { resignCourses.name} </td>
                                            <td> { resignCourses.id_manager} </td>
                                            <td> { resignCourses.commentary} </td>

                                            <td>
                                                 <button onClick={ () => this.editCourse(resignCourses.id_course)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourse(resignCourses.id_course)} className="btn btn-danger">Delete </button>
                                             </td>

                                        </tr>
                                    )
                                }
                            </tbody> }
                        </table>
                 </div>
            </div>
        )
    }
}

export default CourseComponent