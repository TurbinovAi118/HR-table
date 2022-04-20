import React, { Component } from 'react'
import LocationService from '../services/LocationService'





class LocationsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            locations: [

            ]
        }
        this.addLocation = this.addLocation.bind(this);
        this.editLocation = this.editLocation.bind(this);
        this.deleteLoc = this.deleteLoc.bind(this);
    }

    addLocation(){
        this.props.history.push('/add-location/_add');
    }

    editLocation(id_loc){
        this.props.history.push(`/update-location/${id_loc}`);
    }
    
    deleteLoc(id_loc){
        LocationService.deleteLocations(id_loc).then((res) => {
            this.setState({ location: res.data});
        });
        window.location.reload(); 
    }
    

    componentDidMount(){
        LocationService.findAllLocations().then((res) => {
            this.setState({ locations: res.data});
        });
    }



    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочник Локации</h2>
               <button className="btn btn-primary" onClick={this.addLocation}> Добавить  локацию</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Локации</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.locations.map(
                                        resignlocations => 
                                        <tr key = { resignlocations.id_loc }>
                                            <td> { resignlocations.id_loc} </td>
                                            <td> { resignlocations.loc} </td>
                                            

                                            <td>
                                                 <button onClick={ () => this.editLocation(resignlocations.id_loc)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteLoc(resignlocations.id_loc)} className="btn btn-danger">Delete </button>
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

export default LocationsComponent