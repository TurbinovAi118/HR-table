import React, { Component } from 'react'
import PostService from '../services/PostService'





class PostComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [

            ]
        }
        this.addPosition = this.addPosition.bind(this);
        this.editPosition = this.editPosition.bind(this);
        this.deletePosition = this.deletePosition.bind(this);
    }

    addPosition(){
        this.props.history.push('/add-post/_add');
    }

    editPosition(id_post){
        this.props.history.push(`/update-post/${id_post}`);
    }

    deletePosition(id_post){
        PostService.deletePosts(id_post).then((res) => {
            this.setState({ pos: res.data});
        });
        window.location.reload(); 
    }
    

    componentDidMount(){
        PostService.findAllPost().then((res) => {
            this.setState({ posts: res.data});
        });
    }



    render() {
        return (
            <div >
               
               <h2 className="text-center">Справочник Должности</h2>
               <button className="btn btn-primary" onClick={this.addPosition}> Добавить  Должность</button>
               <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>Должность</th>
                                  
                                </tr>
                            </thead>
                            { <tbody>
                                {
                                    this.state.posts.map(
                                        resignPosts => 
                                        <tr key = { resignPosts.id_pos }>
                                            <td> { resignPosts.id_pos} </td>
                                            <td> { resignPosts.post} </td>
                                            

                                            <td>
                                                 <button onClick={ () => this.editPosition(resignPosts.id_pos)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deletePosition(resignPosts.id_pos)} className="btn btn-danger">Delete </button>
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

export default PostComponent