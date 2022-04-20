import React, { Component } from 'react'
import EmploymentTypeService from '../services/EmploymentTypeService';

class EmploymentTypeUpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_type: this.props.match.params.id_type,
            type: ''                                  
        }
        
        this.changeIdTypeHandler = this.changeIdTypeHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.updateType = this.updateType.bind(this);
        
    }

    componentDidMount(){
        EmploymentTypeService.getEmplTypes(this.state.id_type).then( (res) =>{
            let employmenttype = res.data;
            this.setState({
                type: employmenttype.type
            });
        });
    }

    updateType = (e) => {
        e.preventDefault();
        let employmenttype = {type: this.state.type};
        EmploymentTypeService.updateEmplTypes(employmenttype, this.state.id_type).then( res => {
            this.props.history.push('/employment_type');
        });
    }
    
    changeIdTypeHandler= (event) => {
        this.setState({id_type: event.target.value});
    }

    changeTypeHandler= (event) => {
        this.setState({type: event.target.value});
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
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateType}>Save</button>
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

export default EmploymentTypeUpdateComponent