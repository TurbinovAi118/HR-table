import React, { Component } from 'react'
import PostService from '../services/PostService';

class PostAddComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_pos: this.props.match.params.id_pos,
            post: '',                                   
        }


        this.changeIdPosHandler = this.changeIdPosHandler.bind(this);
        this.changePosHandler = this.changePosHandler.bind(this);
        this.saveOrUpdatePost = this.saveOrUpdatePost.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id_pos === '_add'){
            return
        }else{
            PostService.getPosts(this.state.id_pos).then( (res) =>{
                let pos = res.data;
                this.setState({
                    post: pos.post
                });
            });
        }        
    }

    saveOrUpdatePost = (e) => {
        e.preventDefault();
        let pos = {id_pos: this.state.id_pos, post: this.state.post};
        PostService.addNewPosts(pos, this.state.id_pos).then( res => {
            this.props.history.push('/post');
        });

        // step 5
        if(this.state.id === '_add'){
            PostService.addNewPosts(pos).then(res =>{
                this.props.history.push('/post');
            });
        }else{
            PostService.updatePosts(pos, this.state.id_pos).then( res => {
                this.props.history.push('/post');
            });
        }
    }

   


    changeIdPosHandler= (event) => {
        this.setState({id_pos: event.target.value});
    }

    changePosHandler= (event) => {
        this.setState({post: event.target.value});
    }

   
    

    cancel(){
        this.props.history.push('/post');
    }
    

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Post</h3>
                                <div className = "card-body">
                                    <form>
                                    

                                        <div className = "form-group">
                                            <label> Post: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.post} onChange={this.changePosHandler}/>
                                        </div>

                                        
                                        <button className="btn btn-success"  onClick={this.saveOrUpdatePost}>Save</button>
                                     
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default PostAddComponent