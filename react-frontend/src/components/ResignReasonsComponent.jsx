import React, { Component } from 'react'
import ResignReasonService from '../services/ResignReasonService'





class ResignReasonsComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            resign_reasons: [

            ]
        
        }
        this.addReason = this.addReason.bind(this);
        this.editReason = this.editReason.bind(this);
        this.deleteReason = this.deleteReason.bind(this);
    }
    
    addReason(){
        this.props.history.push('/add-reason/_add');
    }

    editReason(id_reason){
        this.props.history.push(`/update-reason/${id_reason}`);
    }

    deleteReason(id_reason){
        ResignReasonService.deleteResignReason(id_reason).then((res) => {
            this.setState({ resignReasons: res.data});
        });
        window.location.reload(); 
    }

    componentDidMount(){
        ResignReasonService.findAllReasons().then((res) => {
            this.setState({ resign_reasons: res.data});
        });
    }


    render() {
        return (
            <div >
               <h2 className="text-center">Справочник Причины увольнения</h2>
               <button className="btn btn-primary" onClick={this.addReason}> Добавить  причину</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Причина увольнения</th>
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.resign_reasons.map(
                                        resignReasons => 
                                        <tr key = { resignReasons.id_reason }>
                                            <td> { resignReasons.id_reason} </td>
                                            <td> { resignReasons.reason} </td>
                                            <td>
                                                 <button onClick={ () => this.editReason(resignReasons.id_reason)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteReason(resignReasons.id_reason)} className="btn btn-danger">Delete </button>
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

export default ResignReasonsComponent