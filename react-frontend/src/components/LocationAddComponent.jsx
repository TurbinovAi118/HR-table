import React, { Component } from 'react'
import LocationService from '../services/LocationService';

class LocationAddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_loc: this.props.match.params.id_loc,
            loc: '',                                   
        }


        this.changeIdlocHandler = this.changeIdlocHandler.bind(this);
        this.changeLocHandler = this.changeLocHandler.bind(this);
        this.saveOrUpdateLocation = this.saveOrUpdateLocation.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id_loc === '_add'){
            return
        }else{
            LocationService.getLocations(this.state.id_loc).then( (res) =>{
                let location = res.data;
                this.setState({
                    loc: location.loc
                });
            });
        }        
    }

    saveOrUpdateLocation = (e) => {
        e.preventDefault();
        let location = {id_loc: this.state.id_loc, loc: this.state.loc};
        LocationService.addNewLocations(location, this.state.id_loc).then( res => {
            this.props.history.push('/locations');
        });

        // step 5
        if(this.state.id === '_add'){
            LocationService.addNewLocations(location).then(res =>{
                this.props.history.push('/locations');
            });
        }else{
            LocationService.updateLocations(location, this.state.id_loc).then( res => {
                this.props.history.push('/locations');
            });
        }
    }

   


    changeIdlocHandler= (event) => {
        this.setState({id_loc: event.target.value});
    }

    changeLocHandler= (event) => {
        this.setState({loc: event.target.value});
    }

   
    

    cancel(){
        this.props.history.push('/location');
    }
    

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Location</h3>
                                <div className = "card-body">
                                    <form>
                                    

                                        <div className = "form-group">
                                            <label> Location: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.loc} onChange={this.changeLocHandler}/>
                                        </div>

                                        
                                        <button className="btn btn-success"  onClick={this.saveOrUpdateLocation}>Save</button>
                                     
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

export default LocationAddComponent