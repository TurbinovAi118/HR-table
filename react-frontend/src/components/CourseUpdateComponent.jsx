import React, { Component } from 'react'
import CourseService from '../services/CourseService';

class CourseUpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_course: this.props.match.params.id_course,
            name: "",
            id_manager: "",
            commentary: ""                                  
        }
        
        this.changeIdCourseHandler = this.changeIdCourseHandler.bind(this);
        this.changeCourseHandler = this.changeCourseHandler.bind(this);
        this.changeManagerHandler = this.changeManagerHandler.bind(this);
        this.changeComentaryHandler = this.changeComentaryHandler.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
        
    }

    componentDidMount(){
        CourseService.getCourses(this.state.id_course).then( (res) =>{
            let cours = res.data;
            this.setState({
                name: cours.name,
                id_manager: cours.id_manager, 
                commentary: cours.commentary
            });
        });
    }

    updateCourse = (e) => {
        e.preventDefault();
        let cours = {name: this.state.name, id_manager: this.state.id_manager, 
            commentary: this.state.commentary};
            CourseService.updateCourse(cours, this.state.id_course).then( res => {
            this.props.history.push('/courses');
        });
    }
    
    changeIdCourseHandler= (event) => {
        this.setState({id_course: event.target.value});
    }

    changeCourseHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeManagerHandler= (event) => {
        this.setState({id_manager: event.target.value});
    }

    changeComentaryHandler= (event) => {
        this.setState({commentary: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/staff_type');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Course</h3>
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.name} onChange={this.changeCourseHandler}/>
                                        </div>
                                        
                                        <div className = "form-group">
                                            <label> Manager: </label>
                                            <input placeholder="Manager" name="Manager" className="form-control" 
                                                value={this.state.id_manager} onChange={this.changeManagerHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Commentary: </label>
                                            <input placeholder="Commentary" name="Commentary" className="form-control" 
                                                value={this.state.commentary} onChange={this.changeComentaryHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateCourse}>Save</button>
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

export default CourseUpdateComponent