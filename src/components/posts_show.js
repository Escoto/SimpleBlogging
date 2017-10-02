import React, {  Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';
import {Link} from 'react-router';

class PostsShow extends Component {

    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }

    render(){
        return(<div>Post {this.props.params.id}</div>);
    }
}


export default connect(null, {fetchPost})(PostsShow);