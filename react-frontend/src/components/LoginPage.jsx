import React, { Component } from 'react'
import { Form } from './FormComponent'



class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            staff_types: [

            ]
        }

    }

    
    
    handleLogin(email, password){
        if (email.length < 3 || password.length < 3)
            return
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
               <Form title='Войти' handleClick={this.handleLogin.bind(this)} /> 
               
                 

            </div>
        )
    }
}

export default LoginPage