import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1 onClick={() => {alert(1)}}>{props.title}</h1>
        <Link to="/list">跳转列表页</Link>
    </div>
)

function mapStateToProps(state) {
    return { ...state.home };
}   

export default connect(mapStateToProps)(Home)
