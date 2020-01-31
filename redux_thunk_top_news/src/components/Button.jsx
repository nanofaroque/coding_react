import React, {Component} from 'react'
import {connect} from 'react-redux'
import fetchUsers from '../services/fetchUsers'

export class Button extends Component {
    showData = (data)=>{
        const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);
        return (
            <div>
                {listItems }
            </div>
        );
    };
    render() {
        return (
            <div>
                <button
                    data-testid="button_id"
                    onClick={this.props.getUsers}
                        className='btn btn-primary btn-lg btn-block'
                        type="button">Press Me</button>
           {    <div>
                    {Object.keys(this.props.users).length===0?null:this.showData(this.props.users)}
                </div>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('state' + state.receiveUsers.users);
    return {users: state.receiveUsers.users}
};
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(fetchUsers()),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Button);