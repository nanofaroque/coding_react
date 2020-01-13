import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../services/fetchUsers'
class Button extends Component{

    render() {
        let items=this.props.users;
        console.log(items);
        return (
                <button
                    onClick={() => { this.props.getUsers('channel') }}
                    className='btn btn-primary btn-lg btn-block' >
                    GET USERS
                </button>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {users:state.receive.users}
}
const mapDispatchToProps = { getUsers: fetchUsers };
Button = connect(mapStateToProps,mapDispatchToProps)(Button);
export default Button;