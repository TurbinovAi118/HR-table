import React, { Component } from 'react'
import EmploymentTypeService from '../services/EmploymentTypeService'





class EmploymentTypeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            empl_type: [

            ]
        }
        this.addType = this.addType.bind(this);
        this.editType = this.editType.bind(this);
        this.deleteType = this.deleteType.bind(this);
    }

    addType(){
        this.props.history.push('/add-empl_type/_add');
    }

    editType(id_type){
        this.props.history.push(`/update-empl_type/${id_type}`);
    }

    deleteType(id_type){
        EmploymentTypeService.deleteEmplTypes(id_type).then((res) => {
            this.setState({ employeetype: res.data});
        });
        window.location.reload(); 
    }

    componentDidMount(){
        EmploymentTypeService.findAllEmplType().then((res) => {
            this.setState({ empl_type: res.data});
        });
    }



    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочник Тип трудоустройства</h2>
               <button className="btn btn-primary" onClick={this.addType}> Добавить  тип</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Типы</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.empl_type.map(
                                        empl_Type => 
                                        <tr key = { empl_Type.id_type }>
                                            <td> { empl_Type.id_type} </td>
                                            <td> { empl_Type.type} </td>
                                            

                                            <td>
                                                 <button onClick={ () => this.editType(empl_Type.id_type)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteType(empl_Type.id_type)} className="btn btn-danger">Delete </button>
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

export default EmploymentTypeComponent