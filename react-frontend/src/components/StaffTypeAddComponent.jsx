import React, { Component } from 'react'
import StaffTypeService from '../services/StaffTypeService';

class StaffTypeAddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_type: this.props.match.params.id_type,
            type: '',                                   
        }


        this.changeIdTypeHandler = this.changeIdTypeHandler.bind(this);
        this.changeTypeHandler = this.changeTypeHandler.bind(this);
        this.saveOrUpdateType = this.saveOrUpdateType.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id_type === '_add'){
            return
        }else{
            StaffTypeService.getStaffTypes(this.state.id_type).then( (res) =>{
                let employeetype = res.data;
                this.setState({
                    type: employeetype.type
                });
            });
        }        
    }
    saveOrUpdateType = (e) => {
        e.preventDefault();
        let employeetype = {id_type: this.state.id_type, type: this.state.type};
        StaffTypeService.addNewTypes(employeetype, this.state.id_type).then( res => {
            this.props.history.push('/staff_type');
        });

        // step 5
        if(this.state.id === '_add'){
            StaffTypeService.addNewTypes(employeetype).then(res =>{
                this.props.history.push('/staff_type');
            });
        }else{
            StaffTypeService.updateStaffTypes(employeetype, this.state.id_type).then( res => {
                this.props.history.push('/staff_type');
            });
        }
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
                            <h3 className="text-center">Add Employee</h3>
                                <div className = "card-body">
                                    <form>
                                    

                                        <div className = "form-group">
                                            <label> Type: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>

                                        
                                        <button className="btn btn-success"  onClick={this.saveOrUpdateType}>Save</button>
                                     
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

export default StaffTypeAddComponent