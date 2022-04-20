import React, { Component } from 'react'
import LocationService from '../services/LocationService';

class LocationUpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_loc: this.props.match.params.id_loc,
            loc: ''                                  
        }
        
        this.changeIdLocHandler = this.changeIdLocHandler.bind(this);
        this.changeLocHandler = this.changeLocHandler.bind(this);
        this.updateLoc = this.updateLoc.bind(this);
        
    }

    componentDidMount(){
        LocationService.getLocations(this.state.id_loc).then( (res) =>{
            let location = res.data;
            this.setState({
                loc: location.loc
            });
        });
    }

    updateLoc = (e) => {
        e.preventDefault();
        let location = {loc: this.state.loc};
        LocationService.updateLocations(location, this.state.id_loc).then( res => {
            this.props.history.push('/locations');
        });
    }
    
    changeIdLocHandler= (event) => {
        this.setState({id_loc: event.target.value});
    }

    changeLocHandler= (event) => {
        this.setState({loc: event.target.value});
    }
    

    cancel(){
        this.props.history.push('/locations');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Location</h3>
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.loc} onChange={this.changeLocHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateLoc}>Save</button>
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

export default LocationUpdateComponent