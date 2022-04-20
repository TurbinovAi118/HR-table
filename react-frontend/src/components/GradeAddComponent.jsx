import React, { Component } from 'react'
import GradeService from '../services/GradeService';
import { Field, formInputData, formValidation } from 'reactjs-input-validator'

class GradeAddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_grade: this.props.match.params.id_grade,
            grade: '',

            data: {}  
        }


        this.changeIdGradeHandler = this.changeIdGradeHandler.bind(this);
        this.changeGradeHandler = this.changeGradeHandler.bind(this);
        this.saveOrUpdateGrade = this.saveOrUpdateGrade.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.data.id_grade === '_add'){
            return
        }else{
            GradeService.getGrades(this.state.id_grade).then( (res) =>{
                let grad = res.data;
                this.setState({
                    grade: grad.grade
                });
            });
        }        
    }
    saveOrUpdateGrade = (e) => {
        e.preventDefault();
        let grad = {id_grade: this.state.id_grade, grade: this.state.grade};
        
        GradeService.addNewGrades(grad, this.state.id_grade).then( res => {
            this.props.history.push('/grade');
        });

        // step 5
        if(this.state.id === '_add'){
            GradeService.addNewGrades(grad).then(res =>{
                this.props.history.push('/grade');
            });
        }else{
            GradeService.updateGrades(grad, this.state.id_grade).then( res => {
                this.props.history.push('/grade');
            });
        }
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
        //this.changeGradeHandler
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
                            <h3 className="text-center">Add Grade</h3>
                                <div className = "card-body">
                                    <form>
                                    

                                        <div className = "form-group">
                                            {/* <label> Grade: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.grade} onChange={this.changeGradeHandler}/> */}

                                            <Field
                                                required
                                                label="Grade" name="grade" placeholder="Grade"
                                                onChange={this.handleChange}
                                                value={this.state.data.grade}
                                                shouldValidateInputs={this.state.shouldValidateInputs}
                                                validator="matches" pattern={"^[A-zА-я ]+$"}
                                                //validatorErrMsg = 'ошибка'
                                            />
                                        </div>

                                        
                                        <button className="btn btn-success"  onClick={this.saveOrUpdateGrade}>Save</button>
                                     
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

export default GradeAddComponent