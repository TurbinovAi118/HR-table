import React, { Component } from 'react'
import UsersService from '../services/UsersService'





class UsersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [
                
            ]
        }
    }

    

    componentDidMount(){
        UsersService.findAllUsers().then((res) => {
            this.setState({ users: res.data});
        });
    }



    render() {
        return (
            <div >
               <h2 className="text-center">Справочник Пользователи</h2>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Логин</th>
                                    <th>Пароль</th>
                                    <th>Роль</th>
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.users.map(
                                        users_list => 
                                        <tr key = { users_list.id_user }>
                                            <td> { users_list.id_user} </td>
                                            <td> { users_list.login} </td>
                                            <td> { users_list.password} </td>
                                            <td> { users_list.role} </td>
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

export default UsersComponent