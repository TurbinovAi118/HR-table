import React, { Component } from 'react'
import GradeService from '../services/GradeService';

class GradeUpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_grade: this.props.match.params.id_grade,
            grade: ''                                  
        }
        
        this.changeIdGradeHandler = this.changeIdGradeHandler.bind(this);
        this.changeGradeHandler = this.changeGradeHandler.bind(this);
        this.updateGrade = this.updateGrade.bind(this);
        
    }

    componentDidMount(){
        GradeService.getGrades(this.state.id_grade).then( (res) =>{
            let grad = res.data;
            this.setState({
                grade: grad.grade
            });
        });
    }

    updateGrade = (e) => {
        e.preventDefault();
        let grad = {grade: this.state.grade};
        GradeService.updateGrades(grad, this.state.id_grade).then( res => {
            this.props.history.push('/grade');
        });
    }
    
    changeIdGradeHandler= (event) => {
        this.setState({id_grade: event.target.value});
    }

    changeGradeHandler= (event) => {
        this.setState({grade: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/grade');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Grade</h3>
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Grade: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.grade} onChange={this.changeGradeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateGrade}>Save</button>
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

export default GradeUpdateComponent