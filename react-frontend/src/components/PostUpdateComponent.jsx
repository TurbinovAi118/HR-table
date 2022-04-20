import React, { Component } from 'react'
import PostService from '../services/PostService';

class PostUpdateComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_pos: this.props.match.params.id_pos,
            post: ''                                  
        }
        
        this.changeIdPosHandler = this.changeIdPosHandler.bind(this);
        this.changePosHandler = this.changePosHandler.bind(this);
        this.updatePost = this.updatePost.bind(this);
        
    }

    componentDidMount(){
        PostService.getPosts(this.state.id_pos).then( (res) =>{
            let pos = res.data;
            this.setState({
                post: pos.post
            });
        });
    }

    updatePost = (e) => {
        e.preventDefault();
        let pos = {post: this.state.post};
        PostService.updatePosts(pos, this.state.id_pos).then( res => {
            this.props.history.push('/post');
        });
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
                                <h3 className="text-center">Update Post</h3>
                                <div className = "card-body">
                                    <form>

                                        <div className = "form-group">
                                            <label> Post: </label>
                                            <input placeholder="Sex" name="sex" className="form-control" 
                                                value={this.state.post} onChange={this.changePosHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updatePost}>Save</button>
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

export default PostUpdateComponent