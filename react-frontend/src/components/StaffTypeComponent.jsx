import React, { Component } from 'react'
import StaffTypeService from '../services/StaffTypeService'





class StaffTypeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            staff_types: [
                
            ]
        }
        this.addType = this.addType.bind(this);
        this.editType = this.editType.bind(this);
        this.deleteType = this.deleteType.bind(this);
    }

    addType(){
        this.props.history.push('/add-staff_type/_add');
    }

    
    editType(id_type){
        this.props.history.push(`/update-staff_type/${id_type}`);
    }

    deleteType(id_type){
        StaffTypeService.deleteStaffType(id_type).then((res) => {
            this.setState({ employeetype: res.data});
        });
        window.location.reload(); 
    }
    

    componentDidMount(){
        StaffTypeService.findAllStaffTypes().then((res) => {
            this.setState({ staff_types: res.data});
        });
    }



    render() {
        return (
            <div >
               <h2 className="text-center">Справочники типы персонала</h2>
               <button className="btn btn-primary" onClick={this.addType}> Добавить  тип</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Тип</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.staff_types.map(
                                        staff_Types => 
                                        <tr key = { staff_Types.id_type }>
                                            <td> { staff_Types.id_type} </td>
                                            <td> { staff_Types.type} </td>
                                            

                                            <td>
                                                 <button onClick={ () => this.editType(staff_Types.id_type)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteType(staff_Types.id_type)} className="btn btn-danger">Delete </button>
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

export default StaffTypeComponent