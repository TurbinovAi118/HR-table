import {useState} from 'react';



const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         id_user: this.props.match.params.id_user,
    //         login: '',
    //         password: '',
    //         role: ''                          
    //     }



    //     this.auth = this.auth.bind(this);
    // }

    // auth = (e) => {
    //     e.preventDefault();
    //     let usr = {id_user: this.state.id_pos, login: this.state.login, 
    //         password: this.state.password, role: this.state.role};
    //     PostService.addNewPosts(pos, this.state.id_pos).then( res => {
    //         this.props.history.push('/post');
    //     });

    //     // step 5
    //     if(this.state.id === '_add'){
    //         PostService.addNewPosts(pos).then(res =>{
    //             this.props.history.push('/post');
    //         });
    //     }else{
    //         PostService.updatePosts(pos, this.state.id_pos).then( res => {
    //             this.props.history.push('/post');
    //         });
    //     }
    // }


    return (
        <div className='login'>
            
            <input className='login_email'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />

            <input className='login_password'
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button className='login_button'
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>
        </div>
    )
}

export {Form}