import React, { Component } from 'react'
import ResignReasonService from '../services/ResignReasonService';

class ResignReasonUpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_reason: this.props.match.params.id_reason,
            reason: ''                                  
        }
        
        this.changeIdReasonHandler = this.changeIdReasonHandler.bind(this);
        this.changeReasonHandler = this.changeReasonHandler.bind(this);
        this.updateReason = this.updateReason.bind(this);
        
    }

    componentDidMount(){
        ResignReasonService.findCurReason(this.state.id_reason).then( (res) =>{
            let resignReasons = res.data;
            this.setState({
                reason: resignReasons.reason
            });
        });
    }

    updateReason = (e) => {
        e.preventDefault();
        let resignReasons = {reason: this.state.reason};
        ResignReasonService.updateReason(resignReasons, this.state.id_reason).then( res => {
            this.props.history.push('/reasons');
        });
    }
    
    changeIdReasonHandler= (event) => {
        this.setState({id_reason: event.target.value});
    }

    changeReasonHandler= (event) => {
        this.setState({reason: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/reasons');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Reason</h3>
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Reason: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.reason} onChange={this.changeReasonHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateReason}>Save</button>
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

export default ResignReasonUpdateComponent