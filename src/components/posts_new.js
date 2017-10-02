import React, {  Component, PropTypes } from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {

    //router is available to all components trough context.
    //we use router to navigate programatically 
    //with out the need of the Link tag
    static contextTypes = {
        router: PropTypes.object
    };

    onSubmit(props){
        this.props.createPost(props).then(()=>{
            this.context.router.push('/');
        });
    }

    render(){
        const {fields:{title, categories, content}, handleSubmit}=this.props;
        
        var form = 
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>

            <h3>Create new Post.</h3>

            <div className={`form-group ${title.touched ? title.invalid ? 'has-danger' : 'has-success' : ''}`}>
                <label>Title</label>
                <input type="text" placeholder={title.error} className="form-control" {...title}/>
            </div>

            <div className={`form-group ${categories.touched ? categories.invalid ? 'has-danger' : 'has-success' : ''}`}>
                <label>Categories</label>
                <input type="text" placeholder={categories.error} className="form-control" {...categories}/>
            </div>

            <div className={`form-group ${content.touched ? content.invalid ? 'has-danger' : 'has-success' : ''}`}>
                <label>Content</label>
                <textarea className="form-control" placeholder={content.error} {...content}/>
            </div>

            <button type="submit" className="btn btn-primary">Create</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>

        </form>;

        return form;
    }
}

function validate(values){
    const errors = {};

    if(!values.title){
        errors.title = 'Enter a title';
    }

    if(!values.categories){
        errors.categories = 'Enter categories';
    }

    if(!values.content){
        errors.content = "Write your post's content here";
    }

    return errors;
}


// connect params: mapStateToProps, mapDispatchToProps
// reduxForm params: formConfig, mapStateToProps, mapDispatchToProps
export default reduxForm ({
    form: 'PostsNewForm', //unique token
    fields: ['title', 'categories', 'content'],
    validate
}, null, {createPost})(PostsNew);