import React, {useState} from 'react';
import {connect} from 'react-redux';
import { requestJoin } from './actions';

export const LoginForm = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const handleChanges = e => {
        setUser({...user, [e.target.name]: e.target.value});
    };
    const submitForm = e => {
        e.preventDefault();
        props.requestJoin(user);
        setUser('');
    }
    return (
        <form onSubmit={submitForm}>
        <div>
            <label htmlFor="username">username</label>
            <input id="name"
            type="text"
            name="username"
            onChange = {handleChanges}
            value={user.username} />
        </div>
        <div>
            <label htmlFor="password">password</label>
            <input
            id="password"
            type="number"
            name="password"
            onChange={handleChanges}
            value={user.password} />
        </div>
        <div>
            <button type="submit">Sign In</button>
        </div>
    </form>
    )
}

export default connect(null, { requestJoin })(SmurfForm);