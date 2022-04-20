import React, { Component } from 'react'
import ResignAccoding from '../services/ResignAccoding'





class Reference_According extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resignpersonnel: [

            ]
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    editEmployee(index){
        var a = this.state.resignpersonnel;
        a[index].editing=!a[index].editing;
        this.setState({resignpersonal: a}) ;

    }
    deleteEmployee(index){
        var arr = this.state.resignpersonnel;
        arr.splice(index,1);
        this.setState({resignpersonnel: arr}) ;
    }
    viewEmployee(index){
        this.props.history.push(`/view-employee/${index}`);
    }

    componentDidMount(){
        ResignAccoding.findAllReasons().then((res) => {
            this.setState({ resignpersonnel: res.data});
        });
    }



    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочники Пол</h2>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Реперная точка в днях</th>
                                    
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.resignpersonnel.map(
                                        resignPersonal => 
                                        <tr key = { resignPersonal.id_reason }>
                                            <td> { resignPersonal.id_reason} </td>
                                            <td> { resignPersonal.reason} </td>
                                            <td> { resignPersonal.empl} </td>

                                            <td>
                                                 <button onClick={ () => this.editEmployee(resignPersonal.id_reason)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(resignPersonal.id_reason)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(resignPersonal.id_reason)} className="btn btn-info">View </button>
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

export default Reference_According