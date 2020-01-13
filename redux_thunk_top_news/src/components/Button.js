import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../services/fetchPosts'
let Button = ({ getPosts, channel }) => (
    <button
        onClick={() => { getPosts(channel) }}
        className='btn btn-primary btn-lg btn-block' >
        Get top news
    </button>
);
const mapStateToProps = (state) => ({ channel: 'bbc-news' })
const mapDispatchToProps = { getPosts: fetchPosts };
Button = connect(mapStateToProps,mapDispatchToProps)(Button);
export default Button;