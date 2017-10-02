import React, {  Component } from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component {
    render(){
        const {fields:{title, categories, content}, handleSubmit}=this.props;
        
        var form = 
        <form onSubmit={handleSubmit(this.props.createPost)}>

            <h3>Create new Post.</h3>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" {...title}/>
            </div>

            <div className="form-group">
                <label>Categories</label>
                <input type="text" className="form-control" {...categories}/>
            </div>

            <div className="form-group">
                <label>Content</label>
                <textarea className="form-control" {...content}/>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>

        </form>;
        return form;
    }
}

// connect params: mapStateToProps, mapDispatchToProps
//reduxForm params: formConfig, mapStateToProps, mapDispatchToProps

export default reduxForm ({
    form: 'PostsNewForm', //unique token
    fields: ['title', 'categories', 'content']
}, null, {createPost})(PostsNew);