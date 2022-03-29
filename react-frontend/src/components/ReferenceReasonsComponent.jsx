import React, { Component } from 'react'
import ResignReasonService from '../services/ResignReasonService'





class Reference_Reasons extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resign_reasons: [

            ]
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    editEmployee(index){
        var a = this.state.resign_reasons;
        a[index].editing=!a[index].editing;
        this.setState({resign_reasons: a}) ;

    }
    deleteEmployee(index){
        var arr = this.state.resign_reasons;
        arr.splice(index,1);
        this.setState({resign_reasons: arr}) ;
    }
    viewEmployee(index){
        this.props.history.push(`/view-employee/${index}`);
    }

    componentDidMount(){
        ResignReasonService.findAllReasons().then((res) => {
            this.setState({ resign_reasons: res.data});
        });
    }

    /*
    handleChange(event,index) { 
        var a = this.state.resignReason;
        if (event.target.name == "FullName_input")
            a[index].FullName=event.target.value;
        else if (event.target.name == "Reasons_input")  
            a[index].Reasons=event.target.value;  
             
        this.setState({resignReason: a}) ;
        

    }*/

    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочники Причины увольнения</h2>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Причина увольнения</th>
                                    <th>сотрд</th>
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.resign_reasons.map(
                                        resignReasons => 
                                        <tr key = { resignReasons.id_reason }>
                                            <td> { resignReasons.reason} </td>
                                            <td> { resignReasons.empl} </td>

                                            <td>
                                                 <button onClick={ () => this.editEmployee(resignReasons.id_reason)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteEmployee(resignReasons.id_reason)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewEmployee(resignReasons.id_reason)} className="btn btn-info">View </button>
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

export default Reference_Reasons