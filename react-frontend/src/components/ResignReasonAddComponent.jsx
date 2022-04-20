import React, { Component } from 'react'
import ResignReasonService from '../services/ResignReasonService';

class ResignReasonAddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_reason: this.props.match.params.id_reason,
            reason: '',                                   
        }


        this.changeIdReasonHandler = this.changeIdReasonHandler.bind(this);
        this.changeReasonHandler = this.changeReasonHandler.bind(this);
        this.saveOrUpdateReason = this.saveOrUpdateReason.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id_reason === '_add'){
            return
        }else{
            ResignReasonService.findCurReason(this.state.id_reason).then( (res) =>{
                let resignReasons = res.data;
                this.setState({
                    reson: resignReasons.reason
                });
            });
        }        
    }

    saveOrUpdateReason = (e) => {
        e.preventDefault();
        let resignReasons = {id_reason: this.state.id_reason, reason: this.state.reason};
        ResignReasonService.addNewReason(resignReasons, this.state.id_reason).then( res => {
            this.props.history.push('/reasons');
        });

        // step 5
        if(this.state.id === '_add'){
            ResignReasonService.addNewReason(resignReasons).then(res =>{
                this.props.history.push('/reasons');
            });
        }else{
            ResignReasonService.updateReason(resignReasons, this.state.id_reason).then( res => {
                this.props.history.push('/reasons');
            });
        }
    }

   


    changeIdReasonHandler= (event) => {
        this.setState({id_reason: event.target.value});
    }

    changeReasonHandler= (event) => {
        this.setState({reason: event.target.value});
    }

   
    

    cancel(){
        this.props.history.push('/reason');
    }
    

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Reason</h3>
                                <div className = "card-body">
                                    <form>
                                    

                                        <div className = "form-group">
                                            <label> Reason: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.reason} onChange={this.changeReasonHandler}/>
                                        </div>

                                        
                                        <button className="btn btn-success"  onClick={this.saveOrUpdateReason}>Save</button>
                                     
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

export default ResignReasonAddComponent