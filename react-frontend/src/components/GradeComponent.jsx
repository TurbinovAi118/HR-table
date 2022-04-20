import React, { Component } from 'react'
import GradeService from '../services/GradeService'





class Reference_Grade extends Component {
    constructor(props) {
        super(props)

        this.state = {
            grades: [

            ]
        }
        this.addGrade = this.addGrade.bind(this);
        this.editGrade = this.editGrade.bind(this);
        this.deleteGrade = this.deleteGrade.bind(this);
    }

    addGrade(){
        this.props.history.push('/add-grade/_add');
    }

    editGrade(id_grade){
        this.props.history.push(`/update-grade/${id_grade}`);
    }

    deleteGrade(id_grade){
        GradeService.deleteGrades(id_grade).then((res) => {
            this.setState({ grad: res.data});
        });
        window.location.reload(); 
    }
    

    componentDidMount(){
        GradeService.findAllGrades().then((res) => {
            this.setState({ grades: res.data});
        });
    }



    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочник Грейды</h2>
               <button className="btn btn-primary" onClick={this.addGrade}> Добавить  грейд</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Грейд</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.grades.map(
                                        resignGrades => 
                                        <tr key = { resignGrades.id_grade }>
                                            <td> { resignGrades.id_grade} </td>
                                            <td> { resignGrades.grade} </td>
                       

                                            <td>
                                                 <button onClick={ () => this.editGrade(resignGrades.id_grade)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteGrade(resignGrades.id_grade)} className="btn btn-danger">Delete </button>
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

export default Reference_Grade