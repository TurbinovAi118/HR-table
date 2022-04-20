import React, { Component } from 'react'
import SexService from '../services/SexService'





class SexComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sex: [

            ]
        }
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    editEmployee(index){
        var a = this.state.sex;
        a[index].editing=!a[index].editing;
        this.setState({sex: a}) ;

    }
    deleteEmployee(index){
        var arr = this.state.sex;
        arr.splice(index,1);
        this.setState({sex: arr}) ;
    }
    viewEmployee(index){
        this.props.history.push(`/view-employee/${index}`);
    }

    componentDidMount(){
        SexService.findAllSex().then((res) => {
            this.setState({ sex: res.data});
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
                                    <th>Пол</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.sex.map(
                                        resignSex => 
                                        <tr key = { resignSex.id }>
                                            <td> { resignSex.id} </td>
                                            <td> { resignSex.sex} </td>
                                            
                                

                                            

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

export default SexComponent