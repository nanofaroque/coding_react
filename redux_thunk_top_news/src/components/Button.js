import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../services/fetchUsers'

const Button = ({getUsers}) => (
    <button onClick={getUsers}
            className='btn btn-primary btn-lg btn-block'
            type="button">Press Me</button>
)

const mapStateToProps = state => {
    console.log('state'+state);
    return {users:state.users}
};
const mapDispatchToProps =(dispatch)=> {
    return {
        getUsers:()=>dispatch(fetchUsers()),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Button);